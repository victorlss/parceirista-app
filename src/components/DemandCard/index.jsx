import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function DemandCard(props) {
  const {service, business, onPress, navigate} = props

  const isBusiness = business !== undefined;
  const style = styles(isBusiness);
  let services = [
    {
      name: "Design Marketing",
      icon: "hands-helping",
      id: "design-marketing",
      services: ["Logo", "Capa para Instagram", "Plano de Marketing"],
    },
    {
      name: "Planejamento de Negócio",
      icon: "hands-helping",
      id: "planejamento-negocio",
      services: ["Plano de Negócio", "Precificação", "Estratégia de Negocio"],
    },
    {
      name: "Contabilidade",
      icon: "hands-helping",
      id: "contabilidade",
      services: ["Controle de Caixa", "Previsao de Lucro", "Impostos e Taxas"],
    },
  ];
  const details = services.filter((x) => x.id == service.serviceId)[0].services;
  return (
    <TouchableOpacity style={style.containerWrapper} onPress={onPress}>
      <View style={style.leftCard}>
        <Text style={style.strongText}>{service.professional.name}</Text>
        <Text style={style.text}>{service.description}</Text>
        <Text style={style.text}>{service.professional.telefone}</Text>
      </View>
      <View style={style.rigthCard}>
        <Text style={style.strongText}>Serviços</Text>
        {details.map((detail) => (
          <Text style={style.text}>{detail}</Text>
        ))}
        <TouchableOpacity onPress={() => navigate()}>
          <Text style={style.linkText}>
            <Icon name="check" size={13} color={style.linkText.color} />{" "}
            Solicitar serviço
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
