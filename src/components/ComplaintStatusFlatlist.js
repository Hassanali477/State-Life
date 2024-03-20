// import React from 'react';
// import {StyleSheet, Text, View, Dimensions} from 'react-native';

// const screenWidth = Dimensions.get('screen').width;
// const ComplaintStatusFlatlist = ({data}) => {
//   const renderItem = ({item}) => {
//     return (
//       <View style={styles.subContainer}>
//         <Text style={[styles.flatlistHeading, {width: screenWidth * 0.1}]}>
//           {item.id}
//         </Text>
//         <Text style={[styles.flatlistHeading, {width: screenWidth * 0.2}]}>
//           {item.cnic}
//         </Text>
//         <Text style={[styles.flatlistHeading, {width: screenWidth * 0.2}]}>
//           {item.ticketMo}
//         </Text>
//         <Text style={[styles.flatlistHeading, {width: screenWidth * 0.2}]}>
//           {item.mobileNo}
//         </Text>
//         <Text style={[styles.flatlistHeading, {width: screenWidth * 0.3}]}>
//           {item.reportedDate}
//         </Text>
//         <Text style={[styles.flatlistHeading, {width: screenWidth * 0.2}]}>
//           {item.status}
//         </Text>
//       </View>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.wrapper}>
//         {data.map(item => (
//           <View key={item.id}>{renderItem({item})}</View>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default ComplaintStatusFlatlist;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: screenWidth,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   wrapper: {
//     marginHorizontal: 20, // Apply margin to the wrapper view
//   },
//   subContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     width: screenWidth - 40, // Adjust width to account for margins
//     backgroundColor: '#ccc',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   flatlistHeading: {
//     fontSize: 13,
//     fontWeight: 'bold',
//     color: 'black',
//     padding: 8,
//     textAlign: 'center',
//   },
// });
