import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { HEADER_CTA_ICON } from '../../../styles/styles-variables';
import Home from '../../home';
import Maps from '../../maps';
import Deliveries from '../../deliveries';

const Tab = createBottomTabNavigator();

export default function MaterialBottomNavigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Map" component={Maps} />
          <Tab.Screen name="Deliveries" component={Deliveries} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
