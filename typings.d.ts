type Customer = {
    email : string;
    name : string;
}
type CustomerResponse = {
    name : ID;
    value : Customer;
}
type OrderResponse = {
    value : Order;
}

type Items = {
    item_id: Int;
    name: String;
    price: Float;
    quantity: Int;
  }
  type TrackingItems = {
    customer_id: string;
    items: Items[];
    customer: Customer;
  }

  type TrackingItemList = {
    name: ID;
    value: TrackingItems;
  }

type Order = {
    carrier: string;
    createdAt: Date;
    shippingCost: Int;
    trackingId: string;
    Address: string;
    City: string;
    Lat: Float;
    Lng: Float;
    trackingItems: TrackingItems;
  }