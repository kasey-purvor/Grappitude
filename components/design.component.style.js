import { StyleSheet } from 'react-native'

export default StyleSheet.create({
bar: {
      marginTop: 20,
      height: 40,
      width: '100%',
      borderRadius: 10,
      borderWidth: 5,
      borderColor: '#6EC0D4'
    },
  
filler: {
      height: 30,
      // width: '50%',
      borderWidth: 15,
      borderRadius: 5,
      borderColor: '#EFCABA',
      position: 'absolute',
      marginTop: 25
    },
  
mainview: {
    marginTop: 40,
    margin: 15
},

title: {
  position: 'absolute',
  justifyContent: 'center', 
  alignItems: 'center',
  marginTop: 60
},

welcome: {
        textAlign: 'center',
        color: '#EFCABA',
         marginTop: 20,
         fontSize: 50,
         textShadowColor: '#6EC0D4',
         textShadowOffset: {width: -1, height: 2},
         textShadowRadius: 0
},

textinput: {
           height: 90,
           textAlign: 'center',
           marginRight: 75,
           width: '80%',
           borderColor: '#6EC0D4',
           borderRadius: 10,
           borderWidth: 1,
           marginTop: 60,
           marginLeft: 40,
},

image: {
  width: '100%',
}

  })