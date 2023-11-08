import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const { searchAPI, results, error } = useFetch();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={() => searchAPI(search)}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultByPrice('$')}
        />
        <ResultsList title="Bit Priceier" results={filterResultByPrice('$$')} />
        <ResultsList title="Big Spender" results={filterResultByPrice('$$$')} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: '#c40c24',
    backgroundColor: '#c9858e',
    textAlign: 'center',
    padding: 15,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 20,
  },
});

export default SearchScreen;
