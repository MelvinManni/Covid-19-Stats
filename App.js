import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import TabHome from './src/screens/TabHome';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const forFade = ({current}) => ({
    containerStyle: {
      opacity: current.progress,
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
        initialRouteName="Splash">
        <Stack.Screen
          options={{cardStyleInterpolator: forFade}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TabHome" component={TabHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
