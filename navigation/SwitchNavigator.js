import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import ProductsAndServices from '../screens/ProductsAndServices'
import AddProduct from '../screens/AddProduct'
import ProductDetails from '../screens/ProductDetails'
import EnvironmentalIssues from '../screens/EnvironmentalIssues'
import EnvironmentalIssueDetails from '../screens/EnvironmentalIssueDetails'
import Dashboard from '../screens/Dashboard'


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
        EnvironmentalIssues: {
            screen: EnvironmentalIssues
        },
        EnvironmentalIssueDetails: {
            screen: EnvironmentalIssueDetails
        },
        Dashboard: {
            screen: Dashboard
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)