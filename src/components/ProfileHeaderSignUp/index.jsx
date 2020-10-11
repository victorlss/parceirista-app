import React from "react";
import { Image, Text, View } from "react-native";
import LineSeparator from "../LineSeparator";
import ProfileInfo from "../ProfileInfo";
import ProfileWithoutName from "../ProfileWithoutName";
import styles from "./styles";

export default function ProfileHeaderSignUp(props) {
  return (
    <View>
      <View style={styles.profileWrapper}>
        <ProfileInfo signup description={props.description} />
        <ProfileWithoutName />
      </View>
      <LineSeparator />
    </View>
  );
}
