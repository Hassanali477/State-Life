import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const RenderPolicy = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };
  const handleRequestCancellation = () => {
    setModalVisible(false);
  };
  const handleSubmittedRequests = () => {
    setModalVisible(false);
  };

  return (
    <TouchableOpacity onPress={handleModalOpen}>
      <View style={styles.item}>
        <View style={styles.leftContainer}>
          <Text style={styles.heading}>{item.heading}</Text>
          <Text style={styles.subheading}>{item.subheading}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.policyNoText}>Policy No:</Text>
            <Text style={styles.policyNo}>{item.policyNo}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.policyDate}>Policy Date:</Text>
            <Text
              style={[
                styles.policyDate,
                {color: 'grey', marginLeft: 5, fontWeight: 'bold'},
              ]}>
              {item.policyDate}
            </Text>
          </View>
        </View>
        <View style={styles.leftContainer}>{/* Left container content */}</View>
        <View style={styles.rightContainer}>
          <Text style={styles.statusHeading}>Status</Text>
          <View
            style={[
              styles.statusIndicator,
              {
                backgroundColor:
                  item.status === 'issued' ? '#C8E6C9' : '#FFF9C4',
              },
            ]}>
            {/* Image */}
            <TouchableOpacity style={styles.imageContainer}>
              <Image
                source={require('../Assets/Images/blue-arrow.png')}
                style={styles.arrowLeft}
              />
            </TouchableOpacity>
            {/* Text */}
            <Text
              style={[
                styles.statusText,
                {
                  color: item.status === 'issued' ? '#4CAF50' : '#EBC923',
                  marginLeft: 5, // Adjust the margin as needed
                },
              ]}>
              {item.status === 'issued' ? 'Issued' : 'Pending'}
            </Text>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeading}>
              <Text style={styles.Heading}>Choose Service Type</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.request}>
                <TouchableOpacity
                  style={styles.touchableRequest}
                  onPress={handleRequestCancellation}>
                  <Image
                    source={require('../Assets/Images/RequestCancellation.png')}
                    style={{height: 40, width: 40}}
                  />
                  <Text style={styles.requestText}>Request Cancellation</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.submitted}>
                <TouchableOpacity
                  style={styles.touchableSubmitted}
                  onPress={handleSubmittedRequests}>
                  <Image
                    source={require('../Assets/Images/SubmittedRequest.png')}
                    style={{height: 40, width: 40}}
                  />
                  <Text style={styles.submittedText}>Submitted Request</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    paddingTop: 22,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderColor: '#95D8FD',
    borderWidth: 1,
    borderRadius: 10,
  },
  leftContainer: {
    flex: 1,
  },
  headingPolicy: {
    // marginLeft: 30,
    color: '#3A649F',
    fontSize: 24,
    fontWeight: '800',
  },
  heading: {
    color: '#3A649F',
    fontSize: 18,
    fontWeight: 'bold',
    width: 200,
  },
  subheading: {
    fontSize: 12,
    fontWeight: 'bold',
    // fontStyle: 'italic',
    marginBottom: 20,
    color: '#1F93D1',
    width: 160,
  },
  policyNoText: {
    fontSize: 12,
    color: '#ccc',
  },
  policyNo: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  policyDate: {
    fontSize: 12,
    color: '#ccc',
  },
  statusHeading: {
    color: '#13A1DE',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 30,
  },
  statusIndicator: {
    width: 80,
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 40,
    marginTop: 20,
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#dce3dc',
    borderWidth: 1,
    borderColor: '#95D8FD',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    left: 85,
  },
  arrowLeft: {
    width: 16,
    height: 16,
    borderRadius: 5,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: screenWidth * 0.95,
    height: screenHeight * 0.4,
    // alignItems: 'center',
  },
  modalHeading: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    padding: 10,
    borderStyle: 'dashed',
  },
  Heading: {
    color: '#1F93D1',
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: '500',
  },
  request: {
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1F93D1',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 170,
  },
  touchableRequest: {
    alignItems: 'center',
  },
  requestText: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  submitted: {
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1F93D1',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 160,
    marginLeft: 10,
  },
  touchableSubmitted: {
    alignItems: 'center',
  },
  submittedText: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    // backgroundColor: '#3A649F',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    margin: 10,
    marginTop: 40,
    height: 180,
    width: 150,
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RenderPolicy;
