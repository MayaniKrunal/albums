import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = ({ hedertitle }) => {
    // const { textcontainer, textstyle } = stylecontainer;
    return (
        <View style={styles.mainContanier}>
            <Text style={styles.textcontainer}>{hedertitle}</Text>
        </View>
    );
}

// !---  ===== styles =========   ---!//
// const stylecontainer = {
//     textcontainer: {
//         fontSize: 30
//     },
//     textstyle: {
//         fontSize: 25,
//         color: 'red'
//     }
// }

const styles = StyleSheet.create({
    mainContanier: {
        backgroundColor: '#f2f2f2',
        // flex: 1,
        justifyContent: 'center',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        position: 'relative',
    },
    textcontainer: {
        fontSize: 25,
        color: '#000',

    },
});
export default Header;