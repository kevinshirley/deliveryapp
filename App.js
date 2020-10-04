import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MaterialBottomNavigation from './src/components/common/navigation';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MaterialBottomNavigation />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
