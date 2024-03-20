import React from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const App = () => (
  <ImageBackground
    style={styles.container}
    source={require('./Assets/Images/background.png')}
    resizeMode="contain">
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      paginationActiveColor="#1C94CB"
      paginationStyle={{marginBottom: 200}}
      paginationStyleItem={{height: 12, width: 12}}
      showPagination>
      <View style={styles.slide}>
        <Text style={styles.number}>01</Text>
        <Image
          source={require('./Assets/Images/swiper.png')}
          style={styles.image}
        />
        <Text style={styles.swiperText}>Change You Desired Plan</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.number}>02</Text>
        <Image
          source={require('./Assets/Images/swiper.png')}
          style={styles.image}
        />
        <Text style={styles.swiperText}>Change You Desired Plan</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.number}>03</Text>
        <Image
          source={require('./Assets/Images/swiper.png')}
          style={styles.image}
        />
        <Text style={styles.swiperText}>Change You Desired Plan</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.number}>04</Text>
        <Image
          source={require('./Assets/Images/swiper.png')}
          style={styles.image}
        />
        <Text style={styles.swiperText}>Change You Desired Plan</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.number}>05</Text>
        <Image
          source={require('./Assets/Images/swiper.png')}
          style={styles.image}
        />
        <Text style={styles.swiperText}>Change You Desired Plan</Text>
      </View>
    </SwiperFlatList>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: screenWidth,
    height: screenHeight,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight,
  },
  image: {
    width: 200,
    height: 200,
  },
  number: {
    position: 'absolute',
    left: 180,
    top: 255,
    color: '#1C94CB',
    fontSize: 40,
    fontWeight: 'bold',
  },
  swiperText: {
    color: '#004FB6',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
