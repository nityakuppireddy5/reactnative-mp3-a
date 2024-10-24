import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../MainStackScreen';
import { styles } from './ConfirmationScreen.styles';

// Define props for the component
interface Props {
  navigation: StackNavigationProp<MainStackParamList, 'ConfirmationScreen'>;
}

// Functional component for the Confirmation Screen
const ConfirmationScreen: React.FC<Props> = ({ navigation }) => {

  const navigateToHome = () => navigation.navigate('HomeScreen');
  const navigateToFeed = () => navigation.navigate('FeedScreen');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your event has been created!</Text>
      
      <Button onPress={navigateToHome}>
        Go to Home
      </Button>

      <Button onPress={navigateToFeed} labelStyle={{ color: 'white' }} style={[styles.button, { backgroundColor: 'blue' }]}>
    View Events
    </Button>

    </View>
  );
};

export default ConfirmationScreen;
