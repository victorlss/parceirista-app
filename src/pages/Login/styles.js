import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  topView: {
    paddingHorizontal: 35,
    justifyContent: 'flex-start'
  },
  logo: {
    width: '100%',
  },
  text: {
    fontFamily: 'Raleway_400Regular',
    fontSize: 16,
    color: '#778CA3',
    paddingTop: 12,
    textAlign: 'center'
  },
  linkText: {
    fontFamily: 'Raleway_700Bold',
    fontSize: 16,
    color: '#778ca3',
    marginTop: -7,
    marginBottom: 50,
  },
  formView: {
    marginTop: 16,
    paddingHorizontal: 20,
    justifyContent: 'flex-start'
  },
  textInput: {
    width: '100%',
    height: 55,
    borderRadius: 4,
    backgroundColor: '#fafafc',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#778CA3',
    marginBottom: 10,
    paddingLeft: 20
  },
  buttonView: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'center'
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#778CA3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Raleway_700Bold',
    fontSize: 18
  }
})

export default styles
