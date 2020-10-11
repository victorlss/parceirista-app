import React, {Fragment} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe"
import LinkWithIcon from '../../../components/HyperlinkWithIcon'
import WelcomeBar from "../../../components/WelcomeBar"
import styles from './styles'
import logoSebrae from "../../../assets/images/logo-sebrae.png"

export default function Welcome(props) {
  const theme = 'business';

  return (
    <Fragment>
      <WelcomeBar theme={theme}>
        <Text style={styles.welcomeTextBold}>Parcerista, Francisco.</Text>
      </WelcomeBar>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Como garantir a qualidade dos serviços prestados e ter crescimento para o seu empreendimento?
        </Text>

        <View>
          <YoutubePlayer
            height='100%'
            play={false}
            videoId={"ECZgh2ShdAo"}
          />
        </View>

        <Text style={styles.text}>
          Para mais conteúdo para o seu empreendimento acesse Sebrae
        </Text>
        <View style={styles.linkView}>
          <LinkWithIcon icon={logoSebrae} text='Clique aqui' url='https://www.sebrae.com.br/'/>
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('BusinessNavigation')}>
          <Text style={styles.buttonText}>PROXIMO</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}
