import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

export default  function DetailScreen ({navigation}){
    return (
        <View>
            <Text>Detail Screen</Text>
            <Button 
                title="Click Here"
                onPress={() =>  alert('Button Clicked!')} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});