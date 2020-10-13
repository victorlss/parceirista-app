import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import LineSeparator from "../../../components/LineSeparator";
import DemandCard from "../../../components/DemandCard";
import CardScroll from "../../../components/CardScroll";
import ProfileHeader from "../../../components/ProfileHeader";
import serviceApi from "../../../api/serviceApi";

export default function Home(props) {
  const {navigation} = props
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);

  if (categories.length == 0) {
    serviceApi.getCategories().then((res) => {
      filter(res[0])
      setCategories(res)
    });
  }


  const filter = (service) => {
    if (service)
    serviceApi.get(service.id).then((res) => {
      setServices(res)
    });
  }

  const navigate = () => {
    navigation.navigate('ServiceDetail')
  }

  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader />
      <View style={styles.serviceView}>
        <Text style={styles.inputsTextLabel}>Serviços</Text>
        <Text style={styles.inputsTextDescription}>
          Selecione um serviço para filtrar
        </Text>
        <ScrollView horizontal={true}>
          {categories.map((service, i) => (
            <CardScroll
              key={`service-${i}`}
              business
              name={service.name}
              icon={service.icon}
              onPress={() => filter(service)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.lineWrapper}>
        <LineSeparator />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 16,
          paddingTop: 5,
        }}
      >
        {services.map((service, index) => (
          <DemandCard key={index} service={service} navigate={navigate} business />
        ))}
      </ScrollView>
    </View>
  )
}
