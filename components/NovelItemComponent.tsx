import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { NovelInfo } from '../constants/Novel';
const Styles = StyleSheet.create({
  container: {
    marginRight: 20,
    width: 170,
    elevation: 0,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  image: {
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  title: {
    fontSize: 16,
    fontFamily: 'harmony',
    fontWeight: '900',
    textAlign: 'left'
  }
})

const NovelItemView: FC<NovelProps> = ({ novelInfo, onPress }) => {
  return <Pressable
    onPress={() => onPress(novelInfo)}
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
    })}>
    <Card style={Styles.container}>
      <Card.Cover source={{
        uri: novelInfo.avatar
      }} style={Styles.image} />
      <Card.Content>
        <Title style={Styles.title} numberOfLines={1} ellipsizeMode='tail'>{novelInfo.title}</Title>
      </Card.Content>
    </Card>
  </Pressable>;
};

type NovelProps = {
  novelInfo: NovelInfo;
  onPress: (novelInfo: NovelInfo) => void
}

export default NovelItemView;