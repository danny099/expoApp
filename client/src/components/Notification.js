import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
import {GlobalStyles} from '../globals/styles';
import {Button} from 'react-native-elements';
import {Constants} from '../globals/constant';


const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class Notification extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={{
                    padding: perfectSize(20),
                    backgroundColor: '#e6edfc',
                    borderRadius: 10,
                    flexDirection: 'row',
                    ...GlobalStyles.flexAround,
                    width: '100%',
                    marginTop: perfectSize(10)
                }}
            >
                <View style={{width: '70%'}}>
                    <Text style={{fontSize: Constants.betweenFont, fontWeight: 'bold'}}>{this.props.title}</Text>
                    <Text>{this.props.description}</Text>
                </View>
                <View>
                    <Button
                        icon={
                            <Text style={{color: 'white', fontSize: perfectSize(20)}}>
                                >
                            </Text>
                        }
                        buttonStyle={{
                            backgroundColor: '#3C82FF',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: perfectSize(10),
                            paddingHorizontal: perfectSize(15),
                            borderWidth: 2,
                            borderColor: 'white'
                        }}
                        type={'clear'}
                        onPress={() => {
                            this.props.onClick()
                        }}
                    />
                </View>
            </View>
        );
    }
}
