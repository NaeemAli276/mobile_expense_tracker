import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Home, Boxes, ChartColumnIncreasing } from 'lucide-react-native' 

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#6366f1',
                tabBarInactiveTintColor: 'gray', // Color of unselected tabs
                tabBarStyle: {
                    backgroundColor: 'white',
                    height: 4 * 22,
                    paddingTop: 4 * 1,
                },
                tabBarLabelStyle: {
                    fontSize: 4 * 2.5,
                    fontFamily: 'Poppins-Medium'
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    href: null,
                }}
            />
            
            <Tabs.Screen
                name="home"
                options={{ 
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Home
                            size={24}
                            strokeWidth={1.2}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Boxes
                            size={24}
                            strokeWidth={1.2}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="analytics"
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <ChartColumnIncreasing
                            size={24}
                            strokeWidth={1.2}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabLayout