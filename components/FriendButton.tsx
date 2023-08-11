import { Pressable, StyleSheet } from 'react-native';

import { Text } from './Themed';
import { FriendType } from '../types/FriendType';

export default function FriendButton({ friend, isActive, onPress }:{
  friend: FriendType,
  isActive: boolean,
  onPress: () => void;
}) {
  return (
    <Pressable style={{ ...styles.button,
      borderStyle: isActive ? 'solid' : undefined,
      borderWidth: isActive ? 3 : undefined,
      borderColor: isActive ? 'darkmagenta' : undefined,
      backgroundColor: friend.color }}
        onPress={onPress}>
      <Text style={styles.text}>{friend.firstName}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 110,
    margin: 8,
    borderRadius: 6,
    elevation: 3
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25
  },
});