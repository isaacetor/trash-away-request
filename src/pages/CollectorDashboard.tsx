
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarIcon } from "@/components/Calendar";
import { MapPinIcon } from "@/components/MapPin";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Truck, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Calendar, 
  RotateCw, 
  ChevronDown, 
  Filter 
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { pickupRequests, PickupRequest } from "@/data/requestData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

// Extended interface for collector-specific pickup data
interface CollectorPickupRequest extends PickupRequest {
  assignedTo?: string;
  collectionTime?: string;
  completionNotes?: string;
}

// Mock collector data
const mockCollectorData = {
  id: "c123",
  name: "John Collector",
  vehicle: "Waste Truck #4782",
  region: "North Zone",
  rating: 4.8,
  completedPickups: 152,
  todayAssignments: 5,
};

// Convert existing pickups to collector format and assign to collector
const collectorPickups: CollectorPickupRequest[] = pickupRequests.map((request) => ({
  ...request,
  assignedTo: mockCollectorData.id,
  collectionTime: ""
}));

const CollectorDashboard = () => {
  const [activeTab, setActiveTab] = useState("assigned");
  const [pickups, setPickups] = useState(collectorPickups);
  const [selectedRequest, setSelectedRequest] = useState<CollectorPickupRequest | null>(null);
  const [statusUpdateOpen, setStatusUpdateOpen] = useState(false);
  const [completionNotes, setCompletionNotes] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Filter pickups based on active tab and filter status
  const filteredPickups = pickups.filter(pickup => {
    if (activeTab === "assigned") {
      return pickup.status === "pending" || pickup.status === "scheduled";
    } else if (activeTab === "completed") {
      return pickup.status === "completed";
    } else if (activeTab === "cancelled") {
      return pickup.status === "cancelled";
    }
    
    // Apply additional status filter if set
    if (filterStatus && filterStatus !== "all") {
      return pickup.status === filterStatus;
    }
    
    return true;
  });

  const handleStatusUpdate = (status: 'pending' | 'scheduled' | 'completed' | 'cancelled') => {
    if (!selectedRequest) return;
    
    const updatedPickups = pickups.map(pickup => {
      if (pickup.id === selectedRequest.id) {
        const updated = { 
          ...pickup, 
          status,
          completionNotes: status === 'completed' ? completionNotes : pickup.completionNotes
        };
        return updated;
      }
      return pickup;
    });
    
    setPickups(updatedPickups);
    setStatusUpdateOpen(false);
    setCompletionNotes("");
    
    toast({
      title: "Status updated",
      description: `Pickup #${selectedRequest.id} has been marked as ${status}.`,
    });
  };
  
  // Status badge renderer
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-waste-blue-500">Scheduled</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-500 border-orange-500">Pending</Badge>;
      case "completed":
        return <Badge variant="outline" className="text-waste-green-500 border-waste-green-500">Completed</Badge>;
      case "cancelled":
        return <Badge variant="outline" className="text-red-500 border-red-500">Cancelled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <PageLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Collector Dashboard</h1>
          <p className="text-gray-600">Manage your assigned waste pickup requests</p>
        </div>
      </div>
      
      {/* Collector Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-waste-green-100 p-3 rounded-full">
                <Truck className="h-6 w-6 text-waste-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Today's Pickups</p>
                <p className="text-2xl font-bold">{mockCollectorData.todayAssignments}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-waste-blue-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-waste-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Completed</p>
                <p className="text-2xl font-bold">{mockCollectorData.completedPickups}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Region</p>
                <p className="text-2xl font-bold">{mockCollectorData.region}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <CheckCircle2 className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <p className="text-2xl font-bold">{mockCollectorData.rating} ⭐</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Pickup Requests Filter & Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <Tabs defaultValue="assigned" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="assigned">Assigned</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            <TabsTrigger value="all">All Requests</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setFilterStatus("all")}>
                  All Statuses
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("pending")}>
                  Pending Only
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("scheduled")}>
                  Scheduled Only
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("completed")}>
                  Completed Only
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" onClick={() => setFilterStatus(null)}>
            <RotateCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
      
      {/* Pickups Table */}
      <Card className="mb-8">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Address</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPickups.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <p className="text-gray-500">No pickup requests found</p>
                    <p className="text-sm text-gray-400">There are no {activeTab} pickups to display.</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredPickups.map((pickup) => (
                  <TableRow key={pickup.id}>
                    <TableCell className="font-medium">#{pickup.id}</TableCell>
                    <TableCell>{pickup.type}</TableCell>
                    <TableCell>{getStatusBadge(pickup.status)}</TableCell>
                    <TableCell>{pickup.date}</TableCell>
                    <TableCell>{pickup.time}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{pickup.address}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">View</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Pickup Request #{pickup.id}: {pickup.type}</DialogTitle>
                              <DialogDescription>Request details</DialogDescription>
                            </DialogHeader>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h3 className="font-medium mb-2">Details</h3>
                                <div className="space-y-4">
                                  <div className="flex items-start gap-2">
                                    <CalendarIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                                    <div>
                                      <p className="text-sm font-medium">Date</p>
                                      <p>{pickup.date}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                                    <div>
                                      <p className="text-sm font-medium">Time Window</p>
                                      <p>{pickup.time}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <MapPinIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                                    <div>
                                      <p className="text-sm font-medium">Address</p>
                                      <p>{pickup.address}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h3 className="font-medium mb-2">Additional Information</h3>
                                <div className="space-y-4">
                                  <div>
                                    <p className="text-sm font-medium">Waste Type</p>
                                    <p>{pickup.type}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Quantity</p>
                                    <p>{pickup.quantity || "Not specified"}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Collection Point</p>
                                    <p>{pickup.collectionPoint || "Not specified"}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Notes</p>
                                    <p>{pickup.notes || "No additional notes"}</p>
                                  </div>
                                </div>
                              </div>
                              
                              {pickup.status === 'completed' && pickup.completionNotes && (
                                <div className="md:col-span-2">
                                  <h3 className="font-medium mb-2">Completion Notes</h3>
                                  <p className="bg-gray-50 p-3 rounded-md">{pickup.completionNotes}</p>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        {(pickup.status === 'pending' || pickup.status === 'scheduled') && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="bg-waste-green-500 text-white hover:bg-waste-green-600"
                            onClick={() => {
                              setSelectedRequest(pickup);
                              setStatusUpdateOpen(true);
                            }}
                          >
                            Update Status
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Status Update Dialog */}
      <Dialog open={statusUpdateOpen} onOpenChange={setStatusUpdateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Pickup Status</DialogTitle>
            <DialogDescription>
              Change the status of pickup request #{selectedRequest?.id}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Select new status:</p>
              <Select defaultValue={selectedRequest?.status}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Completion Notes (required for completed status):</p>
              <Textarea 
                placeholder="Enter details about the pickup completion..." 
                value={completionNotes}
                onChange={(e) => setCompletionNotes(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setStatusUpdateOpen(false)}>Cancel</Button>
            <Button 
              onClick={() => handleStatusUpdate('completed')} 
              className="bg-waste-green-500 hover:bg-waste-green-600"
            >
              Mark Completed
            </Button>
            <Button 
              variant="outline"
              className="text-red-500 border-red-500 hover:bg-red-50"
              onClick={() => handleStatusUpdate('cancelled')}
            >
              Mark Cancelled
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
    </PageLayout>
  );
};

export default CollectorDashboard;
