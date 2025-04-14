
import { useParams, Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MapPin, Trash2, Package, Navigation, Edit, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/PageLayout";
import { getRequestById } from "@/data/requestData";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const RequestDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [request, setRequest] = useState<any>(null);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      if (id) {
        const foundRequest = getRequestById(Number(id));
        setRequest(foundRequest);
      }
      setIsLoading(false);
    }, 800);
  }, [id]);

  const handleCancelRequest = () => {
    toast({
      title: "Request cancelled",
      description: "Your pickup request has been cancelled.",
    });
    navigate("/dashboard");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-waste-blue-500">Scheduled</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-500 border-orange-500">Pending</Badge>;
      case "completed":
        return <Badge variant="outline" className="text-waste-green-500 border-waste-green-500">Completed</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container mx-auto p-4 flex-1">
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse flex flex-col items-center gap-4 w-full max-w-3xl">
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
          <Link to="/dashboard" className="inline-flex items-center text-gray-600 hover:text-waste-green-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6 overflow-hidden">
              <CardHeader className="pb-2 relative">
                <div className="absolute top-4 right-4">
                  {getStatusBadge(request.status)}
                </div>
                <CardTitle className="text-2xl">Pickup Request #{request.id}</CardTitle>
                <CardDescription>{request.type}</CardDescription>
              </CardHeader>

              <CardContent className="pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Pickup Date</p>
                      <p className="font-medium">{request.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Time Window</p>
                      <p className="font-medium">{request.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Address</p>
                      <p className="font-medium">{request.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Quantity</p>
                      <p className="font-medium">{request.quantity || "Not specified"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Navigation className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Collection Point</p>
                      <p className="font-medium">{request.collectionPoint || "Not specified"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trash2 className="h-5 w-5 text-waste-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Waste Type</p>
                      <p className="font-medium">{request.type}</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Notes</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-md">{request.notes}</p>
                </div>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
                {request.status !== "completed" && request.status !== "cancelled" && (
                  <>
                    <Link to={`/request/${request.id}/edit`}>
                      <Button className="bg-waste-blue-500 hover:bg-waste-blue-600">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Request
                      </Button>
                    </Link>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                          <XCircle className="w-4 h-4 mr-2" />
                          Cancel Pickup
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Cancel Pickup Request</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to cancel this pickup request? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>No, Keep Request</AlertDialogCancel>
                          <AlertDialogAction onClick={handleCancelRequest} className="bg-red-500 hover:bg-red-600">
                            Yes, Cancel Request
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </>
                )}
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pickup Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`h-5 w-5 ${request.status !== "cancelled" ? "text-waste-green-500" : "text-gray-300"}`} />
                    <div>
                      <p className="font-medium">Request Submitted</p>
                      <p className="text-sm text-gray-500">2025-04-15 10:30 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`h-5 w-5 ${request.status === "scheduled" || request.status === "completed" ? "text-waste-green-500" : "text-gray-300"}`} />
                    <div>
                      <p className="font-medium">Request Confirmed</p>
                      <p className="text-sm text-gray-500">{request.status === "scheduled" || request.status === "completed" ? "2025-04-16 08:45 AM" : "Pending"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`h-5 w-5 ${request.status === "completed" ? "text-waste-green-500" : "text-gray-300"}`} />
                    <div>
                      <p className="font-medium">Pickup Completed</p>
                      <p className="text-sm text-gray-500">{request.status === "completed" ? "2025-04-20 10:15 AM" : "Pending"}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">If you have any questions or need to make changes to your pickup request, our support team is ready to help.</p>
                <Button variant="outline" className="w-full" onClick={() => {
                  toast({
                    title: "Support request sent",
                    description: "Our team will get back to you shortly",
                  });
                }}>
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RequestDetails;
