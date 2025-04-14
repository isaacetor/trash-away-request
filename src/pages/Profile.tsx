
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { User, MapPin, CreditCard, LogOut, Shield, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userForm, setUserForm] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "(123) 456-7890",
  });
  
  const [addressForm, setAddressForm] = useState({
    street: "123 Green Street",
    city: "Eco City",
    state: "California",
    zipCode: "12345",
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    app: true,
    marketing: false,
  });

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = (name: string, checked: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Profile updated successfully");
      setIsLoading(false);
    }, 1500);
  };

  const handleUpdateAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Address updated successfully");
      setIsLoading(false);
    }, 1500);
  };

  const handleUpdateNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Notification preferences updated");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto p-4 flex-1">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Your Profile</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>
        
        <div className="grid md:grid-cols-[1fr_3fr] gap-6">
          {/* Profile sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="" alt="Profile picture" />
                    <AvatarFallback className="bg-waste-green-100 text-waste-green-700 text-xl">JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{userForm.name}</h2>
                  <p className="text-gray-600">{userForm.email}</p>
                  <p className="text-gray-600 mb-4">{userForm.phone}</p>
                  <Button variant="outline" className="w-full mb-2">
                    Change Photo
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li>
                    <Button variant="ghost" className="w-full justify-start text-gray-700">
                      <User className="mr-2 h-4 w-4" />
                      Account Information
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start text-gray-700">
                      <MapPin className="mr-2 h-4 w-4" />
                      Addresses
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start text-gray-700">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payment Methods
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start text-gray-700">
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" className="w-full justify-start text-gray-700">
                      <Shield className="mr-2 h-4 w-4" />
                      Security
                    </Button>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <Button variant="ghost" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Settings tabs */}
          <div>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="address">Addresses</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleUpdateProfile}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={userForm.name}
                          onChange={handleUserChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={userForm.email}
                          onChange={handleUserChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={userForm.phone}
                          onChange={handleUserChange}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-6 flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-waste-green-500 hover:bg-waste-green-600" 
                        disabled={isLoading}
                      >
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              
              <TabsContent value="address">
                <Card>
                  <CardHeader>
                    <CardTitle>Address Information</CardTitle>
                    <CardDescription>
                      Update your pickup address
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleUpdateAddress}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="street">Street Address</Label>
                        <Input
                          id="street"
                          name="street"
                          value={addressForm.street}
                          onChange={handleAddressChange}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            value={addressForm.city}
                            onChange={handleAddressChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            name="state"
                            value={addressForm.state}
                            onChange={handleAddressChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={addressForm.zipCode}
                          onChange={handleAddressChange}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-6 flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-waste-green-500 hover:bg-waste-green-600" 
                        disabled={isLoading}
                      >
                        {isLoading ? "Saving..." : "Save Address"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Manage how we communicate with you
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleUpdateNotifications}>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-gray-500">Receive pickup reminders and updates via email</p>
                        </div>
                        <Switch 
                          id="email-notifications" 
                          checked={notificationSettings.email}
                          onCheckedChange={(checked) => handleToggleChange("email", checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-notifications">SMS Notifications</Label>
                          <p className="text-sm text-gray-500">Receive text message alerts about your pickups</p>
                        </div>
                        <Switch 
                          id="sms-notifications" 
                          checked={notificationSettings.sms}
                          onCheckedChange={(checked) => handleToggleChange("sms", checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="app-notifications">App Notifications</Label>
                          <p className="text-sm text-gray-500">Receive in-app notifications and badges</p>
                        </div>
                        <Switch 
                          id="app-notifications" 
                          checked={notificationSettings.app}
                          onCheckedChange={(checked) => handleToggleChange("app", checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="marketing-notifications">Marketing Communications</Label>
                          <p className="text-sm text-gray-500">Receive updates about new services and promotions</p>
                        </div>
                        <Switch 
                          id="marketing-notifications" 
                          checked={notificationSettings.marketing}
                          onCheckedChange={(checked) => handleToggleChange("marketing", checked)}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-6 flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-waste-green-500 hover:bg-waste-green-600" 
                        disabled={isLoading}
                      >
                        {isLoading ? "Saving..." : "Save Preferences"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
