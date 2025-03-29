import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('\(tabs)');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Foodgo</Text>
      <View style={styles.burgerContainer}>
        <Image 
          source={require('../../assets/images/image 2.png')} 
          style={styles.burgerLarge} 
        />
        <Image 
          source={require('../../assets/images/image 1.png')} 
          style={styles.burgerSmall} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 48,
    color: 'white',
    marginTop: -100,
  },
  burgerContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  burgerLarge: {
    width: 246,
    height: 288,
    position: 'absolute', // Critical for using top/left
     
    left: -210,
      // Ensures it's above other elements
  },
  burgerSmall: {
    width: 202,
    height: 202,
    marginLeft: -550,
    bottom: -80,
    position: 'absolute', // Add this to ensure bottom positioning works
  },
});