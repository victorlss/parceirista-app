import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa'
    },
    topView: {
        justifyContent: 'flex-start',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18
    },
    topImageProfile: {
        borderRadius: 2,
        width: 60,
        height: 60
    },
    topInfo: {
        fontSize: 18,
        fontFamily: 'Raleway_400Regular',
        lineHeight: 21,
        color: '#778ca3',
        marginLeft: 16
    },
    welcomeView: {
        marginTop: 80,
        paddingHorizontal: 18
    },
    welcomeText: {
        color: '#778ca3',
        fontFamily: 'Raleway_400Regular',
        fontSize: 18,
        lineHeight: 21,
        paddingBottom: 17
    },
    welcomeTextStrong: {
        fontFamily: 'Raleway_700Bold',
        color: '#778ca3',
        fontSize: 18,
        lineHeight: 21
    },
    inputsView: {
        marginTop: 16,
        paddingHorizontal: 19
    },
    inputsTextLabel: {
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
        borderColor: '#fd9644',
        marginBottom: 8,
        paddingLeft: 20
    },
    serviceView: {
        paddingHorizontal: 18,
        marginTop: 15
    },
    acordoView: {
        paddingHorizontal: 18,
        marginTop: 20
    },
    checkboxView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    checkboxElement: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    descriptionView: {
        paddingHorizontal: 18,
        marginTop: 20
    },
    textAreaInput: {
        width: '100%',
        minHeight: 100,
        borderRadius: 4,
        backgroundColor: '#fafafc',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#fd9644',
        marginBottom: 8,
        paddingLeft: 20
    },
    buttonView: {
        paddingHorizontal: 18,
        marginTop: 20,
        marginBottom: 15,
        alignItems: 'center'
    },
    buttonWrapper: {
        width: 320,
        height: 55,
        backgroundColor: '#ffe2cb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    textWrapper: {
        color: '#fd9644',
        fontFamily: 'Raleway_700Bold',
        fontSize: 18
    }
})

export default styles
