import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../helpers/colors';

interface ButtonProps {
  onPress: () => void;
  text: string;
  withBorder?: boolean;
  disabled?: boolean;
  loading: boolean;
  customStyle?: object;
  height?: number;
}

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  text,
  withBorder = false,
  disabled,
  loading,
  customStyle,
  height = 48,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: Colors.purple,
          borderWidth: withBorder ? 1 : 0,
          height: height,
        },
        customStyle ? customStyle : {},
      ]}>
      {loading ? (
        <ActivityIndicator size={20} color={Colors.dark} />
      ) : (
        <Text
          style={[
            styles.textStyle,
            {
              color: Colors.white,
            },
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    fontFamily: 'Urbanist-Bold',
  },
});
