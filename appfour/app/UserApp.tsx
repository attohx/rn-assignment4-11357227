import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library


const categories = [
  { id: '1', text: 'Exercise', subtext: '12 tasks', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '2', text: 'Study', subtext: '12 tasks', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '3', text: 'AI Development', subtext: '12 tasks', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '5', text: 'Node Curation', subtext: '12 tasks', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '6', text: 'Coding Resources', subtext: '12 tasks', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '7', text: 'Site Resources', subtext: '12 tasks', image: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '8', text: 'iOS Resources', subtext: '12 tasks', image: 'https://reactnative.dev/img/tiny_logo.png' },
];

const data = [
  { id: '1', text: 'Mobile Development' },
  { id: '2', text: 'Web Development' },
  { id: '3', text: 'Push Ups' },
  { id: '4', text: 'HR Meeting' },
  { id: '5', text: 'Operation: Get Together' },
  { id: '6', text: 'Fix The Country Initiative' },
  { id: '7', text: 'Project Launch' },
  { id: '8', text: 'Code Readjustment' },
  { id: '9', text: 'Database Update' },
  { id: '10', text: 'Code Dev Meeting' },
  { id: '11', text: 'Money Matter' },
  { id: '12', text: 'Task Update' },
  { id: '13', text: 'Movie Database Update' },
  { id: '14', text: 'Site upgrade' },
  { id: '15', text: 'Finance Database Readjustment' },
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
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Nathan Attoh</Text>
        {/*<Image source={require('../assets/images/profile.png')} style={styles.headerImage} />*/}
      </View>
      <View style={styles.miniHeader}>
        <Text>attohnathanan@gmail.com</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search a job or position"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name="options-outline" size={20} color="#FFFFFF"/>
        </TouchableOpacity>
      </View>

      <Text style={styles.subheading}>Featured Jobs</Text>

      <View style={styles.container2}>
        <ScrollView horizontal style={styles.horizontalList}>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </View>

      <Text style={styles.subheading}>Popular Jobs</Text>

      <View style={styles.container3}> 
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#f7f0e8',
    marginBottom: 20,
  },
  container2: {
    height: 220,
    width: '100%',
    justifyContent: 'space-between',
  },
  container3: {
    height: 180,
    width: '100%',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
    height: 50,
  },

  searchIcon: {
    position: 'absolute',
    left: 15,
    zIndex: 1,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: -8,
    marginTop: 50,
    width: '100%',
  },
  miniHeader: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  headerImage: {
    marginTop: 10,
    width: 50,
    height: 52,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
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
  },
  searchButton: {
    height: 50,
    backgroundColor: '#F0522F',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  
  list: {
    width: '100%',
    marginBottom: 16,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 128,
    width: 354,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    left: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  horizontalList: {
    paddingVertical: 10,
  },
  categoryItem: {
    width: 186,
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
});
