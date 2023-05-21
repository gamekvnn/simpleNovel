import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from "react-native";
import { NovelInfo } from "../constants/Novel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MyTabs } from "./tabBarComponents";
import { HarmonyText } from "./StyledText";

const BannerComponent = (props: DetailBannerProps) => {
    const insets = useSafeAreaInsets();
    const backPress = () => {
        props.navigator.goBack()
    }
    return (
        <View>

            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} />
                <TouchableOpacity onPress={backPress}
                    style={{
                        zIndex: 2,
                        position: 'absolute',
                        top: insets.top + 10,
                        left: 20,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Feather name="chevron-left" color="white" size={26} />
                </TouchableOpacity>

                <ImageBackground
                    source={{ uri: props.novelInfoProps.novelInfo.avatar }}
                    style={styles.image}
                    resizeMode="cover"
                    blurRadius={10}>
                    <ImageBackground
                        source={{ uri: props.novelInfoProps.novelInfo.avatar }}
                        style={styles.avatar}
                        imageStyle={{ borderRadius: 10 }} />
                    <HarmonyText style={styles.type}>{props.novelInfoProps.novelInfo.type}</HarmonyText>
                    <HarmonyText style={styles.title}>{props.novelInfoProps.novelInfo.title}</HarmonyText>
                    <HarmonyText style={styles.author}>Bởi {props.novelInfoProps.novelInfo.author}</HarmonyText>
                    <HarmonyText style={styles.btnRead}>Đọc truyện</HarmonyText>
                </ImageBackground>
            </View >
            <View>
                <MyTabs />
            </View>
        </View>
    );
};

export type NovelInfoProps = {
    novelInfo: NovelInfo;
}

export type DetailBannerProps = {
    novelInfoProps: NovelInfoProps;
    navigator: any;
}

export default BannerComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        margin: 20,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height: 300,
    },
    avatar: {
        flex: 1,
        height: 180,
        width: 100,
        position: "absolute",
        bottom: 0,
        marginBottom: 20,
        marginLeft: 20
    },
    title: {
        color: 'white',
        marginLeft: 135,
        fontWeight: 'bold',
        fontSize: 16
    },
    type: {
        color: 'white',
        marginLeft: 135,
        marginBottom: 5,
        backgroundColor: 'blue',
        borderRadius: 6,
        alignSelf: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 13
    },
    author: {
        color: 'white',
        marginLeft: 135,
        fontSize: 13,
        marginBottom: 10,
        marginTop: 5
    },
    btnRead: {
        color: 'white',
        marginLeft: 135,
        fontSize: 14,
        top: 70,
        backgroundColor: 'blue',
        alignSelf: 'flex-start',
        borderRadius: 6,
        padding: 3,
 
    }
});
