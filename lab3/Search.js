import React, {useState} from 'react';
import {FlatList, Image, View, SafeAreaView, Searchbar} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import Styles from './Styles';

const Products = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const filePath = 'https://dummyjson.com/products';

  const search = () => {
    if (value != '')
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const Item = ({data}) => (
    <View style={Styles.block}>
      <View style={Styles.img}>
        <Image style={Styles.tiny} source={{uri: data.thumbnail}} />
      </View>
      <View style={Styles.content}>
        <View style={{flex: 5}}>
          <Text style={Styles.title}>Title: {data.title}</Text>
          <Text>Desciption: {data.description}</Text>
          <Text>Price: {data.price}</Text>
          <Text style={Styles.discountText}>
            Discount: {data.discountPercentage}
          </Text>
          <Text>Rating: {data.rating}</Text>
          <Text>Stock: {data.stock}</Text>
          <Text>Brand: {data.brand}</Text>
          <Text>Category: {data.category}</Text>
        </View>
        <View style={Styles.fixToText}>
          <Button title="DETAIL" style={Styles.button}>
            <Text style={Styles.buttonText}>DETAIL</Text>
          </Button>
          <Button title="ADD" style={Styles.button}>
            <Text style={Styles.buttonText}>ADD</Text>
          </Button>
          <Button title="DELETE" style={Styles.button}>
            <Text style={Styles.buttonText}>DELETE</Text>
          </Button>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', margin: 20}}>
          Product Search
        </Text>
        <TextInput onChangeText={setValue} placeholder="Type here"></TextInput>
        
        <Text style={{fontSize: 30, fontWeight: 'bold', margin: 20}}>
          Product details
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Products;
