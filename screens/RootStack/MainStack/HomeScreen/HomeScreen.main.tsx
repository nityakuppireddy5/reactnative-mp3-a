import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView, Image, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { MainStackParamList } from "../MainStackScreen";
import { styles } from "./HomeScreen.styles";


type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, "HomeScreen">;

interface Props {
    navigation: StackNavigationProp<MainStackParamList, "HomeScreen">;
}

export default function HomeScreen({ navigation }: Props) {
//   Appbar Header
  const Bar = () => {
    return (
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
    );
  };

  return (
    <>
      <Bar />
      {/* <ScrollView style={styles.container}> */}
        <View style={styles.view}>
          <Text style={styles.title}>Welcome to the Home Screen!</Text>
        </View>
      {/* </ScrollView> */}
    </>
  );
}
