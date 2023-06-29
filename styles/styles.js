import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header:{
      height: 100,
      paddingTop: 38,
      backgroundColor: 'coral'
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'

    },
    content:{
      padding: 40,
      flex: 1
    },
    list:{
      marginTop: 20,
      flex : 1
    },
    item:{
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 10,
      flexDirection: 'row',
    },
    itemText:{
        fontSize: 15,
        marginLeft: 10,
    },
    itemInput:{
        padding: 16,
        marginTop: 16,
        marginBottom: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
    },

  });

  export default styles