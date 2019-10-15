import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import styles from './styles'

export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#081322" />
  </View>
);
