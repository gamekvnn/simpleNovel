import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import NovelDescription from './NovelDescription';

const Tab = createMaterialTopTabNavigator<NovelTabParamList>();

export function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 15, color: 'black', fontFamily: 'harmony',  textTransform: 'capitalize'},
                tabBarStyle: { backgroundColor: 'white', justifyContent: 'center' },
                tabBarIndicatorStyle: {
                    height: 2,
                    alignSelf: 'center'
                }
            }}>
            <Tab.Screen name="Description" component={NovelDescription} options={{
                title: 'Giới thiệu',
            }} />
            <Tab.Screen name="Rate" component={ModalScreen} options={{
                title: 'Đánh giá',
            }} />
            <Tab.Screen name="Comment" component={ModalScreen} options={{
                title: 'Bình luận',
            }} />
            <Tab.Screen name="Chapter" component={ModalScreen} options={{
                title: 'D.s Chương',
            }} />
        </Tab.Navigator>
    );
}

export type NovelTabParamList = {
    Description: undefined;
    Rate: undefined;
    Comment: undefined;
    Chapter: undefined;
  };
  