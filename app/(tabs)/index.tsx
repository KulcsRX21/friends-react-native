import { StyleSheet} from 'react-native';
import { FlatList } from 'react-native';
import { useState } from 'react';

import { View } from '../../components/Themed';
import FriendDetails from '../../components/FriendDetails';
import FriendButton from '../../components/FriendButton';

export default function TabOneScreen() {
  const [activeFriend, setActiveFriend] = useState(FRIENDS[0]);
  
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={FRIENDS}
          renderItem={(friend) =>
            <FriendButton friend={friend.item}
              isActive={friend.item.color === activeFriend.color}
              onPress={() => setActiveFriend(friend.item)}/>}
          keyExtractor={(friend) => friend.color}
          contentContainerStyle={{ alignItems: 'center' }}
          numColumns={3}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <FriendDetails friend={activeFriend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  separator: {
    marginVertical: 10,
    height: 2,
    width: '95%',
  }
});

const FRIENDS = [
  {
    firstName: 'Rachel',
    lastName: 'Green',
    color: 'lightgreen',
    emoji: '🤩',
    introduction: "Your typical fashion enthusiast  and shopping aficionado. Formerly known for my lavish lifestyle and shoe obsession, I decided to take control of my destiny and embrace a new journey. From serving coffee at Central Perk to navigating the ups and downs of love and friendship with my amazing pals, life's been a rollercoaster ride. Join me as I chase my dreams, one stylish step at a time!"
  },
  {
    firstName: 'Monica',
    lastName: 'Geller',
    color: '#FF6666',
    emoji: '😊',
    introduction: "Total clean freak, chef extraordinaire, and competitive to a fault. I've spent my fair share of time searching for love, pursuing my culinary passion, and making sure everything's just perfect. With a dash of control freak and a sprinkle of vulnerability, my journey with my quirky group of friends is always spiced with laughter and the warmth of a well-cooked meal."
  },
  {
    firstName: 'Phoebe',
    lastName: 'Buffay',
    color: 'yellow',
    emoji: '🤭',
    introduction: "Quirky musician, free spirit, and bearer of the oddest past. My life's been a wild journey of busking, songwriting, and uncovering the hidden corners of my eccentric life story. With my eclectic group of pals, every moment is a chance to sing, laugh, and embrace the wonderfully weird twists of fate."
  },
  {
    firstName: 'Ross',
    lastName: 'Geller',
    color: 'pink',
    emoji: '😃',
    introduction: "Paleontologist by day, hopeless romantic by night. Life's taken me through divorces, unconventional tans, and a relentless quest for \"the one.\" From dinos to failed marriages, my adventures with my hilarious bunch of friends have shown me that life's full of surprises, and that a good sense of humor is, well, kinda essential."
  },
  {
    firstName: 'Chandler',
    lastName: 'Bing',
    color: 'lightskyblue',
    emoji: '😁',
    introduction: "Could I be any more Chandler Bing? Sarcasm's my defense mechanism, and I've got a corporate job that's as exciting as it sounds. My journey involves on-off relationships, a bunch of dead-end jobs, and a lot of personal growth masked by humor. Join me and my buddies as I navigate through life's awkward moments and try to find my true calling."
  },
  {
    firstName: 'Joey',
    lastName: 'Tribbiani',
    color: 'orange',
    emoji: '😉',
    introduction: "How you doin'? Joey Tribbiani in the house – aspiring actor, ultimate food lover, and possibly the most charming guy you'll ever meet. My quest for fame, fortune, and romance might not always go as planned, but with my loyal friends by my side, every day's an adventure. So grab a pizza, kick back, and enjoy the ride!"
  }
];
