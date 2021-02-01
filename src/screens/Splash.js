import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function Splash({navigation}) {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Home');
      }, 1200);
    }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.splash} source={require('../images/splash.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
