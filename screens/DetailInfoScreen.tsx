import { ScrollView, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import BannerComponent from '../components/DetailBanner';
import { NovelInfo } from '../constants/Novel';
import { RootStackParamList, RootStackScreenProps } from '../types';

export default function DetailInfoScreen({ navigation }: RootStackScreenProps<'DetailInfo'>) {
  let route = useRoute<RouteProp<RootStackParamList, 'DetailInfo'>>();
  let props = route.params;
  let novelInfo: NovelInfo = props.novelInfo;
  return (
    <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
     <BannerComponent novelInfoProps={{novelInfo: novelInfo}} navigator={navigation}/>
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
