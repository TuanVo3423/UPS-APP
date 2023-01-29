import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://avellaneda.stepzen.net/api/voting-grizzly/__graphql",
  headers: {
    Authorization:
      "apikey avellaneda::stepzen.io+1000::15c598d37ccd15d5deca742e47f0e4a792ef06866c7cb62902013fdf7f43ab8d",
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
