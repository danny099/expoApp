import React from 'react';
import {Button} from 'react-native-elements';
import {Text} from 'react-native';
import {GlobalStyles} from '../globals/styles';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class StyledButton extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button
                icon={
                    <Text style={{color: 'white', fontSize: perfectSize(20)}}>
                        {this.props.title}
                    </Text>
                }
                buttonStyle={GlobalStyles.btn}
                type={'clear'}
                onPress={() => {
                    this.props.onClick()
                }}
            />
        )
    }
}
