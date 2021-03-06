import React from "react";
import { Text, View } from "react-native";
import ProgressBar from "../ProgressBar";
import styles from "./styles";

export default function CardInfoPayments(props) {
  return (
    <View style={props.orange ? styles.containerOrange : styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.textTopContent}>{props.name}</Text>
        <ProgressBar
          width={188}
          height={20}
          color={props.color}
          progress={props.progress ? props.progress : 0.56}
          borderWith={1}
          borderColor={props.color}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text
          style={[styles.textTopContent, { fontSize: 16, color: "#a55eea" }]}
        >
          Pago R$ {(props.total * (props.progress ? props.progress : 0.56)).toFixed(2)}{" "}
        </Text>
        <Text
          style={[styles.textTopContent, { fontSize: 16, color: "#fd9644" }]}
        >
          Total R$ {props.total.toFixed(2)}
        </Text>
      </View>

      <View style={styles.DownContent}>
        <View
          style={
            props.orange ? styles.boxDownContentOrange : styles.boxDownContent
          }
        >
          <Text style={styles.textDownContent}>+ 10%</Text>
        </View>
        <View
          style={
            props.orange ? styles.boxDownContentOrange : styles.boxDownContent
          }
        >
          <Text style={styles.textDownContent}>+ 50%</Text>
        </View>
        <View
          style={
            props.orange ? styles.boxDownContentOrange : styles.boxDownContent
          }
        >
          <Text style={styles.textDownContent}>+ 100%</Text>
        </View>
      </View>
    </View>
  );
}
