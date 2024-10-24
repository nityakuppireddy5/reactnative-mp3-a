import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView, Image, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { MainStackParamList } from "../MainStackScreen";
import { styles } from "./DetailScreen.styles";

// Define the props using TypeScript interfaces
interface Props {
  navigation: StackNavigationProp<MainStackParamList, "DetailScreen">;
  route: RouteProp<MainStackParamList, "DetailScreen">;
}

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { social } = route.params;

  const handleBackPress = () => navigation.navigate("FeedScreen");

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleBackPress} />
        <Appbar.Content title="Socials" />
      </Appbar.Header>
      
      <ScrollView style={styles.container}>
        <View style={styles.view}>
          <Image style={styles.image} source={{ uri: social.eventImage }} />
          <Text style={[styles.h1, { marginVertical: 10 }]}>
            {social.eventName}
          </Text>
          <Text style={[styles.subtitle, { marginBottom: 5 }]}>
            {social.eventLocation}
          </Text>
          <Text style={[styles.subtitle, { marginTop: 5, marginBottom: 20 }]}>
            {new Date(social.eventDate).toLocaleString()}
          </Text>
          <Text style={styles.body}>
            {social.eventDescription}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailScreen;
