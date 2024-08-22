import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListView = ({tasks}: {tasks: any}) => {
  return (
    <View style={styles.listContainer}>
      {tasks?.map(task => (
        <View key={task.id} style={styles.listItem}>
          <Text>{task.title}</Text>
          <Text>{task.status}</Text>
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
