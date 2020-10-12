import React from 'react'
import { CheckBox, Text, View } from 'react-native'
import ProfileHeader from '../../../components/ProfileHeader'
import ServicesCard from '../../../components/ServicesCard'
import Stars from '../../../components/Stars'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import LargeButton from '../../../components/LargeButton'

export default function Services() {
  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader />
      <View style={styles.servicesWrapper}>
        <ServicesCard
          icon={<Icon name="pencil-alt" size={20} color="#a55eea" />}
          text="Design Marketing"
        />
      </View>
      <View style={styles.ProfileInfoWrapper}>
        <Text style={styles.strongText}>Priscila alvez</Text>
        <Text style={styles.text}>(67) 1456346-45</Text>
        <Text style={styles.text}>priscila.design@gmail.com</Text>
      </View>
      <View style={styles.servicesViewWrapper}>
        <Text style={styles.textLabel}>Serviços</Text>
        <View style={styles.intraServicesWrapper}>
          <CheckBox />
          <Text style={styles.checkLabel}>Logomarca</Text>
        </View>
        <View style={styles.intraServicesWrapper}>
          <CheckBox />
          <Text style={styles.checkLabel}>Arte para instagram</Text>
        </View>
        <View style={styles.intraServicesWrapper}>
          <CheckBox />
          <Text style={styles.checkLabel}>Assessoria de engajamento</Text>
        </View>
      </View>
      <LargeButton text="SOLICITAR SERVIÇO" />
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
