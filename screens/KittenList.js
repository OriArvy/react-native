import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native';
import Cat from '../components/Cat/Cat'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import OfflineNotice from '../components/OfflineNotice/OfflineNotice'

export default function KittenList() {
  const navigation = useNavigation();
  let idNum = 0
  const [numberOfCatsToLoad, setNumberOfCatsToLoad] = useState('')
  const catNames = [
    "Abby", "Angel", "Annie", "Baby", "Bailey", "Bandit", "Bear", "Bella", "Bob", "Boo", "Boots", "Bubba", "Buddy", "Buster", "Cali", "Callie", "Casper", "Charlie",
    "Chester", "Chloe", "Cleo", "Coco", "Cookie", "Cuddles", "Daisy", "Dusty", "Felix", "Fluffy", "Garfield", "George", "Ginger", "Gizmo", "Gracie", "Harley",
    "Jack", "Jasmine", "Jasper", "Kiki", "Kitty", "Leo", "Lilly", "Lily", "Loki", "Lola", "Lucky", "Lucy", "Luna", "Maggie", "Max", "Mia", "Midnight", "Milo",
    "Mimi", "Miss kitty", "Missy", "Misty", "Mittens", "Molly", "Muffin", "Nala", "Oliver", "Oreo", "Oscar", "Patches", "Peanut", "Pepper", "Precious", "Princess",
    "Pumpkin", "Rascal", "Rocky", "Sadie", "Salem", "Sam", "Samantha", "Sammy", "Sasha", "Sassy", "Scooter", "Shadow", "Sheba", "Simba", "Simon", "Smokey",
    "Snickers", "Snowball", "Snuggles", "Socks", "Sophie", "Spooky", "Sugar", "Tiger", "Tigger", "Tinkerbell", "Toby", "Trouble", "Whiskers", "Willow", "Zoe", "Zoey"
  ]

  const DATA = []
  for (let i = 0; i < numberOfCatsToLoad; i++ ) {
    const assignRandomName = catNames[Math.floor(Math.random() * catNames.length)]
    const imageNumber = Math.floor(Math.random() * (17 - 1) + 1);
    let image ={ uri: `https://placekitten.com/300/300?image=${imageNumber}`};
    DATA.push(
      {
        id: idNum += 1,
        title: assignRandomName,
        image: image,
      }
    )
  }

  function fetch30Cats() {
    setNumberOfCatsToLoad(30)
  }
  function fetch50Cats() {
    setNumberOfCatsToLoad(50)
  }
  function fetch100Cats() {
    setNumberOfCatsToLoad(100)
  }

  return (
      <View style={styles.container}>
          <OfflineNotice />
        <View style={styles.navbar}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter number of cats to display"
            onChangeText={numberOfCatsToLoad => setNumberOfCatsToLoad(numberOfCatsToLoad)}
          />
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonInside} onPress={fetch30Cats} >
                <Text style={{fontSize: 16, color: 'white'}}>30</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonInside} onPress={fetch50Cats} >
                <Text style={{fontSize: 16, color: 'white'}}>50</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonInside} onPress={fetch100Cats} >
                <Text style={{fontSize: 16, color: 'white'}}>100</Text>
            </TouchableOpacity>
        </View>
        <Pressable >
            <FlatList 
            data={Object.keys(DATA)}
            renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate('Kitten Info')} style={styles.catBox}>
                <Cat id={DATA[item].id} title={DATA[item].title} image={DATA[item].image} navigation={navigation} />
            </TouchableOpacity>
            }
            keyExtractor={item => DATA[item].id.toString() }
            
            />
        </Pressable>
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navbar: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttons: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    paddingHorizontal: 40,
    marginHorizontal: 16
  },
  buttonInside: {
    backgroundColor: '#2196F3',
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16
  },
  catBox: {
    height: 350,
    width: 350,
    backgroundColor:'#E0E0E0',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

