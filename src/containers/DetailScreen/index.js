import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import styles from './styles'

class UserDetail extends Component {
  render() {
    const {
      state: {
        params: { bio},
      },
    } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainView}>
          <View style={styles.subView}>
              <Text style={styles.text}>{bio}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default UserDetail;
