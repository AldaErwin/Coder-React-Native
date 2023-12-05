import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({
  addItemToListEvent,
  title = 'Add'
}
) => {
  return (
    <Pressable style={styles.button} onPress={addItemToListEvent}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#000000',
    height: 50,
    width: 50,
    alignSelf: 'center',
    margin: 15,
    padding: 5,
    shadowOpacity: 10,
    shadowRadius:10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#8377D1',
  },
});