import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Lottie from 'lottie-react-native';
import Header from './src/assets/components/header';
import Empty from './src/assets/components/Empy';
import Task from './src/assets/components/task';
import Input from './src/assets/components/input';

export default function App() {

  const [data, setData] = useState([])

  const submitHandler = (value) => {

    setData((prevTask) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTask
      ];

    });

  };

  const deleteItem = (key) => {
    setData(prevTask =>{
      return prevTask.filter((task) => task.key!= key );
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => <Empty />}
        renderItem={({ item }) => <Task item={item} deleteItem={deleteItem} />}
      />

      <View>

        <Input submitHandler={submitHandler} />
      </View>

      <StatusBar style="ligth" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingVertical: 60,
  },

  title: {
    fontSize: 20,
    marginBottom: 400,
  }

});


