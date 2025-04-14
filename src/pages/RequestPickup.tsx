
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Clock, MapPin, Truck, Recycle, Package } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/Navbar";

const RequestPickup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    wasteType: "regular",
    address: "",
    city: "",
    zipCode: "",
    date: "",
    timeSlot: "",
    notes: "",
    quantity: "small",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.address || !formData.city || !formData.zipCode || !formData.date || !formData.timeSlot) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      toast.success("Pickup request submitted successfully!");
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto p-4 flex-1">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Request Waste Pickup</h1>
          <p className="text-gray-600">Fill in the details for your waste collection service</p>
        </div>
        
        <div className="grid md:grid-cols-[2fr_1fr] gap-6">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Pickup Details</CardTitle>
                <CardDescription>
                  Provide information about your waste collection needs
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  {/* Waste Type Selection */}
                  <div className="space-y-3">
                    <Label>Waste Type</Label>
                    <RadioGroup
                      defaultValue="regular"
                      value={formData.wasteType}
                      onValueChange={(value) => handleSelectChange("wasteType", value)}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-waste-green-500 transition-colors">
                        <RadioGroupItem value="regular" id="regular" />
                        <Label htmlFor="regular" className="flex items-center cursor-pointer">
                          <Truck className="h-5 w-5 text-waste-green-500 mr-2" />
                          <div>
                            <p className="font-medium">Regular Waste</p>
                            <p className="text-xs text-gray-500">Household garbage</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-waste-green-500 transition-colors">
                        <RadioGroupItem value="recycling" id="recycling" />
                        <Label htmlFor="recycling" className="flex items-center cursor-pointer">
                          <Recycle className="h-5 w-5 text-waste-blue-500 mr-2" />
                          <div>
                            <p className="font-medium">Recycling</p>
                            <p className="text-xs text-gray-500">Paper, plastic, glass</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:border-waste-green-500 transition-colors">
                        <RadioGroupItem value="bulk" id="bulk" />
                        <Label htmlFor="bulk" className="flex items-center cursor-pointer">
                          <Package className="h-5 w-5 text-waste-green-500 mr-2" />
                          <div>
                            <p className="font-medium">Bulk Waste</p>
                            <p className="text-xs text-gray-500">Large items, furniture</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {/* Quantity */}
                  <div className="space-y-3">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Select 
                      value={formData.quantity} 
                      onValueChange={(value) => handleSelectChange("quantity", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (1-2 bags)</SelectItem>
                        <SelectItem value="medium">Medium (3-5 bags)</SelectItem>
                        <SelectItem value="large">Large (6+ bags)</SelectItem>
                        <SelectItem value="extra_large">Extra Large (Special items)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Location */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-waste-green-500" />
                      <Label className="text-lg font-medium">Pickup Location</Label>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Green Street"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Eco City"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">Zip Code</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="12345"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Schedule */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-waste-green-500" />
                      <Label className="text-lg font-medium">Pickup Schedule</Label>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Pickup Date</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timeSlot">Time Slot</Label>
                        <Select 
                          value={formData.timeSlot} 
                          onValueChange={(value) => handleSelectChange("timeSlot", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (1pm - 4pm)</SelectItem>
                            <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Instructions</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any special instructions for waste collection..."
                      rows={4}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4 border-t p-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate("/dashboard")}
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-waste-green-500 hover:bg-waste-green-600" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit Request"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
          
          {/* Info panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pickup Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Waste Types</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Truck className="h-4 w-4 text-waste-green-500 mt-0.5" />
                      <span><strong>Regular Waste:</strong> Household garbage, food waste, non-recyclables.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Recycle className="h-4 w-4 text-waste-blue-500 mt-0.5" />
                      <span><strong>Recycling:</strong> Paper, cardboard, plastic bottles, aluminum cans, glass.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Package className="h-4 w-4 text-waste-green-500 mt-0.5" />
                      <span><strong>Bulk Waste:</strong> Furniture, appliances, large items that don't fit in regular bins.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Pickup Times</h3>
                  <p className="text-sm text-gray-600">
                    Choose a date at least 24 hours in advance. Same-day pickups may be available for additional fees.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Contact our customer service for assistance with special requirements or questions.
                  </p>
                  <p className="text-sm font-medium text-waste-green-600">
                    support@trashaway.com
                  </p>
                  <p className="text-sm font-medium text-waste-green-600">
                    (123) 456-7890
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Pricing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Regular Waste</h3>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Small:</span> $15 - $25
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Medium:</span> $25 - $40
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Large:</span> $40 - $60
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Recycling</h3>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Small:</span> $10 - $20
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Medium:</span> $20 - $35
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Large:</span> $35 - $50
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Bulk Waste</h3>
                  <p className="text-sm text-gray-600">
                    Pricing varies based on item type and size. Request a quote for exact pricing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPickup;
