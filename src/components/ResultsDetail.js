import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
  const MAX_LENGTH = 25;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.textName}>
        {result.name.length > MAX_LENGTH
          ? result.name.substring(0, MAX_LENGTH) + '...'
          : result.name}
      </Text>
      <View style={styles.textDetail}>
        <Text style={styles.textRating}>{result.rating}</Text>
        <AntDesign name="staro" style={styles.iconText} />
        <Text style={styles.textReviews}>{result.review_count} Reviews</Text>
      </View>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
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
});
