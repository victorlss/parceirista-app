import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function MediumButton(props) {
  const isBusiness = props.business != undefined
  const buttonStyle = () => ({
      view: [styles(isBusiness).buttonView, props.isActive ? styles(isBusiness).activeView : {}],
      text: [styles(isBusiness).buttonText, props.isActive ? styles(isBusiness).activeText : {}],
    });

  return (
    <RectButton style={styles(isBusiness).button} onPress={props.onPress}>
      <View style={buttonStyle().view}>
        <Text style={buttonStyle().text}>{props.text}</Text>
      </View>
    </RectButton>
  );
}
