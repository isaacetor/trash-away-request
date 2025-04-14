
export interface PickupRequest {
  id: number;
  type: string;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  date: string;
  time: string;
  address: string;
  notes: string;
  quantity?: string;
  collectionPoint?: string;
}

// Mock data for pickup requests
export const pickupRequests: PickupRequest[] = [
  {
    id: 1,
    type: "Regular Waste",
    status: "scheduled",
    date: "2025-04-20",
    time: "09:00 - 12:00",
    address: "123 Green Street, Eco City",
    notes: "Please collect from the back gate",
    quantity: "2 bags",
    collectionPoint: "Back door"
  },
  {
    id: 2,
    type: "Recycling",
    status: "completed",
    date: "2025-04-10",
    time: "13:00 - 16:00",
    address: "123 Green Street, Eco City",
    notes: "Cardboard boxes and plastic bottles",
    quantity: "1 box",
    collectionPoint: "Front yard"
  },
  {
    id: 3,
    type: "Bulk Waste",
    status: "pending",
    date: "2025-04-25",
    time: "09:00 - 12:00",
    address: "123 Green Street, Eco City",
    notes: "Old furniture needs to be removed",
    quantity: "1 sofa, 2 chairs",
    collectionPoint: "Curb"
  },
];

export const getRequestById = (id: number) => {
  return pickupRequests.find(request => request.id === id);
};
