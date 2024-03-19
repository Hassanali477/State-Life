import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RenderPolicy from './components/PolicyServicingFlatlist';
// import RenderPolicy from '../../../../components/selfServicing';
// import appStyles from '../../../appStyles';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const data = [
  {
    id: '1',
    heading: 'Sehat Zindagi Plan',
    subheading: 'Basic Hospitalization Cover',
    policyNo: '05-24-201-000003',
    policyDate: '2024-03-14',
    status: 'issued',
  },
  {
    id: '2',
    heading: 'Sehat Zindagi Plan',
    subheading: 'Basic Hospitalization Cover',
    policyNo: '05-24-201-000003',
    policyDate: '2024-03-14',
    status: 'pending',
  },
  {
    id: '3',
    heading: 'Sehat Zindagi Plan',
    subheading: 'Basic Hospitalization Cover',
    policyNo: '05-24-201-000003',
    policyDate: '2024-03-14',
    status: 'pending',
  },
  {
    id: '4',
    heading: 'Sehat Zindagi Plan',
    subheading: 'Basic Hospitalization Cover',
    policyNo: '05-24-201-000003',
    policyDate: '2024-03-14',
    status: 'issued',
  },

  {
    id: '5',
    heading: 'Sehat Zindagi Plan',
    subheading: 'Basic Hospitalization Cover',
    policyNo: '05-24-201-000003',
    policyDate: '2024-03-14',
    status: 'pending',
  },
];
const PolicyServicing = () => {
  const renderItem = ({item}) => {
    return <RenderPolicy item={item} />;
  };
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.headingPolicy}>Policy Listing</Text>
      <View style={styles.policyListingContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.textInputSearch}
          placeholderTextColor={'#ccc'}
          scrollEnabled={true}
        />
        <TouchableOpacity>
          <Text style={styles.searchButton}>Policy Insights</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.headingPolicy}>Policy Servicing</Text>
        <FlatList
          alwaysBounceVertical={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{width: '100%', marginVertical: 6, flexGrow: 1, flex: 1}}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: screenWidth * 0.4,
            width: '100%',
          }}
        />
    </View>
  );
};
export default PolicyServicing;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    // alignItems: 'center',
  },
  headingPolicy: {
    marginTop: 15,
    marginLeft: 30,
    color: '#3A649F',
    fontSize: 24,
    fontWeight: '800',
  },
  policyListingContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
  },
  textInputSearch: {
    width: 250,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'white',
    elevation: 3,
    marginRight: 7,
    color: 'grey',
  },
  searchButton: {
    width: 120,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#3A649F',
    textAlign: 'center',
    padding: 10,
    fontSize: 12,
    marginRight: 15,
    borderRadius: 50,
  },
});
