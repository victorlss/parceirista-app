import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = (isBusiness) => {
    const primary = colors.type(isBusiness).primary
    const primaryLight = colors.type(isBusiness).primaryLight

    return StyleSheet.create({
        button: {
            backgroundColor: '#fafafc',
            textAlignVertical: "center",
            textAlign: "center",
            width: '50%',
            height: 60,
            marginBottom: 12
        },
        buttonView: {
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#E6E6F0',
            textAlignVertical: "center",
            textAlign: "center",
            width: '100%',
            height: 60
        },
        buttonText: {
            color: "#E6E6F0",
            textAlignVertical: "center",
            textAlign: "center",
            marginTop: 18,
            fontSize: 16,
            fontWeight: "bold"
        },
        activeView: {
            borderColor: primary
        },
        activeText: {
            color: primary
        },
    })
}

export default styles