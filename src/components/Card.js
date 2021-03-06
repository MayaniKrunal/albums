import React, { Children } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Card = ({ item }) => {
    return (
        <View style={styles.containerStyle}>
            {/* <Text>{item.id}</Text>
            <Text>{item.first_name}</Text>
            <Text>{item.last_name}</Text>
            <Text>{item.email}</Text>
            <Image
                source={{ uri: item.avatar }}
                style={styles.iamgestylecontainer}
            />
            <TouchableOpacity>
                <Text>Buy</Text>
            </TouchableOpacity> */}
            {Children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginHorizontal: 5,
        marginVertical: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 2,
        position: 'relative',
    }
});
export default Card;