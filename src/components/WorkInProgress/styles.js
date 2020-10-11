import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'

const styles = (theme) => StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderWidth: 1,
      height: 100,
      borderColor: colors[theme].primary,
      borderRadius: 4
    },
    leftView: {
      backgroundColor: colors[theme].primary,
      paddingHorizontal: 10,
      paddingVertical: 8,
      width: '40%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    rigthView: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      width: '60%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    text: {
      fontFamily: 'Raleway_400Regular',
      fontSize: 14,
      color: '#778CA3'
    },
    textBold: {
      fontFamily: 'Raleway_700Bold',
      fontSize: 14,
      color: '#778CA3'
    },
    textColorLeftView: {
      color: '#fff'
    }
  }
)

export default styles
