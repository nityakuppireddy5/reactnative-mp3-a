import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './HomeScreen.styles'; 
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../MainStackScreen.js";

interface HomeScreenProps {
    navigation: StackNavigationProp<MainStackParamList, "HomeScreen">;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleNavigation = (screen: keyof MainStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MDB Socials!</Text>

      <TouchableWithoutFeedback onPress={() => handleNavigation('FeedScreen')}>
        <View style={styles.button}>
          <Text style={styles.linkText}>View events</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleNavigation('NewSocialScreen')}>
        <View style={styles.button}>
          <Text style={styles.linkText}>Create new event</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default HomeScreen;
