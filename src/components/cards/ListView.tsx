import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomText} from '../shared';
import commonStyles from '../../helpers/commonStyles';
import {Colors} from '../../helpers/colors';

const ListView = ({tasks}: {tasks: any}) => {
  return (
    <View style={styles.listContainer}>
      {tasks?.map(task => (
        <View key={task.id} style={styles.listItem}>
          <CustomText fontSize={16} fontFamily={commonStyles.bold}>
            {task.title}
          </CustomText>
          <CustomText
            fontSize={14}
            fontFamily={commonStyles.medium}
            color={
              task.status === 'complete' ? Colors.lightGreen : Colors.lightRed
            }>
            {task.status}
          </CustomText>
        </View>
      ))}
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 24,
  },

  listItem: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 8,
  },
});
