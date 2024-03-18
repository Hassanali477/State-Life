import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import LifeInsuranceFlatlist from './components/LifeIssuranceFlatlist';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const LifeInsurance = () => {
  const data = [
    {
      id: '1',
      heading: 'Mahfooz Plan',
      subheading: 'Accidental & Indemnity Product (300k Coverage)',
      buttonTitle: 'Accidental Death',
      orderNo: '1710577337',
      paidAmount: 'PKR 363',
      orderDate: '16-March-2024',
      status: 'issued',
    },
    {
      id: '2',
      heading: 'Mahfooz Plan',
      subheading: 'Accidental & Indemnity Product (160k Coverage)',
      buttonTitle: 'Accidental Hybrid',
      orderNo: '17105772137',
      paidAmount: 'PKR 550',
      orderDate: '15-Feb-2024',
      status: 'pending',
    },
    {
      id: '3',
      heading: 'Mahfooz Plan',
      subheading: 'Accidental & Indemnity Product (80k Coverage)',
      buttonTitle: 'Accidental Death',
      orderNo: '1710547337',
      paidAmount: 'PKR 363',
      orderDate: '1-Sep-2024',
      status: 'issued',
    },
    {
      id: '4',
      heading: 'Mahfooz Plan',
      subheading: 'Accidental & Indemnity Product (200k Coverage)',
      buttonTitle: 'Accidental Hybrid',
      orderNo: '1710577337',
      paidAmount: 'PKR 463',
      orderDate: '10-March-2024',
      status: 'issued',
    },

    {
      id: '5',
      heading: 'Mahfooz Plan',
      subheading: 'Accidental & Indemnity Product (180k Coverage)',
      buttonTitle: 'Accidental Death',
      orderNo: '1710577337',
      paidAmount: 'PKR 863',
      orderDate: '16-March-2024',
      status: 'pending',
    },
  ];
  const renderItem = ({item}) => {
    return <LifeInsuranceFlatlist item={item} />;
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default LifeInsurance;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    // alignItems: 'center',
  },
});
