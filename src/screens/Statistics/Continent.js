import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import continents from '../../variables/continents';
import CardGrid from './CardGrid';

export default function Continent() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({});
  const [continent, setContinent] = useState('');
  const [dropdown, setDropdown] = useState([]);
  const fetchData = async () => {
    setLoad(true);
    try {
      const res = await fetch(
        `https://corona.lmao.ninja/v2/continents/${continent}`,
        {
          method: 'GET',
        },
      );
      const data = await res.json();
      setData(data);
      setTimeout(() => {
        setLoad(false);
      }, 1200);
    } catch (e) {
      setLoad(false);
      setTimeout(() => {
        setLoad(false);
      }, 1200);
    }
  };

  useEffect(() => {
    const items = continents.map((item) => ({
      label: item['name'],
      value: item['name'],
    }));
    setDropdown(items);
  }, []);

  useEffect(() => {
    if (continent !== '') {
      fetchData();
    }
  }, [continent]);
  return (
    <View>
      <DropDownPicker
        items={dropdown}
        containerStyle={{height: 40}}
        placeholder="Select a continent"
        placeholderStyle={styles.dPlaceholder}
        selectedLabelStyle={styles.dSelected}
        style={{backgroundColor: '#fafafa', padding: 5}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item) => {
          setContinent(item.value);
        }}
      />
      <View style={styles.container}>
        {load ? (
          <ActivityIndicator
            style={{marginTop: 40}}
            size="large"
            color="#9156EC"
          />
        ) : continent === '' ||
          Object.keys(data).length < 1 ? null : data.message !== undefined ? (
          <Text style={styles.message}>{data.message}</Text>
        ) : (
          <CardGrid
            active={data.active}
            deceased={data.deaths}
            recovered={data.recovered}
            confirmed={data.cases}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    minHeight: 150,
    overflow: 'visible',
  },
  dPlaceholder: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20.5,
    color: '#000',
  },
  dSelected: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20.5,
    color: '#000',
  },
  message: {
    fontFamily: 'Questrial-Regular',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 20.5,
    color: '#65606e',
    textAlign: 'center',
    flex: 1,
    marginTop: 20,
  },
});
