import React, {useState} from 'react'
import { View, FlatList,Alert } from 'react-native'
import styles from '../styles/styles'
import TodoItem from './todoItem';
import AddTodo from './addTodo';
function Todos() {
    const [todos, setTodos] = useState([
        {text:'buy coffee',key:'1'},
        {text:'create an app',key:'2'},
        {text:'play on the switch',key:'3'},
        {text:'create a database',key:'4'},
        {text:'create a login Form',key:'5'},
        {text:'fetching water',key:'6'},
        {text:'watch movies',key:'7'},
        {text:'wash the clothes',key:'8'},
        {text:'doing homeworks',key:'9'},
        {text:'go o a tailor',key:'10'},
      ]);

      const pressHandler=(key)=>{
       setTodos((prevTodos)=>{
        return prevTodos.filter(todo => todo.key != key)
       })
      }

      const addTodoItem=(text,key)=>{
        const textlegnth = text.length > 5 ? (
            setTodos((prevTodos)=>{
                return [
                    {text:text,key:key.toString()},
                    ...prevTodos,
                ]
            })
        ) : (Alert.alert('OOPS','Todos must be atleast 5 char long'))
 
      }

    return (
        <View style={styles.content}>
            <AddTodo addTodoItem={addTodoItem} />
            <View style={styles.list}>
                <FlatList 
                data={todos}
                renderItem={({item})=>(
                    <TodoItem item={item} pressHandler={pressHandler} />
                )}

                />
            </View>
        </View>
    )
}

export default Todos