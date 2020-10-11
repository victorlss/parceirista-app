import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = (isBusiness) => {
    const primary = colors.type(isBusiness).primary
    const primaryLight = colors.type(isBusiness).primaryLight

    return StyleSheet.create({
        textInput: {
            width: '100%',
            height: 55,
            borderRadius: 4,
            backgroundColor: '#fafafc',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: primary,
            marginBottom: 8,
            paddingLeft: 20
        }
    })
}

export default styles