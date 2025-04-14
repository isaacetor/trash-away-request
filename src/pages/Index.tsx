
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, Recycle, Calendar, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Waste Management Made Simple
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Request waste pickup with just a few clicks. We'll take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-waste-green-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="waste-card-shadow border-none">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-waste-green-100 p-3 rounded-full mb-4">
                    <Trash2 className="h-8 w-8 text-waste-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Regular Waste Collection</h3>
                  <p className="text-gray-600">
                    Schedule regular waste collection for your home or business.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="waste-card-shadow border-none">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-waste-blue-100 p-3 rounded-full mb-4">
                    <Recycle className="h-8 w-8 text-waste-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Recycling Services</h3>
                  <p className="text-gray-600">
                    We sort and recycle your waste to protect the environment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="waste-card-shadow border-none">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-waste-green-100 p-3 rounded-full mb-4">
                    <Truck className="h-8 w-8 text-waste-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Bulk Waste Removal</h3>
                  <p className="text-gray-600">
                    Need large items removed? Our team can handle it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-waste-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
              <p className="text-gray-600">
                Sign up and set up your profile with your location details.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-waste-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Request a Pickup</h3>
              <p className="text-gray-600">
                Tell us what, when, and where to collect your waste.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-waste-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">We'll Take It Away</h3>
              <p className="text-gray-600">
                Our team will collect your waste at the scheduled time.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/signup">
              <Button size="lg" className="bg-waste-green-500 hover:bg-waste-green-600">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trash2 className="h-6 w-6 text-waste-green-400" />
                <span className="text-xl font-bold">TrashAway</span>
              </div>
              <p className="text-gray-400">
                Making waste management easy and efficient for everyone.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/residential" className="text-gray-400 hover:text-white transition-colors">Residential</Link></li>
                <li><Link to="/commercial" className="text-gray-400 hover:text-white transition-colors">Commercial</Link></li>
                <li><Link to="/recycling" className="text-gray-400 hover:text-white transition-colors">Recycling</Link></li>
                <li><Link to="/bulk" className="text-gray-400 hover:text-white transition-colors">Bulk Waste</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400 mb-2">123 Green Street</p>
              <p className="text-gray-400 mb-2">Eco City, EC 12345</p>
              <p className="text-gray-400 mb-2">info@trashaway.com</p>
              <p className="text-gray-400">(123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TrashAway. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
