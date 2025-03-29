import {Text, TouchableOpacity, View} from "react-native";
import{Link} from "expo-router";
import { Button } from "react-native-paper";
import { StyleSheet } from 'react-native';
const Index =() =>{
  return(
   <View
      style ={{
        backgroundColor: '#EF2A39',
        flex:1,
        alignItems: 'center',
        justifyContent:'center', 
       }}>
        <Text style ={{fontSize:30, fontWeight:"700", color:"white"}}>
          Wellcome To Food App
        </Text>
        <Link href = { "/Payment"} style = {styles.Button}> <Text style={styles.buttonText}>Go for payment</Text></Link>
        
        <Link href = {"/CustomerSupport"} style = {styles.Button}> <Text style={styles.buttonText}>Go for Help</Text></Link>
        <Link href = {"/ProfileScreen"} style = {styles.Button}> <Text style={styles.buttonText}> View Profile</Text></Link>
   </View>
  );
};

const styles = StyleSheet.create({
  Button :{
      height:25,
      width: 300,
      color: '#fff',
      textAlign : 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      margin:10,
      
  },
  buttonText :{
      color: 'black',
      fontSize: 20,
      margin:5,
      padding:5,
  },

});

export  default Index;