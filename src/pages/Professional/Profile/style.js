import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#f8f9fa'
    },
    profileWrapper: {
        marginTop: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 11
    },
    saldoContainerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    saldoText: {
        fontFamily: 'Raleway_700Bold',
        color: '#fd9644',
        fontSize: 18,
        lineHeight: 26
    },
    saldoTextLigth: {
        fontFamily: 'Raleway_400Regular',
        color: '#fd9644',
        fontSize: 18,
        lineHeight: 26
    },
    textStars: {
        fontFamily: 'Raleway_400Regular',
        color: '#fd9644',
        fontSize: 13,
        lineHeight: 16,
        marginBottom: 2
    },
    buttonsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    receberButton: {
        borderRadius: 4,
        backgroundColor: '#fafafc',
        borderStyle: 'solid',
        borderRightWidth: 19,
        borderColor: '#fd9644',
        width: '50%',
        height: 50
    },
    inputsTextLabel: {
        color: '#778ca3',
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 16,
        marginTop: 16
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