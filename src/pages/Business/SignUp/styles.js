import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa'
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
