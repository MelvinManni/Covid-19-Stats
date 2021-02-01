import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SymptomsCard from '../components/SymptomsCard';
import symptoms from '../variables/symptoms';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Indicator = ({active, index}) => {
  return (
    <View
      style={[styles.indicator, active === index ? styles.activeIndicator : {}]}
    />
  );
};

export default function Symptoms() {
  const [displayIndex, setDisplayIndex] = useState(2);
  const [symptomsArray, setSymptomsArray] = useState([]);

  useEffect(() => {
    const value = symptoms.map((item, index) => (
      <SymptomsCard
        key={index}
        img={item.img}
        title={item.title}
        text={item.text}
      />
    ));
    return setSymptomsArray(value);
  }, []);

  const moveLeft = () => {
    displayIndex === 0
      ? setDisplayIndex(symptomsArray.length - 1)
      : setDisplayIndex(displayIndex - 1);
  };
  const moveRight = () => {
    displayIndex === symptomsArray.length - 1
      ? setDisplayIndex(0)
      : setDisplayIndex(displayIndex + 1);
  };

  return (
    <View style={styles.container}>
      <Icon style={styles.moveLeft} onPress={moveLeft} name="arrow-back-ios" />
      <Icon
        style={styles.moveRight}
        onPress={moveRight}
        name="arrow-forward-ios"
      />

      <View>{symptomsArray[displayIndex]}</View>
      <View style={styles.row}>
        {symptomsArray.map((o, index) => (
          <Indicator key={index} active={displayIndex} index={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    position: 'relative',
    alignSelf: 'stretch',
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
    backgroundColor: 'rgba(21, 127, 251, 0.3)',
  },
  activeIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(21, 127, 251, 1)',
  },
  moveLeft: {
    fontSize: 24,
    position: 'absolute',
    left: 0,
    padding: 10,
    top: '30%',
    zIndex: 60000,
  },
  moveRight: {
    fontSize: 24,
    position: 'absolute',
    right: 0,
    padding: 10,
    top: '30%',
    zIndex: 60000,
  },
});
