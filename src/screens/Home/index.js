import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {TabsStackScreenProps} from '../../router';
import {
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
  IL_Grapes_PNG,
  colors,
  fonts,
} from '../../res';
import {
  BoxItemCategories,
  BoxItemTopProducts,
  Gap,
  Header,
} from '../../components';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataTopProducts = [
    {
      index: 1,
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bfColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, praesentium veniam eaque molestiae commodi adipisci placeat eos ipsa.',
    },
    {
      index: 2,
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bfColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, praesentium veniam eaque molestiae commodi adipisci placeat eos ipsa.',
    },
    {
      index: 3,
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bfColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, praesentium veniam eaque molestiae commodi adipisci placeat eos ipsa.',
    },
    {
      index: 4,
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bfColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, praesentium veniam eaque molestiae commodi adipisci placeat eos ipsa.',
    },
    {
      index: 5,
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bfColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, praesentium veniam eaque molestiae commodi adipisci placeat eos ipsa.',
    },
    {
      index: 6,
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bfColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, praesentium veniam eaque molestiae commodi adipisci placeat eos ipsa.',
    },
  ];

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        {/* Header */}
        <Header drawer />

        <ScrollView>
          {/* Search */}
          <View style={{paddingHorizontal: 20}}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder="Search" style={styles.textInput} />
              <IC_Search />
            </View>
            {/* Categories */}
          </View>
          <Text style={styles.titleCategories}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <BoxItemCategories
              icon={<IC_Fruits />}
              color="rgba(169, 178, 169, 0.5)"
              text="Fruits"
              // onPress={() => navigation.navigate('Categories', 'Fruits')}
            />
            <BoxItemCategories
              icon={<IC_Vegetables />}
              color="rgba(233, 255, 210, 0.5)"
              text="Vegetables"
              // onPress={() => navigation.navigate('Categories', 'Vegetables')}
            />
            <BoxItemCategories
              icon={<IC_Drinks />}
              color="rgba(140, 175, 53, 0.5)"
              text="Drinks"
              // onPress={() => navigation.navigate('Categories', 'Drinks')}
            />
            <BoxItemCategories
              icon={<IC_Bakery />}
              color="rgba(214, 255, 218, 0.5)"
              text="Bakery"
              // onPress={() => navigation.navigate('Categories', 'Bakery')}
            />
            <BoxItemCategories
              icon={<IC_Bakery2 />}
              color="rgba(255, 250, 204, 0.5)"
              text="Bakery"
              // onPress={() => navigation.navigate('Categories', 'Bakery')}
            />
          </ScrollView>
          <View />
          <Gap height={24} />
          <View>
            <View style={styles.wrapperHeadTopProducts}>
              <Text style={styles.titleTopProducts}>Top Products</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionBoxTopProduct}>
              {/* {dataTopProducts.map(props => {
                return (
                  <BoxItemTopProducts
                    key={props.index}
                    bfColor={props.bfColor}
                    icon={props.icon}
                    price={props.price}
                    text={props.desc}
                  />
                );
              })} */}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex1: {flex: 1},
  wrapperSearch: {
    height: 40,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  textInput: {},
  titleCategories: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
  wrapperHeadTopProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  titleTopProducts: {
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  textSeeAll: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
  sectionBoxTopProduct: {},
});
