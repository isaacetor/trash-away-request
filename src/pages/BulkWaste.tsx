
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Truck, Sofa, Package, Archive, CheckCircle, ArrowRight, Trash2, HelpCircle, FileText } from "lucide-react";

const BulkWaste = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-waste-blue-500/90 to-waste-green-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bulk Waste Removal</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fast and efficient removal of large items and bulky waste
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Handling What Regular Pickup Can't</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our bulk waste removal service is designed for items too large or heavy for standard 
                waste collection. From old furniture to appliances and yard waste, we've got you covered.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We prioritize responsible disposal methods, ensuring items are recycled, donated, 
                or disposed of in the most environmentally friendly way possible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-waste-blue-500 hover:bg-waste-blue-600">
                  <Link to="/request">
                    Schedule Bulk Pickup
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="#accepted-items">
                    What We Accept
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1588599837066-11bdee259d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Bulk waste removal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Bulk Waste Services</h2>
            <p className="text-lg text-gray-700">
              Comprehensive solutions for all your large item disposal needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-blue-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Sofa className="h-8 w-8 text-waste-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Furniture Removal</h3>
                <p className="text-gray-600 mb-4">
                  Quick and easy removal of sofas, beds, tables, chairs, and other household furniture. 
                  We'll take care of the heavy lifting so you don't have to.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Sofas and sectionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mattresses and box springs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tables, desks, and chairs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Package className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Appliance Disposal</h3>
                <p className="text-gray-600 mb-4">
                  Responsible removal and recycling of household appliances, including proper handling 
                  of refrigerants and other potentially hazardous components.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Refrigerators and freezers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Washers and dryers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Stoves, ovens, and dishwashers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-blue-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Truck className="h-8 w-8 text-waste-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Yard Waste & Debris</h3>
                <p className="text-gray-600 mb-4">
                  Collection of large yard waste including tree branches, shrubs, and other landscaping 
                  debris that exceeds the capacity of regular yard waste containers.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tree branches and logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Stumps and large shrubs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Large lawn equipment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Archive className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Home Renovation Debris</h3>
                <p className="text-gray-600 mb-4">
                  Removal of construction and renovation waste including drywall, flooring, cabinets, 
                  and other materials from home improvement projects.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Drywall and lumber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flooring and carpeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cabinets and fixtures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-blue-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Trash2 className="h-8 w-8 text-waste-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Estate & Property Cleanouts</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive removal services for clearing out properties during moves, estate sales, 
                  foreclosures, or other situations requiring extensive item disposal.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Complete property clearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Sorting for donation/recycling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Efficient removal timelines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Electronic Waste</h3>
                <p className="text-gray-600 mb-4">
                  Specialized collection of large electronic items with proper handling to ensure data 
                  security and environmentally responsible recycling processes.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">TVs and monitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Computer equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Office electronics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-700">
              Simple, convenient bulk waste collection in just a few steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-waste-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute -top-3 -right-3 bg-waste-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <HelpCircle className="h-10 w-10 text-waste-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Request Quote</h3>
              <p className="text-gray-600">
                Schedule a pickup online or call us to discuss your bulk waste needs and get a custom quote.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-waste-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute -top-3 -right-3 bg-waste-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <Calendar className="h-10 w-10 text-waste-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Book Pickup</h3>
              <p className="text-gray-600">
                Select a convenient date and time window for your bulk waste collection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-waste-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute -top-3 -right-3 bg-waste-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <MapPin className="h-10 w-10 text-waste-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prepare Items</h3>
              <p className="text-gray-600">
                Place your items in an accessible location such as your driveway, curb, or garage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-waste-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute -top-3 -right-3 bg-waste-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <Truck className="h-10 w-10 text-waste-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">We Collect</h3>
              <p className="text-gray-600">
                Our team arrives during your scheduled window to remove the items quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Accepted Items */}
      <div id="accepted-items" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Accept</h2>
            <p className="text-lg text-gray-700">
              A comprehensive guide to items we can collect through our bulk waste service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-2 bg-green-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </span>
                  Furniture
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Sofas and loveseats</li>
                  <li className="text-gray-700">Mattresses and box springs</li>
                  <li className="text-gray-700">Tables and chairs</li>
                  <li className="text-gray-700">Bookshelves and cabinets</li>
                  <li className="text-gray-700">Dressers and nightstands</li>
                  <li className="text-gray-700">Patio furniture</li>
                  <li className="text-gray-700">Office furniture</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-blue-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </span>
                  Appliances
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Refrigerators and freezers</li>
                  <li className="text-gray-700">Washing machines and dryers</li>
                  <li className="text-gray-700">Stoves and ovens</li>
                  <li className="text-gray-700">Dishwashers</li>
                  <li className="text-gray-700">Air conditioners</li>
                  <li className="text-gray-700">Water heaters</li>
                  <li className="text-gray-700">Microwaves</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-green-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </span>
                  Electronics
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Televisions and monitors</li>
                  <li className="text-gray-700">Computers and laptops</li>
                  <li className="text-gray-700">Printers and scanners</li>
                  <li className="text-gray-700">Stereo equipment</li>
                  <li className="text-gray-700">Gaming consoles</li>
                  <li className="text-gray-700">Office equipment</li>
                  <li className="text-gray-700">Entertainment centers</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-blue-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </span>
                  Yard Waste
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Tree branches and limbs</li>
                  <li className="text-gray-700">Stumps (under certain sizes)</li>
                  <li className="text-gray-700">Shrubs and bushes</li>
                  <li className="text-gray-700">Lawn furniture</li>
                  <li className="text-gray-700">Grills and outdoor equipment</li>
                  <li className="text-gray-700">Fencing materials</li>
                  <li className="text-gray-700">Lawn mowers (drained of fluids)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-green-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </span>
                  Home Renovation
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Carpeting and padding</li>
                  <li className="text-gray-700">Flooring materials</li>
                  <li className="text-gray-700">Cabinets and countertops</li>
                  <li className="text-gray-700">Doors and windows</li>
                  <li className="text-gray-700">Plumbing fixtures</li>
                  <li className="text-gray-700">Light fixtures</li>
                  <li className="text-gray-700">Small amounts of drywall</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-red-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-red-100 p-2 rounded-full mr-3">
                    <Info className="h-5 w-5 text-red-500" />
                  </span>
                  Items We Can't Accept
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Hazardous waste and chemicals</li>
                  <li className="text-gray-700">Paint, oil, and solvents</li>
                  <li className="text-gray-700">Batteries and tires</li>
                  <li className="text-gray-700">Medical waste</li>
                  <li className="text-gray-700">Asbestos materials</li>
                  <li className="text-gray-700">Large amounts of construction debris</li>
                  <li className="text-gray-700">Soil, dirt, and rocks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Not sure if we can accept your items? Contact us for more information.
            </p>
            <Button asChild className="bg-waste-blue-500 hover:bg-waste-blue-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Pricing */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Bulk Waste Pricing</h2>
            <p className="text-lg text-gray-700">
              Transparent pricing based on the amount and type of items
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-waste-blue-100 p-6 text-center">
                <h3 className="text-xl font-bold text-waste-blue-600">Small Load</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600">starting at</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Perfect for a few items or a small amount of bulk waste.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">1-3 large items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Up to 1/8 truck load</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Quick removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Responsible disposal</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-waste-blue-500 hover:bg-waste-blue-600">
                  <Link to="/request">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-lg border-waste-green-500 relative -translate-y-4">
              <div className="absolute top-0 left-0 right-0 bg-waste-green-500 text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="bg-waste-green-100 p-6 text-center pt-8">
                <h3 className="text-xl font-bold text-waste-green-600">Medium Load</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-600">starting at</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Ideal for multiple items or cleaning out a room.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">4-7 large items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Up to 1/4 truck load</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Same-day availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Donation coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Recycling prioritized</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-waste-green-500 hover:bg-waste-green-600">
                  <Link to="/request">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-waste-blue-100 p-6 text-center">
                <h3 className="text-xl font-bold text-waste-blue-600">Large Load</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$349</span>
                  <span className="text-gray-600">starting at</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Perfect for major cleanouts or large residential projects.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">8+ large items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Up to 1/2 truck load</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Priority scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Multiple-room cleanouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Complete disposal report</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-waste-blue-500 hover:bg-waste-blue-600">
                  <Link to="/request">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Need a full truck or multi-truck load? Contact us for custom pricing.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-700">
              Hear from satisfied customers who've used our bulk waste removal services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "After my renovation, I had a ton of old furniture and construction debris to get rid of. 
                TrashAway made it so easy - they showed up on time, took everything, and even swept the 
                area clean afterward. Great service!"
              </p>
              <div>
                <p className="font-semibold">David Wilson</p>
                <p className="text-sm text-gray-500">Homeowner, Eco City</p>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I needed to clear out my parents' home quickly to prepare it for sale. TrashAway's team 
                was compassionate, efficient, and helped identify items that could be donated rather than 
                thrown away. They made a difficult situation much easier."
              </p>
              <div>
                <p className="font-semibold">Angela Rodriguez</p>
                <p className="text-sm text-gray-500">Estate Clearance, Green Valley</p>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a property manager, I need reliable bulk waste removal services. TrashAway has become 
                our go-to partner. Their pricing is transparent, their crews are professional, and they 
                always leave the properties looking better than when they arrived."
              </p>
              <div>
                <p className="font-semibold">Michael Chang</p>
                <p className="text-sm text-gray-500">Property Manager, Oakwood Properties</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-gradient-to-r from-waste-blue-500/90 to-waste-green-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Rid of Bulky Items?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Schedule your bulk waste pickup today and reclaim your space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-waste-blue-500 hover:bg-gray-100">
              <Link to="/request">
                Schedule Pickup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BulkWaste;
