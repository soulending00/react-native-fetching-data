import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import data from '../api/data';
import { AntDesign } from '@expo/vector-icons';

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await data.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  console.log(result);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{result.name}</Text>
      <View style={styles.textDetail}>
        <Text style={styles.textRating}>{result.rating}</Text>
        <AntDesign name="staro" style={styles.iconText} />
        <Text style={styles.textReviews}>{result.review_count} Reviews</Text>
      </View>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  textHeader: {
    fontSize: 18,
    marginVertical: 5,
  },
  textDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRating: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  textReviews: {
    fontSize: 14,
    fontStyle: 'italic',
    marginHorizontal: 5,
  },
  iconText: {
    fontSize: 20,
    color: '#000',
  },
  image: {
    width: 300,
    height: 180,
    marginVertical: 10,
    borderRadius: 10,
  },
});
