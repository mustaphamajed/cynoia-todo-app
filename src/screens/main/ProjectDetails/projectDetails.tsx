import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import {
  BackButton,
  CustomText,
  ScreenContainer,
} from '../../../components/shared';
import {useNavigation, useRoute} from '@react-navigation/native';
import commonStyles from '../../../helpers/commonStyles';
import {NavigationRoot} from '../../../interfaces';
import {Colors} from '../../../helpers/colors';
import {useQuery} from '@tanstack/react-query';
import {fetchProjectsById} from '../../../service/projectService';
import KanbanView from '../../../components/cards/kanbanView';
import {ListView} from '../../../components/cards';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProjectDetails = () => {
  const navigation = useNavigation<NavigationRoot>();
  const {params} = useRoute();
  const {
    data: tasks,
    isLoading,
    error: queryError,
  } = useQuery<any[]>({
    queryKey: ['tasks'],
    queryFn: () =>
      fetchProjectsById<any>({projectId: params?.params?.projectId}),
  });

  const [isKanbanView, setIsKanbanView] = useState(true); // State to toggle view mode

  const toggleView = () => {
    setIsKanbanView(!isKanbanView);
  };

  return (
    <ScreenContainer>
      <View
        style={[
          commonStyles.px20,
          commonStyles.pt40,
          commonStyles.row,
          commonStyles.alignCenter,
          commonStyles.justifyBetween,
        ]}>
        <BackButton callback={() => navigation.goBack()} />
        <CustomText
          color={Colors.white}
          fontSize={24}
          fontFamily={commonStyles.bold}>
          {params?.params?.projectName}
        </CustomText>
        <Octicons
          name="plus"
          size={28}
          color={Colors.white}
          onPress={() => navigation.navigate(ROUTE_NAMES.MAIN.NEW_PROJECT)}
        />
      </View>
      <View>
        <View
          style={[
            commonStyles.p20,
            commonStyles.row,
            commonStyles.alignCenter,
            commonStyles.justifyBetween,
          ]}>
          <CustomText
            color={Colors.white}
            fontSize={26}
            fontFamily={commonStyles.bold}>
            All Tasks
          </CustomText>
          <Pressable onPress={toggleView}>
            <MaterialIcons
              name={isKanbanView ? 'view-list' : 'view-kanban'}
              size={28}
              color={Colors.white}
            />
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.container}>
        {isKanbanView ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.kanbanContainer}>
            <KanbanView tasks={tasks} />
          </ScrollView>
        ) : (
          <ListView tasks={tasks} />
        )}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  kanbanContainer: {
    flexDirection: 'row',
  },
  column: {
    width: 300,
    marginHorizontal: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProjectDetails;
