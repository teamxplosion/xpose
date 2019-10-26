import React, { Component } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import Firebase from '../config/Firebase'
import {  ListItem, Button, Icon, Card, Text } from 'react-native-elements';
import { connect } from 'react-redux'
import moment from 'moment'

class EnvironmentIssues extends Component {
  //Connect to firebase collection
  constructor() {
    super();
    this.ref = Firebase.firestore().collection('environment');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      boards: []
    };
  }

  //Navigation header
  static navigationOptions = {
    title: 'EnvironmentIssues',
  };

  //Fetch firestore data
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  //Pushes fetched firestore data to an array
  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, date, image, video, loctaion, userId } = doc.data()
      boards.push({
        key: doc.id,
        title,
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
    if(this.state.isLoading){
        return(
          <View style={styles.activity}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      }
    return (
      <ScrollView style={styles.container}>
          {
            this.state.boards.map((item, i) => (
                <Card style={styles.container}>
                <View style={styles.subContainer}>
                  <View>
                    <Text h3>{item.title}</Text>
                  </View>
                  <View>
                    <Text h5>{item.date}</Text>
                  </View>
                  <View>
                    <Text h5>{item.description}</Text>
                  </View>
                </View>
                <View style={styles.detailButton}>
                    <Button
                    medium
                    backgroundColor={'#999999'}
                    color={'blue'}
                    title='View'
                    buttonStyle={{backgroundColor: 'blue'}}
                    onPress={() => {}} />
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
    padding: 20
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
  }
})

const mapStateToProps = state => {
  return{
      user: state.user
  }
}

export default connect(mapStateToProps)(EnvironmentIssues)
