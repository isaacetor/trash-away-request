
import PageLayout from "@/components/PageLayout";
import { Leaf, Recycle, Globe, ShieldCheck, Users, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TrashAway</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to revolutionize waste management by providing sustainable, 
            efficient, and accessible waste collection services.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700">
              At TrashAway, we believe in a cleaner, greener future. Our mission is to transform waste 
              management through innovative technology, making it easier for everyone to dispose of waste 
              responsibly while reducing environmental impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-waste-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Impact</h3>
              <p className="text-gray-600">
                We're committed to reducing landfill waste by optimizing collection routes 
                and promoting recycling programs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="h-8 w-8 text-waste-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Solutions</h3>
              <p className="text-gray-600">
                Our platform encourages waste separation and recycling, helping to conserve 
                natural resources and reduce pollution.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-waste-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We work with local communities to improve waste management practices and 
                create employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  TrashAway was founded in 2023 by a group of environmental engineers and tech enthusiasts 
                  who saw an opportunity to solve waste management challenges using modern technology.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small pilot project in one neighborhood has now grown to serve 
                  multiple cities, with a vision to expand globally.
                </p>
                <p className="text-gray-700">
                  Our team combines expertise in waste management, logistics, and software development 
                  to create a seamless experience for both users and waste collectors.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-waste-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency and honesty in all our interactions with customers, partners, and communities.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-waste-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working together with communities, governments, and other organizations to create lasting change.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-waste-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">
                We're passionate about environmental sustainability and dedicated to making a positive impact on our planet.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Join Us Section */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you're a resident looking for reliable waste collection, a business seeking sustainable 
            waste management solutions, or a waste collector wanting to join our network, we invite you to 
            be part of our journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/signup" className="bg-white text-waste-green-500 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              Sign Up Today
            </a>
            <a href="/contact" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
