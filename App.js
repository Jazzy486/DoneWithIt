import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Platform } from 'react-native';

const handlePress = () => console.log("Text pressed");


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={() => console.log("Button Tapped")}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    paddingTop: Platform.OS === "android" ? 30 : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
