
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/PageLayout";
import { Calendar, MapPin, Truck, Clock, Star, Phone, Mail, Shield, Award, Briefcase } from "lucide-react";

// Mock collector data - in a real app this would come from API/database
const mockCollectorData = {
  id: "c123",
  name: "John Collector",
  email: "john.collector@example.com",
  phone: "(555) 123-4567",
  avatar: "",
  joinDate: "2024-09-15",
  vehicle: "Waste Truck #4782",
  region: "North Zone",
  rating: 4.8,
  completedPickups: 152,
  address: "123 Recycler Ave, Green City, EC 12345",
  bio: "Professional waste management specialist with 5+ years of experience in responsible collection and disposal. Committed to sustainable practices and excellent service.",
  services: ["Residential", "Commercial", "Recycling", "Bulk Waste"],
  availability: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["Morning", "Afternoon"]
  },
  certifications: [
    { name: "Waste Management Professional", issuer: "Environmental Protection Agency", year: 2022 },
    { name: "Hazardous Materials Handling", issuer: "Safety Standards Institute", year: 2021 }
  ],
  statistics: {
    onTimeRate: 97,
    responseRate: 99,
    satisfactionScore: 4.9,
    totalWeight: "43.5 tons"
  }
};

const CollectorProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  
  return (
    <PageLayout>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Collector Profile</h1>
          <Button 
            onClick={() => navigate("/collector-profile/edit")} 
            className="bg-waste-blue-500 hover:bg-waste-blue-600"
          >
            Edit Profile
          </Button>
        </div>
      </div>
      
      {/* Profile Header */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-24 h-24 border-2 border-waste-green-500">
              <AvatarImage src={mockCollectorData.avatar} />
              <AvatarFallback className="text-2xl bg-waste-blue-100 text-waste-blue-500">
                {mockCollectorData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold">{mockCollectorData.name}</h2>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2">
                <Badge className="bg-waste-green-500">Verified Collector</Badge>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-yellow-500" />
                  <span>{mockCollectorData.rating}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Joined {new Date(mockCollectorData.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-gray-500" />
                  <span>{mockCollectorData.vehicle}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{mockCollectorData.region}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-gray-500" />
                  <span>{mockCollectorData.completedPickups} Pickups Completed</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-waste-blue-500" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p>{mockCollectorData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-waste-blue-500" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p>{mockCollectorData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <MapPin className="h-5 w-5 text-waste-blue-500" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p>{mockCollectorData.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Bio</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{mockCollectorData.bio}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Services Offered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockCollectorData.services.map((service) => (
                  <Badge key={service} variant="outline" className="bg-waste-blue-50 text-waste-blue-500 border-waste-blue-200">
                    {service}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Availability Tab */}
        <TabsContent value="availability">
          <Card>
            <CardHeader>
              <CardTitle>Schedule & Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Available Days</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                      <Badge 
                        key={day} 
                        variant={mockCollectorData.availability.days.includes(day) ? "default" : "outline"}
                        className={mockCollectorData.availability.days.includes(day) 
                          ? "bg-waste-green-500" 
                          : "text-gray-400 border-gray-300"
                        }
                      >
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Available Time Slots</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Morning", "Afternoon", "Evening"].map((slot) => (
                      <Badge 
                        key={slot} 
                        variant={mockCollectorData.availability.timeSlots.includes(slot) ? "default" : "outline"}
                        className={mockCollectorData.availability.timeSlots.includes(slot) 
                          ? "bg-waste-green-500" 
                          : "text-gray-400 border-gray-300"
                        }
                      >
                        <Clock className="mr-1 h-3 w-3" /> {slot}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Certifications Tab */}
        <TabsContent value="certifications">
          <Card>
            <CardHeader>
              <CardTitle>Professional Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCollectorData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-md">
                    <div className="bg-waste-blue-100 p-2 rounded-full">
                      <Award className="h-5 w-5 text-waste-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-sm text-gray-500">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Statistics Tab */}
        <TabsContent value="statistics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">On-time Rate</span>
                    <span className="font-medium">{mockCollectorData.statistics.onTimeRate}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-2 bg-waste-green-500 rounded-full" 
                      style={{ width: `${mockCollectorData.statistics.onTimeRate}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Response Rate</span>
                    <span className="font-medium">{mockCollectorData.statistics.responseRate}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-2 bg-waste-green-500 rounded-full" 
                      style={{ width: `${mockCollectorData.statistics.responseRate}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Customer Satisfaction</span>
                    <span className="font-medium">{mockCollectorData.statistics.satisfactionScore}/5.0</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-2 bg-waste-green-500 rounded-full" 
                      style={{ width: `${(mockCollectorData.statistics.satisfactionScore / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Collection Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-waste-green-100 p-3 rounded-full">
                    <Truck className="h-6 w-6 text-waste-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pickups Completed</p>
                    <p className="text-2xl font-bold">{mockCollectorData.completedPickups}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-waste-blue-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-waste-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Waste Collected</p>
                    <p className="text-2xl font-bold">{mockCollectorData.statistics.totalWeight}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-center md:justify-start mb-8">
        <Link to="/collector-dashboard">
          <Button variant="outline" className="flex gap-2">
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default CollectorProfile;
