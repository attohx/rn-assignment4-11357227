import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const fJobs = [
  { id: '1', text: 'Software Engineer', subtext: 'Facebook', image: 'https://reactnative.dev/img/tiny_logo.png', price: '$120,000', location: 'Menlo Park, CA' },
  { id: '2', text: 'AI Developer', subtext: 'Google', image: 'https://reactnative.dev/img/tiny_logo.png', price: '$135,000', location: 'Mountain View, CA' },
  { id: '3', text: 'Web Developer', subtext: 'Sakai', image: 'https://reactnative.dev/img/tiny_logo.png', price: '$100,000', location: 'Remote' },
  { id: '5', text: 'Bank Operator', subtext: 'Absa', image: 'https://reactnative.dev/img/tiny_logo.png', price: '$80,000', location: 'Johannesburg, SA' },
  { id: '6', text: 'Database Developer', subtext: 'Facebook', image: 'https://reactnative.dev/img/tiny_logo.png', price: '$110,000', location: 'Menlo Park, CA' },
  { id: '7', text: 'Data Analyst', subtext: 'Cisco', image: 'https://reactnative.dev/img/tiny_logo.png', price: '$95,000', location: 'San Jose, CA' },
  { id: '8', text: 'CyberSecurity Analyst', subtext: 'Cisco', image: 'https://reactnative.dev/img/tiny_logo.png', price: '$105,000', location: 'San Francisco, CA' },
];

const pJobs = [
  { id: '1', text: 'Air Cook', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '2', text: 'Painter', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '3', text: 'Car Mechanic', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '4', text: 'Cleaner', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '5', text: 'School Teacher', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '6', text: 'Receptionist', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '7', text: 'Project Launcher', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '8', text: 'Code Specialist', image: 'https://reactnative.dev/img/tiny_logo.png' },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <View style={styles.categoryTextContainer}>
        <Text style={styles.categoryText}>{item.text}</Text>
        <Text style={styles.categorySubText}>{item.subtext}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.priceText}>{item.price}</Text>
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderPopularJobItem = ({ item }) => (
    <View style={styles.popularJobItem}>
      <Image source={{ uri: item.image }} style={styles.popularJobImage} />
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
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name="options-outline" size={20} color="#000000"/>
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
        renderItem={renderPopularJobItem}
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
    backgroundColor: '#f7f0e8',
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
    borderRadius: 27,
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
    color: '#000000',
  },
  searchButton: {
    height: 50,
    backgroundColor: '#ffff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  popularJobsList: {
    width: '100%',
  },
  popularJobItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 74,
    width: 327,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  popularJobImage: {
    width: 40,
    height:40,
    borderRadius: 10,
    marginRight: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 192,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  categoryTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  categoryImage: {
    width: 55,
    height: 55,
    borderRadius: 25,
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
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  priceText: {
    fontSize: 14,
    color: '#333',
  },
  locationText: {
    fontSize: 14,
    color: '#333',
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
    color: '#666',
    fontSize: 12,
  },
});
