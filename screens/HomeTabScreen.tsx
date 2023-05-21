import { ScrollView, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { data, NovelInfo } from '../constants/Novel'
import { ListView } from '../components/NovelHorizontalList';
import { HarmonyText } from '../components/StyledText';

export default function HomeTabScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const listNovelItem: Array<NovelInfo> = [];
  data.forEach(item => {
    listNovelItem.push(item)
  })
  const handleNavigate = (novelInfo: NovelInfo) => {
    navigation.navigate('DetailInfo', {
      novelInfo: novelInfo
    });
  };
  return (
    <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
      <View>
        <HarmonyText style={styles.category}>New Novel</HarmonyText>
        <ListView listNovel={listNovelItem} onPressEvent={handleNavigate} />
      </View>
      <View>
        <HarmonyText style={styles.category}>New Novel</HarmonyText>
        <ListView listNovel={listNovelItem} onPressEvent={handleNavigate} />
      </View>
      <View>
        <HarmonyText style={styles.category}>New Novel</HarmonyText>
        <ListView listNovel={listNovelItem} onPressEvent={handleNavigate} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  category: {
    fontSize: 25,
    fontWeight: '900',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20
  }
});
