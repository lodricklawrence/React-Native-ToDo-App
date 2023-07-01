import { StatusBar } from 'expo-status-bar';
import { Text, View , TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles/styles';
import Header from './components/header';
import Todos from './components/todos';
export default function App() {


  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
        <StatusBar style="auto" />
          <Header/>
          <Todos />
      </View>
    </TouchableWithoutFeedback>
  );
}


