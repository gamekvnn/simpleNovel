import React, { FC } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import NovelItemView from './NovelItemComponent';
import { NovelInfo } from '../constants/Novel';

export const ListView: FC<ListNovelProps> = ({ listNovel, onPressEvent }) => {
  return <FlatList
    data={listNovel}
    horizontal={true}
    renderItem={({ item }) => (
      <NovelItemView novelInfo={item} onPress={onPressEvent} />
    )}
    style={
      Styles.listview
    }
    showsHorizontalScrollIndicator={false}
  />;
};

const Styles = StyleSheet.create({
  listview: {
    marginLeft: 20,
  }
})

type ListNovelProps = {
  listNovel?: Array<NovelInfo>;
  onPressEvent: (novelInfo: NovelInfo) => void
}