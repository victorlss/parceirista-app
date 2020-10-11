import {StyleSheet} from "react-native";
import colors from "../../styles/colors";

const styles = (theme) => StyleSheet.create({
  view: {
    marginTop: 0,
    backgroundColor: colors[theme].primary,
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 18
  },
  text: {
    color: '#fff',
    fontFamily: 'Raleway_400Regular',
    fontSize: 18,
    lineHeight: 21,
    paddingBottom: 17
  },
  textBold: {
    fontFamily: 'Raleway_700Bold',
    color: '#fff',
    fontSize: 18,
    lineHeight: 21
  }
})

export default styles
