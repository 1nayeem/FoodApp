import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Search, Minus, Plus } from 'lucide-react-native';

const products = {
  1: {
    id: 1,
    name: 'Cheeseburger',
    description: "The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.",
    rating: 4.9,
    time: '26 mins',
    price: 8.24,
    image: require('../../../assets/images/GroupCheese.png')  
  },
  2: {
    id: 2,
    name: 'Hamburger Veggie Burger',
    description: 'Enjoy our delicious Hamburger Veggie Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes, and tangy pickles, all served on a soft, toasted bun.',
    rating: 4.8,
    time: '14 mins',
    price: 9.99,
    image: require('../../../assets/images/GroupHamburger.png') 
  },
  3: {
    id: 3,
    name: 'Hamburger Chicken Burger',
    description: 'Our Chicken Burger is a delicious and healthier alternative to traditional beef burgers, perfect for those looking for a lighter meal option. Try it today and experience the amazing flavors of our Hamburger Chicken Burger!',
    rating: 4.6,
    time: '42 mins',
    price: 12.48,
    image: require('../../../assets/images/GroupChickenBurger.png')  
  },
  4: {
    id: 4,
    name: 'Fried Chicken Burger',
    description: 'Indulge in our crispy and savory Fried Chicken Burger, made with a juicy chicken patty, hand-breaded and deep-fried to perfection, served on a warm bun with lettuce, tomato, and a creamy sauce.',
    rating: 4.5,
    time: '14 mins',
    price: 26.99,
    image: require('../../../assets/images/GroupFried.png')  
  }
};

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const product = products[id];
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return null;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <Search color="#000" size={24} />
        </TouchableOpacity>
      </View>

      <Image 
        source={product.image} 
        style={styles.image} 
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>★ {product.rating}</Text>
          <Text style={styles.time}> - {product.time}</Text>
        </View>

        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.optionsContainer}>
          <View style={styles.optionSection}>
            <Text style={styles.optionTitle}>Spicy</Text>
            <View style={styles.spicySlider}>
              <Text style={styles.spicyLabel}>Mild</Text>
              <View style={styles.sliderBar}>
                <View style={styles.sliderFill} />
              </View>
              <Text style={styles.spicyLabel}>Hot</Text>
            </View>
          </View>

          <View style={styles.optionSection}>
            <Text style={styles.optionTitle}>Portion</Text>
            <View style={styles.quantityControl}>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={() => setQuantity(q => Math.max(1, q - 1))}
              >
                <Minus size={20} color="#000" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={() => setQuantity(q => q + 1)}
              >
                <Plus size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <TouchableOpacity style={styles.priceHighlight}>
              <Text style={styles.priceHighlightText}>${(product.price * quantity).toFixed(2)}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>ORDER NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 450,
    resizeMode: 'cover',
    top: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rating: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#FF4B3A',
  },
  time: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#9B9B9B',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#4A4A4A',
    lineHeight: 22,
    marginBottom: 20,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionSection: {
    marginBottom: 20,
  },
  optionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginBottom: 10,
  },
  spicySlider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spicyLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9B9B9B',
  },
  sliderBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 10,
    borderRadius: 2,
  },
  sliderFill: {
    width: '30%',
    height: '100%',
    backgroundColor: '#FF4B3A',
    borderRadius: 2,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceHighlight: {
    backgroundColor: '#FF4B3A', // Bright red background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, // Rounded corners for a box effect
    shadowColor: '#FF4B3A', // Shadow to give depth
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  priceHighlightText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  orderButton: {
    backgroundColor: '#4A4A4A',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
  },
  orderButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});