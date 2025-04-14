
import { useParams, useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft, Calendar, Clock, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/PageLayout";
import { getRequestById } from "@/data/requestData";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const formSchema = z.object({
  type: z.string().min(1, "Waste type is required"),
  date: z.date({
    required_error: "Pickup date is required",
  }),
  time: z.string().min(1, "Time window is required"),
  address: z.string().min(1, "Address is required"),
  quantity: z.string().optional(),
  collectionPoint: z.string().optional(),
  notes: z.string().optional(),
});

const EditRequest = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [request, setRequest] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      date: undefined,
      time: "",
      address: "",
      quantity: "",
      collectionPoint: "",
      notes: "",
    },
  });

  useEffect(() => {
    // Simulate loading and fetch data
    setTimeout(() => {
      if (id) {
        const foundRequest = getRequestById(Number(id));
        if (foundRequest) {
          setRequest(foundRequest);
          form.reset({
            type: foundRequest.type,
            date: new Date(foundRequest.date),
            time: foundRequest.time,
            address: foundRequest.address,
            quantity: foundRequest.quantity || "",
            collectionPoint: foundRequest.collectionPoint || "",
            notes: foundRequest.notes,
          });
        }
      }
      setIsLoading(false);
    }, 800);
  }, [id, form]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, this would send data to the backend
    console.log(values);
    
    // Simulate successful update
    setTimeout(() => {
      toast({
        title: "Request updated",
        description: "Your pickup request has been updated successfully.",
      });
      navigate(`/request/${id}/details`);
    }, 600);
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container mx-auto p-4 flex-1">
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse flex flex-col items-center gap-4 w-full max-w-2xl">
              <div className="bg-gray-200 h-8 w-1/3 rounded mb-4"></div>
              <div className="bg-gray-200 h-64 w-full rounded-lg"></div>
              <div className="bg-gray-200 h-12 w-1/2 rounded"></div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!request) {
    return (
      <PageLayout>
        <div className="container mx-auto p-4 flex-1">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-2">Request Not Found</h2>
            <p className="text-gray-600 mb-6">The request you're looking for does not exist.</p>
            <Link to="/dashboard">
              <Button>Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <Link to={`/request/${id}/details`} className="inline-flex items-center text-gray-600 hover:text-waste-green-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Request Details
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Edit Pickup Request #{id}</h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Waste Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select waste type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Regular Waste">Regular Waste</SelectItem>
                          <SelectItem value="Recycling">Recycling</SelectItem>
                          <SelectItem value="Bulk Waste">Bulk Waste</SelectItem>
                          <SelectItem value="Hazardous Waste">Hazardous Waste</SelectItem>
                          <SelectItem value="Green Waste">Green Waste</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Pickup Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <Calendar className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time Window</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time window" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="09:00 - 12:00">Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="13:00 - 16:00">Afternoon (1PM - 4PM)</SelectItem>
                          <SelectItem value="17:00 - 20:00">Evening (5PM - 8PM)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Quantity</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 2 bags, 1 box" {...field} />
                      </FormControl>
                      <FormDescription>
                        Approximate amount of waste
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pickup Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="collectionPoint"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collection Point</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Front door, Backyard, Curb" {...field} />
                    </FormControl>
                    <FormDescription>
                      Specific location where the waste should be collected
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Instructions</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any additional information for the collector"
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => navigate(`/request/${id}/details`)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-waste-green-500 hover:bg-waste-green-600">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </PageLayout>
  );
};

export default EditRequest;
