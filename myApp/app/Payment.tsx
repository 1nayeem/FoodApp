import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image, Modal, Button } from "react-native";
import { Card, RadioButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { DefaultTheme } from "react-native-paper";

const red200 = DefaultTheme.colors.error;

const PaymentScreen = () => {
    const [selectedPayment, setSelectedPayment] = useState("credit");
    const [saveCard, setSaveCard] = useState(false);
    const [isModal, setIsModal] = useState(false);


    const SuccessModal = () => {

        return (
            <Modal visible={isModal} transparent>
                <View style={styles.MOdalcontainer}>
                    <View style={styles.card2}>
                        <View style={styles.iconContainer}>
                            {/* <Image style={styles.Right} source={require('./../assets/images/Right.png')} /> */}
                        </View>
                        <Text style={styles.title}>Success !</Text>
                        <Text style={styles.message}>Your payment was successful.{"\n"}A receipt for this purchase has been sent to your email.</Text>
                        <TouchableOpacity onPress={() => setIsModal(false)} style={styles.button}>
                            <Text style={styles.buttonText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }


    return (
        <View style={styles.container}>
            {/* Order Summary */}
            <Text style={styles.header}>Order summary</Text>
            <View style={styles.summary}>
                <Text style={styles.text}>Order</Text>
                <Text style={styles.text}>$16.48</Text>
            </View>
            <View style={styles.summary}>
                <Text style={styles.text}>Taxes</Text>
                <Text style={styles.text}>$0.30</Text>
            </View>
            <View style={styles.summary}>
                <Text style={styles.text}>Delivery fees</Text>
                <Text style={styles.text}>$1.50</Text>
            </View>
            <View style={styles.total}>
                <Text style={styles.totalText}>Total:</Text>
                <Text style={styles.totalAmount}>$18.19</Text>
            </View>
            <Text style={styles.deliveryTime}>Estimated delivery time: 15 - 30mins</Text>

            {/* Payment Methods */}
            <Text style={styles.header}>Payment methods</Text>

            <Card style={[styles.card, selectedPayment === "credit" && styles.selectedCard]}>
                <TouchableOpacity onPress={() => setSelectedPayment("credit")} style={styles.cardContent}>
                    <Image source={require("../assets/images/SmartImg.png")} />
                    <View style={styles.paymentDetails}>
                        <Text style={styles.paymentText}>Credit card</Text>
                        <Text style={styles.cardNumber}>5105 **** **** 0505</Text>
                    </View>
                    <RadioButton
                        value="credit"
                        status={selectedPayment === "credit" ? "checked" : "unchecked"}
                        onPress={() => setSelectedPayment("credit")}
                    />
                </TouchableOpacity>
            </Card>

            <Card style={[styles.card, selectedPayment === "debit" && styles.selectedCard]}>
                <TouchableOpacity onPress={() => setSelectedPayment("debit")} style={styles.cardContent}>
                    <Image source={require("../assets/images/Visa.png")} style={styles.cardLogo} />

                    <View style={styles.paymentDetails}>
                        <Text style={styles.paymentText}>Debit card</Text>
                        <Text style={styles.cardNumber}>3566 **** **** 0505</Text>
                    </View>
                    <RadioButton
                        value="debit"
                        status={selectedPayment === "debit" ? "checked" : "unchecked"}
                        onPress={() => setSelectedPayment("debit")}
                    />
                </TouchableOpacity>
            </Card>

            {/* Save Card Option */}
            <View style={styles.saveCardContainer}>
                <Switch value={saveCard} onValueChange={setSaveCard} />
                <Text style={styles.saveCardText}>Save card details for future payments</Text>
            </View>

            {/* Pay Now Button */}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={styles.footer}>
                    <Text style={styles.totalPrice}>Total price</Text>
                    <Text style={styles.price}>$18.19</Text>
                </View>
                <TouchableOpacity style={styles.payButton} onPress={() => setIsModal(true)}>
                    <Text style={styles.payButtonText}>Pay Now</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={isModal} transparent>
                <View style={styles.MOdalcontainer}>
                    <View style={styles.card2}>
                        <View style={styles.iconContainer}>
                         <Image style={styles.Right} source={require('./../assets/images/Right.png')} />
                        </View>
                        <Text style={styles.title}>Success !</Text>
                        <Text style={styles.message}>Your payment was successful.{"\n"}A receipt for this purchase has been sent to your email.</Text>
                        <TouchableOpacity onPress={() => setIsModal(false)} style={styles.button}>
                            <Text style={styles.buttonText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
    },
    summary: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    text: {
        fontSize: 16,
        color: "#444",
    },
    total: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        borderTopWidth: 1,
        paddingTop: 10,
        borderColor: "#ddd",
    },
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    deliveryTime: {
        fontSize: 14,
        color: "#666",
        marginBottom: 15,
    },
    card: {
        marginVertical: 8,
        padding: 15,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#f7f7f7",

    },
    selectedCard: {
        backgroundColor: "#2e1e1e",
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    paymentDetails: {
        flex: 1,
        marginLeft: 15,
    },
    paymentText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    cardNumber: {
        fontSize: 14,
        color: "#777",
    },
    saveCardContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    saveCardText: {
        marginLeft: 10,
        fontSize: 14,
        color: "#333",
    },
    footer: {
        justifyContent: "space-between",
        marginVertical: 15,
    },
    totalPrice: {
        fontSize: 12,
        color: "#444",
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#b12704",
    },
    payButton: {
        justifyContent: "center",
        backgroundColor: "#2e1e1e",
        padding: 15,
        alignItems: "center",
        borderRadius: 10,
    },
    payButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    cardLogo: {
        height: 33,
        width: 83
    },
    MOdalcontainer: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card2: {
        width: '85%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    iconContainer: {
        marginBottom: 20,
        borderRadius: 50,
        color: red200,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E53935',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#757575',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#E53935',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    Right: {
        height: 100,
        width: 100,
    },
});

export default PaymentScreen;