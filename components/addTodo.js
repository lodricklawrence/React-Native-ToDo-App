import React, { useState } from 'react'
import { View,TextInput,Text, Button} from 'react-native'
import styles from '../styles/styles'
function AddTodo({addTodoItem}) {
    const [item,setItem]=useState('')
    const [key,setKey]=useState(11)
    const changeHandler=(val)=>{
        setItem(val)
    }

    const handlePress=()=>{
        setKey(key + 1)
        console.log(key)
        addTodoItem(item,key)
    }
  return (
    <View>
        <Text>Add Todo Item</Text>
        <TextInput style={styles.itemInput} onChangeText={changeHandler} placeholder='new todo'/>
        <Button title='Add Item' color='coral' onPress={handlePress}/>
    </View>
  )
}

export default AddTodo