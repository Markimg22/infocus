import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

interface TermOfUseProps {
  visible: boolean;
}

export function TermOfUse({ visible }: TermOfUseProps) {
  return (
    <Modal style={styles.container} animationType={'slide'} visible={visible}>
      <View>
        <Text>Modal</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
});
