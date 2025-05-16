import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock collector data - in a real app this would come from API/database
const mockCollectorData = {
  id: "c123",
  name: "John Collector",
  email: "john.collector@example.com",
  phone: "(555) 123-4567",
  avatar: "",
  joinDate: "2024-09-15",
  vehicle: "Waste Truck #4782",
  vehicleType: "Heavy Duty",
  licensePlate: "WM-4782",
  region: "North Zone",
  rating: 4.8,
  completedPickups: 152,
  address: "123 Recycler Ave",
  city: "Green City",
  state: "EC",
  zipCode: "12345",
  bio: "Professional waste management specialist with 5+ years of experience in responsible collection and disposal. Committed to sustainable practices and excellent service.",
  services: ["Residential", "Commercial", "Recycling", "Bulk Waste"],
  availability: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["Morning", "Afternoon"]
  },
  certifications: [
    { name: "Waste Management Professional", issuer: "Environmental Protection Agency", year: "2022" },
    { name: "Hazardous Materials Handling", issuer: "Safety Standards Institute", year: "2021" }
  ],
};

// Days of the week for availability selection
const daysOfWeek = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
];

// Time slots for availability selection
const timeSlots = [
  { id: "morning", label: "Morning" },
  { id: "afternoon", label: "Afternoon" },
  { id: "evening", label: "Evening" },
];

// Service types 
const serviceTypes = [
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "recycling", label: "Recycling" },
  { id: "bulkWaste", label: "Bulk Waste" },
  { id: "hazardousMaterials", label: "Hazardous Materials" },
];

const EditCollectorProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("personal");
  const [certifications, setCertifications] = useState(mockCollectorData.certifications);
  
  // Initialize form with mock data
  const form = useForm({
    defaultValues: {
      name: mockCollectorData.name,
      email: mockCollectorData.email,
      phone: mockCollectorData.phone,
      address: mockCollectorData.address,
      city: mockCollectorData.city,
      state: mockCollectorData.state,
      zipCode: mockCollectorData.zipCode,
      bio: mockCollectorData.bio,
      vehicle: mockCollectorData.vehicle,
      vehicleType: mockCollectorData.vehicleType,
      licensePlate: mockCollectorData.licensePlate,
      region: mockCollectorData.region,
      days: mockCollectorData.availability.days.map(day => day.toLowerCase()),
      timeSlots: mockCollectorData.availability.timeSlots.map(slot => slot.toLowerCase()),
      services: mockCollectorData.services.map(service => service.toLowerCase()),
    }
  });
  
  const onSubmit = (data: any) => {
    // Here we would typically send the updated data to an API
    console.log("Updated profile data:", data);
    console.log("Updated certifications:", certifications);
    
    toast({
      title: "Profile updated",
      description: "Your profile changes have been saved successfully.",
    });
    
    // Navigate back to profile page after submission
    navigate("/collector-profile");
  };
  
  // Add a new certification form
  const [newCertification, setNewCertification] = useState({ name: "", issuer: "", year: "" });
  
  const handleAddCertification = () => {
    if (newCertification.name && newCertification.issuer && newCertification.year) {
      setCertifications([...certifications, newCertification]);
      setNewCertification({ name: "", issuer: "", year: "" });
    }
  };
  
  const handleRemoveCertification = (index: number) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };
  
  return (
    <PageLayout>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Edit Profile</h1>
          <Button 
            onClick={() => navigate("/collector-profile")} 
            variant="outline"
          >
            Cancel
          </Button>
        </div>
      </div>
      
      {/* Profile Avatar Section */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <Avatar className="w-24 h-24 border-2 border-waste-green-500">
                <AvatarImage src={mockCollectorData.avatar} />
                <AvatarFallback className="text-2xl bg-waste-blue-100 text-waste-blue-500">
                  {mockCollectorData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button size="sm">Change Avatar</Button>
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl font-medium mb-2">Profile Photo</h2>
              <p className="text-gray-500 mb-4">
                Upload a professional photo to make your profile more trustworthy. 
                JPG or PNG, maximum 5MB.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="vehicle">Vehicle Details</TabsTrigger>
              <TabsTrigger value="services">Services & Availability</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            
            {/* Personal Info Tab */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal and contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Address Information</h3>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zip Code</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell customers about your experience and approach..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Vehicle Tab */}
            <TabsContent value="vehicle">
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Information</CardTitle>
                  <CardDescription>Update your collection vehicle details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="vehicle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Waste Truck #123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="vehicleType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vehicle Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select vehicle type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="light">Light Duty</SelectItem>
                              <SelectItem value="medium">Medium Duty</SelectItem>
                              <SelectItem value="heavy">Heavy Duty</SelectItem>
                              <SelectItem value="specialized">Specialized</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="licensePlate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>License Plate</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Region</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service region" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="North Zone">North Zone</SelectItem>
                            <SelectItem value="South Zone">South Zone</SelectItem>
                            <SelectItem value="East Zone">East Zone</SelectItem>
                            <SelectItem value="West Zone">West Zone</SelectItem>
                            <SelectItem value="Central Zone">Central Zone</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Services & Availability Tab */}
            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle>Services & Availability</CardTitle>
                  <CardDescription>Update what services you provide and when you're available</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Services Offered</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceTypes.map((service) => (
                        <FormField
                          key={service.id}
                          control={form.control}
                          name="services"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(service.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, service.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== service.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {service.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Available Days</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {daysOfWeek.map((day) => (
                        <FormField
                          key={day.id}
                          control={form.control}
                          name="days"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(day.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, day.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== day.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {day.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Available Time Slots</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <FormField
                          key={slot.id}
                          control={form.control}
                          name="timeSlots"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(slot.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, slot.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== slot.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {slot.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
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
                  <CardDescription>Add or remove your professional certifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Existing certifications */}
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <h3 className="font-medium">{cert.name}</h3>
                          <p className="text-sm text-gray-500">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleRemoveCertification(index)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  {/* Add new certification */}
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-3">Add New Certification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <FormLabel>Certification Name</FormLabel>
                        <Input 
                          value={newCertification.name}
                          onChange={(e) => setNewCertification({...newCertification, name: e.target.value})}
                          placeholder="e.g. Waste Management Professional" 
                        />
                      </div>
                      <div>
                        <FormLabel>Issuing Organization</FormLabel>
                        <Input 
                          value={newCertification.issuer}
                          onChange={(e) => setNewCertification({...newCertification, issuer: e.target.value})}
                          placeholder="e.g. Environmental Agency" 
                        />
                      </div>
                      <div>
                        <FormLabel>Year</FormLabel>
                        <Input 
                          value={newCertification.year}
                          onChange={(e) => setNewCertification({...newCertification, year: e.target.value})}
                          placeholder="e.g. 2023" 
                        />
                      </div>
                    </div>
                    <Button 
                      type="button"
                      onClick={handleAddCertification}
                      className="mt-4"
                    >
                      Add Certification
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-end mb-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/collector-profile")}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-waste-green-500 hover:bg-waste-green-600"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </PageLayout>
  );
};

export default EditCollectorProfile;
