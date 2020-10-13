import React from "react";
import {ActivityIndicator, View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import {connect} from "react-redux";
import {setService} from "../../store/actions/serviceActions";

const services = [
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
  }
]

function DemandCard(props) {
  const {service, business, navigate} = props

  const isBusiness = business !== undefined;
  const style = styles(isBusiness);
  const details = services.filter((x) => x.id === service.serviceId)[0].services;

  const requestService = () => {
    props.setService({...service, services: details})
    navigate()
  }

  return (
    <View style={style.containerWrapper}>
      <View style={style.leftCard}>
        <Text style={style.strongText}>{service.professional.name}</Text>
        <Text style={style.text}>{service.description}</Text>
        <Text style={style.text}>{service.professional.telefone}</Text>
      </View>
      <View style={style.rigthCard}>
        <Text style={style.strongText}>Serviços</Text>
        {details.map((detail, index) => (
          <Text key={index} style={style.text}>{detail}</Text>
        ))}
        <TouchableOpacity onPress={() => requestService()}>
          <Text style={style.linkText}>
            <Icon name="check" size={13} color={style.linkText.color}/>{" "}
            Aceitar serviço
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapDispatchToProps = {
  setService: setService,
}

export default connect(null, mapDispatchToProps)(DemandCard);
