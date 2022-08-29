import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = ({navigation}) =>
    <View style={styles.eachView}>
        <Text> 홈 화면 입니다. </Text>
        <Button
          title="챗 화면으로 가기"
          onPress={() => navigation.navigate('Chat')}
        />
        <Button
          title="세팅 화면으로 가기"
          onPress={() => navigation.navigate('Settings')}
        />
    </View>

const Chat = () =>
    <View style={styles.eachView}>
        <Text> 챗 화면 입니다. </Text>
    </View>

const Settings = () =>
    <View style={styles.eachView}>
        <Text> 세팅 화면 입니다. </Text>
    </View>

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eachView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})