import React from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { Text, Card, Button } from 'react-native-elements';
import Firebase from '../config/Firebase';
import { connect } from 'react-redux'
import moment from 'moment'

class Dashboard extends React.Component {

    constructor() {
        super();
        this.unsubscribe = null;
        this.state = {
          isLoading: false,
          hires: []
        };
    }
    
    onCollectionUpdate = () => {
        this.setState({
          hires,
          isLoading: false,
       });
    }

    static navigationOptions = {
        title: 'Dashboard', 
        headerLeft: null,
    };

    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')
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
            this.props.user.userType === "user" ?
                <ScrollView>
                    <TouchableOpacity style={styles.signout} onPress={
                        this.handleSignout
                        }>
                        <Text style={styles.signoutButtonText}>Logout</Text>
                    </TouchableOpacity>
                    <Card style={styles.cardContainer}>
                        <View style={styles.subContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                this.props.navigation.navigate('ProductsAndServices')
                            }}>
                                <Text style={styles.buttonText}>Products/Services</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                this.props.navigation.navigate('EnvironmentalIssues');
                            }}>
                                <Text style={styles.buttonText}>Environment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                this.props.navigation.navigate('CriminalActivities');
                            }}>
                                <Text style={styles.buttonText}>Criminal Activities</Text>
                            </TouchableOpacity>
                        </View> 
                    </Card>
                </ScrollView>
            :   this.props.user.userType === "admin" ?
            <ScrollView>
                    <TouchableOpacity style={styles.signout} onPress={
                        this.handleSignout
                        }>
                        <Text style={styles.signoutButtonText}>Logout</Text>
                    </TouchableOpacity>
                    <Card style={styles.cardContainer}>
                        <View style={styles.subContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                this.props.navigation.navigate('AdminProductsAndServices')
                            }}>
                                <Text style={styles.buttonText}>Products/Services</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                this.props.navigation.navigate('AdminEnvironmentIssues');
                            }}>
                                <Text style={styles.buttonText}>Environment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                // this.props.navigation.navigate('PastHires');
                            }}>
                                <Text style={styles.buttonText}>Crime</Text>
                            </TouchableOpacity>

                        </View> 
                    </Card>
                </ScrollView>
            : <View style={styles.activity}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    cardContainer: {
        flex: 1,
        padding: 20
    },
    subContainer: {
        flex: 1,
        paddingTop: 10,
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
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 7,
        marginBottom: 7,
        paddingVertical: 3,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        width: '100%',
        height: 50,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 8
    },
    signoutButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    signout: {
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
    detailButton: {
        marginTop: 10
    }
})

const mapStateToProps = state => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)