import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import commonStyles from '../../helpers/commonStyles';
import {Colors} from '../../helpers/colors';
interface ScreenContainerProps {
  children: ReactNode;
}
const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
}: ScreenContainerProps) => {
  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[Platform.OS === 'ios' && commonStyles.pt70, commonStyles.flex1]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <LinearGradient
        colors={['#8D45BA', '#3a29ab', '#73fafd']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.7, 1.1]}
        style={styles.background}>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
