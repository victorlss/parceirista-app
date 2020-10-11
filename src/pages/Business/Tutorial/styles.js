import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 18,
    height: '100%'
  },
  text: {
    fontFamily: 'Raleway_400Regular',
    color: '#778CA3',
    fontSize: 18,
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 10
  },
  linkView: {
    marginTop: 20
  },
  buttonView: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 18,
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#E9D4FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 30
  },
  buttonText: {
    color: '#A55EEA',
    fontFamily: 'Raleway_700Bold',
    fontSize: 18
  }
})

export default styles
