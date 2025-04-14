
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, Clock, Check } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-waste-green-100 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-waste-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Monday to Friday, 9am to 6pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-waste-blue-100 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-waste-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-600">support@trashaway.com</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-waste-green-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-waste-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Address</h3>
                      <p className="text-gray-600">123 Green Street, Eco City, EC 12345</p>
                      <p className="text-sm text-gray-500 mt-1">Visit our main office</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-waste-blue-100 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-waste-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                      <p className="text-gray-600">Saturday: 10am - 4pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-waste-green-100 p-4 rounded-full mb-4">
                      <Check className="h-8 w-8 text-waste-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Received!</h3>
                    <p className="text-gray-600 max-w-md mb-6">
                      Thank you for reaching out to us. We've received your message and will 
                      respond to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="Your name" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        type="text" 
                        placeholder="What is this regarding?" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message" 
                        rows={6} 
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="bg-waste-green-500 hover:bg-waste-green-600 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* This would be a real map in a production app */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-center p-4">
                    <MapPin className="h-8 w-8 text-waste-green-500 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map Would Be Here</p>
                    <p className="text-sm text-gray-500">123 Green Street, Eco City, EC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What areas do you service?</h3>
              <p className="text-gray-600">
                We currently operate in Eco City and surrounding suburbs within a 30-mile radius. 
                We're expanding rapidly and plan to serve additional areas soon.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How do I schedule a pickup?</h3>
              <p className="text-gray-600">
                You can easily schedule a pickup through our website or mobile app. 
                Simply create an account, enter your address, select the waste type and preferred pickup time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What types of waste do you collect?</h3>
              <p className="text-gray-600">
                We collect regular household waste, recyclables, bulk items, and yard waste. 
                For hazardous materials, please contact us directly for special handling instructions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How can I become a waste collector?</h3>
              <p className="text-gray-600">
                We're always looking for dedicated individuals to join our collector network. 
                Visit our Collector Registration page to learn about requirements and apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
