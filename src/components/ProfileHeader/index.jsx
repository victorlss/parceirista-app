import React, {Fragment} from "react";
import {Image, View} from "react-native";
import LineSeparator from "../LineSeparator";
import styles from "./styles";
import logo from '../../assets/images/logo.png'
import ProfileInfoName from "../ProfileInfoName";

export default function ProfileHeader() {
  return (
    <Fragment>
      <View style={[styles.container, {marginTop: 40}]}>
        <Image style={styles.logo} resizeMode='stretch' source={logo}/>
        <ProfileInfoName />
      </View>
      <LineSeparator/>
    </Fragment>
  );
}
