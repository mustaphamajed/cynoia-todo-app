import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useReducer, useState} from 'react';
import {
  BackButton,
  CustomButton,
  CustomInput,
  CustomText,
  ScreenContainer,
} from '../../../components/shared';
import commonStyles from '../../../helpers/commonStyles';
import {useNavigation} from '@react-navigation/native';
import {
  NavigationRoot,
  ProjectFormData,
  ProjectValidationData,
} from '../../../interfaces';
import {projectInputFields} from '../../../helpers/static';
import {Colors} from '../../../helpers/colors';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createProject} from '../../../service/projectService';
type Action = {type: string; payload: string};

const formReducer = (
  state: ProjectFormData,
  action: Action,
): ProjectFormData => {
  return {...state, [action.type]: action.payload};
};
const NewProjectScreen = () => {
  const navigation = useNavigation<NavigationRoot>();
  const queryClient = useQueryClient();

  const [formData, formDispatch] = useReducer(formReducer, {
    name: '',
    description: '',
  });
  const [validationErrors, setValidationErrors] =
    useState<ProjectValidationData>({
      name: '',
      description: '',
    });
  const inputChangehandler = useCallback(
    (field: string, inputValue: string) => {
      formDispatch({type: field, payload: inputValue});
      if (
        validationErrors &&
        validationErrors[field as keyof ProjectValidationData] &&
        inputValue.trim().length > 0
      ) {
        const updatedErrors = {...validationErrors};
        delete updatedErrors[field as keyof ProjectValidationData];
        setValidationErrors(updatedErrors);
      }
    },
    [formData, formDispatch, validationErrors, setValidationErrors],
  );
  const validateForm = () => {
    const requiredFields: (keyof ProjectFormData)[] = ['name', 'description'];
    const errors: Partial<ProjectValidationData> = {};

    requiredFields.forEach(field => {
      if (!formData[field]?.trim()) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required!`;
      }
    });

    if (formData.name.length < 4) {
      errors['name'] = 'project name must contain at least 4 letters';
    }
    if (formData.description.length < 10) {
      errors['name'] = 'project decription must contain at least 10 letters';
    }

    setValidationErrors(errors as ProjectValidationData);
    return Object.keys(errors).length === 0;
  };

  const mutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['projects']});
      navigation.goBack();
    },
    onError: error => {
      console.error(error);
    },
  });
  const handleAdd = () => {
    if (validateForm()) {
      mutation.mutate(formData);
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

          <CustomText
            fontFamily={{fontFamily: 'Urbanist-Bold'}}
            extraStyle={{alignSelf: 'center'}}
            fontSize={32}
            color={Colors.white}>
            Create new project
          </CustomText>
          <View style={commonStyles.p20}>
            {projectInputFields.map(
              ({type, field, placeholder, label}, index) => {
                return (
                  <CustomInput
                    placeholder={placeholder}
                    key={index}
                    field={field}
                    label={label}
                    labelTextColor={Colors.white}
                    totalInputs={formData}
                    nbLine={field === 'description' ? 3 : 1}
                    setValue={inputChangehandler}
                    type={type}
                    validationError={validationErrors?.[field]}
                  />
                );
              },
            )}

            <CustomButton
              loading={mutation.isPending}
              onPress={handleAdd}
              text="Add"
              customStyle={commonStyles.mt20}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default NewProjectScreen;

const styles = StyleSheet.create({});
