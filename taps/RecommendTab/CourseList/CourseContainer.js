import React, {useEffect} from 'react';
import {request, PERMISSIONS} from 'react-native-permissions';
import CoursePresenter from './CoursePresenter';
import Geolocation from 'react-native-geolocation-service';
import {tv, movie} from '../../../api/Api';
import {View, Text, Platform} from 'react-native';

export default class extends React.Component {
  state = {
    loading: true,
    latitude: null,
    longitude: null,
    listChanged: null,
    error: null,
  };

  // 사용자 위치
  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('Course iPhone : ', response);
      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Course Android : ', response);
      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    }
  };

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        try {
          const {latitude, longitude} = position.coords;
          this.setState({
            latitude: latitude,
            longitude: longitude,
          });
        } catch (error) {
          console.log(error);
        } finally {
          console.log('Course: ', this.state.latitude, this.state.longitude);
        }
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  // 시작시 불러옴
  async componentDidMount() {
    let listChanged, error;
    try {
      ({
        data: {results: listChanged},
      } = await movie.getSearchMovie('king'));
    } catch (error) {
      console.log(error);
      error = "Cnat't get Course";
    } finally {
      this.setState({
        loading: false,
        listChanged,
        error,
      });
      this.requestLocationPermission();
    }
  }
  render() {
    const {loading, latitude, longitude, listChanged} = this.state;
    // 위치정보 받기 전
    if (latitude) {
      return (
        <CoursePresenter
          loading={loading}
          listChanged={listChanged}
          latitude={latitude}
          longitude={longitude}
        />
      );
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>위치정보를 불러오는중입니다....</Text>
        </View>
      );
    }
  }
}
