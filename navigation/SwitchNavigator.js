import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import Dashboard from '../screens/Dashboard'
import ProductsAndServices from '../screens/ProductsAndServices'

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
        // PastHires: {
        //     screen: PastHires
        // },
        // PastHireDetails: {
        //     screen: PastHireDetails,
        // },
        // AssignedHires: {
        //     screen: AssignedHires
        // },
        // AssignedHireDetails: {
        //     screen: AssignedHireDetails
        // },
        // UpcomingHires: {
        //     screen: UpcomingHires
        // },
        // UpcomingHireDetails: {
        //     screen: UpcomingHireDetails
        // }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)