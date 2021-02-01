import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import CardGrid from './CardGrid';

export default function Global() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({});
  const fetchData = async () => {
    setLoad(true);
    try {
      const res = await fetch('https://corona.lmao.ninja/v2/all', {
        method: 'GET',
      });
      const data = await res.json();
      setTimeout(() => {
        setLoad(false);
      }, 1200);
      setData(data);
    } catch (e) {
      setLoad(false);
      setTimeout(() => {
        setLoad(false);
      }, 1200);
    }
  };

  useEffect(() => {
    fetchData();
    return setData({});
  }, []);
  return (
    <View style={styles.container}>
      {load ? (
        <ActivityIndicator
          style={{marginTop: 40}}
          size="large"
          color="#9156EC"
        />
      ) : (
        <CardGrid
          active={data.active}
          deceased={data.deaths}
          recovered={data.recovered}
          confirmed={data.cases}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
