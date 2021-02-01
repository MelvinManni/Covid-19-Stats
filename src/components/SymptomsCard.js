import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FadeInView from './FadeIn';

export default function SymptomsCard({img, title, text}) {
  return (
    <FadeInView>
      <View style={styles.container}>
        <View style={styles.imgHolder}>
          <Image style={styles.img} source={img} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  imgHolder: {
    backgroundColor: 'rgba(109, 117, 125, 0.1)',
    height: 120,
    width: 120,
    marginBottom: 40,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '65%',
    height: '65%',
  },

  title: {
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 21,
    color: '#142237',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#000',
    // marginBottom: 10,
    textAlign: 'center',
  },
});
