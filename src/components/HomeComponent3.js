import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');

const section_banner = require('../assets/ma_quy.jpg');
const item_image_1 = require('../assets/naruto.jpg');
const item_image_2 = require('../assets/nguoi_soi.jpg');
const item_image_3 = require('../assets/avenger.jpg');
const item_image_4 = require('../assets/mat_biec.jpg');

const ProductItem = ({image, name, price}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

const HomeComponent2 = () => {
  return (
    <View style={styles.sectionContainer}>
      {/*  */}
      <Text style={styles.sectionTitle}>Tất cả phim</Text>
      {/*  */}
      <Image source={section_banner} style={styles.sectionImage} />
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.filterContainer}>
          {[
            'Tất cả',
            'Kinh dị',
            'Tình cảm',
            'Anime',
            'võ thuật',
            'ma quỷ',
            'viễn tưỡng',
          ].map((e, index) => (
            <View
              key={index.toString()}
              style={
                index === 0
                  ? styles.filterActiveButtonContainer
                  : styles.filterInactiveButtonContainer
              }>
              <Text
                style={
                  index === 0
                    ? styles.filterActiveText
                    : styles.filterInactiveText
                }>
                {e}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {[
            {image1: item_image_1, image2: item_image_2},
            {image1: item_image_2, image2: item_image_3},
            {image1: item_image_4, image2: item_image_1},
            {image1: item_image_1, image2: item_image_2},
          ].map((e, index) => (
            <View key={index.toString()}>
              <ProductItem name="avenger" image={e.image1} price="120.000đ" />
              <ProductItem name="diep_van" image={e.image2} price="50.000đ" />
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>XEM THÊM NHIỀU PHIM </Text>
      </View>
    </View>
  );
};

export default HomeComponent2;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  //
  listItemContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
});
