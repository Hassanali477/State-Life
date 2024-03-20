import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import {Calendar} from 'react-native-calendars';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const iconSize = 30;

const PolicyInsights = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [selectRelationshipStatus, setSelectRelationshipStatus] = useState('');
  const [selectRelationshipModalVisible, setSelectRelationshipModalVisible] =
    useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [addBeneficiaryVisible, setAddBeneficiaryVisible] = useState(false);

  const selectRelationship = [
    'Husband',
    'Wife',
    'Son',
    'Daughter',
    'Son-in-Law',
    'Daughter-in-Law',
    'Brother',
    'Sister',
    'Brother-in-Law',
    'Sister-in-Law',
    'Mother',
    'Father',
  ];
  const closeModal = () => {
    setModalVisible(false);
    setSelectRelationshipModalVisible(false);
  };
  const openSelectRelationshipModal = () => {
    setSelectRelationshipModalVisible(true);
  };

  const selectModalValue = (key, option) => {
    switch (key) {
      case 'relationship':
        setSelectRelationshipStatus(option);
        setSelectRelationshipModalVisible(false);
        break;
      default:
        break;
    }
  };
  const closeCalendar = () => {
    setShowCalendar(false);
  };
  const openCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const changeDOB = day => {
    setDob(day.dateString);
    setShowCalendar(false);
  };
  const openAddBeneficiaryForm = () => {
    setAddBeneficiaryVisible(true);
  };

  const closeAddBeneficiaryForm = () => {
    setAddBeneficiaryVisible(false);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/Images/policyBackground.png')}
        resizeMode="contain"
        style={{
          width: screenWidth,
          height: screenWidth * 0.6,
          marginTop: screenHeight / 5.5,
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => openAddBeneficiaryForm()}>
          <Image
            source={require('../Assets/Images/plus.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              top: 46,
              left: 40,
            }}
          />
          <Text
            style={[
              styles.button,
              {marginTop: 30, color: '#1F93D1', borderStyle: 'dashed'},
            ]}>
            Add Beneficiary
          </Text>
        </TouchableOpacity>
        {/* {addBeneficiaryVisible && ( */}
        <Modal
          isVisible={addBeneficiaryVisible}
          onBackdropPress={closeAddBeneficiaryForm}
          style={styles.modal}
          animationIn="zoomInDown"
          animationOut="zoomOutUp">
          <View style={styles.inputFieldsContainer}>
            <View style={styles.headingText}>
              <Text style={styles.formHeading}>Add Beneficiary</Text>
              <TouchableOpacity onPress={closeAddBeneficiaryForm}>
                <Image
                  source={require('../Assets/Images/cross.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.formHeadingText}>Beneficiary Data</Text>
            <TextInput
              placeholder="First Name"
              style={styles.inputField}
              placeholderTextColor="#ccc"
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
            <TextInput
              placeholder="Last Name"
              style={styles.inputField}
              placeholderTextColor="#ccc"
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
            <TouchableWithoutFeedback onPress={closeCalendar}>
              <View style={styles.dobContainer}>
                <TextInput
                  placeholder="D - O - B"
                  style={styles.inputField}
                  placeholderTextColor="#ccc"
                  editable={false}
                  value={dob}
                />
                <TouchableOpacity
                  onPress={() => openCalendar()}
                  style={styles.calendarButton}>
                  <Image
                    source={require('../Assets/Images/calendar.png')}
                    style={styles.calendarIcon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
            {showCalendar && (
              <View style={styles.calendarContainer}>
                <ScrollView
                  horizontal={true} // Enable horizontal scrolling
                  showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                >
                  <Calendar
                    style={styles.calendar}
                    markedDates={{
                      [dob]: {selected: true, selectedColor: '#1F93D1'},
                    }}
                    onDayPress={changeDOB}
                  />
                </ScrollView>
              </View>
            )}
            <TextInput
              placeholder="Email"
              style={styles.inputField}
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => openSelectRelationshipModal()}>
                <TextInput
                  placeholder="Select Relationship"
                  style={[styles.inputField, {marginLeft: 10}]} // Apply halfWidth style
                  placeholderTextColor="#ccc"
                  editable={false}
                  value={selectRelationshipStatus}
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
              isVisible={selectRelationshipModalVisible}
              onBackdropPress={closeModal}
              animationIn="zoomInDown"
              animationOut="zoomOutUp"
              style={[styles.modal, {marginTop: 450}]}>
              <View style={styles.modalContent}>
                <ScrollView>
                  {selectRelationship.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.optionItem}
                      onPress={() => selectModalValue('relationship', option)}>
                      <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </Modal>
            <TouchableOpacity>
              <Text style={[styles.button, {width: 360, borderStyle: 'solid'}]}>
                Add
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf: 'flex-start', marginLeft: 90}}
              onPress={closeAddBeneficiaryForm}>
              <Text style={styles.buttonCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
            marginTop: 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
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
    </View>
  );
};

export default PolicyInsights;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    // flexDirection: 'row',
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'black',
    padding: 18,
    width: 250,
    textAlign: 'center',
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
    borderColor: '#1F93D1',
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 20,
    fontSize: 16,
  },
  buttonCancel: {
    color: '#1F93D1',
    padding: 18,
    width: 100,
    textAlign: 'center',
    borderRadius: 10,
    margin: 10,
    borderColor: '#1F93D1',
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 20,
    fontSize: 16,
  },
  inputFieldsContainer: {
    flexDirection: 'column',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // width:screenWidth / 1,
    marginLeft: 40,
    marginRight: 40,
  },
  inputField: {
    borderColor: 'black',
    width: 370,
    borderRadius: 50,
    padding: 17,
    margin: 10,
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
    backgroundColor: '#e8f4fa',
  },
  headingText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 365,
    marginHorizontal: 100,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  formHeading: {
    color: '#004fb6',
    fontWeight: 'bold',
    fontSize: 20,
  },
  formHeadingText: {
    color: '#358AD3',
    alignSelf: 'flex-start',
    marginLeft: 110,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  modal: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 22,
    // marginTop:200
    // maxHeight: '50%',
  },
  optionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: screenWidth,
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
  dobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 75,
  },
  calendarContainer: {
    position: 'absolute',
    width: screenWidth - 100, // Full width
    height: 320, // Adjust the height as needed
    marginTop: 75,
    marginLeft: 60,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 2, // Ensure the calendar appears above other components
  },
  calendar: {
    width: 320, // Full width
    height: 350, // Full height
    borderRadius: 20, // Border radius of 20 pixels
  },
  calendarButton: {
    width: iconSize,
    height: iconSize,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1,
    // Ensure the calendar button appears above the calendar
  },
  calendarIcon: {
    height: 20,
    width: 20,
  },
});
