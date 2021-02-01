import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.splash}
        source={require('../images/home-illustration.png')}
      />
      <View style={styles.card}>
        <Text style={styles.title}>Be aware</Text>
        <Text style={[styles.title, {marginTop: 10}]}>Stay healthy</Text>

        <Text style={styles.text}>Welcome to COVID-19 information portal.</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TabHome');
          }}
          style={styles.button}
          activeOpacity={0.8}>
          <Text style={styles.bottonText}>GET STARTED</Text>
          <View style={styles.arrowHolder}>
            <Icon name="arrowright" size={22} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
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

  card: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#fff',
    padding: 35,
    position: 'absolute',
    bottom: 0,
    minHeight: '40%',
    width: '100%',
  },

  title: {
    fontFamily: 'Questrial-Regular',
    fontStyle: 'normal',
    fontSize: 38,
    lineHeight: 39,
    color: '#142237',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    marginTop: 25,
    marginBottom: 50,
  },
  button: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottonText: {
    fontFamily: 'Poppins-Semibold',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22,
    color: '#000',
    opacity: 0.6,
  },
  arrowHolder: {
    width: 45,
    height: 45,
    marginLeft: 20,
    borderRadius: 25,
    backgroundColor: '#9156EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
