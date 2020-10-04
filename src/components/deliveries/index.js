import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import { HEADER_CTA_ICON } from '../../../styles/styles-variables';

export default function Deliveries() {
  return (
    <View style={styles.container}>
      <Text>Deliveries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
