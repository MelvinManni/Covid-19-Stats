import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import Continent from './Statistics/Continent';
import Country from './Statistics/Country';
import Global from './Statistics/Global';

export default function Statistics() {
  const [nav, setNav] = useState('global');
  
  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            setNav('global');
          }}>
          <Text
            style={
              nav === 'global' ? [styles.nav, styles.navActive] : styles.nav
            }>
            Global
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNav('continent');
          }}>
          <Text
            style={
              nav === 'continent' ? [styles.nav, styles.navActive] : styles.nav
            }>
            Continent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNav('country');
          }}>
          <Text
            style={
              nav === 'country' ? [styles.nav, styles.navActive] : styles.nav
            }>
            Country
          </Text>
        </TouchableOpacity>
      </View>
      {nav === 'global' ? (
        <Global />
      ) : nav === 'country' ? (
        <Country />
      ) : nav === 'continent' ? (
        <Continent />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
    backgroundColor: '#CFE3FC',
    padding: 30,
    marginBottom: 20,
  },
  imgHolder: {
    width: 108,
    height: 114,
    marginRight: 10,
  },
  bannerImage: {
    height: '100%',
    width: '100%',
  },

  text: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22.5,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
    paddingLeft: 5,
  },
  nav: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22.5,
    color: 'rgba(0,0,0,0.3)',
    marginRight: 30,
  },

  navActive: {
    color: '#000',
  },
  arrowHolder: {
    width: 41,
    height: 19,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#9156EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
