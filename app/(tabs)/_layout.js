import { Tabs } from 'expo-router'; 
import { Chrome as Home, User, ShoppingBag, Heart } from 'lucide-react-native';  

export default function TabLayout() {   
  return (     
    <Tabs       
      screenOptions={{         
        headerShown: false,         
        tabBarStyle: {           
          display: 'none', // This completely removes the bottom navigation
        },         
        tabBarActiveTintColor: '#FF4B3A',         
        tabBarInactiveTintColor: '#9B9B9B',       
      }}
    >       
      <Tabs.Screen         
        name="index"         
        options={{           
          title: 'Home',           
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,         
        }}       
      />       
      <Tabs.Screen         
        name="orders"         
        options={{           
          title: 'Orders',           
          tabBarIcon: ({ color, size }) => <ShoppingBag size={size} color={color} />,         
        }}       
      />       
      <Tabs.Screen         
        name="favorites"         
        options={{           
          title: 'Favorites',           
          tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,         
        }}       
      />       
      <Tabs.Screen         
        name="profile"         
        options={{           
          title: 'Profile',           
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,         
        }}       
      />     
    </Tabs>   
  ); 
}