import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login.jsx';
import Search from './Search.jsx';
import ResultLabel from './ResultLabel.jsx';
import Carousel from './Carousel.jsx';
const Stack = createStackNavigator();

export default function HomeScreen() {

  return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Login />
              <Search />
            </View>
            <ResultLabel />
            <Carousel />
            <StatusBar style="auto" />
          </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  }
});