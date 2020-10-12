import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = (isBusiness) => {
    const primary = colors.type(isBusiness).primary
    const primaryLight = colors.type(isBusiness).primaryLight
    const primaryBackground = colors.type(isBusiness).primaryBackground

    return StyleSheet.create({
        containerWrapper: {
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: '#f8f9fa'
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
            backgroundColor: primaryBackground,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4
        },
        textWrapper: {
            color: primary,
            fontFamily: 'Raleway_700Bold',
            fontSize: 18
        }
    })
}

export default styles