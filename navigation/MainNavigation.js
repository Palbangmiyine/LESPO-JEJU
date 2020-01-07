import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigation from './TabNavigation';
import RecommendNavigation from './RecommendNavigation';
import FoodNavigation from './FoodNavigation';
import ViewNavigation from './ViewNavigation';
import LeisureNavigation from './LeisureNavigation';
import SportsNavigation from './SportsNavigation';
import LoginScreen from '../screens/Login/LoginContainer';
import SignupScreen from '../screens/Signup/SignupContainer';
import SearchScreen from '../screens/Main/Search/SearchContainer';
import DetailScreen from '../screens/Detail/DetailContainer';
import JejuSoundScreen from '../screens/Add/JejuSound/JejuSoundContainer';
import JejuGiftScreen from '../screens/Add/JejuGift/JejuGiftContainer';
import NoticeScreen from '../screens/Add/Notice/NoticeContainer';
import SettingScreen from '../screens/Add/Setting/SettingContainer';
import AddBattleScreen from '../screens/Sports/AddBattle/BattleContainer';
import MyBattleScreen from '../screens/My/MyBattle/MyBattleContainer';
import MyBattleTalkScreen from '../screens/My/BattleTalk/BattleTalkContainer';
import MyWishListScreen from '../screens/My/WishList/WishListContainer';
import MapScreen from '../screens/Map/MapContainer';
import {headerStyles, detailHeaderStyles, tapsHeaderStyles} from './config';

// 최상위 Nav [ Main tap4 + 검색 + 메인리스트 + 위시리스트... ]
const HomeNavigation = createStackNavigator(
  {
    // Login + Signup
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
        headerTitle: '제주배틀투어',
        headerBackTitle: null,
        ...tapsHeaderStyles,
      },
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        header: null,
        headerTitle: '제주배틀투어',
        headerBackTitle: null,
        ...tapsHeaderStyles,
      },
    },
    // 메인 텝 화면
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null,
        headerBackTitle: null,
        //TODO: 헤더 좌우로 아이콘 만들기 가능
        // headerLeft: (
        //   <Ionicons
        //     size={30}
        //     name={Platform.OS === "ios" ? "ios-list" : "md-list"}
        //   />
        // )
      },
    },
    // 상세 페이지
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...detailHeaderStyles,
      },
    },
    // 제주의 소리
    JejuSound: {
      screen: JejuSoundScreen,
      navigationOptions: {
        ...headerStyles,
      },
    },
    // 관광상품
    JejuGift: {
      screen: JejuGiftScreen,
      navigationOptions: {
        ...headerStyles,
      },
    },
    // 공지사항
    Notice: {
      screen: NoticeScreen,
      navigationOptions: {
        ...headerStyles,
      },
    },
    // 설정
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        ...detailHeaderStyles,
      },
    },
    // Search
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        ...headerStyles,
      },
    },
    // Add Battle
    InsertBattle: {
      screen: AddBattleScreen,
      navigationOptions: {
        ...headerStyles,
      },
    },
    // 내정보 화면
    MyBattleList: {
      screen: MyBattleScreen,
      navigationOptions: {
        ...tapsHeaderStyles,
        headerTitle: '나의 배틀',
      },
    },
    MyBattleTalk: {
      screen: MyBattleTalkScreen,
      navigationOptions: {
        ...tapsHeaderStyles,
        headerTitle: '배틀톡',
      },
    },
    MyWishList: {
      screen: MyWishListScreen,
      navigationOptions: {
        ...tapsHeaderStyles,
        headerTitle: '위시리스트',
      },
    },
    // 지도 화면
    Map: {
      screen: MapScreen,
      navigationOptions: {
        ...detailHeaderStyles,
      },
    },
    // 추천관광 텝 화면
    Recommend: {
      screen: RecommendNavigation,
      navigationOptions: {
        ...tapsHeaderStyles,
        headerTitle: '추천관광',
      },
    },
    // 먹거리 텝 화면
    Food: {
      screen: FoodNavigation,
      navigationOptions: {
        ...tapsHeaderStyles,
        headerTitle: '먹거리',
      },
    },
    // 볼거리 텝 화면
    View: {
      screen: ViewNavigation,
      navigationOptions: {
        ...tapsHeaderStyles,
        headerTitle: '볼거리',
      },
    },
    // 레저 텝 화면
    Leisure: {
      screen: LeisureNavigation,
      navigationOptions: {
        ...tapsHeaderStyles,
        headerTitle: '레저스포츠',
      },
    },
    // 볼거리 텝 화면
    Sports: {
      screen: SportsNavigation,
      navigationOptions: {
        ...tapsHeaderStyles,
        headerTitle: '운동시설',
      },
    },
  },
  {
    //TODO: 옆에서 나오는거 할때 사용하면 좋을듯
    // transparentCard: true,

    // 화면전환시 텝 사라질때 어색한부분
    headerMode: 'screen',
    // 텝 벡버튼 보여지는 부분
    // headerBackTitleVisible: false,
    mode: 'card',
  },
);

export default createAppContainer(HomeNavigation);
