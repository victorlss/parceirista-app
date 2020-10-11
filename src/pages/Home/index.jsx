import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={{
            uri:
              'https://avatars1.githubusercontent.com/u/54149914?s=460&u=e6a4306816a79fdcf1f4927c265ede6adcfb5a33&v=4'
          }}
          style={styles.topLogo}
        />
        <Text style={styles.topDescription}>
          Crescimento para os {'\n'}primeiros empreendimentos.
        </Text>
      </View>

      <View style={styles.downContent}>
        <View style={styles.downBottons}>
          <TouchableOpacity style={styles.firstBottom}>
            <Text style={styles.downTextBottons}>Buscar um parceiro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondBottom} onPress={() => props.navigation.navigate('Seja um parceiro')}>
            <Text style={styles.downTextBottons}>Seja um parceiro</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.downTextInfo}>
          Total de 652 <Icon name="hands-helping" size={13} color="#a55eea"/>{' '}
          parceiristas
        </Text>
      </View>
    </View>
  )
}
