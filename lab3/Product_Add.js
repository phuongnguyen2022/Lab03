import React, {useState} from 'react';
import {Text, TextInput, View,Alert} from 'react-native';
import {Button} from 'react-native-paper';
import Styles from './Styles';

const NewProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');
  handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(res => res.json())
      .then(console.log);
    Alert.alert('Add sucessfull');
  };

  return (
    <View style={Styles.block}>
      <View style={Styles.content}>
        <Text style={{fontSize: 30, fontWeight: 'bold', margin: 20}}>
          Add a Product
        </Text>
        <Text style={{fontWeight: 'bold'}}>Title</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter title"
          onChangeText={setTitle}
        />
        <Text style={{fontWeight: 'bold'}}>Desciption</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Desciption"
          onChangeText={setDescription}
        />
        <Text style={{fontWeight: 'bold'}}>Price</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Price"
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <Text style={{fontWeight: 'bold'}}>Discount Percentage</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Discount Percentage"
          onChangeText={setDiscountPercentage}
          keyboardType="numeric"
        />
        <Text style={{fontWeight: 'bold'}}>Rating</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter rating"
          onChangeText={setRating}
        />
        <Text style={{fontWeight: 'bold'}}>Stock</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter stock"
          onChangeText={setStock}
        />
        <Text style={{fontWeight: 'bold'}}>Brand</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter brand"
          onChangeText={setBrand}
        />
        <Text style={{fontWeight: 'bold'}}>Category</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter category"
          onChangeText={setCategory}
        />
        <Text style={{fontWeight: 'bold'}}>Images</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter images URL(s)"
          onChangeText={setImages}
        />
        <Button onPress={this.handleSubmit} style={Styles.button}>
          <Text style={Styles.buttonText}>SUBMIT</Text>
        </Button>
      </View>
    </View>
  );
};

export default NewProduct;
