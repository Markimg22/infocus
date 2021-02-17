import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface HeaderProps {
  iconName: string;
  iconDirection: any;
  navigation: any;
  pageNavigation: string;
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Icon
        name={props.iconName}
        size={40}
        style={[{ alignSelf: props.iconDirection }, styles.icon]}
        onPress={() => props.navigation.navigate(props.pageNavigation)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282631',
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    color: '#fff',
    padding: 5,
  },
});
