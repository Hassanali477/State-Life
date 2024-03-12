import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
import Modal from 'react-native-modal';

const ContactDetail = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectCityStatus, setSelectCityStatus] = useState('');
  const [selectCityModalVisible, setSelectCityModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const cityOptions = [
    'Lahore',
    'Islamabad',
    'Faisalabad',
    'Rawalpindi',
    'Multan',
    'Karachi',
    'Peshawar',
    'Quetta',
    'Sargodha',
    'Bahawalpur',
    'Sialkot',
    'Sukkur',
    'Larkana',
    'Sheikhupura',
  ];

  const closeModal = () => {
    setModalVisible(false);
    setSelectCityModalVisible(false);
  };
  const openSelectCityModal = () => {
    setSelectCityModalVisible(true);
    setSelectCityModalVisible(true);
  };

  const selectModalValue = (key, option) => {
    switch (key) {
      case 'city':
        setSelectCityStatus(option);
        setSelectCityModalVisible(false);
        break;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Mobile No."
          style={[styles.inputField, {marginTop: 20}]}
          placeholderTextColor="#ccc"
          value={mobileNo}
          onChangeText={text => setMobileNo(text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.inputField}
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Address"
          style={[styles.inputField, {height: 150, borderRadius: 10}]}
          placeholderTextColor="#ccc"
          value={address}
          onChangeText={text => setAddress(text)}
          multiline={true}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => openSelectCityModal()}>
            <TextInput
              placeholder="Select City"
              style={[styles.inputField, {marginLeft: 10}]} // Apply halfWidth style
              placeholderTextColor="#ccc"
              editable={false}
              value={selectCityStatus}
            />
            <Image
              source={require('../Assets/Images/down-arrow.png')}
              style={{
                height: 10,
                width: 16,
                position: 'absolute',
                right: 20,
                top: 18,
                marginTop: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={selectCityModalVisible}
          onBackdropPress={closeModal}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          style={styles.modal}>
          <View style={styles.modalContent}>
            <ScrollView>
              {cityOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionItem}
                  onPress={() => selectModalValue('city', option)}>
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Modal>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 140,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../Assets/Images/arrow-left.png')}
            style={{height: 18, width: 10, position: 'absolute', left: 30}}
          />
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: '#1F93D1',
              marginHorizontal: 15,
              borderRadius: 50,
              width: 150,
            }}>
            <Text style={styles.previousButton}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              borderWidth: 1.5,
              borderColor: '#1F93D1',
              width: 150,
              // padding:10,
              backgroundColor: '#1F93D1',
            }}>
            <Text style={[styles.previousButton, {color: 'white'}]}>
              Continue
            </Text>
          </TouchableOpacity>
          <Image
            source={require('../Assets/Images/arrow-right.png')}
            style={{height: 16, width: 10, position: 'absolute', right: 18}}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F93D1',
    margin: 10,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 20,
  },
  inputContainer: {
    alignItems: 'center',
  },
  inputField: {
    borderColor: 'black',
    width: 370,
    borderRadius: 50,
    padding: 13,
    margin: 10,
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
    backgroundColor: '#e8f4fa',
  },
  placeholder: {
    color: '#ccc',
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: -5,
  },
  button: {
    backgroundColor: '#1F93D1',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  downArrowIcon: {
    width: 16,
    height: 10,
    // marginLeft: 40
    position: 'absolute',
    right: 20,
    top: 33,
    zIndex: 1, // Ensure the calendar button appears above the calendar
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 22,
    maxHeight: '50%',
  },
  optionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  previousButton: {
    color: '#1F93D1',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
    textAlign: 'center',
    marginHorizontal: 10,
  },
});
