import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SlideToggle from '../components/SlideToggle';
import Icon from 'react-native-vector-icons/FontAwesome';
import Statistics from './Statistics';
import Symptoms from './Symptoms';
import FadeInView from '../components/FadeIn';

export default function TabHome() {
  const [currentTab, setCurrentTab] = useState(0);
  const url =
    'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public';

  const linkToWebsite = async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={true}
      bounces={true}
      //   onScrollAnimationEnd={}
    >
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.imgHolder}>
            <Image
              style={styles.bannerImage}
              source={require('../images/banner-person.png')}
            />
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.text}>
              Know safety tips and precautions from top Doctors.
            </Text>

            <TouchableOpacity
              style={styles.arrowHolder}
              onPress={linkToWebsite}>
              <Icon name="long-arrow-right" color="#fff" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginBottom: 30}}>
          <SlideToggle
            setActive={setCurrentTab}
            active={currentTab}
            navItems={[{name: 'Tracker'}, {name: 'Symptoms'}]}
          />
        </View>

        <View>
          {currentTab === 0 && (
            <FadeInView>
              <Statistics />
            </FadeInView>
          )}
          {currentTab === 1 && (
            <FadeInView>
              <Symptoms />
            </FadeInView>
          )}
        </View>
      </View>
    </ScrollView>
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
