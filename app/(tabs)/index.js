import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Search, Sliders, Plus, Heart, Home, User, MessageCircle} from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const categories = ['All', 'Combos', 'Sliders', 'Chicken'];
const burgers = [
  {
    id: 1,
    name: 'Cheeseburger',
    description: "Wendy's Burger",
    rating: 4.9,
    image: require('../../assets/images/image 6.png'),
    liked: false
  },
  {
    id: 2,
    name: 'Hamburger',
    description: 'Veggie Burger',
    rating: 4.8,
    image: require('../../assets/images/image 1.png'),
    liked: false
  },
  {
    id: 3,
    name: 'Hamburger',
    description: 'Chicken Burger',
    rating: 4.6,
    image: require('../../assets/images/image 4.png'),
    liked: false
  },
  {
    id: 4,
    name: 'Hamburger',
    description: 'Fried Chicken Burger',
    rating: 4.5,
    image: require('../../assets/images/Group 20.png'),
    liked: false
  }
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState('home');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [likedItems, setLikedItems] = React.useState(
    burgers.reduce((acc, burger) => {
      acc[burger.id] = burger.liked;
      return acc;
    }, {})
  );

  const toggleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Foodgo</Text>
            <Text style={styles.subtitle}>Order your favourite food!</Text>
          </View>
          <Image
            source={require('../../assets/images/Mask group.png')} 
            style={styles.avatar}
          />
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#9B9B9B"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Sliders color="white" size={20} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.burgersGrid}>
          {burgers.map((burger) => (
            <TouchableOpacity 
              key={burger.id} 
              style={styles.burgerCard}
              onPress={() => router.push(`/product/${burger.id}`)}
            >
              <TouchableOpacity 
                style={styles.likeButton}
                onPress={() => toggleLike(burger.id)}
              >
                <Heart 
                  color={likedItems[burger.id] ? '#FF6B5C' : '#9B9B9B'} 
                  fill={likedItems[burger.id] ? '#FF6B5C' : 'none'}
                  size={20}
                />
              </TouchableOpacity>
              <Image 
                source={burger.image} 
                style={styles.burgerImage} 
                resizeMode="cover"
              />
              <Text style={styles.burgerName}>{burger.name}</Text>
              <Text style={styles.burgerDescription}>{burger.description}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>★ {burger.rating}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <View style={styles.bottomNavigationCurve} />
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/(tabs)/splash")}>
          <Home color="black" size={24} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('profile')}
        >
          <User 
            color={activeTab === 'profile' ?'white' : 'black'} 
            size={24}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.centerButton}>
          <Plus color="#FF6B5C" size={24} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('chat')}
        >
          <MessageCircle 
            color={activeTab === 'chat' ? 'white' : 'black'} 
            size={24}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('favorites')}
        >
          <Heart 
            color={activeTab === 'favorites' ? 'white' : 'black'} 
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 60, // Adjust to prevent content from being hidden behind nav bar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 60,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#9B9B9B',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    fontFamily: 'Poppins-Regular',
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FF6B5C',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  categoryButtonActive: {
    backgroundColor: '#FF6B5C',
  },
  categoryText: {
    fontFamily: 'Poppins-Regular',
    color: '#9B9B9B',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  burgersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  burgerCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  likeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
  },
  burgerImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  burgerName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginBottom: 5,
  },
  burgerDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9B9B9B',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#FF6B5C',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // Slightly increased height
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FF6B5C',
    borderTopLeftRadius: 30, // Increased border radius
    borderTopRightRadius: 30, // Increased border radius
    overflow: 'hidden', // Important for the slide-cut effect
  },
  bottomNavigationCurve: {
    position: 'absolute',
    top: -40, // Adjust this to control the depth of the curve
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: 'white',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  centerButton: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: -30, // Raised higher
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 20,
  },
});