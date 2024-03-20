import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const ComplaintStatus = () => {
  const data = [
    {
      id: '1',
      sNo: '1',
      cnic: '42301-1415649-9',
      ticketNo: '00000011',
      mobileNo: '03001234567',
      reportedDate: '08-11-2023',
      status: 'Pending',
    },
    {
      id: '2',
      sNo: '2',
      cnic: '42301-1415649-9',
      ticketNo: '00000011',
      mobileNo: '03001234567',
      reportedDate: '08-11-2023',
      status: 'Pending',
    },
    {
      id: '3',
      sNo: '3',
      cnic: '42301-1415649-9',
      ticketNo: '00000011',
      mobileNo: '03001234567',
      reportedDate: '08-11-2023',
      status: 'Pending',
    },
    {
      id: '4',
      sNo: '4',
      cnic: '42301-1415649-9',
      ticketNo: '00000011',
      mobileNo: '03001234567',
      reportedDate: '08-11-2023',
      status: 'Pending',
    },
    {
      id: '5',
      sNo: '5',
      cnic: '42301-1415649-9',
      ticketNo: '00000011',
      mobileNo: '03001234567',
      reportedDate: '08-11-2023',
      status: 'Pending',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.row1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.heading}>Sno:</Text>
          <Text style={styles.value}>{item.sNo}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.heading}>CNIC:</Text>
          <Text style={styles.value}>{item.cnic}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.heading}>Ticket No:</Text>
          <Text style={styles.value}>{item.ticketNo}</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.heading}>Mobile No:</Text>
          <Text style={styles.value}>{item.mobileNo}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.heading}>Reported Date:</Text>
          <Text style={styles.value}>{item.reportedDate}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.heading}>Status:</Text>
          <Text style={[styles.value, {color: '#e0cf1f'}]}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={{paddingBottom: '20%'}}> */}
        <View style={styles.textInput1}>
          <Text style={styles.textInputText}>Search by :</Text>
          <TextInput
            placeholder="_ _ Select One _ _"
            style={styles.inputField}
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={[styles.textInput1, {marginTop: 20}]}>
          <Text style={styles.textInputText}>Ticket No :</Text>
          <TextInput
            placeholder="Enter Ticket No"
            style={styles.inputField}
            placeholderTextColor={'grey'}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.searchButton}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatlist}
        />
      {/* </ScrollView> */}
    </View>
  );
};

export default ComplaintStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textInput1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  inputField: {
    flex: 1,
    height: 55,
    color: 'grey',
    backgroundColor: '#d1dee6',
    borderRadius: 50,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  textInputText: {
    color: '#797979',
    fontSize: 16,
  },
  searchButton: {
    width: 150,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#004FB6',
    textAlign: 'center',
    padding: 14,
    fontSize: 15,
    marginTop: 20,
    borderRadius: 50,
    marginBottom:20,
    marginRight: 45,
  },
  flatlist: {
    marginTop: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  row1: {
    width: '46%',
    marginRight: 10,
  },
  row2: {
    width: '50%',
    // marginLeft: 10,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  value: {
    color: 'grey',
    fontWeight: '600',
    marginBottom: 10,
  },
});
