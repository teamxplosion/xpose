import React, { Component } from "react";
import Firebase from '../config/Firebase'

class ProductsAndServices extends Component {
  
  constructor() {
    super();
    this.ref = Firebase.firestore().collection('crime');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      boards: []
    };
  }

  static navigationOptions = {
    title: 'crime',
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, type, date } = doc.data()
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

}