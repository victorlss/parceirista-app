import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 85,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#a55eea',
        paddingHorizontal: 8,
        paddingVertical: 6,
        justifyContent: 'space-between'
    },
    containerOrange: {
        width: '100%',
        height: 85,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fd9644',
        paddingHorizontal: 8,
        paddingVertical: 6,
        justifyContent: 'space-between'
    },
    topContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textTopContent: {
        fontFamily: 'Raleway_700Bold',
        color: '#778ca3',
        fontSize: 14,
        lineHeight: 16
    },
    textDownContent: {
        fontFamily: 'Raleway_700Bold',
        color: 'white',
        fontSize: 12,
        lineHeight: 16
    },
    boxDownContent: {
        width: 80,
        height: 30,
        borderRadius: 4,
        backgroundColor: '#a55eea',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxDownContentOrange: {
        width: 80,
        height: 30,
        borderRadius: 4,
        backgroundColor: '#fd9644',
        alignItems: 'center',
        justifyContent: 'center'
    },
    DownContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default styles