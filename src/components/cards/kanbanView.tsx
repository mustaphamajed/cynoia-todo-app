import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

interface KanbanViewProps {
  tasks: any[] | undefined;
}

const KanbanView: React.FC<KanbanViewProps> = ({tasks}) => {
  const incompleteTasks = tasks?.filter(task => task.status === 'incomplete');
  const completeTasks = tasks?.filter(task => task.status === 'complete');

  return (
    <>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Incomplete</Text>
        {incompleteTasks?.map(task => (
          <View key={task.id} style={styles.taskCard}>
            <Text>{task.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Complete</Text>
        {completeTasks?.map(task => (
          <View key={task.id} style={styles.taskCard}>
            <Text>{task.title}</Text>
          </View>
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
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  taskCard: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
});

export default KanbanView;
