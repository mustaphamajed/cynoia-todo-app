import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const ProjectDetails = () => {
  const route = useRoute();
  console.log(route);
  return (
    <View>
      <Text>ProjectDetails</Text>
    </View>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({});
