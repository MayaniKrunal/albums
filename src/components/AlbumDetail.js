import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import Card from "./Card";
const AlbumDetail = ({ item }) => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/Icons/user.png')}
                    style={styles.userIcon}
                />
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={styles.textstylecontainer}> First Name: {item.first_name}</Text>
                    <Text style={styles.textstylecontainer}> Last Name:{item.last_name}</Text>
                </View>
            </View>
            <View style={styles.iamgeviewcontainer}>
                <Image
                    source={{ uri: item.avatar }}
                    style={styles.iamgestylecontainer}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.buttoncontainer}
                    onPress={() => Linking.openURL(item.avatar)}
                >
                    <Text style={[styles.textstylecontainer, { alignSelf: 'center' }]}> Click Here</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};


const styles = StyleSheet.create({
    maincontainer: {
        borderWidth: 1,
        margin: 5
    },
    container: {
        flexDirection: 'row',
        // justifyContent: 'center',
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        padding: 5,


    },
    iamgestylecontainer: {
        height: 350,
        width: 350,
        resizeMode: 'contain',
    },
    textstylecontainer: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600'
    },
    userIcon: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    buttoncontainer: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        paddingVertical: 5
    },
    iamgeviewcontainer: {
        alignSelf: 'center'
    }
})
export default AlbumDetail;