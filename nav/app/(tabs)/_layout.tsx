import { Stack } from 'expo-router';

<<<<<<< HEAD
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
=======
const TabsLayout = () => {
    return (
    <Tabs>
        <Tabs.Screen name='index' options={
            {   NPMtitle: "Home",
                tabBarIcon: ({ color }) => (
                    <Ionicons name='home' cloor={color} />
                )
            }} />
        <Tabs.Screen name='catalogo' options={{ title: "Shop" }} />
    </Tabs>
    )
}


export default TabsLayout
>>>>>>> c334cf434162b7ee64e793267139a182425a3d2f
