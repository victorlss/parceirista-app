import React from "react";
import { Image, Text, View } from "react-native";
import LineSeparator from "../LineSeparator";
import ProfileInfo from "../ProfileInfo";
import ProfileSignName from "../ProfileSignName";
import Welcome from "../Welcome";
import styles from "./styles";
import authApi from '../../api/authApi'

export default function ProfileHeader(props) {

  return (
    <View>
      <View style={styles.profileWrapper}>
        <ProfileInfo uri={props.url} description={props.description} />
        <ProfileSignName name={authApi.user.name} />
      </View>
      <LineSeparator />
    </View>
  );
}
