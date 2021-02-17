import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Timer from './components/Timer';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Hello world!</Text>
          <Timer />
        </View>
      </SafeAreaView>
    </>
  );
}
