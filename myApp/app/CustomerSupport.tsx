import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Message {
  id: string;
  text: string;
  sender: "user" | "support"; // Ensuring sender is "user" or "support"
}

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hi, how can I help you?", sender: "support" },
    { id: "2", text: "Hello, I ordered two fried chicken burgers. Can I know how much time it will take to arrive?", sender: "user" },
    { id: "3", text: "Ok, please let me check!", sender: "support" },
    { id: "4", text: "Sure...", sender: "user" },
    { id: "5", text: "It’ll get 25 minutes to arrive at your address", sender: "support" },
    { id: "6", text: "Ok, thanks for your support", sender: "user" },
  ]);

  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: inputText, sender: "user" }]);
      setInputText("");
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[styles.messageContainer, item.sender === "user" ? styles.userMessage : styles.supportMessage]}>
      {item.sender === "support" && <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }} style={styles.avatar} />}
      <View style={[styles.bubble, item.sender === "user" ? styles.userBubble : styles.supportBubble]}>
        <Text style={[styles.messageText, item.sender === "user" ? styles.userText : styles.supportText]}>{item.text}</Text>
      </View>
      {item.sender === "user" && <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }} style={styles.avatar} />}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Customer Support</Text>
        <Ionicons name="menu" size={24} color="black" />
      </View>

      {/* Chat Messages */}
      <FlatList data={messages} keyExtractor={(item) => item.id} renderItem={renderMessage} style={styles.chatList} />

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", flex: 1, textAlign: "center" },

  /* Chat Messages */
  chatList: { flex: 1, paddingHorizontal: 10 },

  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 5,
  },
  userMessage: {
    alignSelf: "flex-end",
    flexDirection: "row-reverse",
  },
  supportMessage: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },

  /* Chat Bubbles */
  bubble: {
    padding: 12,
    borderRadius: 10,
    maxWidth: "75%",
  },
  userBubble: {
    backgroundColor: "#FF4C4C",
    borderTopRightRadius: 0,
  },
  supportBubble: {
    backgroundColor: "#EAEAEA",
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
  },
  userText: {
    color: "#fff",
  },
  supportText: {
    color: "#000",
  },

  /* Avatar */
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },

  /* Input Box */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    backgroundColor: "#FF4C4C",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default ChatScreen;