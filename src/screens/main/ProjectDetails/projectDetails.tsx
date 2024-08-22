import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  PanResponder,
  Animated,
  LayoutChangeEvent,
  GestureResponderEvent,
  Pressable,
} from 'react-native';
import {ScreenContainer} from '../../../components/shared';

interface Task {
  id: string;
  text: string;
}

interface ColumnsState {
  [key: string]: Task[];
}

const initialData: ColumnsState = {
  todo: [
    {id: '1', text: 'Task 1'},
    {id: '2', text: 'Task 2'},
  ],
  inProgress: [
    {id: '3', text: 'Task 3'},
    {id: '5', text: 'Task 5'},
    {id: '6', text: 'Task 6'},
  ],
  done: [{id: '4', text: 'Task 4'}],
};

const ProjectDetails = () => {
  const [columns, setColumns] = useState<ColumnsState>(initialData);
  const [draggingColumn, setDraggingColumn] = useState<string | null>(null);
  const [draggingItem, setDraggingItem] = useState<Task | null>(null);
  const [columnLayout, setColumnLayout] = useState<{
    [key: string]: {x: number; width: number};
  }>({});
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({x: pan.x._value, y: pan.y._value});
      pan.setValue({x: 0, y: 0});
    },
    onPanResponderMove: (e, gestureState) => {
      pan.setValue({x: gestureState.dx, y: gestureState.dy});
    },
    onPanResponderRelease: (e, gestureState) => {
      const {moveX} = gestureState;
      const targetColumnKey = Object.keys(columnLayout).find(key => {
        const {x, width} = columnLayout[key];
        return moveX >= x && moveX <= x + width;
      });

      if (targetColumnKey && draggingItem) {
        const updatedColumns = {...columns};
        const draggedColumnData = updatedColumns[draggingColumn || ''];
        if (draggedColumnData) {
          const filteredItems = draggedColumnData.filter(
            item => item.id !== draggingItem.id,
          );
          updatedColumns[draggingColumn || ''] = filteredItems;
          updatedColumns[targetColumnKey].push(draggingItem);

          setColumns(updatedColumns);
          setDraggingItem(null);
          setDraggingColumn(null);
          pan.flattenOffset();
        }
      } else {
        setDraggingItem(null);
        setDraggingColumn(null);
        pan.flattenOffset();
      }
    },
  });

  const handleLayout = (columnKey: string) => (event: LayoutChangeEvent) => {
    const {x, width} = event.nativeEvent.layout;
    setColumnLayout(prev => ({
      ...prev,
      [columnKey]: {x, width},
    }));
  };

  const onLongPress = (item: Task, columnKey: string) => {
    console.log(columnKey);
    setDraggingItem(item);
    setDraggingColumn(columnKey);
  };

  const renderItem = (item: Task, columnKey: string) => (
    <Animated.View
      key={item.id}
      style={[
        styles.item,
        {
          transform:
            draggingItem?.id === item.id && draggingColumn === columnKey
              ? []
              : pan.getTranslateTransform(),
        },
      ]}
      {...(draggingItem?.id === item.id && draggingColumn === columnKey
        ? {}
        : panResponder.panHandlers)}>
      <Pressable
        onLongPress={() => onLongPress(item, columnKey)}
        onPressOut={() => {
          if (draggingItem?.id === item.id) {
            setDraggingItem(null);
            pan.flattenOffset();
          }
        }}>
        <Text style={styles.text}>{item.text}</Text>
      </Pressable>
    </Animated.View>
  );

  const renderColumn = (title: string, columnKey: string) => (
    <Animated.View
      style={[
        styles.column,
        draggingColumn === columnKey
          ? {transform: pan.getTranslateTransform()}
          : {},
      ]}
      key={columnKey}
      onLayout={handleLayout(columnKey)}>
      <Text style={styles.columnTitle}>{title}</Text>

      <ScrollView>
        {columns[columnKey].map(item => renderItem(item, columnKey))}
      </ScrollView>
    </Animated.View>
  );
  return (
    <ScreenContainer>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {Object.keys(columns).map(columnKey =>
          renderColumn(
            columnKey.charAt(0).toUpperCase() + columnKey.slice(1),
            columnKey,
          ),
        )}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  column: {
    flex: 1,
    marginHorizontal: 8,
  },
  columnTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    height: 60,
    width: 250,
    marginVertical: 8,
    borderRadius: 4,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default ProjectDetails;
