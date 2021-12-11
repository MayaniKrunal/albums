import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header hedertitle={'Albums'} />
      <AlbumList />
    </SafeAreaView>
  );
};

AppRegistry.registerComponent('albums', () => App);

export default App;
