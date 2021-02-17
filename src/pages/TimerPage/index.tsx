import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Timer from '../../components/Timer';

interface TimerPageProps {
  navigation: any;
}

export default function TimerPage(props: TimerPageProps): JSX.Element {
  return (
    <View>
      <Header
        iconName="tasks"
        iconDirection="flex-end"
        navigation={props.navigation}
        pageNavigation="CreateTasksPage"
      />
      <Timer timeTask={25} timeRest={5} />
    </View>
  );
}
