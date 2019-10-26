import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import ProductsAndServices from '../screens/ProductsAndServices'
import AddProduct from '../screens/AddProduct'
import ProductDetails from '../screens/ProductDetails'
<<<<<<< HEAD
import EnvironmentIssues from '../screens/EnvironmentIssues'
import Dashboard from '../screens/Dashboard'
=======
import EnvironmentalIssues from '../screens/EnvironmentalIssues'
import EnvironmentalIssueDetails from '../screens/EnvironmentalIssueDetails'

>>>>>>> cf898a7cc43cc9aec5132efbecbef916fc288eee

const SwitchNavigator = createStackNavigator(
    {   
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {
            screen: Profile
        },
        ProductsAndServices: {
            screen: ProductsAndServices
        },
        AddProduct: {
            screen: AddProduct
        },
        ProductDetails: {
            screen: ProductDetails
        },
<<<<<<< HEAD
        EnvironmentIssues: {
            screen: EnvironmentIssues
        },
        Dashboard: {
            screen: Dashboard
        }

=======
        EnvironmentalIssues: {
            screen: EnvironmentalIssues
        },
        EnvironmentalIssueDetails: {
            screen: EnvironmentalIssueDetails
        },
>>>>>>> cf898a7cc43cc9aec5132efbecbef916fc288eee
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)