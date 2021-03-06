/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import React from "react";
// import { Text, AppRegistry, SafeAreaView } from "react-native";
// import Header from "./src/components/Header";
// import AlbumList from "./src/components/AlbumList";
// const App = () => {
//     return (

//         <SafeAreaView style={{ flex: 1 }}>
//             <Header hedertitle={'Albums'} />
//             <AlbumList />
//         </SafeAreaView>

//     );
// };

// AppRegistry.registerComponent('albums', () => App)