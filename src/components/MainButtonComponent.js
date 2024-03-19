import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const MainButtonComponent = ({selectValue}) => {
  const [selectedButton, setSelectedButton] = useState('Life Insurrance');

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
            selectedButton === 'Life Insurrance' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Life Insurrance')}>
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Life Insurrance' && styles.selectedText,
            ]}>
            LIFE INSURANCE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            selectedButton === 'Health Insurrance' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('Health Insurrance')}>
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Health Insurrance' && styles.selectedText,
            ]}>
            HEALTH INSURANCE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainButtonComponent;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#1F93D1',
    borderRadius: 50,
    width: '95%',
    padding: 10,
    gap: 5,
    marginBottom: 20,
  },
  button1: {
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
    alignItems: 'center',
    width: 180,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
    padding: 5,
  },
  selectedButton: {
    backgroundColor: 'white',
  },
  selectedText: {
    color: 'grey',
  },
});



