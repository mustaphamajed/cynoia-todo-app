import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {HomeHeader} from '../../../components/headers';
import ProjectCard from '../../../components/cards/projectCard';
import commonStyles from '../../../helpers/commonStyles';
import {CustomText, ScreenContainer} from '../../../components/shared';
import {staticProjectData} from '../../../helpers/static';
import {Colors} from '../../../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoot} from '../../../interfaces';
import {ROUTE_NAMES} from '../../../helpers/routes';
import {useSelector} from 'react-redux';
import {useQuery} from '@tanstack/react-query';
import {fetchProjects} from '../../../service/projectService';
import Octicons from 'react-native-vector-icons/Octicons';

interface Project {
  id: number;
  name: string;
  description: string;
}
const HomeScreen = () => {
  const navigation = useNavigation<NavigationRoot>();

  const {
    data,
    isLoading,
    error: queryError,
  } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => fetchProjects<Project>(),
  });

  return (
    <ScreenContainer>
      <HomeHeader />
      <View style={commonStyles.px20}>
        <View style={[commonStyles.row, commonStyles.justifyBetween]}>
          <CustomText
            fontFamily={commonStyles.bold}
            fontSize={22}
            color={Colors.white}>
            Projects
          </CustomText>
          <Octicons
            name="plus"
            size={28}
            color={Colors.white}
            onPress={() => navigation.navigate(ROUTE_NAMES.MAIN.NEW_PROJECT)}
          />
        </View>
        <View style={commonStyles.pt20}>
          {data?.map(({name, id, description}) => {
            return (
              <ProjectCard
                key={id}
                name={name}
                description={description}
                onPress={() =>
                  navigation.navigate(ROUTE_NAMES.STACK.MAIN, {
                    screen: ROUTE_NAMES.MAIN.PROJECT_DETAILS,
                    params: {
                      projectId: id.toString(),
                    },
                  })
                }
              />
            );
          })}
        </View>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
