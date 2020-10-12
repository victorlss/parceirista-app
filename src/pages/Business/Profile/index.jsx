import React from 'react'
import {connect} from "react-redux";
import {View} from 'react-native'

function Profile(props) {
  const {user} = props
  console.log(user)

  return (
    <View>
    </View>
  )
}

const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile);

