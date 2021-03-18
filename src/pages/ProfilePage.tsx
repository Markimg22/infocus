import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Profile } from '../components/Profile';
import { UserPerformance } from '../components/UserPerformance';

export function ProfilePage() {
  return (
    <View style={styles.container}>
      <Profile />
      <UserPerformance />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333238',
  },
});
