import React from 'react';
import { FlatList, Text, View } from 'react-native';

const DynamicTable = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', padding: 10 }}>
      {Object.entries(item).map(([key, value], index) => (
        <Text key={index} 
        style={{ flex: 1, textAlign: index === 0 ? 'left' : index === 1 ? 'center' : 'right' }}>
          {value}
        </Text>
      ))}
    </View>
  );

  const header = (
    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: 'lightgray' }}>
      {Object.keys(data[0]).map((key, index) => (
        <Text key={index} 
          style={{ flex: 1, textAlign: index === 0 ? 'left' : index === 1 ? 'center' : 'right' }}>
          {key}
        </Text>
      ))}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={header}
    />
  );
};

export default DynamicTable;