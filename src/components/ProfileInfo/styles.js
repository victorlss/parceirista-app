import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    topView: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    topImageProfile: {
        borderRadius: 2,
        width: 40,
        height: 40
    },
    topInfo: {
        fontSize: 13,
        fontFamily: 'Raleway_400Regular',
        lineHeight: 21,
        color: '#778ca3',
        marginLeft: 8
    }
})

export default styles