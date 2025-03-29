import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';


const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("sophiapatel@gmail.com");
  const [address, setAddress] = useState("123 Main St Apartment 4A, New York, NY");
  const [password, setPassword] = useState("********");

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Yes", onPress: () => Alert.alert("Logged Out", "You have been logged out.") },
    ]);
  };

  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={["#FF2A9D", "#EF2A39"]} 
        style={styles.gradientBackground}
      >
        {/* Background Images */}
        <Image 
          source={require('../assets/images/image 15.png')} // Update this path
          style={styles.backgroundImageLeft} 
          resizeMode="cover"
        />
        <Image 
          source={require('../assets/images/image 16.png')} // Update this path
          style={styles.backgroundImageRight} 
          resizeMode="cover"
        />

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image 
            source={require('../assets/images/ProfileImg.png')} 
            style={styles.profileImage} 
          />
        </View>

        {/* Profile Details */}
        <View style={styles.profileContainer}>
          <TextInput 
            style={styles.input} 
            value={name} 
            onChangeText={setName} 
            editable={isEditing} 
            placeholder="Sophiya Patel"
          />
          <TextInput 
            style={styles.input} 
            value={email} 
            onChangeText={setEmail} 
            editable={isEditing} 
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput 
            style={styles.input} 
            value={address} 
            onChangeText={setAddress} 
            editable={isEditing} 
            placeholder="Delivery Address"
            multiline
          />
          <TextInput 
            style={styles.input} 
            value={password} 
            onChangeText={setPassword} 
            editable={isEditing} 
            placeholder="Password"
            secureTextEntry
          />

          {/* Profile Options */}
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Payment Details</Text>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Order History</Text>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => setIsEditing(!isEditing)}
            >
              <Text style={styles.editText}>{isEditing ? "Save" : "Edit Profile"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutText}>Log Out</Text>
              <Ionicons name="log-out-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    borderWidth: 2,
    borderColor: '#EF2A39'
  },
  gradientBackground: {
    flex: 1,
    position: 'relative'
  },
  backgroundImageLeft: {
    position: 'absolute',
    top: 0,
    left: -40,
    width: width / 2,
    height: 200,
    opacity: 0.5
  },
  backgroundImageRight: {
    position: 'absolute',
    top: 0,
    right: -40,
    width: width / 2,
    height: 200,
    opacity: 0.5,
    transform: [{ scaleX: -1 }] // Flip the image horizontally
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20,
    zIndex: 1 
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: -50,
    zIndex: 2
  },
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 20, 
    borderWidth: 3, 
    borderColor: '#EF2A39',
  },
  profileContainer: { 
    backgroundColor: 'white', 
    flex: 1, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    padding: 20, 
    marginTop: -20 
  },
  input: { 
    backgroundColor: '#F5F5F5', 
    borderRadius: 10, 
    padding: 12, 
    marginVertical: 8 
  },
  option: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E0E0E0' 
  },
  optionText: { 
    fontSize: 16 
  },
  buttonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20 
  },
  editButton: { 
    backgroundColor: '#3E2723', 
    padding: 12, 
    borderRadius: 10, 
    flex: 1, 
    alignItems: 'center', 
    marginRight: 10 
  },
  editText: { 
    color: 'white', 
    fontSize: 16 
  },
  logoutButton: { 
    backgroundColor: '#FF3B30', 
    padding: 12, 
    borderRadius: 10, 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  logoutText: { 
    color: 'white', 
    fontSize: 16, 
    marginRight: 5 
  },
});

export default ProfileScreen;