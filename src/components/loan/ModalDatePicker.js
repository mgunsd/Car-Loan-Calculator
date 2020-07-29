// import React, { useState } from "react";
// import { Platform, View, TouchableOpacity, Text, StyleSheet } from "react-native";
// import moment from 'moment';
// import DateTimePickerModal from '../DTPickerModal';
// import { useTheme } from '../../context/ThemeContext';

// const ModalDatePicker = ({ deliveryDate, setDeliveryDate }) => {
//   const { colors, dark } = useTheme();
//   const [isVisible, setVisibility] = useState(false);
//   return (
//     <View>
//       <TouchableOpacity onPress={() => setVisibility(true)}>
//         <Text style={{
//           ...styles.dateButton,
//           color: colors.text
//         }}> {moment(deliveryDate).format('DD / MM / YYYY')} </Text>
//       </TouchableOpacity>

//       <DateTimePickerModal
//         style={{ ...styles.datePickerStyle, color: colors.text, backgroundColor: colors.background }}
//         isDarkModeEnabled={dark}
//         //pickerContainerStyleIOS={{ textColor: colors.text }}
//         //datePickerContainerStyleIOS={{ textColor: colors.text, backgroundColor: colors.background }}
//         //cancelTextStyle={{ color: colors.primary }}
//         cancelTextIOS='Cancel'
//         headerTextIOS='Select a delivery date'
//         isVisible={isVisible}
//         mode='date'
//         minimumDate={new Date()}
//         onConfirm={e => {
//           setVisibility(false);
//           setDeliveryDate(e);
//         }}
//         onCancel={() => setVisibility(false)}
//       />
//     </View>
//   );
// };

// export default ModalDatePicker;
// const styles = StyleSheet.create({

//   dateButton: {
//     fontFamily: 'SFProDisplay-Bold',
//     fontSize: 21,
//     //textAlign: 'center',
//     textAlignVertical: 'center',
//     borderRadius: 25,
//     //height: 50,
//     paddingLeft: 10,
//   },
// });