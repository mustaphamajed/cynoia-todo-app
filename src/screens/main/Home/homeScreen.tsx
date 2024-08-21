import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HomeHeader} from '../../../components/headers';
import ProjectCard from '../../../components/cards/projectCard';
import commonStyles from '../../../helpers/commonStyles';
import {CustomText, ScreenContainer} from '../../../components/shared';
import {staticProjectData} from '../../../helpers/static';
import {Colors} from '../../../helpers/colors';

const HomeScreen = () => {
  return (
    <ScreenContainer>
      <HomeHeader />
      <View style={commonStyles.px20}>
        <CustomText
          fontFamily={commonStyles.bold}
          fontSize={24}
          color={Colors.white}>
          Projects
        </CustomText>
        <View style={commonStyles.pt20}>
          {staticProjectData.map(({name, id, description}) => {
            return (
              <ProjectCard key={id} name={name} description={description} />
            );
          })}
        </View>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
