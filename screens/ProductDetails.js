import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, Text, Card, Button } from 'react-native-elements';
import Firebase from '../config/Firebase';
import moment from 'moment'

class ProductDetails extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  
  constructor() {
    super();
    this.state = {
      isLoading: true,
      hire: {},
      key: ''
    };
    
  }
  
  //Connects to firebase collection and fetches data
  componentDidMount() {
    const { navigation } = this.props;
    const ref = Firebase.firestore().collection('productsAndServices').doc(navigation.getParam('productId'));
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          product: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });

  }

  render() {
    //Loading screen
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <ScrollView>
          <Card style={styles.container}>
            <View style={styles.subContainer}>
              <View>
                <Text h3>{this.state.product.title}</Text>
                <Image
                source={require("../assets/Food1.jpg")}
                resizeMode="contain"
                style={styles.image}
                />
              </View>
              <View>
                <Text h5>{moment(this.state.product.date.toDate()).format('MMM Do YYYY, h:mm:ss a')}</Text>
              </View>
              <View>
                <Text h5>{this.state.product.location}</Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View>
                <Text h5>Company: {this.state.product.company}</Text>
              </View>
              <View>
                <Text h5>{this.state.product.description}</Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View>
                <Text h5>Comments</Text>
              </View>
            </View>
          </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20
},
subContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
},
activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
},
    detailButton: {
    marginTop: 10
},
image: {
    width: 150,
    height: 150,
    // marginTop: 10,
    alignSelf: "center"
},
})

export default ProductDetails;