import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        justifyContent: 'center'
    },
    topView: {
        marginTop: 10,
        flex: 0.4,
        paddingHorizontal: 35,
        justifyContent: 'flex-start'
    },
    logo: {
        width: '100%',
        height: 74
    },
    message: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 18,
        color: '#778CA3',
        paddingTop: 12,
        lineHeight: 21
    },
    bottomView: {
        flex: 0.5,
        paddingHorizontal: 35,
        justifyContent: 'flex-end'
    },
    button: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 25
    },
    buttonIcon: {
        height: '100%',
        width: 50,
        paddingTop: 30,
        paddingLeft: 15,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Raleway_700Bold',
        fontSize: 24,
        paddingLeft: 13
    },
    footerText: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 13,
        color: '#778ca3'
    }
})

export default styles