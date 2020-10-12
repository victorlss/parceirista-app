import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = (isBusiness) => {
    const text = isBusiness ? "#a55eea" : '#fd9644'
    const background = isBusiness ? '#e9d4fd' : '#ffe2cb'

    return StyleSheet.create({
        cardWrapper: {
            backgroundColor: background,
            width: 120,
            height: 120,
            marginRight: 10,
            overflow: 'hidden',
            alignItems: 'center'
        },
        textInfo: {
            color: text,
            fontFamily: 'Raleway_700Bold',
            maxWidth: 90,
            fontSize: 13,
            paddingTop: 20
        },
        iconWrapper: {
            paddingTop: 10
        },
    })
}

export default styles