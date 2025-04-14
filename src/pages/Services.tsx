
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Building, Recycle, Truck, Calendar, CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive waste management solutions for every need
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Waste Management Solutions</h2>
            <p className="text-lg text-gray-700">
              At TrashAway, we offer a variety of waste management services to meet the needs 
              of residential homes, commercial properties, and special waste disposal requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link to="/residential" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform group-hover:-translate-y-1">
                <div className="aspect-video bg-waste-green-50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-waste-green-500/20 to-waste-blue-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Home className="h-16 w-16 text-waste-green-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    Residential Services
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Regular waste collection, recycling, and special pickups for residential homes and apartments.
                  </p>
                  <Button className="bg-waste-green-500 hover:bg-waste-green-600">Learn More</Button>
                </div>
              </div>
            </Link>
            
            <Link to="/commercial" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform group-hover:-translate-y-1">
                <div className="aspect-video bg-waste-blue-50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-waste-blue-500/20 to-waste-green-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="h-16 w-16 text-waste-blue-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    Commercial Services
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Business waste management solutions for offices, retail stores, restaurants, and industrial facilities.
                  </p>
                  <Button className="bg-waste-blue-500 hover:bg-waste-blue-600">Learn More</Button>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/recycling" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform group-hover:-translate-y-1">
                <div className="aspect-video bg-waste-green-50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-waste-green-500/20 to-waste-blue-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Recycle className="h-16 w-16 text-waste-green-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    Recycling Services
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Specialized collection and processing for recyclable materials to minimize environmental impact.
                  </p>
                  <Button className="bg-waste-green-500 hover:bg-waste-green-600">Learn More</Button>
                </div>
              </div>
            </Link>
            
            <Link to="/bulk-waste" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform group-hover:-translate-y-1">
                <div className="aspect-video bg-waste-blue-50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-waste-blue-500/20 to-waste-green-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Truck className="h-16 w-16 text-waste-blue-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    Bulk Waste Services
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Removal of large items like furniture, appliances, and yard waste requiring special handling.
                  </p>
                  <Button className="bg-waste-blue-500 hover:bg-waste-blue-600">Learn More</Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* How it Works */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-700">
              Our streamlined process makes waste management easy and efficient for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 -left-4 bg-waste-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-waste-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Schedule Pickup</h3>
              <p className="text-gray-600">
                Book your waste collection through our easy-to-use platform. Select the service type, 
                date, and time window that works for you.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 -left-4 bg-waste-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-waste-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Waste Collection</h3>
              <p className="text-gray-600">
                Our collectors arrive during your selected time window to pick up your waste. Track 
                the status in real-time through our app.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center relative">
              <div className="absolute -top-4 -left-4 bg-waste-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="h-8 w-8 text-waste-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proper Disposal</h3>
              <p className="text-gray-600">
                We ensure all waste is properly sorted, recycled, and disposed of according to 
                environmental regulations and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose TrashAway</h2>
            <p className="text-lg text-gray-700">
              We provide exceptional waste management services with a focus on sustainability, 
              reliability, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-waste-green-500 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Convenient Scheduling</h3>
              </div>
              <p className="text-gray-600 ml-10">
                Book pickups 24/7 through our online platform or mobile app.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-waste-green-500 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Eco-Friendly Practices</h3>
              </div>
              <p className="text-gray-600 ml-10">
                We prioritize recycling and sustainable waste management methods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-waste-green-500 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Reliable Service</h3>
              </div>
              <p className="text-gray-600 ml-10">
                On-time pickups and professional waste handling you can count on.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-waste-green-500 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Transparent Pricing</h3>
              </div>
              <p className="text-gray-600 ml-10">
                Clear pricing with no hidden fees or surprise charges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-waste-green-500 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Real-Time Tracking</h3>
              </div>
              <p className="text-gray-600 ml-10">
                Follow your waste collection in real-time through our platform.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-waste-green-500 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Professional Staff</h3>
              </div>
              <p className="text-gray-600 ml-10">
                Trained and vetted collectors who handle your waste with care.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Schedule your first pickup today and experience the TrashAway difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-waste-green-500 hover:bg-gray-100">
              <Link to="/request">Schedule Pickup</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
