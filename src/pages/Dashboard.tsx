
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Trash2, Plus, Truck, Calendar as CalendarIcon, Package } from "lucide-react";
import Navbar from "@/components/Navbar";

// Mock data for pickup requests
const pickupRequests = [
  {
    id: 1,
    type: "Regular Waste",
    status: "scheduled",
    date: "2025-04-20",
    time: "09:00 - 12:00",
    address: "123 Green Street, Eco City",
    notes: "Please collect from the back gate",
  },
  {
    id: 2,
    type: "Recycling",
    status: "completed",
    date: "2025-04-10",
    time: "13:00 - 16:00",
    address: "123 Green Street, Eco City",
    notes: "Cardboard boxes and plastic bottles",
  },
  {
    id: 3,
    type: "Bulk Waste",
    status: "pending",
    date: "2025-04-25",
    time: "09:00 - 12:00",
    address: "123 Green Street, Eco City",
    notes: "Old furniture needs to be removed",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  // Filter requests based on active tab
  const filteredRequests = pickupRequests.filter(request => {
    if (activeTab === "upcoming") {
      return request.status === "scheduled" || request.status === "pending";
    } else if (activeTab === "completed") {
      return request.status === "completed";
    } else {
      return true; // all tab
    }
  });

  // Status badge renderer
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-waste-blue-500">Scheduled</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-500 border-orange-500">Pending</Badge>;
      case "completed":
        return <Badge variant="outline" className="text-waste-green-500 border-waste-green-500">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto p-4 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Manage your waste pickup requests</p>
          </div>
          <Link to="/request">
            <Button className="bg-waste-green-500 hover:bg-waste-green-600">
              <Plus className="mr-2 h-4 w-4" />
              New Pickup Request
            </Button>
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-waste-green-100 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-waste-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Upcoming Pickups</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-waste-blue-100 p-3 rounded-full">
                  <CalendarIcon className="h-6 w-6 text-waste-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Pickups</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-waste-green-100 p-3 rounded-full">
                  <Package className="h-6 w-6 text-waste-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Waste Collected</p>
                  <p className="text-2xl font-bold">50 kg</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Pickup Requests */}
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Requests</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            {filteredRequests.length === 0 ? (
              <div className="text-center py-12">
                <Trash2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No pickup requests found</h3>
                <p className="text-gray-500 mb-6">You don't have any {activeTab} pickup requests.</p>
                <Link to="/request">
                  <Button className="bg-waste-green-500 hover:bg-waste-green-600">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Request
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredRequests.map((request) => (
                  <Card key={request.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <div>
                          <CardTitle className="text-xl">
                            {request.type}
                          </CardTitle>
                          <CardDescription>Request #{request.id}</CardDescription>
                        </div>
                        {getStatusBadge(request.status)}
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                          <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Pickup Date</p>
                            <p className="text-gray-600">{request.date}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Time Window</p>
                            <p className="text-gray-600">{request.time}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Address</p>
                            <p className="text-gray-600">{request.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Trash2 className="h-5 w-5 text-gray-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Notes</p>
                            <p className="text-gray-600">{request.notes}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 p-4 flex flex-wrap gap-3">
                      <Link to={`/request/${request.id}/details`}>
                        <Button variant="outline">View Details</Button>
                      </Link>
                      {request.status !== "completed" && (
                        <>
                          <Link to={`/request/${request.id}/edit`}>
                            <Button variant="outline">Edit Request</Button>
                          </Link>
                          <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                            Cancel Pickup
                          </Button>
                        </>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
