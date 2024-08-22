import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useContext, useReducer, useState} from 'react';
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

import {AuthContext} from '../../../providers/authProvider';
import {FormData, ValidationData} from '../../../interfaces/auth.interfaces';

type Action = {type: string; payload: string};
export const formReducer = (state: FormData, action: Action): FormData => {
  return {...state, [action.type]: action.payload};
};
const LoginScreen = () => {
  const navigation = useNavigation<NavigationRoot>();
  const {login, authLoading} = useContext(AuthContext);
  const [formData, formDispatch] = useReducer(formReducer, {
    username: '',
    password: '',
  });
  const [validationErrors, setValidationErrors] = useState<ValidationData>({
    username: '',
    password: '',
  });
  const inputChangehandler = useCallback(
    (field: string, inputValue: string) => {
      formDispatch({type: field, payload: inputValue});

      if (
        validationErrors &&
        validationErrors[field as keyof ValidationData] &&
        inputValue.trim().length > 0
      ) {
        const updatedErrors = {...validationErrors};
        delete updatedErrors[field as keyof ValidationData];
        setValidationErrors(updatedErrors);
      }
    },
    [formData, formDispatch, validationErrors, setValidationErrors],
  );

  const validateForm = () => {
    const requiredFields: (keyof FormData)[] = ['username', 'password'];
    const errors: Partial<ValidationData> = {};

    requiredFields.forEach(field => {
      if (!formData[field]?.trim()) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required!`;
      }
    });
    setValidationErrors(errors as ValidationData);
    return Object.keys(errors).length === 0;
  };
  const handleLogin = () => {
    if (validateForm()) {
      login({username: formData.username, password: formData.password});
    }
  };
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
                    totalInputs={formData}
                    setValue={inputChangehandler}
                    type={type}
                    validationError={validationErrors?.[field]}
                  />
                );
              },
            )}
            <CustomButton
              loading={authLoading}
              onPress={handleLogin}
              text="Login"
              customStyle={commonStyles.mt20}
            />

            <Pressable
              style={styles.registerButton}
              onPress={() => navigation.navigate(ROUTE_NAMES.AUTH.REGISTER)}>
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
