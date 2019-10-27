import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, Text, Card, Button } from 'react-native-elements';
import Firebase from '../config/Firebase';
import moment from 'moment'

class AdminProductDetails extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  
  constructor() {
    super();
    this.state = {
      isLoading: true,
      Post: {},
      key: ''
    };
    
  }

  acceptPost(key) {
    this.setState({
      isLoading: true,
    });

    const updateRef = Firebase.firestore().collection('productsAndServices').doc(key);
    updateRef.update({
      approved: true,
    }).then((docRef) => {
      this.props.navigation.navigate('AdminProductsAndServices');
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  rejectPost(key) {
    this.setState({
      isLoading: true,
    });

    const updateRef = Firebase.firestore().collection('productsAndServices').doc(key);
    updateRef.update({
      approved: false,
    }).then((docRef) => {
      this.props.navigation.navigate('AdminProductsAndServices');
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
      this.setState({
        isLoading: false,
      });
    });
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
                {this.state.product.image ?
                  <Image
                  source={{uri: this.state.product.image}}
                  resizeMode="contain"
                  style={styles.image}
                  />
                : null
                }
              </View>
              <View>
                <Text h5>{moment(this.state.product.date.toDate()).format('MMM Do YYYY, h:mm:ss a')}</Text>
              </View>
              <View>
                <Text h5>{this.state.product.userName}</Text>
              </View>
              <View>
                <Text h5>{this.state.product.location}</Text>
              </View>
              <View>
                <Text h5>{this.state.product.company}</Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View>
                <Text h5>{this.state.product.description}</Text>
              </View>
            </View>
            <View style={styles.detailButton}>
                <Button
                large
                backgroundColor={'#CCCCCC'}
                leftIcon={{name: 'edit'}}
                title='Accept Post'
                buttonStyle={{backgroundColor: 'green'}}
                onPress={() => this.acceptPost(this.state.key)} />
            </View>
            <View style={styles.detailButton}>
                <Button
                large
                backgroundColor={'#999999'}
                color={'#FFFFFF'}
                leftIcon={{name: 'delete'}}
                title='Reject Post'
                buttonStyle={{backgroundColor: 'red'}}
                onPress={() => this.rejectPost(this.state.key)} />
            </View>
          </Card>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
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

export default AdminProductDetails;