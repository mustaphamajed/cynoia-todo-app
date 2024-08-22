import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const NewTaskScreen = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>NewTaskScreen</Text>
    </View>
  );
};

export default NewTaskScreen;

const styles = StyleSheet.create({});
