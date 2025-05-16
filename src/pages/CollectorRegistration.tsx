
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, Clock, Truck, Users, DollarSign, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  // Personal information
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  
  // Address information
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zip: z.string().min(5, "ZIP code is required"),
  
  // Experience & Vehicle
  vehicleType: z.string().min(1, "Please select your vehicle type"),
  availability: z.array(z.string()).min(1, "Please select at least one availability option"),
  serviceAreas: z.string().min(5, "Please enter your service areas"),
  
  // Background information
  previousExperience: z.string().optional(),
  whyJoin: z.string().min(10, "Please tell us why you want to join"),
  
  // Agreements
  backgroundCheck: z.boolean().refine(val => val === true, {
    message: "You must agree to a background check",
  }),
  termsAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const CollectorRegistration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const formSteps = [
    { id: "personal", title: "Personal Information" },
    { id: "address", title: "Address Information" },
    { id: "experience", title: "Experience & Availability" },
    { id: "background", title: "Additional Information" },
    { id: "agreements", title: "Review & Submit" }
  ];
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      vehicleType: "",
      availability: [],
      serviceAreas: "",
      previousExperience: "",
      whyJoin: "",
      backgroundCheck: false,
      termsAgreed: false,
    },
    mode: "onChange"
  });

  const nextStep = async () => {
    const fieldsToValidate = {
      0: ["firstName", "lastName", "email", "phone", "password", "confirmPassword"],
      1: ["address", "city", "state", "zip"],
      2: ["vehicleType", "availability", "serviceAreas"],
      3: ["whyJoin"],
    }[currentStep];

    const isValid = await form.trigger(fieldsToValidate as any);
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, formSteps.length - 1));
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log(values);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Application submitted",
        description: "Thank you for your interest! We'll review your application and contact you soon.",
      });
    }, 1500);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{formSteps[currentStep].title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Create a password" type="password" {...field} />
                    </FormControl>
                    <FormDescription>
                      Must be at least 8 characters
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Confirm your password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{formSteps[currentStep].title}</h3>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main Street" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input placeholder="ZIP Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{formSteps[currentStep].title}</h3>
            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your vehicle type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pickup">Pickup Truck</SelectItem>
                      <SelectItem value="van">Cargo Van</SelectItem>
                      <SelectItem value="box-truck">Box Truck</SelectItem>
                      <SelectItem value="dump-truck">Dump Truck</SelectItem>
                      <SelectItem value="other">Other (Specify in Experience)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="availability"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Availability</FormLabel>
                    <FormDescription>
                      Select all time slots when you're generally available
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Weekday Mornings", "Weekday Afternoons", "Weekday Evenings",
                      "Weekend Mornings", "Weekend Afternoons", "Weekend Evenings"
                    ].map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="availability"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {item}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="serviceAreas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Areas</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter cities, neighborhoods, or zip codes you're willing to service" 
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    List the areas where you're able to provide pickup services
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{formSteps[currentStep].title}</h3>
            <FormField
              control={form.control}
              name="previousExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Previous Experience</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe any relevant experience in waste management, logistics, delivery, etc." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Optional, but helps us understand your background
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="whyJoin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why Do You Want to Join?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us why you're interested in becoming a waste collector partner" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Agreement & Review</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg border mb-6">
              <h4 className="text-lg font-semibold mb-4">Application Summary</h4>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd>{form.watch('firstName')} {form.watch('lastName')}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd>{form.watch('email')}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd>{form.watch('phone')}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Location</dt>
                  <dd>{form.watch('city')}, {form.watch('state')}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Vehicle Type</dt>
                  <dd className="capitalize">{form.watch('vehicleType') || 'Not specified'}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Availability</dt>
                  <dd>{form.watch('availability')?.join(', ') || 'Not specified'}</dd>
                </div>
              </dl>
            </div>
            
            <FormField
              control={form.control}
              name="backgroundCheck"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal">
                      I agree to undergo a background check as part of the application process
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="termsAgreed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal">
                      I agree to the <a href="/terms" className="text-waste-blue-500 hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-waste-blue-500 hover:underline">Privacy Policy</a>
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const goToSignIn = () => {
    navigate("/signin");
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Collector Network</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Become a waste collector partner and enjoy flexible work with competitive earnings
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Application Form</h2>
                <p className="text-gray-600">
                  Fill out the form below to apply as a waste collector. Once submitted, our team will 
                  review your application and contact you shortly.
                </p>
              </div>
              
              {/* Progress Steps */}
              <div className="mb-8 overflow-x-auto">
                <div className="flex items-center min-w-max">
                  {formSteps.map((step, index) => (
                    <div 
                      key={step.id}
                      className="flex items-center"
                    >
                      <div 
                        className={`flex flex-col items-center ${index <= currentStep ? 'text-waste-green-500' : 'text-gray-400'}`}
                      >
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                            index < currentStep 
                              ? 'bg-waste-green-500 text-white' 
                              : index === currentStep 
                                ? 'border-2 border-waste-green-500 text-waste-green-500'
                                : 'border-2 border-gray-300'
                          }`}
                        >
                          {index < currentStep ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <span>{index + 1}</span>
                          )}
                        </div>
                        <span className="text-xs md:text-sm text-center w-20 md:w-24">
                          {step.title}
                        </span>
                      </div>
                      {index < formSteps.length - 1 && (
                        <div 
                          className={`w-10 md:w-16 h-0.5 ${
                            index < currentStep ? 'bg-waste-green-500' : 'bg-gray-300'
                          }`} 
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {isSubmitted ? (
                <Card className="border-waste-green-500">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="bg-waste-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-waste-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
                    <p className="text-gray-600 max-w-md mb-6">
                      Thank you for your interest in joining our waste collector network. Our team will 
                      review your application and reach out to you within 2-3 business days.
                    </p>
                    <p className="text-gray-600 mb-8">
                      Application Reference: <span className="font-semibold">{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        onClick={goToSignIn}
                        className="bg-waste-green-500 hover:bg-waste-green-600"
                      >
                        Sign In to Dashboard
                      </Button>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Submit Another Application
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <Card className="p-6">
                      {renderFormStep()}
                      
                      <div className="flex flex-wrap justify-between mt-8 pt-4 border-t">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          disabled={currentStep === 0}
                          className={currentStep === 0 ? "opacity-0" : ""}
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Back
                        </Button>
                        
                        {currentStep < formSteps.length - 1 ? (
                          <Button 
                            type="button" 
                            onClick={nextStep}
                            className="bg-waste-green-500 hover:bg-waste-green-600 ml-auto"
                          >
                            Next
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        ) : (
                          <Button 
                            type="submit" 
                            className="bg-waste-green-500 hover:bg-waste-green-600 ml-auto"
                            disabled={isSubmitting || !form.formState.isValid}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                              </span>
                            ) : "Submit Application"}
                          </Button>
                        )}
                      </div>
                    </Card>
                  </form>
                </Form>
              )}
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="space-y-8 sticky top-24">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Why Join Us?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-waste-green-100 p-2 rounded-full mt-0.5">
                          <DollarSign className="h-5 w-5 text-waste-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Competitive Earnings</p>
                          <p className="text-gray-600">Earn up to $25-35/hour including tips</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-waste-blue-100 p-2 rounded-full mt-0.5">
                          <Clock className="h-5 w-5 text-waste-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Flexible Schedule</p>
                          <p className="text-gray-600">Choose when you work to fit your lifestyle</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-waste-green-100 p-2 rounded-full mt-0.5">
                          <Calendar className="h-5 w-5 text-waste-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Steady Work</p>
                          <p className="text-gray-600">Regular collection opportunities all year</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-waste-blue-100 p-2 rounded-full mt-0.5">
                          <Shield className="h-5 w-5 text-waste-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Insurance Coverage</p>
                          <p className="text-gray-600">Liability insurance provided while on duty</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-waste-green-100 p-2 rounded-full mt-0.5">
                          <Users className="h-5 w-5 text-waste-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Supportive Community</p>
                          <p className="text-gray-600">Join a network of professional collectors</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                {currentStep === 4 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-4">Application Process</h3>
                      <ol className="space-y-4 relative border-l border-gray-200 pl-6 ml-2">
                        <li className="mb-6">
                          <div className="absolute w-6 h-6 rounded-full bg-waste-green-500 -left-3 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">1</span>
                          </div>
                          <p className="font-medium">Submit Application</p>
                          <p className="text-sm text-gray-600">Complete the form with your details</p>
                        </li>
                        <li className="mb-6">
                          <div className="absolute w-6 h-6 rounded-full bg-waste-green-500 -left-3 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">2</span>
                          </div>
                          <p className="font-medium">Initial Review</p>
                          <p className="text-sm text-gray-600">Our team reviews your application (1-3 days)</p>
                        </li>
                        <li className="mb-6">
                          <div className="absolute w-6 h-6 rounded-full bg-waste-green-500 -left-3 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">3</span>
                          </div>
                          <p className="font-medium">Background Check</p>
                          <p className="text-sm text-gray-600">Verify your information and history</p>
                        </li>
                        <li className="mb-6">
                          <div className="absolute w-6 h-6 rounded-full bg-waste-green-500 -left-3 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">4</span>
                          </div>
                          <p className="font-medium">Virtual Orientation</p>
                          <p className="text-sm text-gray-600">Learn about our platform and procedures</p>
                        </li>
                        <li>
                          <div className="absolute w-6 h-6 rounded-full bg-waste-green-500 -left-3 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">5</span>
                          </div>
                          <p className="font-medium">Start Collecting!</p>
                          <p className="text-sm text-gray-600">Begin accepting pickup requests</p>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Hear From Our Collectors</h2>
            <p className="text-lg text-gray-700">
              Join our growing team of satisfied waste collection partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-waste-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">James Reynolds</h3>
                  <p className="text-gray-500">Collector since 2023</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I started with TrashAway after looking for a flexible side gig, and it's grown into my 
                primary income source. The app makes it easy to find and complete pickups, and I love being 
                able to set my own schedule while making good money."
              </p>
              <div className="text-waste-green-500 font-medium">
                $1,200+ weekly earnings
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-waste-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-waste-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Maria Sanchez</h3>
                  <p className="text-gray-500">Collector since 2022</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a single mom, I needed something with flexibility that still paid well. TrashAway 
                has been perfect! I primarily work when my kids are at school, and the team has been 
                incredibly supportive. The work is consistent and the pay is reliable."
              </p>
              <div className="text-waste-blue-500 font-medium">
                20-30 hours weekly
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-waste-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-waste-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">David Chen</h3>
                  <p className="text-gray-500">Collector since 2024</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I joined TrashAway after retiring from my full-time job. It keeps me active and 
                provides good supplemental income. The platform is user-friendly, and I appreciate 
                the focus on environmental responsibility in how we handle different waste materials."
              </p>
              <div className="text-waste-green-500 font-medium">
                Part-time collector
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* FAQ */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Answers to common questions about becoming a waste collector
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">How often will I get paid?</h3>
              <p className="text-gray-700">
                Collectors are paid weekly via direct deposit. All pickups completed from Monday through 
                Sunday will be processed and paid out the following Friday.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Do I need my own equipment?</h3>
              <p className="text-gray-700">
                Yes, you'll need to provide your own vehicle suitable for waste collection (pickup truck, 
                cargo van, or similar). We provide basic safety gear and uniforms for all collectors.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">How are pickup assignments determined?</h3>
              <p className="text-gray-700">
                Our platform matches pickup requests with available collectors based on location, vehicle 
                type, and rating. You'll have the opportunity to accept or decline assignments based on 
                your availability.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Where do I take the collected waste?</h3>
              <p className="text-gray-700">
                We partner with local waste processing facilities, recycling centers, and transfer stations. 
                The app will guide you to the appropriate facility based on the type of waste collected. 
                All disposal fees are covered by TrashAway.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">What kind of support is available for collectors?</h3>
              <p className="text-gray-700">
                We provide 24/7 support through our collector app, regular training on waste handling 
                best practices, and a dedicated collector success team to help you maximize your earnings 
                and address any issues that arise.
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-gradient-to-r from-waste-green-500/90 to-waste-blue-500/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Complete your application today and start earning with TrashAway within days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-waste-green-500 hover:bg-gray-100">
              <a href="#top">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="mailto:collectors@trashaway.com">Email Us</a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CollectorRegistration;
