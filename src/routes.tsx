import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TimerPage } from './pages/TimerPage';
import { CreateTasksPage } from './pages/CreateTasksPage';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="TimerPage"
        barStyle={styles.bottomBar}
        shifting={true}>
        <Screen
          name="TimerPage"
          component={TimerPage}
          options={{
            tabBarLabel: 'Timer',
            tabBarIcon: ({ color }) => (
              <View>
                <Icon size={25} name="clock" color={color} />
              </View>
            ),
          }}
        />
        <Screen
          name="CreateTasksPage"
          component={CreateTasksPage}
          options={{
            tabBarLabel: 'Tasks',
            tabBarIcon: ({ color }) => (
              <View>
                <Icon size={25} name="tasks" color={color} />
              </View>
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: '#282631',
  },
});
