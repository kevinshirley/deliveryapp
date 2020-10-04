import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import { HEADER_CTA_ICON } from '../../../styles/styles-variables';
import MapView from 'react-native-maps';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
