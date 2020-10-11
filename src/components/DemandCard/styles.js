import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    rigthCard: {
        backgroundColor: '#e6e6f0',
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: '50%'
    },
    leftCard: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: '50%'
    },
    text: {
        fontFamily: 'Raleway_400Regular',
        color: '#778ca3',
        fontSize: 13,
        marginBottom: 8
    },
    strongText: {
        fontFamily: 'Raleway_700Bold',
        color: '#778ca3',
        fontSize: 15,
        marginBottom: 9
    },

    orangeText: {
        fontFamily: 'Raleway_700Bold',
        color: '#fd9644',
        fontSize: 15,
        marginBottom: 4
    },
    purpleText: {
        fontFamily: 'Raleway_700Bold',
        color: '#a55eea',
        fontSize: 15,
        paddingTop: 3,
        paddingBottom: 4
    }
})

export default styles