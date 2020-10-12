import React from 'react'
import {connect} from "react-redux";
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import LargeButton from '../../../components/LargeButton'
import ServicesCard from '../../../components/ServicesCard'
import Stars from '../../../components/Stars'
import styles from './styles'
import contractApi from "../../../api/contractApi";

const serviceCard ={
  'design-marketing': (
    <ServicesCard
      icon={<Icon name="pencil-alt" size={20} color="#a55eea" />}
      text="Design Marketing"
    />
  ),
  'planejamento-negocio': (
    <ServicesCard
      icon={<Icon name="user-tie" size={20} color="#a55eea" />}
      text="Planejamento de Negócio"
    />
  ),
  'contabilidade': (
    <ServicesCard
      icon={<Icon name="calculator" size={20} color="#a55eea" />}
      text="Contabilidade"
    />
  )
}

const buildContractPayload = (service, user) => {
  return {
    serviceId: service._id,
    businessId: user._id,
    professionalId: service.professional._id,
    fee: 10,
    discount: 0,
    deliverAt: '2020-11-10',
    deliveredAt: null
  }
}

function ServiceDetail(props) {
  const {professional, serviceId, services} = props.service

  const requestService = () => {
    const payload = buildContractPayload(props.service, props.user)

    contractApi.create(payload)
      .then(response => console.log(response))
      .catch(err => console.error(err))
  }

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.servicesWrapper}>
        {serviceCard[serviceId]}
      </View>
      <View style={styles.ProfileInfoWrapper}>
        <Text style={styles.strongText}>{professional.name}</Text>
        <Text style={styles.text}>{professional.telefone}</Text>
        <Text style={styles.text}>{professional.email}</Text>
      </View>
      <View style={styles.servicesViewWrapper}>
        <Text style={styles.textLabel}>Serviços</Text>
        {services.map((service, index) => (
          <View key={index} style={styles.intraServicesWrapper}>
          <Text style={styles.checkLabel}>{service}</Text>
          </View>
        ))}
      </View>
      <LargeButton text="SOLICITAR SERVIÇO" business onPress={() => requestService()} />

      <View style={styles.avaliationsWrapper}>
        <Text style={[styles.textLabel, styles.starsWrapper]}>Avaliações</Text>
        <Stars />
        <Text style={styles.avaliationsTotalText}>Total 001</Text>
        <View style={styles.userAvaliationsWrapper}>
          <View style={styles.topUserAvaliationsWrapper}>
            <Icon name="user-alt" size={15} color="#778ca3" />
            <Text style={styles.nameUserAvaliation}>Doces da mainha</Text>
            <Stars />
          </View>
          <Text style={styles.downUserAvaliationsWrapper}>
            Serviço bem feito, atenciosa. {}
            Criou uma marca belíssima da forma que eu imaginava.
          </Text>
        </View>
        <View style={styles.userAvaliationsWrapper}>
          <View style={styles.topUserAvaliationsWrapper}>
            <Icon name="user-alt" size={15} color="#778ca3" />
            <Text style={styles.nameUserAvaliation}>Doces da mainha</Text>
            <Stars />
          </View>
          <Text style={styles.downUserAvaliationsWrapper}>
            Serviço bem feito, atenciosa. {}
            Criou uma marca belíssima da forma que eu imaginava.
          </Text>
        </View>
      </View>
    </View>
  )
}

const mapStateToProps = function (state) {
  return {
    service: state.service,
    user: state.user
  }
}

export default connect(mapStateToProps)(ServiceDetail);
