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
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../../helpers/commonStyles';
import {
  BackButton,
  CustomButton,
  CustomInput,
  CustomText,
  ScreenContainer,
} from '../../../components/shared';
import {Colors} from '../../../helpers/colors';
import {loginInputFields} from '../../../helpers/static';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoot} from '../../../interfaces';
import {ROUTE_NAMES} from '../../../helpers/routes';
import {useMutation} from '@tanstack/react-query';
import {isValidPassword} from '../../../helpers/utils';
import {AuthContext} from '../../../providers/authProvider';
import {FormData, ValidationData} from '../../../interfaces/auth.interfaces';

type Action = {type: string; payload: string};

const formReducer = (state: FormData, action: Action): FormData => {
  return {...state, [action.type]: action.payload};
};
const RegisterScreen = () => {
  const navigation = useNavigation<NavigationRoot>();
  const {register, authLoading} = useContext(AuthContext);

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

    if (formData.username.length < 4) {
      errors['username'] = 'username must contain at least 4 letters';
    }

    if (!isValidPassword(formData.password)) {
      errors['password'] = 'weak password';
    }
    setValidationErrors(errors as ValidationData);
    return Object.keys(errors).length === 0;
  };
  const handleRegister = () => {
    if (validateForm()) {
      register(
        {username: formData.username, password: formData.password},
        () => {
          navigation.navigate(ROUTE_NAMES.AUTH.LOGIN);
        },
      );
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
              onPress={handleRegister}
              text="Register"
              customStyle={commonStyles.mt20}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
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
