import React, { Component } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import Firebase from '../config/Firebase'
import {  ListItem, Button, Icon, Card, Text } from 'react-native-elements';
import { connect } from 'react-redux'
import moment from 'moment'

class ProductsAndServices extends Component {
  
    //Connects to the firebase collection
    constructor() {
        super();
        this.ref = Firebase.firestore().collection('productsAndServices');
        this.unsubscribe = null;
        this.state = {
        isLoading: true,
        boards: []
        };
    }
    //Navigation Header
    static navigationOptions = {
        title: 'Products/Servies',
    };

    //Fetch firestore data
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    //Pushes documents fetched from firestore to an array
    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
        const { title, description, type, date, approved } = doc.data()
        boards.push({
            key: doc.id,
            title,
            approved,
            description,
            date: moment(date.toDate()).format('MMM Do YYYY, h:mm:ss a')
        });
        });
        this.setState({
        boards,
        isLoading: false,
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
        if(!this.state.boards.filter(item => item.approved === false).length){
            return(
                <View style={styles.activity}>
                    <Text h3>No Products/Services for approval</Text>
                </View>
            )
        }  

        return (
        <ScrollView style={styles.container}>
            {
                
                this.state.boards.filter(item => item.approved === false).map((item, i) => (
                    <Card style={styles.container}>
                    <View style={styles.subContainer}>
                        <View>
                            <Text h3>{item.title}</Text>
                        </View>
                        <View>
                            <Text h5>{item.date}</Text>
                        </View>
                        <View>
                            <Text h5>By member Tharinda</Text>
                        </View>
                    </View>
                    <View style={styles.subContainer}>
                        <Image
                        source={require('../assets/Food1.jpg')}
                        resizeMode="contain"
                        style={styles.image}
                        />
                    </View>
                    <View style={styles.detailButton}>
                        <Button
                        medium
                        backgroundColor={'#007bff'}
                        color={'#007bff'}
                        title='View'
                        buttonStyle={{backgroundColor: '#007bff'}}
                        onPress={() => {
                            this.props.navigation.navigate('AdminProductDetails', {
                            productId: item.key,
                        });}} />
                    </View>

                </Card>
                ))
            }
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1
    },
    subContainer: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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
    heading: {
        textAlign: 'center',
        fontSize: 22
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
    addButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    add: {
        marginTop: 10,
        marginRight: 2,
        alignSelf: 'flex-end',
        marginBottom: 5,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1,
        borderRadius: 5,
        width: 60,
    },
    image: {
        width: 150,
        height: 150,
        // marginTop: 10,
        alignSelf: "center",
        paddingTop: 10
    },
})


//Map user state to properties 
const mapStateToProps = state => {
  return{
      user: state.user
  }
}

export default connect(mapStateToProps)(ProductsAndServices)
