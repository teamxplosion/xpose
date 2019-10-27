import React, { Component } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import Firebase from '../config/Firebase'
import {  ListItem, Button, Icon, Card, Text } from 'react-native-elements';
import { connect } from 'react-redux'
import moment from 'moment'

class EnvironmentalIssues extends Component {
  
    //Connects to the firebase collection
    constructor() {
        super();
        this.ref = Firebase.firestore().collection('environment');
        this.unsubscribe = null;
        this.state = {
            isLoading: true,
            boards: [],
            filterPosts: false
        };
    }
    //Navigation Header
    static navigationOptions = {
        title: 'Environmental Issues',
    };

    //Fetch firestore data
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    //Pushes documents fetched from firestore to an array
    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
        const { title, description, date, image, video, location, userId, approved } = doc.data()
        boards.push({
            key: doc.id,
            title,
            description,
            approved,
            image,
            location,
            date: moment(date.toDate()).format('MMM Do YYYY, h:mm:ss a')
        });
        });
        this.setState({
        boards,
        isLoading: false,
    });
    }

    addIssue(){

    }

    issuesNearMe() {
        this.setState({
          filterPosts: !this.state.filterPosts,
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
        <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.add} onPress={
                    this.addIssue(this.props.user.id)
                    }>
                    <Text style={styles.addButtonText}>+Add</Text>
                </TouchableOpacity>
                {
                    this.state.filterPosts === false ? 
                    <View style={styles.nearMe}>
                        <Button
                        medium
                        backgroundColor={'#28a745'}
                        color={'#28a745'}
                        title='Near Me'
                        buttonStyle={{backgroundColor: '#28a745'}}
                        onPress={() => this.issuesNearMe()
                        } />
                    </View> : 
                    <View style={styles.nearMe}>
                        <Button
                        medium
                        backgroundColor={'#28a745'}
                        color={'#28a745'}
                        title='All Posts'
                        buttonStyle={{backgroundColor: '#28a745'}}
                        onPress={() => this.issuesNearMe()
                        } />
                    </View>
                }
                
            {   
                this.state.filterPosts === false ?
                    this.state.boards.filter(item => item.approved === true).map((item, i) => (
                        <Card style={styles.container}>
                        <View style={styles.subContainer}>
                            <View>
                                <Text h3>{item.title}</Text>
                            </View>
                            <View>
                                <Text h5>{item.date}</Text>
                            </View>
                            <View>
                                <Text h5>By member Nipuni</Text>
                            </View>
                        </View>
                        <View style={styles.subContainer}>
                            <Image
                            source={{uri: item.image}}
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
                                this.props.navigation.navigate('EnvironmentalIssueDetails', {
                                issueId: item.key,
                            });}} />
                        </View>
                    </Card>
                    ))
                :   
                this.state.boards.filter(item => item.approved === true && item.location.includes('Colombo, Sri Lanka')).map((item, i) => (
                    <Card style={styles.container}>
                        <View style={styles.subContainer}>
                            <View>
                                <Text h3>{item.title}</Text>
                            </View>
                            <View>
                                <Text h5>{item.date}</Text>
                            </View>
                            <View>
                                <Text h5>By member Nipuni</Text>
                            </View>
                        </View>
                        <View style={styles.subContainer}>
                            <Image
                            source={{uri: item.image}}
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
                                this.props.navigation.navigate('EnvironmentalIssueDetails', {
                                issueId: item.key,
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
    nearMe: {
        marginTop: 10,
        width: 200,
        alignSelf: 'center'
    },
    image: {
        width: 200,
        height: 200,
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

export default connect(mapStateToProps)(EnvironmentalIssues)
