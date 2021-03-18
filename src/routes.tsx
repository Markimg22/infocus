import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TimerPage } from './pages/TimerPage';
import { CreateTasksPage } from './pages/CreateTasksPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { RegisterPage } from './pages/RegisterPage';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
let isLogged = false;

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomBar" component={BottomBar} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomBar() {
  return (
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
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: '#282631',
  },
});
