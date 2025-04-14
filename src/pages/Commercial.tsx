
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building, Trash2, Recycle, BarChart, Users, CheckCircle, ArrowRight, FileText } from "lucide-react";

const Commercial = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-waste-blue-500/90 to-waste-green-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Waste Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive waste management tailored to businesses of all sizes
          </p>
        </div>
      </div>
      
      {/* Services Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Business Waste Management Services</h2>
            <p className="text-lg text-gray-700">
              From small offices to large industrial facilities, we provide efficient, cost-effective, 
              and sustainable waste management solutions for every business need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-blue-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-waste-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Office Waste Collection</h3>
                <p className="text-gray-600 mb-4">
                  Tailored waste collection services for offices and commercial buildings. 
                  Keep your workspace clean and maintain a professional environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Regular scheduled collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Paper recycling programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Discrete service times</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Trash2 className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Retail & Restaurant</h3>
                <p className="text-gray-600 mb-4">
                  Specialized waste management for retail stores and restaurants, with solutions 
                  for food waste, packaging, and high-volume disposal needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Daily collection available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Food waste separation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Odor control solutions</span>
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
                <h3 className="text-xl font-semibold mb-3">Industrial Waste</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive solutions for manufacturing facilities and industrial sites, 
                  including specialized handling of industrial byproducts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">High-volume capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Compliance documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Material recovery options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Construction Waste</h3>
                <p className="text-gray-600 mb-4">
                  Specialized collection and disposal services for construction and demolition projects, 
                  with an emphasis on material recycling.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dumpster rental options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Debris sorting and recycling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">LEED certification support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-blue-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-waste-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compliance Services</h3>
                <p className="text-gray-600 mb-4">
                  Stay compliant with local, state, and federal waste disposal regulations. 
                  We handle the paperwork so you can focus on your business.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Regulatory documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Waste audits and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Environmental compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BarChart className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Waste Reduction Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Expert advice to help your business minimize waste generation, increase recycling, 
                  and implement sustainable practices.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Waste stream analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Sustainability recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cost-saving strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The TrashAway Business Advantage</h2>
            <p className="text-lg text-gray-700">
              Discover why businesses choose us for their waste management needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Office waste management" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Customized Business Solutions</h3>
              <p className="text-gray-700 mb-6">
                We understand that each business has unique waste management needs. Our team works with you 
                to create a tailored solution that addresses your specific requirements and budget.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-waste-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Scalable Services</h4>
                    <p className="text-gray-600">Solutions that grow with your business needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-waste-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Flexible Scheduling</h4>
                    <p className="text-gray-600">Service times that work around your business hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-waste-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Equipment Options</h4>
                    <p className="text-gray-600">From small bins to large dumpsters based on your volume</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6">Cost-Effective & Sustainable</h3>
              <p className="text-gray-700 mb-6">
                Our commercial waste services are designed to help your business reduce costs while 
                minimizing environmental impact through efficient waste management practices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-waste-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Waste Diversion Programs</h4>
                    <p className="text-gray-600">Reduce landfill costs through recycling and composting</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-waste-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Transparent Pricing</h4>
                    <p className="text-gray-600">No hidden fees or unexpected charges</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-waste-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Environmental Reporting</h4>
                    <p className="text-gray-600">Track your sustainability metrics for stakeholder reporting</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Sustainable waste management" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Case Studies */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-700">
              See how we've helped businesses optimize their waste management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Office building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Tech Office Complex</h3>
                <p className="text-gray-500 mb-4">Corporate Office</p>
                <p className="text-gray-700 mb-4">
                  A 10-story office building with 1,200 employees reduced waste disposal costs by 35% 
                  through our comprehensive recycling program and right-sized collection schedule.
                </p>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-waste-blue-500">35% Cost Reduction</span>
                  <span className="text-waste-green-500">60% Landfill Diversion</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Riverside Restaurant</h3>
                <p className="text-gray-500 mb-4">Food Service</p>
                <p className="text-gray-700 mb-4">
                  A popular restaurant implemented our food waste composting program, reducing their 
                  environmental footprint while complying with local food waste regulations.
                </p>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-waste-blue-500">20% Cost Reduction</span>
                  <span className="text-waste-green-500">75% Food Waste Composted</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621319332247-ce870cdcf55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Manufacturing facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">GreenTech Manufacturing</h3>
                <p className="text-gray-500 mb-4">Industrial</p>
                <p className="text-gray-700 mb-4">
                  A manufacturing facility streamlined their waste management processes with our 
                  industrial service, optimizing collection and improving material recovery.
                </p>
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-waste-blue-500">40% Cost Reduction</span>
                  <span className="text-waste-green-500">80% Material Recovery</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Plans */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Business Service Plans</h2>
            <p className="text-lg text-gray-700">
              Flexible options to meet your business needs and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-waste-blue-100 p-6 text-center">
                <h3 className="text-xl font-bold text-waste-blue-600">Small Business</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-gray-600">/mo</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Perfect for offices, small retail stores, and cafes with modest waste volumes.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">1-2 weekly collections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Up to 4 cubic yards capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Basic recycling program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Online account management</span>
                  </li>
                </ul>
                <Button className="w-full bg-waste-blue-500 hover:bg-waste-blue-600">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-lg border-waste-green-500 relative -translate-y-4">
              <div className="absolute top-0 left-0 right-0 bg-waste-green-500 text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="bg-waste-green-100 p-6 text-center pt-8">
                <h3 className="text-xl font-bold text-waste-green-600">Medium Business</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-gray-600">/mo</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Ideal for restaurants, mid-sized retailers, and office buildings with moderate waste.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">2-3 weekly collections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Up to 8 cubic yards capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Enhanced recycling program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Waste auditing services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <span className="text-gray-700">Regulatory compliance support</span>
                  </li>
                </ul>
                <Button className="w-full bg-waste-green-500 hover:bg-waste-green-600">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-waste-blue-100 p-6 text-center">
                <h3 className="text-xl font-bold text-waste-blue-600">Large Enterprise</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-gray-600">/mo</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  Comprehensive solution for manufacturing facilities, large retail, and corporate campuses.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Daily collection available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Multiple container options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Comprehensive recycling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5" />
                    <span className="text-gray-700">Sustainability consulting</span>
                  </li>
                </ul>
                <Button className="w-full bg-waste-blue-500 hover:bg-waste-blue-600">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Business Clients Say</h2>
            <p className="text-lg text-gray-700">
              Trusted by businesses of all sizes across various industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-16 h-16 bg-waste-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-waste-blue-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Central Office Tower</h3>
                  <p className="text-gray-500">Property Management</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "TrashAway has revolutionized our waste management across our 15-story office building. 
                Their team worked with us to develop a comprehensive recycling program that has reduced 
                our waste costs by nearly 30% while helping us meet our sustainability goals."
              </p>
              <p className="font-medium">Robert Chen, Facilities Manager</p>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-16 h-16 bg-waste-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-waste-green-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Fresh Harvest Restaurant</h3>
                  <p className="text-gray-500">Food Service</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a restaurant, we generate significant food waste. TrashAway's composting program 
                has been a game-changer for us. Their reliable service and flexible pickup schedules 
                accommodate our busy hours, and they've helped us become nearly zero-waste."
              </p>
              <p className="font-medium">Maria Lopez, Restaurant Owner</p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-gradient-to-r from-waste-blue-500/90 to-waste-green-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Business Waste Management?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Get in touch today for a customized quote and waste management solution tailored to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-waste-blue-500 hover:bg-gray-100">
              <Link to="/contact">
                Request Business Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Commercial;
