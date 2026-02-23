import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

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