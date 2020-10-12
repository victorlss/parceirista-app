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
    parceirosButton: {
        backgroundColor: '#fafafc',
        textAlignVertical: 'center',
        textAlign: 'center',
        width: '50%',
        height: 60,
        marginBottom: 12
    },
    parceirosButtonView: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#E6E6F0',
        textAlignVertical: 'center',
        textAlign: 'center',
        width: '100%',
        height: 60
    },
    parceirosButtonText: {
        color: '#E6E6F0',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginTop: 18,
        fontSize: 16,
        fontWeight: 'bold'
    },
    activeButtonView: {
        borderColor: '#FD9644'
    },
    activeButtonText: {
        color: '#FD9644'
    },
    serviceView: {
        marginTop: 15
    },
    inputsTextLabel: {
        color: '#778ca3',
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
        lineHeight: 16
    },
    inputsTextDescription: {
        color: '#778ca3',
        fontFamily: 'Raleway_400Regular',
        fontSize: 12,
        lineHeight: 16,
        marginBottom: 8
    },
    lineWrapper: {
        marginVertical: 16
    }
})

export default styles
