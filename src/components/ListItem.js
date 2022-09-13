import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {getPriceVND} from '../model/getPriceVND'

export default function ListItem ({id,photo, title, subTitle, isFree, price,navigation}) {

    const editPrice = (p)=>{
        if(p.toString().length>9){
            return getPriceVND(p).substring(0,1) +" tỷ vnđ"
        }else{
            return getPriceVND(p).substring(0,3) +" triệu vnđ"
        }
    }
    return (
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom: 20,
        }}>
            <View style={{flexDirection:'row', align:'center', flex:1}}>
                <Image source={{ uri:photo }} style={{width:55,height:55,borderRadius:10,marginRight:8}}

                />
                <View style={{maxWidth:"70%" }}>
                    <Text style={{
                        color:'#333', 
                        fontSize:13}}>{subTitle}</Text>
                    <Text style={{
                        color:'#333', 
                        fontSize:10, 
                        textTransform:'uppercase'}}>{title}</Text>
                </View>
            </View>

            <TouchableOpacity style={{
                backgroundColor:'#0aada8', 
                padding:10, 
                width:100, 
                borderRadius:10}}
                onPress={() =>navigation.navigate('details_land',{ID_LAND:id})}
            >
                <Text style={{
                    color:'#fff', 
                    textAlign:'center', 
                    fontSize:14}}>
                    {isFree == 0 && 'Details'}
                    {isFree == 1 && editPrice(price) }
                </Text>
            </TouchableOpacity>
        </View>
    );
}