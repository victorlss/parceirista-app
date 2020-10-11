import React from "react";
import { Image, Text, View } from "react-native";
import LineSeparator from "../LineSeparator";
import ProfileInfo from "../ProfileInfo";
import ProfileSignName from "../ProfileSignName";
import Welcome from "../Welcome";
import styles from "./styles";

export default function ProfileHeader(props) {
  return (
    <View>
      <View style={styles.profileWrapper}>
        <ProfileInfo url={props.url} />
        <ProfileSignName name={props.name} />
      </View>
      <LineSeparator />
    </View>
  );
}
