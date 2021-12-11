import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const AlbumDetail = ({item}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Image source={{uri: item.url}} style={styles.userIcon} />
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.textstylecontainer}>
            {' Name:'} {item.name}
          </Text>
        </View>
      </View>
      <View style={styles.iamgeviewcontainer}>
        <Image source={{uri: item.url}} style={styles.iamgestylecontainer} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => Linking.openURL(item.url)}>
          <Text style={[styles.textstylecontainer, {alignSelf: 'center'}]}>
            {'Click Here'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    borderWidth: 1,
    margin: 5,
  },
  container: {
    flexDirection: 'row',
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
    fontWeight: '600',
  },
  userIcon: {
    width: 45,
    height: 45,
    alignSelf: 'center',
    borderRadius: 45,
    borderWidth: 1,
    resizeMode: 'center',
  },
  buttoncontainer: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    paddingVertical: 5,
  },
  iamgeviewcontainer: {
    alignSelf: 'center',
  },
});
export default AlbumDetail;
