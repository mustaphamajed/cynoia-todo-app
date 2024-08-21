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
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../../helpers/routes';
import {NavigationRoot} from '../../../interfaces';
import {loginInputFields} from '../../../helpers/static';
import LinearGradient from 'react-native-linear-gradient';
import {
  CustomButton,
  CustomInput,
  CustomText,
  ScreenContainer,
} from '../../../components/shared';
import commonStyles from '../../../helpers/commonStyles';
import {Colors} from '../../../helpers/colors';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationRoot>();
  return (
    <ScreenContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={commonStyles.flex1}
          showsVerticalScrollIndicator={false}>
          <View
            style={[
              commonStyles.px20,
              commonStyles.justifyCenter,
              {flex: 0.7},
            ]}>
            <CustomText
              fontFamily={{fontFamily: 'Urbanist-Bold'}}
              fontSize={32}
              color={Colors.white}>
              Welcome Back!
            </CustomText>
            <CustomText
              fontFamily={{fontFamily: 'Urbanist-Bold'}}
              fontSize={32}
              color={Colors.white}>
              Log in to continue managing your tasks efficiently.
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
              text="Login"
              customStyle={commonStyles.mt20}
            />

            <Pressable
              style={styles.registerButton}
              onPress={() =>
                navigation.navigate(ROUTE_NAMES.STACK.AUTH, {
                  screen: ROUTE_NAMES.AUTH.REGISTER,
                })
              }>
              <Text style={[styles.registerButtonText, {color: Colors.white}]}>
                New on our platform?
                <Text style={{color: Colors.blue}}> Create an account</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  registerButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 30,
  },
  registerButtonText: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 16,

    textAlign: 'center',
  },
});
