/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, Button, View } from 'react-native';
import DynamicTable from './DynamicTable/DynamicTable';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const MyComponent = () => {

  function PreviewBlindsStructureScreen({ route, navigation }) {
    const { data } = route.params;
    let list = [];

    let startTime = [ 0, 0 ];
    let initialBlinds = [1, 2];

    for (let x = 0; x < 10; x++)
    {
      let level = x + 1;
      let hour = ((data.duration.hour * level) + startTime[0]);
      let minute = ((data.duration.minute * level) + startTime[1]);
      if (hour.toString().length == 1)
      {
        hour = "0" + hour;
      }
      if (minute.toString().length == 1)
      {
        minute = "0" + minute;
      }
      let time = hour.toString() + ":" + minute.toString();
      let baseBlind = data.interval ** x;
      let blind1 = baseBlind * initialBlinds[0];
      let blind2 = baseBlind * initialBlinds[1];
      let blinds = blind1 + "/" + blind2;
      let newItem = { Level: level, Time: time, Blinds: blinds };
      list.push(newItem);
    }
    let hour = data.duration.hour;
    let minute = data.duration.minute;
    if (minute.toString().length == 1)
    {
      minute = "0" + minute;
    }

    let endItem = { Level: '...', Time: ('+' + hour + ':' + minute), Blinds: ('*' + data.interval)}
    list.push(endItem);

    return (
      <View>
        <DynamicTable data={list} />
      </View>
    );
  }

  function HomeScreen({ navigation }) {
    const data = { duration: { hour: 3, minute: 0 }, interval: 2};
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
        <Text>Juan Rafael Rivera</Text>
        <Text style={{ marginBottom: 10 }}>Preview Blinds Structure</Text>
        <Button
          title="Preview Blinds Structure"
          onPress={() => navigation.navigate('PreviewBlindsStructure', 
          { data: data })}
        />
      </View>
    );
  }  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="PreviewBlindsStructure" component={PreviewBlindsStructureScreen} options={{ title: 'Preview Blinds Structure' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyComponent;
