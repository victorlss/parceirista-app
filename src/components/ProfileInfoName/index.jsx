import React from "react";
import {connect} from "react-redux";
import {Text, TouchableOpacity, View} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import colors from "../../styles/colors";

function ProfileInfoName(props) {
  const {user} = props
  const isLoggedIn = user._id;

  return (
    <View>
      <RectButton>
        {isLoggedIn ? (
          <Text style={[styles.nameText, {color: colors[user.userType].primary}]}>
            Parcerista, {user.name}{' '}
            <Icon name="angle-down" size={14} />{' '}
          </Text>
        ) : (
          <TouchableOpacity onPress={() => props.navigation.navigate('Entrar')}>
            <Text style={styles.nameTextUnlogged}>
              Entrar{' '}
              <Icon name="user-circle" size={14} color="#778CA3" />
            </Text>
          </TouchableOpacity>
        )}
      </RectButton>
    </View>
  );
}

const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ProfileInfoName);
