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
    return (
      <View>
        <DynamicTable data={data} />
      </View>
    );
  }

  function HomeScreen({ navigation }) {
    const data = [
      { Level: 1, Time: '03:00', Blinds: '1/2' },
      { level: 2, time: '06:00', blinds: '2/4' },
      { level: 3, time: '09:00', blinds: '4/8' },
      { level: 4, time: '12:00', blinds: '8/16' },
      { level: 5, time: '15:00', blinds: '16/32' },
      { level: 6, time: '18:00', blinds: '32/64' },
      { level: 7, time: '21:00', blinds: '64/128' },
      { level: 8, time: '24:00', blinds: '128/256' },
      { level: 9, time: '27:00', blinds: '256/512' },
      { level: 10, time: '30:00', blinds: '512/1024' },
      { level: '...', time: '+3:00', blinds: '*2' }
    ]
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
