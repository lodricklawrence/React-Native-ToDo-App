import React from 'react'
import { TouchableOpacity,Text,View} from 'react-native'
import styles from '../styles/styles';
import {MaterialIcons} from '@expo/vector-icons';
function TodoItem({item,pressHandler}) {
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <View style={styles.item}>
            <MaterialIcons name='delete' size={20} color='#333'/>    
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default TodoItem