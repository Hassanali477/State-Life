// import React from 'react';
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;

// const LifeInsuranceFlatlist = ({item}) => {
//   return (
//     <View style={styles.item}>
//       <View style={styles.leftContainer}>
//         <Text style={styles.heading}>{item.heading}</Text>
//         <Text style={styles.subheading}>{item.subheading}</Text>
//         <TouchableOpacity>
//           <Text style={styles.buttonTitle}>{item.buttonTitle}</Text>
//         </TouchableOpacity>
//         <View style={{flexDirection: 'row'}}>
//           <Text style={styles.policyNoText}>Order No:</Text>
//           <Text style={styles.orderNo}>{item.orderNo}</Text>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <Text style={styles.policyNoText}>Paid Amount:</Text>
//           <Text style={styles.policyNo}>{item.paidAmount}</Text>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <Text style={styles.orderDate}>Order Date:</Text>
//           <Text
//             style={[
//               styles.orderDate,
//               {color: 'grey', marginLeft: 5, fontWeight: 'bold'},
//             ]}>
//             {item.orderDate}
//           </Text>
//         </View>
//       </View>
//       <View style={styles.leftContainer}></View>
//       <View style={styles.rightContainer}>
//         <Text style={styles.statusHeading}>Status</Text>
//         <View
//           style={[
//             styles.statusIndicator,
//             {
//               backgroundColor: item.status === 'issued' ? '#C8E6C9' : '#FFF9C4',
//             },
//           ]}>
//           <TouchableOpacity style={styles.imageContainer}>
//             <Image
//               source={require('../Assets/Images/right.png')}
//               style={styles.arrowLeft}
//             />
//           </TouchableOpacity>
//           <Text
//             style={[
//               styles.statusText,
//               {
//                 color: item.status === 'issued' ? '#4CAF50' : '#E0BE24',
//                 marginLeft: 5,
//               },
//             ]}>
//             {item.status === 'issued' ? 'Issued' : 'Pending'}
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: screenWidth,
//     height: screenHeight,
//     paddingTop: 22,
//     backgroundColor: '#fff',
//   },
//   item: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     backgroundColor: '#fff',
//     borderColor: '#95D8FD',
//     borderWidth: 1,
//     borderRadius: 10,
//   },
//   leftContainer: {
//     flex: 1,
//   },
//   headingPolicy: {
//     // marginLeft: 30,
//     color: '#3A649F',
//     fontSize: 24,
//     fontWeight: '800',
//   },
//   heading: {
//     color: '#5B6770',
//     fontSize: 18,
//     fontWeight: 'bold',
//     width: 200,
//   },
//   subheading: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     // fontStyle: 'italic',
//     // marginBottom: 20,
//     color: '#1F93D1',
//     width: 300,
//   },
//   buttonTitle: {
//     color: 'white',
//     fontSize: 12,
//     textAlign: 'center',
//     borderRadius: 5,
//     padding: 8,
//     backgroundColor: '#1F93D1',
//     marginTop: 10,
//     marginBottom: 20,
//     fontWeight:'bold',
//   },
//   policyNoText: {
//     fontSize: 12,
//     color: '#1F93D1',
//   },
//   policyNo: {
//     fontSize: 12,
//     color: '#1F93D1',
//     marginBottom: 5,
//     marginLeft: 5,
//     fontWeight: 'bold',
//   },
//   orderNo: {
//     fontSize: 12,
//     color: 'grey',
//     marginBottom: 5,
//     marginLeft: 5,
//     fontWeight: 'bold',
//   },
//   orderDate: {
//     fontSize: 12,
//     color: '#1F93D1',
//   },
//   statusHeading: {
//     color: '#7FCEFC',
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginTop: 30,
//   },
//   statusIndicator: {
//     width: 80,
//     height: 40,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginRight: 20,
//     marginTop: 20,
//   },
//   statusText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   imageContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     right: 10,
//     left: 80,
//   },
//   arrowLeft: {
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//   },
// });

// export default LifeInsuranceFlatlist;

// import React from 'react';
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;

// const LifeInsuranceFlatlistPolicy = ({item}) => {
//   let statusBackgroundColor, statusTextColor, statusText;

//   // Set background, text color, and text based on status
//   switch (item.status) {
//     case 'issued':
//       statusBackgroundColor = '#BAF5D8';
//       statusTextColor = '#00B982';
//       statusText = 'Issued';
//       break;
//     case 'cancelled':
//       statusBackgroundColor = '#FBE5E6';
//       statusTextColor = '#DD0D0C';
//       statusText = 'Cancelled';
//       break;
//     case 'pending':
//       statusBackgroundColor = '#FBF5D3';
//       statusTextColor = '#DEBF24';
//       statusText = 'Pending';
//       break;
//     default:
//       statusBackgroundColor = 'green';
//       statusTextColor = 'white';
//       statusText = 'Unknown';
//   }
//   return (
//     <View style={styles.item}>
//       <View style={styles.leftContainer}>
//         <Text style={styles.heading}>{item.heading}</Text>
//         <Text style={styles.subheading}>{item.subheading}</Text>
//         <TouchableOpacity>
//           <Text style={styles.buttonTitle}>{item.buttonTitle}</Text>
//         </TouchableOpacity>
//         <View style={{flexDirection: 'row'}}>
//           <Text style={styles.policyNoText}>Policy No:</Text>
//           <Text style={styles.orderNo}>{item.policyNo}</Text>
//         </View>
//       </View>
//       <View style={styles.leftContainer}></View>
//       <View style={styles.rightContainer}>
//         <Text style={styles.statusHeading}>Status</Text>
//         <View
//           style={[
//             styles.statusIndicator,
//             {
//               backgroundColor: statusBackgroundColor,
//             },
//           ]}>
//           <TouchableOpacity style={styles.imageContainer}>
//             <Image
//               source={require('../Assets/Images/right.png')}
//               style={styles.arrowLeft}
//             />
//           </TouchableOpacity>
//           <Text
//             style={[
//               styles.statusText,
//               {
//                 color: statusTextColor,
//                 marginLeft: 5,
//               },
//             ]}>
//             {statusText}
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default LifeInsuranceFlatlistPolicy;

// const styles = StyleSheet.create({
//   item: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     backgroundColor: '#fff',
//     borderColor: '#95D8FD',
//     borderWidth: 1,
//     borderRadius: 10,
//   },
//   leftContainer: {
//     flex: 1,
//   },
//   heading: {
//     color: '#5B6770',
//     fontSize: 18,
//     fontWeight: 'bold',
//     width: 200,
//   },
//   subheading: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#1F93D1',
//     width: 300,
//   },
//   buttonTitle: {
//     color: 'white',
//     fontSize: 12,
//     textAlign: 'center',
//     borderRadius: 5,
//     padding: 8,
//     backgroundColor: '#1F93D1',
//     marginTop: 10,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   policyNoText: {
//     fontSize: 12,
//     color: '#1F93D1',
//   },
//   policyNo: {
//     fontSize: 12,
//     color: '#1F93D1',
//     marginBottom: 5,
//     marginLeft: 5,
//     fontWeight: 'bold',
//   },
//   orderNo: {
//     fontSize: 12,
//     color: 'grey',
//     marginBottom: 5,
//     marginLeft: 5,
//     fontWeight: 'bold',
//   },
//   orderDate: {
//     fontSize: 12,
//     color: '#1F93D1',
//   },
//   statusHeading: {
//     color: '#7FCEFC',
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginTop: 30,
//   },
//   statusIndicator: {
//     width: 80,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginRight: 20,
//     marginTop: 20,
//   },
//   statusText: {
//     fontWeight: 'bold',
//   },
//   imageContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     right: 10,
//     left: 80,
//   },
//   arrowLeft: {
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const LifeInsuranceFlatlistListing = ({item}) => {
  let statusBackgroundColor, statusTextColor, statusText;

  // Set background, text color, and text based on status
  switch (item.status) {
    case 'issued':
      statusBackgroundColor = '#BAF5D8';
      statusTextColor = '#00B982';
      statusText = 'Issued';
      break;
    case 'settled':
      statusBackgroundColor = '#BAF5D8';
      statusTextColor = '#00B982';
      statusText = 'Settled';
      break;
    case 'cancelled':
      statusBackgroundColor = '#FBE5E6';
      statusTextColor = '#DD0D0C';
      statusText = 'Cancelled';
      break;
    case 'pending':
      statusBackgroundColor = '#FBF5D3';
      statusTextColor = '#DEBF24';
      statusText = 'Pending';
      break;
    case 'inprocess':
      statusBackgroundColor = '#FBF5D3';
      statusTextColor = '#DEBF24';
      statusText = 'Inprocess';
      break;
    default:
      statusBackgroundColor = 'green';
      statusTextColor = 'white';
      statusText = 'Unknown';
  }
  return (
    <View style={styles.item}>
      <View style={styles.leftContainer}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.subheading}>{item.subheading}</Text>
        <TouchableOpacity>
          <Text style={styles.buttonTitle}>{item.buttonTitle}</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.policyNoText}>Policy No:</Text>
          <Text style={styles.orderNo}>{item.policyNo}</Text>
        </View>
      </View>
      <View style={styles.leftContainer}></View>
      <View style={styles.rightContainer}>
        <Text style={styles.statusHeading}>Status</Text>
        <View
          style={[
            styles.statusIndicator,
            {
              backgroundColor: statusBackgroundColor,
            },
          ]}>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              source={require('../Assets/Images/right.png')}
              style={styles.arrowLeft}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.statusText,
              {
                color: statusTextColor,
                marginLeft: 5,
              },
            ]}>
            {statusText}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LifeInsuranceFlatlistListing;

const styles = StyleSheet.create({
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
  heading: {
    color: '#5B6770',
    fontSize: 18,
    fontWeight: 'bold',
    width: 200,
  },
  subheading: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F93D1',
    width: 300,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    borderRadius: 5,
    padding: 8,
    backgroundColor: '#1F93D1',
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  policyNoText: {
    fontSize: 12,
    color: '#1F93D1',
  },
  policyNo: {
    fontSize: 12,
    color: '#1F93D1',
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  orderNo: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 12,
    color: '#1F93D1',
  },
  statusHeading: {
    color: '#7FCEFC',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 30,
  },
  statusIndicator: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 20,
    marginTop: 20,
  },
  statusText: {
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    left: 80,
  },
  arrowLeft: {
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
});
