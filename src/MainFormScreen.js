import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MainSelector from './components/MainSelector';
import PersonalDetails from './components/PersonalDetails';
import ContactDetails from './components/ContactDetails';
import PolicyInsights from './components/PolicyInsights';

const MainFormScreen = props => {
  const [selectedValue, setSelectedValue] = useState('Personal Details');
  const selectValue = item => {
    setSelectedValue(item);
  };
  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        <MainSelector selectValue={item => selectValue(item)} />
        {selectedValue == 'Personal Details' && <PersonalDetails />}
        {selectedValue == 'Contact Details' && <ContactDetails />}
        {selectedValue == 'Policy Insights' && <PolicyInsights />}
      </View>
    </ScrollView>
  );
};

export default MainFormScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
