import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cardServicesWrapper: {
        backgroundColor: '#e9d4fd',
        maxWidth: 160,
        minHeight: 30,
        overflow: 'hidden',
        paddingLeft: 8,
        paddingRight: 16,
        paddingVertical: 8,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    cardTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTextLabel: {
        marginLeft: 8,
        color: '#a55eea',
        fontFamily: 'Raleway_700Bold',
        fontSize: 12
    }
})

export default styles