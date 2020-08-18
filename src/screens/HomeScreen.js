import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeSectionComponent from '../components/HomeSectionComponents';
import HomeComponent2 from '../components/HomeComponent2';
import HomeComponent3 from '../components/HomeComponent3';

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="search" size={24} color="#969696" />
          <Text style={styles.inputText}>tìm phim?</Text>
        </View>
        {/*  */}
        <View style={styles.cartContainer}>
          <MaterialIcons name="shopping-cart" size={24} color="#fff" />
        </View>
      </View>
      {/*  */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSectionComponent />
          <HomeComponent2 />
          <HomeComponent3 />
          <HomeSectionComponent />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 4,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
