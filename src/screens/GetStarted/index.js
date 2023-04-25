import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IL_GetStarted_PNG, colors, fonts} from '../../res';
import Button from '../../components/atoms/Button';
import {Gap} from '../../components/atoms';

const GetStarted = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Image source={IL_GetStarted_PNG} style={styles.GetStartedImage} />
      <View style={styles.WrapperSlogan}>
        <Text style={styles.txtSlogan}>Shop Your Daily</Text>
        <Text style={styles.txtSlogan}>Necessary</Text>
        <Gap height={90} />
        <Button
          textBnt={'Get Started'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  GetStartedImage: {
    height: 225,
    width: '100%',
    resizeMode: 'stretch',
  },
  WrapperSlogan: {
    marginTop: 51,
  },
  txtSlogan: {
    fontSize: 30,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
  },
});
