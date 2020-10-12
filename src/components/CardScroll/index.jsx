import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { RectButton } from "react-native-gesture-handler";

export default function CardScroll({ business, name, icon, onPress }) {
  const isBusiness = business !== undefined;
  return (
    <RectButton style={styles(isBusiness).cardWrapper} onPress={onPress}>
      <Icon
        style={styles(isBusiness).iconWrapper}
        name="hands-helping"
        size={40}
        color={styles(isBusiness).textInfo.color}
      />
      <Text style={styles(isBusiness).textInfo}>{name}</Text>
    </RectButton>
  );
}
