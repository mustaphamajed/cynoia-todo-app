import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  NavigationRoot,
  TaskFormData,
  TaskValidationData,
} from '../../../interfaces';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  createTask,
  fetchTaskById,
  updateTask,
} from '../../../service/projectService';
import {
  BackButton,
  CustomButton,
  CustomInput,
  CustomText,
  ScreenContainer,
} from '../../../components/shared';
import commonStyles from '../../../helpers/commonStyles';
import {Colors} from '../../../helpers/colors';
import {taskInputFields} from '../../../helpers/static';
type Action = {type: string; payload: string};

const formReducer = (state: TaskFormData, action: Action): TaskFormData => {
  return {...state, [action.type]: action.payload};
};
const NewTaskScreen = () => {
  const route = useRoute();
  const isUpdate = route.params?.params.isUpdate;
  const navigation = useNavigation<NavigationRoot>();
  const queryClient = useQueryClient();
  const [isCompleted, setIsCompleted] = useState<boolean>();
  const {
    data: task,
    isLoading,
    error: queryError,
  } = useQuery<any>({
    queryKey: ['task', route.params?.params.taskId],
    queryFn: () => fetchTaskById<any>({taskId: route.params?.params?.taskId}),
    enabled: isUpdate !== undefined && !!isUpdate,
  });

  const [formData, formDispatch] = useReducer(formReducer, {
    title: '',
    description: '',
  });
  useEffect(() => {
    if (!isLoading && task) {
      setIsCompleted(task.status === 'complete');
      formDispatch({type: 'title', payload: task.title});
      formDispatch({type: 'description', payload: task.description});
    }
  }, [task]);

  const [validationErrors, setValidationErrors] = useState<TaskValidationData>({
    title: '',
    description: '',
  });
  const inputChangehandler = useCallback(
    (field: string, inputValue: string) => {
      formDispatch({type: field, payload: inputValue});
      if (
        validationErrors &&
        validationErrors[field as keyof TaskValidationData] &&
        inputValue.trim().length > 0
      ) {
        const updatedErrors = {...validationErrors};
        delete updatedErrors[field as keyof TaskValidationData];
        setValidationErrors(updatedErrors);
      }
    },
    [formData, formDispatch, validationErrors, setValidationErrors],
  );
  const validateForm = () => {
    const requiredFields: (keyof TaskFormData)[] = ['title', 'description'];
    const errors: Partial<TaskValidationData> = {};

    requiredFields.forEach(field => {
      if (!formData[field]?.trim()) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required!`;
      }
    });

    if (formData.title.length < 4) {
      errors['title'] = 'task title must contain at least 4 letters';
    }
    if (formData.description.length < 10) {
      errors['description'] =
        'project decription must contain at least 10 letters';
    }

    setValidationErrors(errors as TaskValidationData);
    return Object.keys(errors).length === 0;
  };
  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['tasks']});
      navigation.goBack();
    },
    onError: error => {
      console.error(error);
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['tasks']});
      navigation.goBack();
    },
    onError: error => {
      console.error(
        'Update Mutation Error:',
        error.response?.data || error.message || error,
      );
    },
  });
  const handleAdd = () => {
    if (validateForm()) {
      if (isUpdate) {
        updateTaskMutation.mutate({
          taskId: task?.id,
          description: formData.description,
          title: formData.title,
          status: isCompleted ? 'complete' : 'incomplete',
        });
      } else {
        mutation.mutate({
          title: formData.title,
          description: formData.description,
          project_id: route.params?.params?.projectId,
        });
      }
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
          <View style={[commonStyles.pt40, {width: 52}]}>
            <BackButton callback={() => navigation.goBack()} />
          </View>

          <CustomText
            fontFamily={{fontFamily: 'Urbanist-Bold'}}
            extraStyle={{alignSelf: 'center'}}
            fontSize={32}
            color={Colors.white}>
            {isUpdate ? 'update task' : 'Create new task'}
          </CustomText>
          <View style={commonStyles.p20}>
            {taskInputFields.map(({type, field, placeholder, label}, index) => {
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
            })}
            {isUpdate && (
              <>
                <CustomText
                  fontSize={18}
                  fontFamily={commonStyles.semiBold}
                  color={Colors.white}>
                  Status
                </CustomText>
                <View
                  style={[
                    commonStyles.row,
                    commonStyles.pt10,
                    commonStyles.alignCenter,
                    commonStyles.justifyBetween,
                  ]}>
                  <CustomText
                    fontSize={18}
                    fontFamily={commonStyles.medium}
                    color={isCompleted ? Colors.lightGreen : Colors.lightRed}>
                    {isCompleted ? 'Complete' : 'Incomplete'}
                  </CustomText>
                  <Switch
                    value={isCompleted}
                    onValueChange={value => setIsCompleted(value)}
                    thumbColor={isCompleted ? Colors.purple : Colors.white}
                    trackColor={{false: '#767577', true: Colors.white}}
                  />
                </View>
              </>
            )}
            <CustomButton
              loading={
                isUpdate ? updateTaskMutation.isPending : mutation.isPending
              }
              onPress={handleAdd}
              text={isUpdate ? 'Update' : 'Add'}
              customStyle={commonStyles.mt20}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default NewTaskScreen;

const styles = StyleSheet.create({});
