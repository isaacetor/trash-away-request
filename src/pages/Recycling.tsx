
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Recycle, CheckCircle, ArrowRight, Info, FileText } from "lucide-react";

const Recycling = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recycling Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sustainable waste management through comprehensive recycling solutions
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Making Recycling Easy</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TrashAway, we're committed to promoting sustainable waste management practices 
                through efficient and accessible recycling services for homes and businesses.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our recycling programs are designed to maximize the recovery of valuable materials, 
                reduce landfill waste, and help our customers meet their sustainability goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-waste-green-500 hover:bg-waste-green-600">
                  <Link to="/request">
                    Schedule Recycling Pickup
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="#recycling-guide">
                    Recycling Guide
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1611284446413-722789102d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Recycling bins" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recycling Services */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Recycling Services</h2>
            <p className="text-lg text-gray-700">
              Comprehensive solutions to meet all your recycling needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Recycle className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Residential Recycling</h3>
                <p className="text-gray-600 mb-4">
                  Convenient recycling collection services for homes, apartments, and residential communities. 
                  We make it easy to recycle a wide range of materials from the comfort of your home.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Weekly or bi-weekly collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Single-stream recycling bins provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Educational materials and sorting guides</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-waste-green-500 hover:bg-waste-green-600">
                  <Link to="/residential">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-blue-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Recycle className="h-8 w-8 text-waste-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Commercial Recycling</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive recycling programs for businesses of all sizes. From office paper to 
                  industrial materials, we help organizations reduce waste and meet sustainability goals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Customized collection schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Material-specific containers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Waste audits and reporting</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-waste-blue-500 hover:bg-waste-blue-600">
                  <Link to="/commercial">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-green-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Recycle className="h-8 w-8 text-waste-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Electronics Recycling</h3>
                <p className="text-gray-600 mb-4">
                  Responsible disposal of electronic waste, including computers, TVs, and other devices. 
                  We ensure proper handling of these items to prevent environmental contamination.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Secure data destruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Recovery of valuable materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Environmentally responsible processing</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-waste-green-500 hover:bg-waste-green-600">
                  <Link to="/request">Schedule Pickup</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-3 bg-waste-blue-500"></div>
              <CardContent className="pt-6">
                <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Recycle className="h-8 w-8 text-waste-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Construction Recycling</h3>
                <p className="text-gray-600 mb-4">
                  Specialized recycling services for construction and demolition projects, helping to 
                  divert materials like concrete, wood, metal, and drywall from landfills.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">On-site collection containers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Material separation and processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">LEED certification documentation</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-waste-blue-500 hover:bg-waste-blue-600">
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Recycling Guide */}
      <div id="recycling-guide" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Recycling Guide</h2>
            <p className="text-lg text-gray-700">
              Learn what can and cannot be recycled through our programs
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
                  Paper Products
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">Newspapers and inserts</li>
                  <li className="text-gray-700">Magazines and catalogs</li>
                  <li className="text-gray-700">Office paper and envelopes</li>
                  <li className="text-gray-700">Cardboard boxes (flattened)</li>
                  <li className="text-gray-700">Paperboard (cereal boxes, etc.)</li>
                  <li className="text-gray-700">Paper bags</li>
                </ul>
                <div className="text-sm text-gray-500 italic">
                  Note: All items should be clean and dry
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-blue-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </span>
                  Plastic Items
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">Plastic bottles and caps</li>
                  <li className="text-gray-700">Plastic containers (#1-#5)</li>
                  <li className="text-gray-700">Plastic jugs and tubs</li>
                  <li className="text-gray-700">Plastic planters (clean)</li>
                  <li className="text-gray-700">Plastic buckets (handles removed)</li>
                  <li className="text-gray-700">Rigid plastic packaging</li>
                </ul>
                <div className="text-sm text-gray-500 italic">
                  Note: Rinse containers before recycling
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-amber-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-amber-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-amber-500" />
                  </span>
                  Metal Items
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">Aluminum cans</li>
                  <li className="text-gray-700">Steel and tin cans</li>
                  <li className="text-gray-700">Clean aluminum foil</li>
                  <li className="text-gray-700">Metal bottle caps and lids</li>
                  <li className="text-gray-700">Empty aerosol cans</li>
                  <li className="text-gray-700">Small metal appliances</li>
                </ul>
                <div className="text-sm text-gray-500 italic">
                  Note: Items should be free of food residue
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-emerald-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-emerald-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                  </span>
                  Glass Items
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">Glass bottles (all colors)</li>
                  <li className="text-gray-700">Glass jars</li>
                  <li className="text-gray-700">Glass food containers</li>
                </ul>
                <div className="text-sm text-gray-500 italic">
                  Note: Remove caps and lids; rinse containers
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-red-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-red-100 p-2 rounded-full mr-3">
                    <Info className="h-5 w-5 text-red-500" />
                  </span>
                  Non-Recyclable Items
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">Plastic bags and film</li>
                  <li className="text-gray-700">Styrofoam</li>
                  <li className="text-gray-700">Food-contaminated items</li>
                  <li className="text-gray-700">Disposable cups with wax coating</li>
                  <li className="text-gray-700">Light bulbs</li>
                  <li className="text-gray-700">Ceramics or dishware</li>
                </ul>
                <div className="text-sm text-gray-500 italic">
                  Note: These items should go in regular waste
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-purple-500"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <span className="bg-purple-100 p-2 rounded-full mr-3">
                    <FileText className="h-5 w-5 text-purple-500" />
                  </span>
                  Special Handling Items
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">Batteries</li>
                  <li className="text-gray-700">Electronics</li>
                  <li className="text-gray-700">Paint and chemicals</li>
                  <li className="text-gray-700">Fluorescent lights</li>
                  <li className="text-gray-700">Medical waste</li>
                  <li className="text-gray-700">Automotive fluids</li>
                </ul>
                <div className="text-sm text-gray-500 italic">
                  Note: Requires special drop-off or collection
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-waste-green-500 hover:bg-waste-green-600">
              <a href="/docs/recycling-guide.pdf" download>
                Download Complete Recycling Guide
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Impact Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The Impact of Recycling</h2>
            <p className="text-lg text-gray-700">
              When you recycle with TrashAway, you're making a real difference for our planet
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl font-bold text-waste-green-500 mb-4">1 Ton</div>
              <h3 className="text-xl font-semibold mb-3">Paper Recycled</h3>
              <div className="bg-waste-green-50 p-4 rounded-lg">
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Saves 17 trees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Conserves 7,000 gallons of water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Saves 4,100 kWh of energy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reduces 60 pounds of air pollutants</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl font-bold text-waste-blue-500 mb-4">1 Ton</div>
              <h3 className="text-xl font-semibold mb-3">Plastic Recycled</h3>
              <div className="bg-waste-blue-50 p-4 rounded-lg">
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Saves 5,774 kWh of energy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Conserves 16.3 barrels of oil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reduces 30 cubic yards of landfill space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Prevents ocean pollution</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl font-bold text-waste-green-500 mb-4">1 Ton</div>
              <h3 className="text-xl font-semibold mb-3">Aluminum Recycled</h3>
              <div className="bg-waste-green-50 p-4 rounded-lg">
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Saves 14,000 kWh of energy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reduces 9 metric tons of CO2 emissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Conserves 40 barrels of oil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-waste-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Eliminates mining of 4 tons of bauxite ore</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Common questions about our recycling services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Do I need to sort my recyclables?</h3>
              <p className="text-gray-700">
                For residential recycling, we offer single-stream collection, which means you don't need 
                to sort your recyclables. Simply place all acceptable items in your recycling bin. For 
                commercial customers, sorting requirements vary based on your specific program.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">What happens to the materials after collection?</h3>
              <p className="text-gray-700">
                Collected materials are transported to our state-of-the-art recycling facility, where they 
                are sorted, processed, and prepared for manufacturing into new products. We maintain strict 
                quality control to ensure maximum material recovery.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">How clean do containers need to be?</h3>
              <p className="text-gray-700">
                Containers should be rinsed and free of major food residue, but they don't need to be 
                spotless. A quick rinse is usually sufficient. Dry items like paper and cardboard should 
                be kept clean and dry for optimal recycling.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Can I recycle plastic bags?</h3>
              <p className="text-gray-700">
                Plastic bags should not be placed in regular recycling bins as they can jam sorting 
                equipment. However, we do offer special collection for plastic film and bags for commercial 
                customers. Residential customers can return plastic bags to participating retailers.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">How do I dispose of electronics and hazardous materials?</h3>
              <p className="text-gray-700">
                Electronics, batteries, paint, and other hazardous materials require special handling. 
                We offer scheduled special collections for these items, or you can drop them off at our 
                designated recycling centers. Contact us for more information on proper disposal options.
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Recycling?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our recycling program today and be part of the solution for a more sustainable future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-waste-green-500 hover:bg-gray-100">
              <Link to="/request">
                Schedule Recycling Pickup
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

export default Recycling;
