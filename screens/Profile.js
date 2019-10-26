import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'
import TabBar from 'react-native-nav-tabbar';

class Profile extends React.Component {

    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')

        
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
                <Text>{this.props.user.email}</Text>
                <Button title='Logout' onPress={this.handleSignout} />
            </View>
            // <TabBar>
            //     <TabBar.Item
            //         // icon={require('./images/Home.png')}
            //         // selectedIcon={require('./images/HomeActive.png')}
            //         title="Home"
            //     >
            //         <View style={styles.textContent}>
            //             <Text style={{fontSize: 18}}>Home</Text>
            //         </View>
            //     </TabBar.Item>
            //     <TabBar.Item
            //         // icon={require('./images/Home.png')}
            //         // selectedIcon={require('./images/HomeActive.png')}
            //         title="Home"
            //     >
            //         <View style={styles.textContent}>
            //             <Text style={{fontSize: 18}}>Home</Text>
            //         </View>
            //     </TabBar.Item>
            //     {/* <TabBar.Item
            //         title="friends"
            //     >
            //         <View style={styles.textContent}>
            //             <Text style={{fontSize: 18}}>Friends</Text>
            //         </View>
            //     </TabBar.Item> */}
            //     <TabBar.Item
            //         // icon={require('./images/My.png')}
            //         // selectedIcon={require('./images/MyActive.png')}
            //         title="Me"
            //     >
            //         <View style={styles.textContent}>
            //             <Text style={{fontSize: 18}}>Me</Text>
            //         </View>
            //     </TabBar.Item>
            // </TabBar>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = state => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)