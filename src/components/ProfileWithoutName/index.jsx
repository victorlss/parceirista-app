import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";

export default function ProfileWithoutName(props) {
  return (
    <View style={styles.nameWrapper}>
      <RectButton>
        <Text style={styles.nameText}>
          <Icon name="user-circle" size={18} color="#778ca3" /> {' '}Cadastrar
        </Text>
      </RectButton>
    </View>
  )
}
