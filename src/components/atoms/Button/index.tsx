import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../res';

const Button = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.buttonTxt}>Get Started</Text>
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: 259,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonTxt: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: colors.white,
    textAlign: 'center',
  },
});
