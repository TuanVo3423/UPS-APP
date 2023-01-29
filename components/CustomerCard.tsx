import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { CustomersScreenNavigationProp } from "../screens/CustomerScreen";
import { Card, Icon } from "@rneui/themed";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
type Props = {
  userId: string;
  name: string;
  email: string;
};
const CustomerCard = ({ userId, email, name }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomersScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MyModal", {
          name: name,
          userId: userId,
        })
      }
    >
      <Card containerStyle={tw("p-5 rounded-lg")}>
        <View>
          {/* above */}
          <View style={tw("flex-row justify-between")}>
            <View>
              <Text style={tw("text-2xl font-bold")}>{name}</Text>
              <Text style={[tw("text-sm"), { color: "#59C1CC" }]}>
                ID : {userId}
              </Text>
            </View>
            <View style={tw("flex-row items-center justify-end")}>
              <Text style={{ color: "#59C1CC" }}>
                {loading ? "loading..." : `${orders.length} x`}
              </Text>
              <Icon
                style={tw("ml-auto mb-5")}
                name="box"
                type="entypo"
                color={"#59C1CC"}
                size={50}
              />
            </View>
          </View>
          {/* below */}
          <CardDivider />
          <Text>{email}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
