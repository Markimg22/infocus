import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TimerPage } from './pages/TimerPage';
import { CreateTasksPage } from './pages/CreateTasksPage';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TimerPage"
        barStyle={styles.bottomBar}
        shifting={true}
        sceneAnimationEnabled={true}>
        <Tab.Screen
          name="TimerPage"
          component={TimerPage}
          options={{
            tabBarLabel: 'Tempo',
            tabBarIcon: ({ color }) => (
              <View>
                <Icon size={20} name="clock" color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="CreateTasksPage"
          component={CreateTasksPage}
          options={{
            tabBarLabel: 'Tarefas',
            tabBarIcon: ({ color }) => (
              <View>
                <Icon size={20} name="tasks" color={color} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: '#282631',
  },
});
