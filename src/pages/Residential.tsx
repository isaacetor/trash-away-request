
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trash2, Recycle, Calendar, Clock, Truck, CheckCircle, ArrowRight, Shield } from "lucide-react";

const Residential = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Waste Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reliable and eco-friendly waste management solutions for your home
          </p>
        </div>
      </div>
      
      {/* Services Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Services For Your Home</h2>
            <p className="text-lg text-gray-700">
              We offer comprehensive waste management services tailored to the needs of homeowners, 
              apartment residents, and residential communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Trash2 className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Regular Waste Collection</h3>
                <p className="text-gray-600 mb-4">
                  Scheduled collection of regular household waste on a weekly or bi-weekly basis. 
                  We provide secure bins and reliable pickup services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Secure waste bins provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Regular scheduled pickups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Online schedule management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-blue-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Recycle className="h-8 w-8 text-waste-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Recycling Services</h3>
                <p className="text-gray-600 mb-4">
                  Help reduce landfill waste with our comprehensive recycling services. We collect 
                  and process recyclable materials separately from other waste.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Separate recycling bins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Paper, plastic, glass, and metal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Recycling education resources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Truck className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Special Pickups</h3>
                <p className="text-gray-600 mb-4">
                  For items that don't fit in regular bins or require special handling. 
                  Schedule one-time pickups for furniture, appliances, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Large item removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Seasonal yard waste collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Holiday excess waste pickup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Pricing Plans */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Residential Service Plans</h2>
            <p className="text-lg text-gray-700">
              Choose the plan that fits your household needs and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-waste-green-100 p-6 text-center">
                <h3 className="text-xl font-bold text-waste-green-600">Basic Plan</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$25</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Weekly waste collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">35-gallon waste bin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Bi-weekly recycling pickup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Online account access</span>
                  </li>
                </ul>
                <Button className="w-full bg-waste-green-500 hover:bg-waste-green-600">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-lg border-waste-blue-500 relative -translate-y-4">
              <div className="absolute top-0 left-0 right-0 bg-waste-blue-500 text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="bg-waste-blue-100 p-6 text-center pt-8">
                <h3 className="text-xl font-bold text-waste-blue-600">Standard Plan</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$35</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Weekly waste collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">65-gallon waste bin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Weekly recycling pickup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">One free special pickup per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Online account management</span>
                  </li>
                </ul>
                <Button className="w-full bg-waste-blue-500 hover:bg-waste-blue-600">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-waste-green-100 p-6 text-center">
                <h3 className="text-xl font-bold text-waste-green-600">Premium Plan</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Twice weekly waste collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">95-gallon waste bin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Weekly recycling pickup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Four free special pickups per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Priority customer support</span>
                  </li>
                </ul>
                <Button className="w-full bg-waste-green-500 hover:bg-waste-green-600">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Residential Services</h2>
            <p className="text-lg text-gray-700">
              We make waste management simple, reliable, and eco-friendly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Residential waste collection" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Convenient Scheduling</h3>
              <p className="text-gray-700 mb-6">
                With TrashAway, you can schedule pickups that fit your lifestyle. Whether you need 
                regular weekly service or on-demand collections, we've got you covered.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-waste-green-100 p-2 rounded-full mt-0.5">
                    <Calendar className="h-5 w-5 text-waste-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Flexible Pickup Times</h4>
                    <p className="text-gray-600">Choose morning, afternoon, or evening collection windows</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-waste-green-100 p-2 rounded-full mt-0.5">
                    <Clock className="h-5 w-5 text-waste-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Customizable Frequency</h4>
                    <p className="text-gray-600">Weekly, bi-weekly, or on-demand pickup options</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6">Eco-Friendly Disposal</h3>
              <p className="text-gray-700 mb-6">
                We're committed to minimizing environmental impact through responsible waste 
                management practices and advanced recycling technologies.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-waste-blue-100 p-2 rounded-full mt-0.5">
                    <Recycle className="h-5 w-5 text-waste-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Waste Sorting & Processing</h4>
                    <p className="text-gray-600">Advanced sorting facilities to maximize recycling efficiency</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-waste-blue-100 p-2 rounded-full mt-0.5">
                    <Shield className="h-5 w-5 text-waste-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Responsible Disposal</h4>
                    <p className="text-gray-600">All waste processed according to environmental regulations</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Eco-friendly waste disposal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-700">
              Join thousands of satisfied homeowners who trust TrashAway
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                "TrashAway has made waste management so easy. Their app is intuitive, and the collectors 
                are always on time. I appreciate their eco-friendly approach to waste disposal."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Homeowner, Eco City</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                "The premium plan is worth every penny. Twice-weekly pickups and the special bulk waste 
                collections have been a lifesaver during our home renovation project."
              </p>
              <div>
                <p className="font-semibold">Michael Torres</p>
                <p className="text-sm text-gray-500">Apartment Resident, Green Valley</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                "As an HOA manager, I've been incredibly impressed with TrashAway's service for our community. 
                Their flexible scheduling and reliable pickups have made waste management effortless."
              </p>
              <div>
                <p className="font-semibold">Jennifer Martinez</p>
                <p className="text-sm text-gray-500">HOA Manager, Oakwood Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Better Waste Management?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join thousands of satisfied homeowners who trust TrashAway with their waste removal needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-waste-green-500 hover:bg-gray-100">
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

export default Residential;
