import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TimerPage } from './pages/TimerPage';
import { CreateTasksPage } from './pages/CreateTasksPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();
let isLogged = false;

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TimerPage"
        barStyle={styles.bottomBar}
        shifting={true}>
        <Tab.Screen
          name={isLogged ? 'ProfilePage' : 'LoginPage'}
          component={isLogged ? ProfilePage : LoginPage}
          options={{
            tabBarLabel: 'Conta',
            tabBarIcon: ({ color }) => (
              <Icon size={20} name="user" color={color} solid />
            ),
          }}
        />
        <Tab.Screen
          name="TimerPage"
          component={TimerPage}
          options={{
            tabBarLabel: 'Tempo',
            tabBarIcon: ({ color }) => (
              <Icon size={20} name="clock" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CreateTasksPage"
          component={CreateTasksPage}
          options={{
            tabBarLabel: 'Tarefas',
            tabBarIcon: ({ color }) => (
              <Icon size={20} name="tasks" color={color} />
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
