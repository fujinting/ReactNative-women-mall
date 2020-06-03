import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity ,FlatList} from 'react-native';




// import { FlatList } from 'react-native-gesture-handler';

let pageNo = 1;//当前第几页
let totalPage=50;//总的页数

export default class ListViewCom extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            pagenum:1
        }
    }
    
    // 获取数据
    
    getData (){
        fetch(`http://xx.xx.xx.xx:8000/api/m3/home/data?type=pop&page=${this.state.pagenum}`)
        .then((response) => response.json())
        .then((responseJson) => {
    
          this.setState({
            data: responseJson.data.list,
          })
        
          alert('success')
        })
        .catch((error) => {
          // console.error(error);
          // alert('failed')

        });
      }

    componentDidMount() {
        this.getData();
    }

    // 渲染操作单个数据
    renderData({item}){
        return (
          <View style={styles.item}>
            <Image source={{uri:item.show.img}} style={{width:180,height:250}}/>
            <Text>{item.title}</Text>
          </View>
            
        )
    }
    // 上拉加载更多数据..
    _onEndReached(){
      alert('k')
      this.setState({
        pagenum:this.state.pagenum+1
      })
      this.getData()
    }
 
  
    render() {
        // alert(this.state.data)
        if(!this.state.data){
                return (<Text>没数据啊</Text>);
              }
             return (
               <FlatList style={styles.recom} 
                         numColumns={2} 
                         data = {this.state.data} 
                         renderItem = {this.renderData}
                        
                         onEndReached={this._onEndReached.bind(this)}/>
             );
    }

}

let styles = StyleSheet.create({
  recom:{
    margin:5, 
  },
 
    item: {
        width:180,
        height:350,
        marginTop:10,
        marginLeft:10

    }
})
