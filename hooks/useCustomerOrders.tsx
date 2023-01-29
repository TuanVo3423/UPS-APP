import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";

const useCustomerOrders = (userId: string) => {
  const { loading, error, data } = useQuery(GET_ORDERS, {
    variables: {},
  });
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    if (!data) return;
    else {
      const orders: Order[] = data.getOrders.map(
        ({ value }: OrderResponse) => ({
          carrier: value.carrier,
          trackingItems: value.trackingItems,
          createdAt: value.createdAt,
          shippingCost: value.shippingCost,
          trackingId: value.trackingId,
          Address: value.Address,
          City: value.City,
          Lat: value.Lat,
          Lng: value.Lng,
        })
      );
      const customerOrders = orders.filter(
        (order) => order.trackingItems.customer_id === userId
      );
      setOrders(customerOrders);
    }
  }, [data, userId]);
  return { loading, error, orders };
};

export default useCustomerOrders;
