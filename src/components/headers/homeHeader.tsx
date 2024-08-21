import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyles from '../../helpers/commonStyles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CustomText} from '../shared';
import LinearGradient from 'react-native-linear-gradient';

const HomeHeader = () => {
  return (
    <View
      style={[commonStyles.row, commonStyles.p20, commonStyles.alignCenter]}>
      <View style={[commonStyles.w40, commonStyles.justifyBetween]}>
        <Text
          style={[
            commonStyles.fs14,
            commonStyles.medium,
            {color: Colors.grayText},
          ]}>
          Welcome!
        </Text>
        <CustomText
          fontSize={16}
          fontFamily={commonStyles.bold}
          extraStyle={{paddingVertical: 5}}>
          username
        </CustomText>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
