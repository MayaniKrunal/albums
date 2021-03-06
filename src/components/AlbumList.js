import React, { Component } from "react";
import { ScrollView, Text, View } from 'react-native';
import axios from "react-native-axios";
import AlbumDetail from "./AlbumDetail";
class AlbumList extends Component {
    state = { albums: [] };
    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => this.setState({ albums: response.data.data }));
    }
    render() {
        return (
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    {this.state.albums.map((item, index) =>
                        <AlbumDetail item={item} key={index} />

                    )}
                </View>
            </ScrollView>
        );
    }
}
export default AlbumList;