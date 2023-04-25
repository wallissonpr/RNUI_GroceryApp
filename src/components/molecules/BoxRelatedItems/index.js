import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../res';

const BoxRelatedItems = ({image, name, price, bgColor}) => {
  return (
    <TouchableOpacity style={{...styles.container, backgroundColor: bgColor}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          source={image}
          style={{height: 50, width: 50, resizeMode: 'contain'}}
        />
      </View>
      <View style={styles.textBox}>
        <Text>{name}</Text>
        <Text style={{fontSize: 12}}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BoxRelatedItems;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderRadius: 12,
    padding: 5,
    marginRight: 15,
  },
  textBox: {
    backgroundColor: colors.white,
    height: 25,
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
