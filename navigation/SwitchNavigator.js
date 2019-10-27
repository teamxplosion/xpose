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
import AdminProductsAndServices from '../screens/AdminProductsAndServices'
import AdminProductDetails from '../screens/AdminProductDetails'
import AdminEnvironmentIssues from '../screens/AdminEnvironmentIssues'
import AdminEnvironmentIssueDetails from '../screens/AdminEnvironmentissueDetails'
import AddEnvironmentalIssue from '../screens/AddEnvironmentalIssue'
import CriminalActivities from '../screens/CriminalActivities'
import AddCriminalActivity from '../screens/AddCriminalActivity'
import CriminalActivityDetails from '../screens/CriminalActivityDetails'


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
        Dashboard: {
            screen: Dashboard
        },
        EnvironmentalIssues: {
            screen: EnvironmentalIssues
        },
        EnvironmentalIssueDetails: {
            screen: EnvironmentalIssueDetails
        },
        AddEnvironmentalIssue: {
            screen: AddEnvironmentalIssue
        },
        AdminProductsAndServices: {
            screen: AdminProductsAndServices
        },
        AdminProductDetails: {
            screen: AdminProductDetails
        },
        AdminEnvironmentIssues: {
            screen: AdminEnvironmentIssues
        },
        AdminEnvironmentIssueDetails: {
            screen: AdminEnvironmentIssueDetails
        },
        CriminalActivities: {
            screen: CriminalActivities
        },
        AddCriminalActivity: {
            screen: AddCriminalActivity
        },
        CriminalActivityDetails: {
            screen: CriminalActivityDetails
        },
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)