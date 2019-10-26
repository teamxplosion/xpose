import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import ProductsAndServices from '../screens/ProductsAndServices'
import ProductDetails from '../screens/ProductDetails'
import EnvironmentIssues from '../screens/EnvironmentIssues'
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
        ProductDetails: {
            screen: ProductDetails
        },
        EnvironmentIssues: {
            screen: EnvironmentIssues
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