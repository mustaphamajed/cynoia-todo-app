import {StyleSheet, Pressable} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../helpers/colors';

interface BackButtonProps {
  callback: () => void;
  customStyle?: object | Array<object>;
}

const BackButton = ({callback, customStyle}: BackButtonProps) => {
  return (
    <Pressable
      onPress={callback}
      style={[styles.container, customStyle ? customStyle : {}]}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={28}
        color={Colors.white}
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
