import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SlideToggle({navItems, setActive, active}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true, // Add This line
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {navItems.map((item, index) => (
        <View
          key={index}
          style={[styles.nav, active === index ? styles.navActive : {}]}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setActive(index);
            }}>
            <Text style={active === index ? styles.activeText : styles.text}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F49E6F',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 100,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22.5,
    color: '#A74813',
    textAlign: 'center',
  },
  activeText: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22.5,
    color: '#142237',
    textAlign: 'center',
  },
  nav: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 8,
    borderRadius: 100,
  },

  navActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 8,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
