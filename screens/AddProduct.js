import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'
//import ImagePicker from 'react-native-image-picker' 
// var ImagePicker = require('react-native-image-picker')

class AddProduct extends React.Component {
    
    //Header Styles
    static navigationOptions = {
        headerTitleStyle: { textAlign: 'center', flex: 1 },
        title: 'Add Product',
    };

    constructor() {
        super();
        this.state = {
          title: "",
          description: "",
          company: "",
          image: "",
          location: "Colombo, Sri Lanka",
          userId: "",
          date: new Date(),
          approved: false
        };
    }

    //Redirect if user is logged in
    componentDidMount = () => {
        const { navigation } = this.props;
    }

    handleChange = (val, property) => {
        const state = this.state
        state[property] = val
        this.setState(state)
    }

    handlePost = () => {
        this.setState({
            userId: this.props.user.uid,
            userName: this.props.user.name
        });
        Firebase.storage().child("ProductsAndServices").put(this.state.image).then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
                this.setState({image: url})
            })
            Firebase.firestore().collection('productsAndServices').add(this.state).then(() => {
                this.props.navigation.navigate('ProductsAndServices')
            })
        })
    }

    handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ image: response })
          }
        })
      }
    

    render() {
        return (
            <View style={styles.container}>
                {/* <Image
                source={require("../assets/LOGO.png")}
                resizeMode="contain"
                style={styles.image}
                /> */}
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(val) => this.handleChange(val,'title')}
                    placeholder='Title'
                />
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(val) => this.handleChange(val,'description')}
                    placeholder='Description'
                />
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(val) => this.handleChange(val,'company')}
                    placeholder='Company'
                />
                <TouchableOpacity style={styles.button} onPress={this.handleChoosePhoto}>
                    <Text style={styles.buttonText}>UPLOAD PHOTO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.handlePost}>
                    <Text style={styles.buttonText}>POST</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 10,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    },
    image: {
        width: 150,
        height: 100,
        // marginTop: 10,
        alignSelf: "center"
    },
})

//Map firebase states to properties
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps
)(AddProduct)
