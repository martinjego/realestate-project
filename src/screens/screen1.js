import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardContent, Title, Paragraph, CardCover, CardActions, Button } from 'react-native-paper';

export default class Screen1 extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Card>
          <CardContent>
            <Title>Screen 1</Title>
            <Paragraph>Card content</Paragraph>
          </CardContent>
          <CardCover source={{ uri: 'https://picsum.photos/700' }} />
          <CardActions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </CardActions>
        </Card>
        <Button raised primary onPress={() => navigate('screen2')}>
          Screen 2
        </Button>
      </View>
    )
  }
}
