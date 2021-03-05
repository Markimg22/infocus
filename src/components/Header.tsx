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
        size={40}
        style={[{ alignSelf: iconDirection }, styles.icon]}
        onPress={() => navigation.navigate(pageNavigation)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: '#282631',
  },
  icon: {
    color: '#fff',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 30,
  },
});
