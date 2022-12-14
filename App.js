import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [variable, setVariable] = useState(true)
  return (
    <View style={styles.container}>
      <Button title='press me' onPress={()=>{setVariable(!variable)}} color={variable?'red':'blue'}></Button>
      <Text style={{fontFamily:'monospace', fontWeight:'bold', fontSize:'2rem'}}>{variable?'hola':'chau'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
