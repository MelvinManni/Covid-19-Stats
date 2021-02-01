import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function DataCard({type, style, title, value}) {
  const setType = () => {
    const colorValue = {
      default: '',
      light: '',
    };

    switch (`${type}`.toLowerCase()) {
      case 'danger':
        colorValue.default = 'rgba(252, 20, 65, 1)';
        colorValue.light = 'rgba(252, 20, 65, 0.1)';
        break;
      case 'success':
        colorValue.default = 'rgba(48, 166, 74, 1)';
        colorValue.light = 'rgba(48, 166, 74, 0.1)';
        break;
      case 'info':
        colorValue.default = 'rgba(21, 127, 251, 1)';
        colorValue.light = 'rgba(21, 127, 251, 0.1)';
        break;
      case 'tetiary':
        colorValue.default = 'rgba(109, 117, 125, 1)';
        colorValue.light = 'rgba(109, 117, 125, 0.1)';
        break;

      default:
        break;
    }
    return colorValue;
  };

  return (
    <View style={[styles.container, {backgroundColor: setType().light}, style]}>
      <Text style={[styles.text, {color: setType().default}]}>{title}</Text>
      <Text style={[styles.data, {color: setType().default}]}>
        {value !== undefined &&
          value.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '45.5%',
    maxHeight: '100%',
    minHeight: 120,
    borderRadius: 20,
    margin: 5,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 21.5,
  },
  data: {
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 32.5,
    textAlign: 'right',
    marginTop: 40,
  },
});
