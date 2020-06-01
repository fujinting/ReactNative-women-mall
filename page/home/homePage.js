import React from 'react';
import {StyleSheet,View,Image, ScrollView} from 'react-native';

// 从ant中导入组件
import {Carousel} from '@ant-design/react-native';
// 导入自定义列表组件
import ListViewCom from '../com/ListViewCom'

export default class HomePage extends React.Component {

    static navigationOptions = {
        tabBarLabel:'首页',
        tabBarIcon: ({ focused }) => {
            if(focused){
                return (
                    <Image style={styles.tabBarIcon} source={require('../../assets/img/icon/home_active.png')} />
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../assets/img/icon/home.png')}/>
            )
        }
    }

    render(){
        return (
            <View>
                <ScrollView>
                    <View></View>
                    <Carousel
                        style={styles.wrapper}
                        selectedIndex={2}
                        autoplay
                        infinite>
                            <View 
                                style={[styles.containerHorizontal,{ backgroundColor: 'red'}]}>
                                    <Image style={{width:'100%',height:200}} resizeMode='cover' source={require('../../assets/img/swiper/1.jpg')}/>
                            </View>

                            <View 
                                style={[styles.containerHorizontal,{ backgroundColor: 'red'}]}>
                                    <Image style={{width:'100%',height:200}} resizeMode='cover' source={require('../../assets/img/swiper/2.jpg')}/>
                            </View>

                            <View 
                                style={[styles.containerHorizontal,{ backgroundColor: 'red'}]}>
                                    <Image style={{width:'100%',height:200}} resizeMode='cover' source={require('../../assets/img/swiper/3.jpg')}/>
                            </View>

                            <View 
                                style={[styles.containerHorizontal,{ backgroundColor: 'red'}]}>
                                    <Image style={{width:'100%',height:200}} resizeMode='cover' source={require('../../assets/img/swiper/4.jpg')}/>
                            </View>

                    </Carousel>
                    <ListViewCom ></ListViewCom>
                </ScrollView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBarIcon:{
        width:21,
        height:21,
    },
    wrapper: {
        backgroundColor:'#fff',
    },
    containerHorizontal:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        height:200,
    },
    containerVertical:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        height:200,
    },
    text:{
        color:'#fff',
        fontSize:36,
    }
})