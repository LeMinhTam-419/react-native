import React from 'react';
import {StyleSheet, View, StatusBar, FlatList, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from '../components/HeaderComponent';

const NotificationItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemTopContainer}>
      <View
        style={[
          styles.itemTypeContainer,
          {
            backgroundColor: item.type === 1 ? 'blue' : '#dc3988',
          },
        ]}>
        <MaterialIcons
          name={item.type === 1 ? 'show-chart' : 'subtitles'}
          color="#fff"
          size={22}
        />
      </View>
      <View style={styles.itemTopTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.itemDetail}>{item.detail}</Text>
    </View>
  </View>
);

const NotificationScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title="Thông báo" />
      <View style={styles.bodyContainer}>
        <View>
          <View style={styles.buttonActiveContainer}>
            <View style={styles.activeMark} />
            <MaterialCommunityIcons
              name="home"
              color="#949494"
              size={22}
              style={styles.activeIcon}
            />
          </View>
          <View style={styles.buttonInactiveContainer}>
            <MaterialCommunityIcons
              name="backup-restore"
              color="#949494"
              size={22}
            />
          </View>
          <View style={styles.buttonInactiveContainer}>
            <MaterialCommunityIcons name="sale" color="#949494" size={22} />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={[
              {
                id: 1,
                type: 1,
                name: 'BẠN ĐÃ NẠP VÀO TÀI KHOẢN 200.000đ',
                date: '23/7/2020',
                detail: 'Tặng 1 bộ phim miễn phí',
              },
              {
                id: 2,
                type: 2,
                name: 'TÀI KHOẢN CỦA BẠN KHÔNG ĐỦ ĐỂ MUA PHIM',
                date: '22/7/2020',
                detail: 'NẠP THÊM TIỀN ĐỂ THỎA SỨC XEM PHIM',
              },
              {
                id: 3,
                type: 1,
                name: 'TÀI KHOẢN CỦA BẠN CHỈ CÒN 3.000Đ',
                date: '12/7/2020',
                detail: 'VOCHER KHỦNG, QUÀ LIỀN TAY',
              },
              {
                id: 4,
                type: 2,
                name: 'BẠN ĐÃ MUA THÀNH CÔNG PHIM MẮC BIẾC VỚI GIÁ 20.000Đ',
                date: '02/11/2020',
                detail:
                  'TÀI KHOẢN CỦA BẠN CHỈ CÒN 3.000Đ, XEM THÊM PHIM TẠI PHIMFAKE',
              },
              {
                id: 5,
                type: 1,
                name: 'BẠN ĐÃ MUA THÀNH CÔNG PHIM QUẢ TIM MÁU VỚI GIÁ 20.000Đ',
                date: '02/11/2020',
                detail:
                  'TÀI KHOẢN CỦA BẠN CHỈ CÒN 23.000Đ, XEM THÊM PHIM TẠI PHIMFAKE',
              },
              {
                id: 6,
                type: 2,
                name: 'QUÀ TẶNG KHỦNG CHỈ HÔM NAY',
                date: '12/10/2020',
                detail:
                  'THAM GIA QUAY SỐ TRÚNG THƯỞNG, XEM PHIM MIỄN PHÍ 1 THÁNG, BẤM PHIMFAKE.COM ĐỂ BIẾT THÊM CHI TIẾT',
              },
            ]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NotificationItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'row',
  },
  buttonActiveContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  buttonInactiveContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  activeMark: {
    backgroundColor: '#1e88e5',
    width: 4,
  },
  activeIcon: {
    padding: 12,
    // trick
    marginLeft: -4,
  },
  //
  listContainer: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  itemTopContainer: {
    flexDirection: 'row',
  },
  itemTypeContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTopTextContainer: {
    marginRight: 40,
    marginLeft: 4,
  },
  itemName: {
    color: '#000',
    fontWeight: '500',
  },
  itemDate: {
    color: '#787878',
    fontSize: 12,
    marginTop: 8,
  },
  itemDetail: {
    color: '#787878',
    // fontSize: 12,
    marginTop: 12,
  },
});

export default NotificationScreen;
