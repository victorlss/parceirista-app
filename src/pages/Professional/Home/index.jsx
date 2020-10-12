import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView } from "react-native";
import Stars from "../../../components/Stars";
import DemandCard from "../../../components/DemandCard";
import ProfileHeader from "../../../components/ProfileHeader";
import MediumButton from "../../../components/MediumButton";
import contractApi from "../../../api/contractApi";
import styles from "./style";
import WorkInProgress from "../../../components/WorkInProgress";

function Home(props) {
  const { user } = props;
  const [activeTab, setActiveTab] = useState(1);
  const theme = "professional";
  const [demands, setDemand] = useState([]);
  contractApi.getAll(user._id).then((res) => setDemand(res));


  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader />

      <View style={styles.saldoContainerWrapper}>
        <Text style={styles.saldoTextLigth}>
          Saldo Total{"\n"}
          <Text style={styles.saldoText}>R$ 300,00</Text>
        </Text>
        <View style={styles.starsWrapper}>
          <Text style={styles.textStars}>Minhas avaliações</Text>
          <Stars />
        </View>
      </View>

      <View style={styles.buttonsWrapper}>
        <MediumButton
          text="Receber Trabalhos"
          isActive={activeTab === 1}
          onPress={() => setActiveTab(1)}
        />
        <MediumButton
          text="Meus Trabalhos"
          isActive={activeTab === 2}
          onPress={() => setActiveTab(2)}
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        {activeTab === 1 ? (
          <Fragment>
            {demands.length > 0 ? demands.map((demand) => (
              <DemandCard key={demand._id} />
            )) : (
              <Text style={{fontSize:16, color:'lightgrey', textAlign: "center"}}>Sem demandas no momento {"\n"} Em breve você receberá propostas!</Text>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <WorkInProgress theme={theme} />
          </Fragment>
        )}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = function (state) {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Home);
