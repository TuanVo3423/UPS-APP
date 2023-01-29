import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { GET_CUSTOMERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useCustomers = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMERS, {
    variables: {},
  });
  const [customers, setCustomers] = useState<Customer[]>([]);
  useEffect(() => {
    if (!data) return;
    const customers = data.getCustomers.map(
      ({ value, name }: CustomerResponse) => ({
        email: value.email,
        name: value.name,
      })
    );
    setCustomers(customers);
  }, [data]);
  return (
    <View>
      <Text>useCustomers</Text>
    </View>
  );
};

export default useCustomers;
