import { StyleSheet } from 'react-native';

import { Text, View } from "./Themed";
import { FriendType } from "../types/FriendType";

export default function FriendDetails({ friend }:{
  friend: FriendType
}) {
  const fullName = friend.firstName + ' ' + friend.lastName;
  
  return (
    <View style={{ ...styles.container, backgroundColor: friend.color }}>
      <Text style={styles.helloText}>Hey, I'm {fullName} {friend.emoji}</Text>
      <Text style={styles.introduction}>{friend.introduction}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 14
  },
  helloText: {
    fontSize: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25
  },
  introduction: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    lineHeight: 28
  }
});