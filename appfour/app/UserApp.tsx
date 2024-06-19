import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const fJobs = [
  { id: '1', text: 'Software Engineer', subtext: 'Facebook', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '2', text: 'AI Developer', subtext: 'Google', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '3', text: 'Web Developer', subtext: 'Sakai', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '5', text: 'Bank Operator', subtext: 'Absa', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '6', text: 'Database Developer', subtext: 'Facebook', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '7', text: 'Data Analyst', subtext: 'Cisco', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '8', text: 'CyberSecurity Analyst', subtext: 'Cisco', image: 'https://reactnative.dev/img/tiny_logo.png' },
];

const pJobs = [
  { id: '1', text: 'Air Cook' },
  { id: '2', text: 'Painter' },
  { id: '3', text: 'Car Mechanic' },
  { id: '4', text: 'Cleaner' },
  { id: '5', text: 'School Teacher' },
  { id: '6', text: 'Receptionist' },
  { id: '7', text: 'Project Launcher' },
  { id: '8', text: 'Code Specialist' },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.categoryTextContainer}>
        <Text style={styles.categoryText}>{item.text}</Text>
        <Text style={styles.categorySubText}>{item.subtext}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.popularJobItem}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Nathan Attoh</Text>
        <Image source={require('../tiny_logo.png')} style={styles.headerImage} />
      </View>
      <View style={styles.miniHeader}>
        <Text>attohnathanan@gmail.com</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search a job or position"
          placeholderTextColor="rgba(0,0,0,0.4)" // Transparent gray color
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name="options-outline" size={20} color="#FFFFFF"/>
        </TouchableOpacity>
      </View>

      <View style={styles.featuredJobsHeader}>
        <Text style={styles.subheading}>Featured Jobs</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.horizontalList}>
        <FlatList
          data={fJobs}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>

      <View style={styles.popularJobsHeader}>
        <Text style={styles.subheading}>Popular Jobs</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={pJobs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.popularJobsList}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
    marginTop: 50,
  },
headerImage: { 

  width: 54, 
  height: 54,
  borderRadius: 30,

},

  miniHeader: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
    height: 50,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    color: '#000000', // Text color of the input
  },
  searchButton: {
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  popularJobsList: {
    width: '100%',
  },
  popularJobItem: {
    padding: 10,
    fontSize: 18,
    height: 74, // Adjusted height for the popular job cards
    width: 327, // Adjusted width for the popular job cards
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  horizontalList: {
    maxHeight: 192,
    marginBottom: 16,
  },
  categoryItem: {
    width: 280, // Adjusted width for the featured job card
    height: 192,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
  },
  categoryTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  categorySubText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  popularJobsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  featuredJobsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  seeAllButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  seeAllText: {
    color: '#666', // Light gray color for see all text
    fontSize: 12, // Smaller font size
  },
});
