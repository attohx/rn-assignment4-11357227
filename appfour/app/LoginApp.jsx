import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    // Add your login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Jobber</Text>
        <Text style={styles.subHeader}>Welcome Back</Text>
        <Text style={styles.subHeader}>Let's Log in. Apply to jobs!</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="black"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/*<Text>Or Continue With</Text>
      {/* Placeholder for icons */}
      {/*<Text>Haven't an Account? Register</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#356899',
  },
  subHeader: {
    fontSize: 12,

  },
  input: {
    height: 52,
    width: 327,
    marginVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#356899',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginTop: 20,
    width: 327,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginForm;