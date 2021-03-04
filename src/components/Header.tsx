import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface HeaderProps extends StackHeaderProps {
  iconName: 'tasks' | 'angle-left';
  iconDirection: 'flex-start' | 'flex-end';
  pageNavigation: 'TimerPage' | 'CreateTasksPage';
}

export function Header({
  iconName,
  iconDirection,
  navigation,
  pageNavigation,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        color={'#fff'}
        size={40}
        style={{ alignSelf: iconDirection }}
        onPress={() => navigation.navigate(pageNavigation)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282631',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
});
