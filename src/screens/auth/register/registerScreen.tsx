import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../../helpers/commonStyles';
import {
  BackButton,
  CustomButton,
  CustomInput,
  CustomText,
} from '../../../components/shared';
import {Colors} from '../../../helpers/colors';
import {loginInputFields} from '../../../helpers/static';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoot} from '../../../interfaces';
import {ROUTE_NAMES} from '../../../helpers/routes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationRoot>();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <LinearGradient
        colors={['#8D45BA', '#3a29ab', '#73fafd']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.7, 1.1]}
        style={styles.background}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={commonStyles.flex1}
            showsVerticalScrollIndicator={false}>
            <View style={commonStyles.pt40}>
              <BackButton callback={() => navigation.goBack()} />
            </View>
            <View
              style={[
                commonStyles.px20,
                commonStyles.justifyCenter,
                {flex: 0.5},
              ]}>
              <CustomText
                fontFamily={{fontFamily: 'Urbanist-Bold'}}
                fontSize={32}
                color={Colors.white}>
                Create an account to start organizing your day
              </CustomText>
            </View>
            <View style={[commonStyles.flex1, commonStyles.px20]}>
              {loginInputFields.map(
                ({type, field, placeholder, label}, index) => {
                  return (
                    <CustomInput
                      placeholder={placeholder}
                      key={index}
                      field={field}
                      label={label}
                      labelTextColor={Colors.white}
                      //   totalInputs={formData}
                      setValue={() => console.log('object')}
                      type={type}
                      //   validationError={validationErrors?.[field]}
                    />
                  );
                },
              )}
              <CustomButton
                loading={false}
                onPress={() =>
                  navigation.navigate(ROUTE_NAMES.STACK.MAIN, {
                    screen: ROUTE_NAMES.MAIN.HOME,
                  })
                }
                text="Register"
                customStyle={commonStyles.mt20}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
