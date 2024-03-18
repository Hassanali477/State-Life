import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainFormScreen from './src/MainFormScreen';
import SwiperScreen from './src/SwiperScreen';
import PolicyServicing from './src/PolicyServicing';
import LifeInsurance from './src/LifeInsurance';
import HealthInsurrance from './src/HealthInsurrance';
const App = () => {
  return (
    <View style={styles.Container}>
      {/* <SwiperScreen /> */}
      {/* <MainFormScreen /> */}
      {/* <PolicyServicing /> */}
      <LifeInsurance />
      {/* <HealthInsurrance /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
