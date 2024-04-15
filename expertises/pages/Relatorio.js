import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Relatorio() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Relatório
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#404040',
    paddingTop: 20
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
  }
});