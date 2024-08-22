import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyles from '../../helpers/commonStyles';
import {Colors} from '../../helpers/colors';

const HomeHeader = () => {
  return (
    <View
      style={[commonStyles.row, commonStyles.p20, commonStyles.alignCenter]}>
      <View
        style={[
          commonStyles.w40,
          commonStyles.pt40,
          commonStyles.justifyBetween,
        ]}>
        <Text
          style={[
            commonStyles.fs14,
            commonStyles.medium,
            {color: Colors.lightGray},
          ]}>
          Welcome!
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
