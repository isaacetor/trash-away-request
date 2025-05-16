
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarIcon } from "@/components/Calendar";
import { MapPinIcon } from "@/components/MapPin";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Truck, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Calendar, 
  RotateCw, 
  ChevronDown, 
  Filter,
  DollarSign,
  WalletCards,
  CreditCard,
  Wallet
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { pickupRequests, PickupRequest } from "@/data/requestData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

// Extended interface for collector-specific pickup data
interface CollectorPickupRequest extends PickupRequest {
  assignedTo?: string;
  collectionTime?: string;
  completionNotes?: string;
  earnings?: number;
}

// Mock collector financial data
const mockFinancialData = {
  totalEarnings: 1250.75,
  availableBalance: 875.50,
  pendingBalance: 375.25,
  lastPayout: {
    amount: 500.00,
    date: "2025-05-10",
    status: "completed"
  },
  transactions: [
    { id: "t1", date: "2025-05-10", type: "payout", amount: 500.00, status: "completed" },
    { id: "t2", date: "2025-05-05", type: "earning", amount: 125.50, requestId: "8532", status: "completed" },
    { id: "t3", date: "2025-05-03", type: "earning", amount: 85.75, requestId: "8521", status: "completed" },
    { id: "t4", date: "2025-05-01", type: "earning", amount: 110.00, requestId: "8517", status: "completed" },
    { id: "t5", date: "2025-04-28", type: "payout", amount: 300.00, status: "completed" },
  ],
  paymentMethods: [
    { id: "pm1", type: "bank", name: "City Bank", accountNumber: "****6789", isDefault: true },
    { id: "pm2", type: "card", name: "Visa", accountNumber: "****4321", isDefault: false }
  ]
};

// Mock collector data
const mockCollectorData = {
  id: "c123",
  name: "John Collector",
  vehicle: "Waste Truck #4782",
  region: "North Zone",
  rating: 4.8,
  completedPickups: 152,
  todayAssignments: 5,
};

// Convert existing pickups to collector format and assign to collector
const collectorPickups: CollectorPickupRequest[] = pickupRequests.map((request) => ({
  ...request,
  assignedTo: mockCollectorData.id,
  collectionTime: "",
  earnings: Math.floor(Math.random() * 50) + 50
}));

const CollectorDashboard = () => {
  const [activeTab, setActiveTab] = useState("assigned");
  const [pickups, setPickups] = useState(collectorPickups);
  const [selectedRequest, setSelectedRequest] = useState<CollectorPickupRequest | null>(null);
  const [statusUpdateOpen, setStatusUpdateOpen] = useState(false);
  const [completionNotes, setCompletionNotes] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [financialTab, setFinancialTab] = useState("balance");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(mockFinancialData.paymentMethods[0].id);
  const [withdrawalDialogOpen, setWithdrawalDialogOpen] = useState(false);
  const [addPaymentMethodOpen, setAddPaymentMethodOpen] = useState(false);
  const [newPaymentMethod, setNewPaymentMethod] = useState({
    type: "bank",
    name: "",
    accountNumber: "",
    routingNumber: ""
  });
  const { toast } = useToast();
  
  // Filter pickups based on active tab and filter status
  const filteredPickups = pickups.filter(pickup => {
    if (activeTab === "assigned") {
      return pickup.status === "pending" || pickup.status === "scheduled";
    } else if (activeTab === "completed") {
      return pickup.status === "completed";
    } else if (activeTab === "cancelled") {
      return pickup.status === "cancelled";
    }
    
    // Apply additional status filter if set
    if (filterStatus && filterStatus !== "all") {
      return pickup.status === filterStatus;
    }
    
    return true;
  });

  const handleStatusUpdate = (status: 'pending' | 'scheduled' | 'completed' | 'cancelled') => {
    if (!selectedRequest) return;
    
    const updatedPickups = pickups.map(pickup => {
      if (pickup.id === selectedRequest.id) {
        const updated = { 
          ...pickup, 
          status,
          completionNotes: status === 'completed' ? completionNotes : pickup.completionNotes
        };
        return updated;
      }
      return pickup;
    });
    
    setPickups(updatedPickups);
    setStatusUpdateOpen(false);
    setCompletionNotes("");
    
    toast({
      title: "Status updated",
      description: `Pickup #${selectedRequest.id} has been marked as ${status}.`,
    });
  };

  const handleWithdrawal = () => {
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0 || amount > mockFinancialData.availableBalance) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount that doesn't exceed your available balance.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would connect to a payment processing API
    toast({
      title: "Withdrawal initiated",
      description: `Your withdrawal of $${amount.toFixed(2)} is being processed.`,
    });
    
    setWithdrawalDialogOpen(false);
    setWithdrawAmount("");
  };

  const handleAddPaymentMethod = () => {
    if (!newPaymentMethod.name || !newPaymentMethod.accountNumber) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would connect to a payment processing API
    toast({
      title: "Payment method added",
      description: `Your ${newPaymentMethod.type} account has been added successfully.`,
    });
    
    setAddPaymentMethodOpen(false);
    setNewPaymentMethod({
      type: "bank",
      name: "",
      accountNumber: "",
      routingNumber: ""
    });
  };
  
  // Status badge renderer
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-waste-blue-500">Scheduled</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-500 border-orange-500">Pending</Badge>;
      case "completed":
        return <Badge variant="outline" className="text-waste-green-500 border-waste-green-500">Completed</Badge>;
      case "cancelled":
        return <Badge variant="outline" className="text-red-500 border-red-500">Cancelled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  // Custom footer for financial information
  const FinancialFooter = () => (
    <div className="bg-gray-50 border-t p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-waste-green-500" />
          <span className="font-medium">Available Balance: <span className="text-waste-green-500">${mockFinancialData.availableBalance.toFixed(2)}</span></span>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setAddPaymentMethodOpen(true)}
            className="flex gap-1"
          >
            <CreditCard className="h-4 w-4" />
            <span>Payment Methods</span>
          </Button>
          <Button 
            size="sm" 
            onClick={() => setWithdrawalDialogOpen(true)}
            className="bg-waste-green-500 hover:bg-waste-green-600 flex gap-1"
          >
            <Wallet className="h-4 w-4" />
            <span>Withdraw Funds</span>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout footer={<FinancialFooter />}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Collector Dashboard</h1>
          <p className="text-gray-600">Manage your assigned waste pickup requests</p>
        </div>
      </div>
      
      {/* Collector Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-waste-green-100 p-3 rounded-full">
                <Truck className="h-6 w-6 text-waste-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Today's Pickups</p>
                <p className="text-2xl font-bold">{mockCollectorData.todayAssignments}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-waste-blue-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-waste-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Completed</p>
                <p className="text-2xl font-bold">{mockCollectorData.completedPickups}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Region</p>
                <p className="text-2xl font-bold">{mockCollectorData.region}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Earnings</p>
                <p className="text-2xl font-bold">${mockFinancialData.totalEarnings.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Finance Cards */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle>Financial Overview</CardTitle>
          <CardDescription>Track your earnings and manage payouts</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="balance" value={financialTab} onValueChange={setFinancialTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="balance">Balance</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="paymentMethods">Payment Methods</TabsTrigger>
            </TabsList>
            
            <TabsContent value="balance" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-1">Available Balance</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-waste-green-500">
                      ${mockFinancialData.availableBalance.toFixed(2)}
                    </span>
                    <Button 
                      size="sm" 
                      onClick={() => setWithdrawalDialogOpen(true)}
                      className="bg-waste-green-500 hover:bg-waste-green-600"
                    >
                      Withdraw
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Available for immediate withdrawal</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-1">Pending Balance</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-gray-500">
                      ${mockFinancialData.pendingBalance.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Will be available within 3 business days</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium mb-3">Earnings Breakdown</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">This Week</span>
                    <span className="font-medium">$215.25</span>
                  </div>
                  <Progress value={35} className="h-2 mb-4" />
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">This Month</span>
                    <span className="font-medium">$875.50</span>
                  </div>
                  <Progress value={70} className="h-2 mb-4" />
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Total Earnings</span>
                    <span className="font-medium">${mockFinancialData.totalEarnings.toFixed(2)}</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="transactions">
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockFinancialData.transactions.map(transaction => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>
                          <Badge variant={transaction.type === "payout" ? "outline" : "default"}>
                            {transaction.type === "payout" ? "Payout" : "Earning"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {transaction.requestId ? `Request #${transaction.requestId}` : "Bank Transfer"}
                        </TableCell>
                        <TableCell className={transaction.type === "payout" ? "text-red-500" : "text-waste-green-500"}>
                          {transaction.type === "payout" ? "-" : "+"}${transaction.amount.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {transaction.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="paymentMethods">
              <div className="space-y-4">
                {mockFinancialData.paymentMethods.map(method => (
                  <Card key={method.id} className={`border ${method.isDefault ? 'border-waste-green-500' : ''}`}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        {method.type === "bank" ? (
                          <WalletCards className="h-8 w-8 text-waste-blue-500" />
                        ) : (
                          <CreditCard className="h-8 w-8 text-gray-600" />
                        )}
                        <div>
                          <p className="font-medium">{method.name}</p>
                          <p className="text-sm text-gray-500">
                            {method.type === "bank" ? "Bank Account" : "Credit Card"} ending in {method.accountNumber.split('*').pop()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {method.isDefault && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Default</Badge>
                        )}
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Button 
                  variant="outline" 
                  className="w-full border-dashed"
                  onClick={() => setAddPaymentMethodOpen(true)}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Pickup Requests Filter & Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <Tabs defaultValue="assigned" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="assigned">Assigned</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            <TabsTrigger value="all">All Requests</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setFilterStatus("all")}>
                  All Statuses
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("pending")}>
                  Pending Only
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("scheduled")}>
                  Scheduled Only
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterStatus("completed")}>
                  Completed Only
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" onClick={() => setFilterStatus(null)}>
            <RotateCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
      
      {/* Pickups Table */}
      <Card className="mb-8">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Earnings</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPickups.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8">
                    <p className="text-gray-500">No pickup requests found</p>
                    <p className="text-sm text-gray-400">There are no {activeTab} pickups to display.</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredPickups.map((pickup) => (
                  <TableRow key={pickup.id}>
                    <TableCell className="font-medium">#{pickup.id}</TableCell>
                    <TableCell>{pickup.type}</TableCell>
                    <TableCell>{getStatusBadge(pickup.status)}</TableCell>
                    <TableCell>{pickup.date}</TableCell>
                    <TableCell>{pickup.time}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{pickup.address}</TableCell>
                    <TableCell>
                      {pickup.status === 'completed' && pickup.earnings ? (
                        <span className="text-waste-green-500">${pickup.earnings.toFixed(2)}</span>
                      ) : (
                        <span className="text-gray-500">--</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">View</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Pickup Request #{pickup.id}: {pickup.type}</DialogTitle>
                              <DialogDescription>Request details</DialogDescription>
                            </DialogHeader>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h3 className="font-medium mb-2">Details</h3>
                                <div className="space-y-4">
                                  <div className="flex items-start gap-2">
                                    <CalendarIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                                    <div>
                                      <p className="text-sm font-medium">Date</p>
                                      <p>{pickup.date}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                                    <div>
                                      <p className="text-sm font-medium">Time Window</p>
                                      <p>{pickup.time}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <MapPinIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                                    <div>
                                      <p className="text-sm font-medium">Address</p>
                                      <p>{pickup.address}</p>
                                    </div>
                                  </div>
                                  {pickup.status === 'completed' && pickup.earnings && (
                                    <div className="flex items-start gap-2">
                                      <DollarSign className="h-5 w-5 text-waste-green-500 mt-0.5" />
                                      <div>
                                        <p className="text-sm font-medium">Earnings</p>
                                        <p className="text-waste-green-500">${pickup.earnings.toFixed(2)}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div>
                                <h3 className="font-medium mb-2">Additional Information</h3>
                                <div className="space-y-4">
                                  <div>
                                    <p className="text-sm font-medium">Waste Type</p>
                                    <p>{pickup.type}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Quantity</p>
                                    <p>{pickup.quantity || "Not specified"}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Collection Point</p>
                                    <p>{pickup.collectionPoint || "Not specified"}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">Notes</p>
                                    <p>{pickup.notes || "No additional notes"}</p>
                                  </div>
                                </div>
                              </div>
                              
                              {pickup.status === 'completed' && pickup.completionNotes && (
                                <div className="md:col-span-2">
                                  <h3 className="font-medium mb-2">Completion Notes</h3>
                                  <p className="bg-gray-50 p-3 rounded-md">{pickup.completionNotes}</p>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        {(pickup.status === 'pending' || pickup.status === 'scheduled') && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="bg-waste-green-500 text-white hover:bg-waste-green-600"
                            onClick={() => {
                              setSelectedRequest(pickup);
                              setStatusUpdateOpen(true);
                            }}
                          >
                            Update Status
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Status Update Dialog */}
      <Dialog open={statusUpdateOpen} onOpenChange={setStatusUpdateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Pickup Status</DialogTitle>
            <DialogDescription>
              Change the status of pickup request #{selectedRequest?.id}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Select new status:</p>
              <Select defaultValue={selectedRequest?.status}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Completion Notes (required for completed status):</p>
              <Textarea 
                placeholder="Enter details about the pickup completion..." 
                value={completionNotes}
                onChange={(e) => setCompletionNotes(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setStatusUpdateOpen(false)}>Cancel</Button>
            <Button 
              onClick={() => handleStatusUpdate('completed')} 
              className="bg-waste-green-500 hover:bg-waste-green-600"
            >
              Mark Completed
            </Button>
            <Button 
              variant="outline"
              className="text-red-500 border-red-500 hover:bg-red-50"
              onClick={() => handleStatusUpdate('cancelled')}
            >
              Mark Cancelled
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Withdrawal Dialog */}
      <Dialog open={withdrawalDialogOpen} onOpenChange={setWithdrawalDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Withdraw Funds</DialogTitle>
            <DialogDescription>
              Transfer your available balance to your bank account
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="withdrawAmount">Amount to withdraw</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input 
                  id="withdrawAmount"
                  type="number"
                  placeholder="0.00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="pl-8"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Available balance: ${mockFinancialData.availableBalance.toFixed(2)}
              </p>
            </div>
            
            <div>
              <Label>Select payment method</Label>
              <div className="space-y-2 mt-1">
                {mockFinancialData.paymentMethods.map(method => (
                  <div 
                    key={method.id} 
                    className={`flex items-center justify-between p-3 border rounded-md cursor-pointer ${
                      selectedPaymentMethod === method.id ? 'border-waste-green-500 bg-waste-green-50' : ''
                    }`}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                  >
                    <div className="flex items-center gap-3">
                      {method.type === "bank" ? (
                        <WalletCards className="h-5 w-5 text-waste-blue-500" />
                      ) : (
                        <CreditCard className="h-5 w-5 text-gray-600" />
                      )}
                      <div>
                        <p className="font-medium">{method.name}</p>
                        <p className="text-sm text-gray-500">{method.accountNumber}</p>
                      </div>
                    </div>
                    {selectedPaymentMethod === method.id && (
                      <CheckCircle2 className="h-5 w-5 text-waste-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setWithdrawalDialogOpen(false)}>Cancel</Button>
            <Button 
              onClick={handleWithdrawal} 
              className="bg-waste-green-500 hover:bg-waste-green-600"
              disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0}
            >
              Withdraw Funds
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Payment Method Dialog */}
      <Dialog open={addPaymentMethodOpen} onOpenChange={setAddPaymentMethodOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Payment Method</DialogTitle>
            <DialogDescription>
              Add a new bank account or card for withdrawals
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="methodType">Method Type</Label>
              <Select 
                value={newPaymentMethod.type} 
                onValueChange={(val: "bank" | "card") => setNewPaymentMethod({...newPaymentMethod, type: val})}
              >
                <SelectTrigger id="methodType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank Account</SelectItem>
                  <SelectItem value="card">Credit/Debit Card</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="accountName">
                {newPaymentMethod.type === "bank" ? "Bank Name" : "Card Name"}
              </Label>
              <Input 
                id="accountName" 
                value={newPaymentMethod.name}
                onChange={(e) => setNewPaymentMethod({...newPaymentMethod, name: e.target.value})}
                placeholder={newPaymentMethod.type === "bank" ? "e.g. Bank of America" : "e.g. Visa Debit"}
              />
            </div>

            <div>
              <Label htmlFor="accountNumber">
                {newPaymentMethod.type === "bank" ? "Account Number" : "Card Number"}
              </Label>
              <Input 
                id="accountNumber"
                value={newPaymentMethod.accountNumber}
                onChange={(e) => setNewPaymentMethod({...newPaymentMethod, accountNumber: e.target.value})}
                placeholder={newPaymentMethod.type === "bank" ? "Bank account number" : "Card number"}
              />
            </div>
            
            {newPaymentMethod.type === "bank" && (
              <div>
                <Label htmlFor="routingNumber">Routing Number</Label>
                <Input 
                  id="routingNumber"
                  value={newPaymentMethod.routingNumber}
                  onChange={(e) => setNewPaymentMethod({...newPaymentMethod, routingNumber: e.target.value})}
                  placeholder="Routing number"
                />
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddPaymentMethodOpen(false)}>Cancel</Button>
            <Button 
              onClick={handleAddPaymentMethod} 
              className="bg-waste-green-500 hover:bg-waste-green-600"
            >
              Add Payment Method
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
    </PageLayout>
  );
};

export default CollectorDashboard;
