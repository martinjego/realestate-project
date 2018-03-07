import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardContent, Title, Paragraph, CardCover, CardActions, Button, Headline } from 'react-native-paper';
import styles from '../styles/splash';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Screen1 extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Screen2'), 2000)
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Grid>
        <Col style={styles.container}>
          <Headline>Splash Screen</Headline>
        </Col>
      </Grid>
    )
  }
}
