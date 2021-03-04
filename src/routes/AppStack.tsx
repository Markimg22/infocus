import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TimerPage } from '../pages/TimerPage';
import { CreateTasksPage } from '../pages/CreateTasksPage';
import { Header } from '../components/Header';
import { CountdownProvider } from '../contexts/CountdownContext';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="TimerPage"
        screenOptions={{
          headerShown: false,
          cardStyle: { flex: 1, backgroundColor: '#333238' },
        }}>
        <CountdownProvider>
          <Screen
            name="TimerPage"
            component={TimerPage}
            options={{
              headerShown: true,
              header: (props) => (
                <Header
                  iconName="tasks"
                  iconDirection="flex-end"
                  pageNavigation="CreateTasksPage"
                  {...props}
                />
              ),
            }}
          />
        </CountdownProvider>
        <Screen
          name="CreateTasksPage"
          component={CreateTasksPage}
          options={{
            headerShown: true,
            header: (props) => (
              <Header
                iconName="angle-left"
                iconDirection="flex-start"
                pageNavigation="TimerPage"
                {...props}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
