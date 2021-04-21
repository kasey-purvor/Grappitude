import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  title: {
    position: 'absolute',
    justifyContent: 'center', 
    alignItems: 'center'
  },

  image: {
    width: '100%',
  },

  buttonview: {
    marginTop: 10,
    backgroundColor: '#EFCABA',
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
     color: '#EFCABA',
     textShadowColor: '#6EC0D4',
     textShadowOffset: {width: -1, height: 2},
     textShadowRadius: 0,
     marginTop: 0
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
    marginTop: 30
  },

  gratlevel: {
    fontSize: 30,
    textAlign: 'center',
    color: '#EFCABA',
    textShadowColor: '#6EC0D4',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 0
  },

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
    backgroundColor: '#EFCABA'
  },

  thoughtstext: {
    color:'#4D9DB2',
    fontSize: 15,
    margin: 10,
    textAlign: 'center',
  },

  test: {
    alignContent: 'center',
    color: 'green'
  }
  })