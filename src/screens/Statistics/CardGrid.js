import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DataCard from '../../components/DataCard';

export default function CardGrid({confirmed, active, recovered, deceased}) {
  return (
    <View style={styles.container}>
      <DataCard title="Confirmed" type="danger" value={confirmed} />
      <DataCard title="Active" type="info" value={active} />
      <DataCard title="Recovered" type="success" value={recovered} />
      <DataCard title="Deceased" type="tetiary" value={deceased} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
