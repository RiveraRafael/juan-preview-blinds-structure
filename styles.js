
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    home: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 10,
        backgroundColor: '#CCCCCC'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sliderBox:{
        padding: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    switchContainer: {
        flexDirection: 'row'
    },  
    switchContents: {
        flex: 1,
    },
    text: {
      fontSize: 15,
      marginBottom: 20,
    },
    stepContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    stepText: {
      fontSize: 16,
      color: '#333',
      flex: 1,
      textAlign: 'center'
    },
    slider: {
      width: 300,
      height: 40
    },
    tableLeft: {
        flex: 1, textAlign: 'left'
    },
    tableCentre: {
        flex: 1, textAlign: 'center'
    },
    tableRight: {
        flex: 1, textAlign: 'right'
    },
    navigationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navigationText: {
        fontSize:15
    }
  });