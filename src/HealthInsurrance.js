import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import HealthInsurranceFlatlist from './components/HealthInsurranceFlatlist';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const LifeInsurance = () => {
  const data = [
    {
      id: '1',
      heading: 'Sehat Zindagi Plan',
      subheading: 'Basic Hospitalization Cover',
      buttonTitle: 'Plan B',
      policyNo: '06-5-5646545465',
      paidAmount: 'PKR 1,363',
      policyDate: '16-March-2024',
      status: 'cancelled',
    },
    {
      id: '2',
      heading: 'Sehat Zindagi Plan',
      subheading: 'Basic Hospitalization Cover',
      buttonTitle: 'Plan A',
      policyNo: '06-5-5646545465',
      paidAmount: 'PKR 3,363',
      policyDate: '16-March-2024',
      status: 'pending',
    },
    {
      id: '3',
      heading: 'Sehat Zindagi Plan',
      subheading: 'Basic Hospitalization Cover',
      buttonTitle: 'Plan B',
      policyNo: '06-5-5646545465',
      paidAmount: 'PKR 2,363',
      policyDate: '16-March-2024',
      status: 'cancelled',
    },
    {
      id: '4',
      heading: 'Sehat Zindagi Plan',
      subheading: 'Basic Hospitalization Cover',
      buttonTitle: 'Plan A',
      policyNo: '06-5-5646545465',
      paidAmount: 'PKR 5,363',
      policyDate: '16-March-2024',
      status: 'issued',
    },
    {
      id: '5',
      heading: 'Sehat Zindagi Plan',
      subheading: 'Basic Hospitalization Cover',
      buttonTitle: 'Plan B',
      policyNo: '06-5-5646545465',
      paidAmount: 'PKR 5,363',
      policyDate: '16-March-2024',
      status: 'cancelled',
    },
    {
      id: '6',
      heading: 'Sehat Zindagi Plan',
      subheading: 'Basic Hospitalization Cover',
      buttonTitle: 'Plan B',
      policyNo: '06-5-5646545465',
      paidAmount: 'PKR 5,363',
      policyDate: '16-March-2024',
      status: 'pending',
    },
  ];
  const renderItem = ({item}) => {
    return <HealthInsurranceFlatlist item={item} />;
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
