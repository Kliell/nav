import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
      <Stack.Screen name = "index" options={{title: "Home"}} />
      <Stack.Screen name = "catalogo" options={{title: "Shop"}} />
      </Stack>
  //return <Stack screenOption = {{headerShown: false}}/>;
}

