import React, {useState} from 'react';
import {FlatList, Image, View, SafeAreaView} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';
import Styles from './Styles';

const searchProduct = () => {
    const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  let filePath = 'https://dummyjson. com/products';

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

  
  
    const Item = ({data}) => (
      <View style={Styles.block}>
        <View style={Styles.img}>
          <Image style={Styles.tiny} source={{uri: data.thumbnail}} />
        </View>
        <View style={Styles.content}>
          <View>
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
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', margin: 20}}>
          Search Products
        </Text>
        <Searchbar placeholder='Type here'></Searchbar>
      </View>
      
    </SafeAreaView>
  );
  
};
export default searchProduct;
