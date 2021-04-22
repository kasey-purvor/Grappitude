import { StyleSheet } from 'react-native';
import { useFonts, Comfortaa_300Light } from '@expo-google-fonts/comfortaa';

export default StyleSheet.create({

  homescreen:{
    backgroundColor: '#ECEAC4',
    height: 1000
  },

  image: {
   height: 100, 
   width: 500
  },

  inspirebutton: {
    marginTop: 70,
    backgroundColor: '#F7C9B6',
    width: 150,
    marginLeft: '30%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EFCABA',
    shadowColor: "#6EC0D4",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },

  buttonviewtwo: {
    marginTop: 10,
    width: 150,
    marginLeft: '30%',
  },

  titlequestion: {
    textAlign: 'center',
     fontSize: 45,
     color: '#F7C9B6',
     textShadowColor: '#6EC0D4',
     textShadowOffset: {width: -1, height: 2},
     textShadowRadius: 0,
     marginTop: 0,
     fontFamily: 'Comfortaa_300Light',
     marginTop: 80
  },

  thoughtinput: {
    height: 90,
    textAlign: 'center',
    marginRight: 75,
    width: '80%',
    borderColor: '#6EC0D4',
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 40,
    color:'#4D9DB2',
    fontSize: 15,
    marginTop: 60
  },

  gratlevel: {
    fontFamily: 'Comfortaa_300Light',
    fontSize: 30,
    textAlign: 'center',
    color: '#EFCABA',
    textShadowColor: '#6EC0D4',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 0,
    marginTop: 50
  },

  bar: {
        marginTop: 30,
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
        marginTop: 35
      },
    
  mainview: {
      marginTop: 1,
      margin: 15
  },

  thoughtdisplay: {
      textAlign: 'center',
      marginTop: 50,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#EFCABA'
  },

  thoughtsbackground: {
    backgroundColor: '#F2F1CE'
  },

  thoughtstext: {
    color:'#4D9DB2',
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Comfortaa_300Light'
  },

  date: {
    fontSize: 18
  },

  dot: {
    fontSize: 90,
    color: '#EFCABA',
    textShadowColor: '#6EC0D4',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 0,
  },

  navbar: {
    color: '#F5F3C8'
  },
  
  aboutmeview: {
    backgroundColor: '#ECEAC4',
    height: 1000
  },

  aboutmetext: {
    color:'#4D9DB2',
    fontSize: 16,
    marginTop: 10,
    padding: 20,
    textAlign: 'center'
    },

  creditstitle: {
    fontSize: 20,
    color:'#4D9DB2',
    marginTop: 0,
    marginLeft: 16,
    textAlign: 'center',
    fontWeight:'bold' 
  },

  aboutmecredits: {
    color:'#4D9DB2',
    fontSize: 16,
    padding: 3,
    marginLeft: 17,
    textDecorationLine: 'underline',
    textAlign: 'center'
    },

  test: {
    alignContent: 'center',
    color: 'green'
  }
  })