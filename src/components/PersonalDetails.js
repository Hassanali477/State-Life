import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';

const screenWidth = Dimensions.get('screen').width;
const iconSize = 30;

const PersonalDetails = () => {
  const [firstName, setFirstName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [profession, setProfession] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [dob, setDob] = useState('');
  const [issueDateVisible, setIssueDateVisible] = useState(false);
  const [issueDate, setIssueDate] = useState('');
  const [cnicExpiryDateVisible, setCnicExpireDateVisible] = useState(false);
  const [cnicExpiryData, setCnicExpireData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOptions, setModalOptions] = useState([]);
  const [maritalStatusModalVisible, setMaritalStatusModalVisible] =
    useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [selectedGenderStatus, setSelectedGenderStatus] = useState('');
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('');
  const [dataProfession, setDataProfession] = useState([
    'Option 1',
    'Option 2',
  ]);

  const maritalStatusOptions = ['Single', 'Married', 'Divorced', 'Widowed'];

  const genderOptions = ['Male', 'Female'];

  const openGenderModal = () => {
    setGenderModalVisible(true);
  };
  const openMaritalStatusModal = options => {
    setMaritalStatusModalVisible(true);
  };
  const openCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  const changeDOB = day => {
    if (cnicExpiryDateVisible) {
      setCnicExpireData(day.dateString);
    } else if (issueDateVisible) {
      setIssueDate(day.dateString);
    } else {
      setDob(day.dateString);
    }
    setShowCalendar(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setMaritalStatusModalVisible(false);
    setGenderModalVisible(false);
  };

  const selectModalValue = (key, option) => {
    switch (key) {
      case 'profession':
        setProfession(option); // Set profession to the selected option
        setModalVisible(false);
        break;
      case 'maritalStatus':
        setSelectedMaritalStatus(option);
        setMaritalStatusModalVisible(false);
        break;
      case 'gender':
        setSelectedGenderStatus(option);
        setGenderModalVisible(false);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Details</Text>
      <View style={styles.inputFieldsContainer}>
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
          placeholder="Enter First Name"
          style={styles.inputField}
          placeholderTextColor="#ccc"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          placeholder="Enter Father / Husband Name"
          style={styles.inputField}
          placeholderTextColor="#ccc"
          value={fatherName}
          onChangeText={text => setFatherName(text)}
        />
        <TextInput
          placeholder="Mother Name"
          style={styles.inputField}
          placeholderTextColor="#ccc"
          value={motherName}
          onChangeText={text => setMotherName(text)}
        />
        <View style={styles.inputFieldsContainer}>
          {/* Profession */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => openModal()}>
              <TextInput
                placeholder="Profession"
                style={styles.inputField}
                placeholderTextColor="#ccc"
                value={profession}
                onChangeText={text => setProfession(text)}
                editable={false}
              />
              <Image
                source={require('../Assets/Images/down-arrow.png')}
                style={styles.downArrowIcon}
              />
            </TouchableOpacity>
          </View>
          {/* Modal for Profession */}
          <Modal
            isVisible={modalVisible}
            onBackdropPress={closeModal}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            style={styles.modal}>
            <View style={styles.modalContent}>
              <ScrollView>
                {dataProfession.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionItem}
                    onPress={() => selectModalValue('profession', option)}>
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </Modal>
        </View>
        <View style={styles.rowContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              // justifyContent: 'space-between',
            }}>
            <TextInput
              value={issueDate}
              placeholder="CNIC Issue Date"
              style={styles.halfWidth} // Apply halfWidth style
              placeholderTextColor="#ccc"
              editable={false}
            />
            <TouchableOpacity
              onPress={() => {
                openCalendar();
                setIssueDateVisible(true);
                setCnicExpireDateVisible(false);
              }}
              style={styles.calendarButton}>
              <Image
                source={require('../Assets/Images/calendar.png')}
                style={[styles.calendarIcon, {marginLeft: 25}]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              {showCalendar && (
                <View>
                  <ScrollView
                    horizontal={true} // Enable horizontal scrolling
                    showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                  >
                    {/* <Calendar
                      style={styles.calendar}
                      markedDates={{
                        [dob]: {selected: true, selectedColor: '#1F93D1'},
                      }}
                      onDayPress={changeDOB}
                    /> */}
                  </ScrollView>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={openMaritalStatusModal}>
              <TextInput
                placeholder="Marital Status"
                style={[styles.halfWidth, {marginLeft: 10}]} // Apply halfWidth style
                placeholderTextColor="#ccc"
                editable={false}
                value={selectedMaritalStatus}
              />
              <Image
                source={require('../Assets/Images/down-arrow.png')}
                style={{
                  height: 10,
                  width: 16,
                  position: 'absolute',
                  right: 10,
                  top: 15,
                  marginTop: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <Modal
            isVisible={maritalStatusModalVisible}
            onBackdropPress={closeModal}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            style={styles.modal}>
            <View style={styles.modalContent}>
              <ScrollView>
                {maritalStatusOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionItem}
                    onPress={() => selectModalValue('maritalStatus', option)}>
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </Modal>
        </View>
        <View style={styles.rowContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              value={cnicExpiryData}
              placeholder="CNIC Expiry Date"
              style={styles.halfWidth} // Apply halfWidth style
              placeholderTextColor="#ccc"
              editable={false}
            />
            <TouchableOpacity
              onPress={() => {
                openCalendar(), setCnicExpireDateVisible(true);
                setIssueDateVisible(false);
              }}
              style={styles.calendarButton}>
              <Image
                source={require('../Assets/Images/calendar.png')}
                style={[styles.calendarIcon, {marginLeft: 25}]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              {showCalendar && (
                <View>
                  <ScrollView
                    horizontal={true} // Enable horizontal scrolling
                    showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                  >
                    {/* <Calendar
                      // style={styles.calendar}
                      markedDates={{
                        [dob]: {selected: true, selectedColor: '#1F93D1'},
                      }}
                      onDayPress={changeDOB}
                    /> */}
                  </ScrollView>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => openGenderModal()}>
              <TextInput
                placeholder="Gender"
                style={[styles.halfWidth, {marginLeft: 10}]} // Apply halfWidth style
                placeholderTextColor="#ccc"
                editable={false}
                value={selectedGenderStatus}
              />
              <Image
                source={require('../Assets/Images/down-arrow.png')}
                style={{
                  height: 10,
                  width: 16,
                  position: 'absolute',
                  right: 10,
                  top: 15,
                  marginTop: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <Modal
            isVisible={genderModalVisible}
            onBackdropPress={closeModal}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            style={styles.modal}>
            <View style={styles.modalContent}>
              <ScrollView>
                {genderOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionItem}
                    onPress={() => selectModalValue('gender', option)}>
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
            marginRight: 20,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
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
      </View>
    </View>
  );
};

export default PersonalDetails;

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
  inputFieldsContainer: {
    flexDirection: 'column',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  dobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarButton: {
    width: iconSize,
    height: iconSize,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1, // Ensure the calendar button appears above the calendar
  },
  calendarIcon: {
    height: 20,
    width: 20,
  },
  calendarContainer: {
    position: 'absolute',
    width: screenWidth - 100, // Full width
    height: 320, // Adjust the height as needed
    marginTop: 75,
    marginLeft: 50,
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10, // Add margin bottom for spacing
  },
  halfWidth: {
    width: 180, // Adjusted width for proper layout
    borderRadius: '50%',
    marginTop: 10,
    borderColor: 'black',
    borderRadius: 50,
    padding: 10,
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
    backgroundColor: '#e8f4fa',
    alignItems: 'center',
  },
  previousButton: {
    color: '#1F93D1',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
    textAlign: 'center',
    marginHorizontal: 10,
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
});
