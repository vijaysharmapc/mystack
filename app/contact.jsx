import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

import { Colors } from "../constants/Colors"
import { useColorScheme } from "react-native"

const Contact = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.title, {color: theme.title}]}>Contact Page</Text>

      <Link href="/" style={[styles.link, {color: theme.text}]}>Home Page</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0dfe8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)"
  },
  link:{
        marginVertical: 10,
        borderWidth:1,


  }
})



