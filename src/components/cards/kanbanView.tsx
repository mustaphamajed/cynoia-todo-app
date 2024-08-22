import React from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import {Colors} from '../../helpers/colors';
import {CustomText} from '../shared';
import commonStyles from '../../helpers/commonStyles';

interface KanbanViewProps {
  tasks: any[] | undefined;
  onPress: (taskId: number) => void;
}

const KanbanView: React.FC<KanbanViewProps> = ({tasks, onPress}) => {
  const incompleteTasks = tasks?.filter(task => task.status === 'incomplete');
  const completeTasks = tasks?.filter(task => task.status === 'complete');

  return (
    <>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Incomplete</Text>
        {incompleteTasks?.map(task => (
          <Pressable
            key={task.id}
            style={styles.taskCard}
            onPress={() => onPress(task.id)}>
            <CustomText fontSize={16} fontFamily={commonStyles.semiBold}>
              {task.title}
            </CustomText>
          </Pressable>
        ))}
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Complete</Text>
        {completeTasks?.map(task => (
          <Pressable
            key={task.id}
            style={styles.taskCard}
            onPress={() => onPress(task.id)}>
            <CustomText fontSize={16} fontFamily={commonStyles.semiBold}>
              {task.title}
            </CustomText>
          </Pressable>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  kanbanContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    width: 300,
    marginHorizontal: 10,
  },
  columnTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  taskCard: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
});

export default KanbanView;
