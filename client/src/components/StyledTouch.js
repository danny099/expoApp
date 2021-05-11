import React from 'react';
import { Button } from 'react-native-elements';
import { Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../globals/styles';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class StyledButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onClick();
        }}
        style={{
          paddingHorizontal: perfectSize(20),
          paddingVertical: perfectSize(8),
          borderColor: this.props.color ? this.props.color : '#e8eef4',
          borderRadius: 10,
          borderWidth: 1,
          backgroundColor: this.props.click ? '#4875e9' : 'white',
          height: 38,
        }}
      >
        <Text
          style={{
            color: this.props.color
              ? this.props.color
              : this.props.click
              ? 'white'
              : 'black',
          }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
