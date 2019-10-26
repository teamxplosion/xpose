import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login, updateEmail, updatePassword, getUser } from '../actions/user'
import Firebase from '../config/Firebase'

class Login extends React.Component {
    
    //Header Styles
    static navigationOptions = {
        headerTitleStyle: { textAlign: 'center', flex: 1 },
        title: 'Xplosion v1.0',
    };

    //Dispatch login function
    handleLogin = () => {
        this.props.login()
<<<<<<< HEAD
        this.props.navigation.navigate('Dashboard')
=======
>>>>>>> cf898a7cc43cc9aec5132efbecbef916fc288eee
    }

    //Redirect if user is logged in
    componentDidMount = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.getUser(user.uid)
<<<<<<< HEAD
                
                if (this.props.user != null) {
                    this.props.navigation.navigate('Dashboard')
=======
<<<<<<< HEAD
                // if (this.props.user != null) {
                //     this.props.navigation.navigate('ProductsAndServices')
                // }
=======
                if (this.props.user != null) {
                    this.props.navigation.navigate('EnvironmentalIssues')
>>>>>>> cf898a7cc43cc9aec5132efbecbef916fc288eee
                }
>>>>>>> b234ec6a60af9d985fe1e5c2186417303734ef31
            }
        })
    }

    render() {
        if (this.props.user != null) {
            this.props.navigation.navigate('ProductsAndServices')
        }
        return (
            <View style={styles.container}>
                <Image
                source={require("../assets/LOGO.png")}
                resizeMode="contain"
                style={styles.image}
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.email}
                    onChangeText={email => this.props.updateEmail(email)}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.password}
                    onChangeText={password => this.props.updatePassword(password)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={{color: 'blue'}}
                    onPress={() => this.props.navigation.navigate('Signup')}
                >
                    Don't have an account yet? Sign up
                </Text>
            </View>
        )
    }
}

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

//Action binding to dispatch action
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

//Map firebase states to properties
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
