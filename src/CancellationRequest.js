import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const CancellationRequest = ({navigation}) => {
  const [reason, setReason] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = text => {
    setReason(text);
    setIsTyping(true);
  };

  const handleSubmit = () => {
    if (!reason.trim()) {
      // Handle empty reason
      alert('Please enter a cancellation reason');
      return;
    }

    // Proceed with submission
    // Example: navigate to another screen or submit data to server
    // navigation.navigate('NextScreen'); // Uncomment if navigation is needed
    alert(`Reason submitted: ${reason}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Cancellation Details</Text>
        <View style={styles.reasonContainer}>
          <Text style={styles.reasonHeading}>Reason</Text>
          <TextInput
            style={[
              styles.textInput,
              {borderColor: isTyping ? '#1F93D1' : 'grey'},
            ]}
            placeholder="Enter cancellation reason"
            placeholderTextColor={'#ccc'}
            onChangeText={handleInputChange}
            multiline={true}
            value={reason}
            onFocus={() => setIsTyping(true)}
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    // backgroundColor: 'black',
  },
  subContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#1F93D1',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: 'grey',
    paddingBottom: 20,
    width: '90%',
  },

  reasonHeading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#1F93D1',
  },
  textInput: {
    height: 100,
    width: 350,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: 'grey',
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: '#1F93D1',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CancellationRequest;
