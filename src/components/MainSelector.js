import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MainSelector = ({selectValue}) => {
  const [selectedButton, setSelectedButton] = useState('Personal Details');

  const handleButtonPress = buttonName => {
    setSelectedButton(buttonName);
    selectValue(buttonName);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button1,
            selectedButton === 'Personal Details' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Personal Details')}>
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Personal Details' && styles.selectedText,
            ]}>
            Personal Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            selectedButton === 'Contact Details' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Contact Details')}>
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Contact Details' && styles.selectedText,
            ]}>
            Contact Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            selectedButton === 'Policy Insights' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Policy Insights')}>
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Policy Insights' && styles.selectedText,
            ]}>
            Policy Insights
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainSelector;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#1F93D1',
    borderRadius: 50,
    width: '80%',
    padding: 10,
    gap: 5,
  },
  button1: {
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
    width: 120,
    padding: 5,
  },
  selectedButton: {
    backgroundColor: 'white',
  },
  selectedText: {
    color: 'grey',
  },
});
