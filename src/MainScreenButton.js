// // import {StyleSheet, Text, View} from 'react-native';
// // import React, {useState} from 'react';
// // import MainButtonComponent from './components/MainButtonComponent';
// // import LifeInsurance from './LifeInsurance';
// // import HealthInsurrance from './HealthInsurrance';

// // const MainScreenButton = props => {
// //   const [selectedValue, setSelectedValue] = useState('Life Insurrance');
// //   const selectValue = item => {
// //     setSelectedValue(item);
// //   };
// //   return (
// //     <View style={styles.MainContainer}>
// //       <MainButtonComponent selectValue={item => selectValue(item)} />
// //       {selectedValue == 'Life Insurrance' && <LifeInsurance />}
// //       {selectedValue == 'Health Insurrance' && <HealthInsurrance />}
// //     </View>
// //   );
// // };

// // export default MainScreenButton;

// // const styles = StyleSheet.create({
// //   MainContainer: {
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// // });

// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import MainButtonComponent from './components/MainButtonComponent';
// import LifeInsurance from './LifeInsurance';
// import HealthInsurrance from './HealthInsurrance';

// const MainScreenButton = props => {
//   const [selectedValue, setSelectedValue] = useState('Life Insurrance');
//   const selectValue = item => {
//     setSelectedValue(item);
//   };
//   return (
//     <View style={styles.MainContainer}>
//       <MainButtonComponent selectValue={item => selectValue(item)} />
//       {selectedValue == 'Life Insurrance' && <LifeInsurance />}
//       {selectedValue == 'Health Insurrance' && <HealthInsurrance />}
//     </View>
//   );
// };

// export default MainScreenButton;

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import MainButtonComponent from './components/MainButtonComponent';
// import LifeInsurance from './LifeInsurance';
// import HealthInsurrance from './HealthInsurrance';

// const MainScreenButton = props => {
//   const [selectedValue, setSelectedValue] = useState('Life Insurrance');
//   const selectValue = item => {
//     setSelectedValue(item);
//   };
//   return (
//     <View style={styles.MainContainer}>
//       <MainButtonComponent selectValue={item => selectValue(item)} />
//       {selectedValue == 'Life Insurrance' && <LifeInsurance />}
//       {selectedValue == 'Health Insurrance' && <HealthInsurrance />}
//     </View>
//   );
// };

// export default MainScreenButton;

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import MainButtonComponent from './components/MainButtonComponent';
// import LifeInsurance from './LifeInsurance';
// import HealthInsurrance from './HealthInsurrance';
// import LifeInsurancePolicy from './LifeInsurance';
// import HealthInsurrancePolicy from './HealthInsurrance';

// const MainScreenButton = props => {
//   const [selectedValue, setSelectedValue] = useState('Life Insurrance');
//   const selectValue = item => {
//     setSelectedValue(item);
//   };
//   return (
//     <View style={styles.MainContainer}>
//       <MainButtonComponent selectValue={item => selectValue(item)} />
//       {selectedValue == 'Life Insurrance' && <LifeInsurancePolicy />}
//       {selectedValue == 'Health Insurrance' && <HealthInsurrancePolicy />}
//     </View>
//   );
// };

// export default MainScreenButton;

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });


import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainButtonComponent from './components/MainButtonComponent';
import LifeInsurance from './LifeInsurance';
import HealthInsurrance from './HealthInsurrance';
import LifeInsurancePolicy from './LifeInsurance';
import HealthInsurrancePolicy from './HealthInsurrance';

const MainScreenButton = props => {
  const [selectedValue, setSelectedValue] = useState('Life Insurrance');
  const selectValue = item => {
    setSelectedValue(item);
  };
  return (
    <View style={styles.MainContainer}>
      <MainButtonComponent selectValue={item => selectValue(item)} />
      {selectedValue == 'Life Insurrance' && <LifeInsurancePolicy />}
      {selectedValue == 'Health Insurrance' && <HealthInsurrancePolicy />}
    </View>
  );
};

export default MainScreenButton;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
});