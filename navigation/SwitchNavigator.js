import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import ProductsAndServices from '../screens/ProductsAndServices'
import AddProduct from '../screens/AddProduct'
import ProductDetails from '../screens/ProductDetails'
import EnvironmentIssues from '../screens/EnvironmentIssues'

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
        EnvironmentIssues: {
            screen: EnvironmentIssues
        }

    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)