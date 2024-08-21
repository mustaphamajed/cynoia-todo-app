import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React, {ReactNode} from 'react';
import {Colors} from '../../helpers/colors';

interface CustomTextProps {
  children: ReactNode;
  fontSize?: number;
  nbLine?: number;
  fontFamily?: TextStyle;
  extraStyle?: TextStyle;
  color?: string;
  ellipsis?: boolean;
  customStyle?: object | Array<object>;
}

const CustomText = ({
  fontSize,
  fontFamily,
  children,
  extraStyle,
  color = Colors.dark,
  ellipsis,
  customStyle,
  nbLine = 1,
}: CustomTextProps) => {
  return (
    <Text
      numberOfLines={ellipsis ? nbLine : undefined}
      style={[
        {
          color: color,
          fontSize,
        },
        fontFamily,
        extraStyle,
        customStyle ? customStyle : {},
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
