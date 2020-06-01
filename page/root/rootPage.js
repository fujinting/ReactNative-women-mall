import React from 'react'
import {Text} from 'react-native'
import {TabNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import HomePage from '../home/homePage'
// import CatePage from '..//cate/catePage'
// import MinePage from '../mine/minePage'
let MinePage=()=>{
    return (
        <Text>我的</Text>
    )
}

let CatePage=()=>{
    return (
        <Text>分类</Text>
    )
}

// let HomePage=()=>{
//     return (
//         <Text>主页</Text>
//     )
// }


const BottomNavigator = createBottomTabNavigator({
    Home:{
        screen:HomePage,
        navigationOptions:{
            title:'首页',
            tabBarLabel:'首页',
            
           
        }
    },
    Cate:{
        screen:CatePage,
        navigationOptions:{
            title:'分类',
            tabBarLabel:'分类'
        }
    },
    Mine:{
        screen:MinePage,
        navigationOptions:{
            title:'我的',
            tabBarLabel:'我的'
        }
    }
},{
    tabBarOptions:{
        showIcon:true
    }
})

export default BottomNavigator;