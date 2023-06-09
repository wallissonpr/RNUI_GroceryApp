import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IC_Back, IC_Cart, IC_Drawer} from '../../../res';

const Header = ({drawer, back, cart, onPress}: any) => {
  if (drawer) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          <IC_Drawer />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <IC_Cart />
        </TouchableOpacity>
      </View>
    );
  }

  if (back && cart) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          <IC_Back />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <IC_Cart />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.wrapperHeader}>
      <TouchableOpacity onPress={onPress}>
        <IC_Back />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
