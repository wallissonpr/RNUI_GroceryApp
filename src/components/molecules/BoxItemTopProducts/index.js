import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';
import {IC_Love, colors, fonts} from '../../../res';

const BoxItemTopProducts = ({bfColor, icon, text, price, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor: bfColor}}
      onPress={onPress}>
      <View style={{top: '-40px'}}>
        <View>
          <Image source={icon} style={styles.image} />
          <Gap height={20} />
          <Text style={styles.text}>{text}</Text>
        </View>
        <Gap height={20} />
        <View style={styles.image}>
          <Text>{price}</Text>
          <TouchableOpacity>
            <IC_Love />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BoxItemTopProducts;

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 150,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 40,
  },
  text: {
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
  },
  image: {},
});
