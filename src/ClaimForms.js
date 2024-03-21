import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const screenWidth = Dimensions.get('screen').width;

const ClaimForms = () => {
  const [showLifeInsuranceCards, setShowLifeInsuranceCards] = useState(false);
  const [showHealthInsuranceCards, setShowHealthInsuranceCards] =
    useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Claim Forms</Text>
      <ScrollView style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => setShowLifeInsuranceCards(!showLifeInsuranceCards)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>Life Insurance +</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.cardsContainer}>
          {showLifeInsuranceCards && (
            <View>
              <View style={styles.card}>
                <Image
                  source={require('./Assets/Images/claimform.jpg')}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>Continuous Disability</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('./Assets/Images/blue-arrow2.png')}
                      style={styles.icon}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <Image
                  source={require('./Assets/Images/claimform.jpg')}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>Death Claim Form B</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('./Assets/Images/blue-arrow2.png')}
                      style={styles.icon}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <Image
                  source={require('./Assets/Images/claimform.jpg')}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardText}>
                    Accident & Injury Claim Form B
                  </Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('./Assets/Images/blue-arrow2.png')}
                      style={styles.icon}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          <TouchableOpacity
            onPress={() =>
              setShowHealthInsuranceCards(!showHealthInsuranceCards)
            }>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonTitle}>Health Insurance +</Text>
            </View>
          </TouchableOpacity>
          {showHealthInsuranceCards && (
            <View>
              <View style={styles.card}>
                <Image
                  source={require('./Assets/Images/claimform.jpg')}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={[styles.cardText]}>Health Claim Form A</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('./Assets/Images/blue-arrow2.png')}
                      style={styles.icon}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default ClaimForms;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 200,
    paddingBottom: '50%',
  },
  heading: {
    color: '#004FB6',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  subContainer: {
    flex: 1,
    marginTop: 10,
  },
  buttonContainer: {
    width: screenWidth - 30,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#95D8FD',
    borderStyle: 'dashed',
  },
  buttonTitle: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  cardsContainer: {
    flexDirection: 'column',
    marginTop: 10,
    alignItems: 'center',
  },
  card: {
    width: screenWidth - 60,
    height: 210,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 135,
    resizeMode: 'cover',
    borderRadius: 5,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 0,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  cardText: {
    fontSize: 20,
    color: '#004FB6',
    fontWeight: '600',
    width: 200,
  },
  iconContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
