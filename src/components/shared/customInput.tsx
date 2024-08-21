import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyles from '../../helpers/commonStyles';
import {Colors} from '../../helpers/colors';

interface InputProps {
  label?: string;
  type:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'visible-password';
  placeholder: string;
  leftIcon?: React.ReactNode;
  field: string;
  nbLine?: number;
  totalInputs?: any;
  isOptional?: boolean;
  setValue: (field: string, value: string) => void;
  validationError?: string | undefined;
  value?: string;
}

const CustomInput: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  setValue,
  field,
  totalInputs,
  validationError,
  value,
  nbLine,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(prevState => !prevState);
  }, []);
  const handleChange = (text: string) => {
    setValue(field, text);
  };
  return (
    <View style={[commonStyles.my10]}>
      {label && <Text style={[styles.labelStyle]}>{label}</Text>}

      <View
        style={[
          commonStyles.row,
          commonStyles.alignCenter,
          commonStyles.br10,
          commonStyles.mt5,
          commonStyles.px10,
          {
            backgroundColor: Colors.gray98,
            borderColor: validationError ? 'red' : 'gray',
            borderWidth: validationError ? 1 : 0,
          },
        ]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.gray62}
          style={[
            styles.inputStyle,
            commonStyles.medium,
            {color: Colors.darkText},
          ]}
          keyboardType={type}
          secureTextEntry={
            [
              'password',
              'oldPassword',
              'newPassword',
              'confirmPassword',
            ].includes(field) && !isPasswordVisible
              ? true
              : false
          }
          numberOfLines={nbLine}
          multiline={nbLine ? true : false}
          textAlignVertical="top"
          autoCapitalize="none"
          value={value && value}
          defaultValue={totalInputs ? totalInputs[field] : null}
          onChangeText={v => handleChange(v)}
        />
        {['password'].includes(field) && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {/* <MaterialCommunityIcons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color={theme === 'dark' ? colors.white : colors.dark}
            /> */}
          </TouchableOpacity>
        )}
      </View>
      {/* {validationError && <ValidationErrorMessage message={validationError} />} */}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainer: {
    alignContent: 'center',
  },
  inputStyle: {
    flex: 1,
    minHeight: 48,
    fontSize: 18,
    marginLeft: 8,
    paddingTop: 10,
    fontFamily: 'medium',
  },
  labelStyle: {
    fontSize: 18,
    color: Colors.dark,
    fontFamily: 'Urbanist-SemiBold',
  },
});
