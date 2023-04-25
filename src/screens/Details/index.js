import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  useColorScheme,
  Image,
} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fonts} from '../../res';

const Detail = ({route, navigation}) => {
  const dataParams = route.params;
  const bgColor = route.params.bgColor;
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.flex1(bgColor)}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        {/* Header */}
        <Header onPress={() => navigation.goBack()} />
        {/* Image */}
        <View style={styles.wrapperImg}>
          <Image source={dataParams.icon} style={styles.image} />
        </View>
        {/* Content */}
        <View style={styles.content}>
          {/* Top Content */}
          <View style={styles.wrapperTopContent}>
            <View style={styles.rowTopContent}>
              <Text style={styles.name}>{dataParams.name}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  flex1: bgColor => ({
    flex: 1,
    backgroundColor: bgColor,
  }),
  wrapperImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 34,
  },
  wrapperTopContent: {
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  rowTopContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
});
