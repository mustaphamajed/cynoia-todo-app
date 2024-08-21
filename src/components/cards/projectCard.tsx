import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {CustomText} from '../shared';
import commonStyles from '../../helpers/commonStyles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface ProjectCardProps {
  name: string;
  description: string;
  onPress: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <CustomText
        fontSize={18}
        fontFamily={commonStyles.bold}
        customStyle={commonStyles.pb10}>
        {name}
      </CustomText>
      <CustomText
        fontSize={14}
        nbLine={2}
        fontFamily={commonStyles.medium}
        color={Colors.grayText}>
        {description}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
});

export default ProjectCard;
