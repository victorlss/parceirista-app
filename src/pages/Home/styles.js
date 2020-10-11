import { Raleway_700Bold } from '@expo-google-fonts/raleway'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        justifyContent: 'center'
    },
    topView: {
        flex: 0.4,
        paddingHorizontal: 35,
        paddingTop: 60,
        justifyContent: 'flex-start'
    },
    topLogo: {
        width: 288,
        height: 74
    },
    topDescription: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 18,
        color: '#778CA3',
        paddingTop: 12,
        lineHeight: 21
    },
    downContent: {
        flex: 0.5,
        paddingHorizontal: 35,
        justifyContent: 'flex-end'
    },
    downBottons: {
        paddingBottom: 40
    },
    firstBottom: {
        backgroundColor: '#C69CEF',
        width: 297,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 39
    },
    secondBottom: {
        backgroundColor: '#FFB67B',
        width: 297,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8
    },
    downTextBottons: {
        color: 'white',
        fontFamily: 'Raleway_700Bold',
        fontSize: 24,
        paddingLeft: 13
    },
    downTextInfo: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 13,
        color: '#778ca3'
    }
})

export default styles
