import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import axios from 'axios'
const Home = () => {
  const [data, setData] = useState([0]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')

      setData(res.data);

    }
    getData();
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView style={{ margin: 40 }}>
        {data && data.map((item: any, index: any) => (
          <View key={index} style={{
            marginTop: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.00,

            elevation: 1,
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10}}>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10}}>
            <Text>{item.email}</Text>
            <Text>{item.username}</Text>

            </View>
          </View>
        ))}
      </ScrollView>
    </View>

  );
};
export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
