import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    headerView: {
        justifyContent: 'flex-start',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'Raleway_400Regular',
        lineHeight: 21,
        color: '#778ca3',
        marginLeft: 16
    },
    logo: {
        borderRadius: 2,
        width: 60,
        height: 60
    },
    formView: {
        marginTop: 16,
        paddingHorizontal: 19
    },
    label: {
        color: '#778ca3',
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 16
    },
    textInput: {
        width: '100%',
        height: 55,
        borderRadius: 4,
        backgroundColor: '#fafafc',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#A55EEA',
        marginBottom: 8,
        paddingLeft: 20
    },
    buttonView: {
        paddingHorizontal: 18,
        marginTop: 20,
        marginBottom: 15,
        alignItems: 'center'
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
