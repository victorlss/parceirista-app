import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerWrapper: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 20
    },
    servicesWrapper: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 16,
        alignItems: 'center'
    },
    ProfileInfoWrapper: {},
    text: {
        fontFamily: 'Raleway_400Regular',
        color: '#778ca3',
        fontSize: 13,
        marginBottom: 11
    },
    strongText: {
        fontFamily: 'Raleway_700Bold',
        color: '#778ca3',
        fontSize: 15,
        marginBottom: 9
    },
    textLabel: {
        color: '#778ca3',
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 5
    },
    servicesViewWrapper: {
        marginTop: 20
    },
    intraServicesWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkLabel: {
        color: '#778ca3',
        fontFamily: 'Raleway_400Regular',
        fontSize: 12,
        lineHeight: 14
    },
    starsWrapper: {
        marginTop: 8,
        marginBottom: 8
    },
    avaliationsTotalText: {
        color: '#778ca3',
        fontFamily: 'Raleway_400Regular',
        fontSize: 11,
        marginTop: 4
    },
    userAvaliationsWrapper: {
        marginTop: 19
    },
    topUserAvaliationsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 11,
        overflow: 'hidden'
    },
    nameUserAvaliation: {
        marginRight: 9,
        marginLeft: 6,
        color: '#778ca3',
        fontFamily: 'Raleway_400Regular',
        fontSize: 13
    },
    downUserAvaliationsWrapper: {
        maxWidth: 280,
        overflow: 'hidden',
        color: '#778ca3',
        fontFamily: 'Raleway_400Regular',
        fontSize: 11,
        lineHeight: 15
    },
    avaliationTopContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avaliationWrapper: {
        marginTop: 24,
        marginBottom: 15
    },
    avaliationText: {
        color: '#a55eea',
        fontFamily: 'Raleway_700Bold',
        fontSize: 16,
        lineHeight: 15
    },
    avaliationDownContent: {
        color: '#778ca3',
        fontFamily: 'Raleway_400Regular',
        fontSize: 12,
        lineHeight: 15,
        marginTop: 12,
        overflow: 'hidden'
    }
})

export default styles