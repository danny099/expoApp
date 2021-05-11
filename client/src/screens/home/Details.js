import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { Image, Overlay, CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
// import AsyncStorage from '@react-native-community/async-storage';

import { emailValidator, passwordValidator } from '../../utils/Validator';
// import I18n from '../../utils/languages/languageUtils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';
import Header from '../../components/Header';
import StyledButton from '../../components/StyledButton';
import StyledTouch from '../../components/StyledTouch';
import StyledFlatList from '../../components/StyledFlatList';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class Filtro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked0: true,
            checked1: false,
            checked2: false,
            checked3: false,
        };

        this.close = this.close.bind(this);
    }

    componentDidMount() {
        console.log(this.props.route.params.data);
    }

    close() {
        this.props.navigation.goBack();
    }

    checkboxClicked = (index) => {
        if (index === 0) {
            this.setState({
                checked0: true,
                checked1: false,
                checked2: false,
                checked3: false
            })
        } else if (index === 1) {
            this.setState({
                checked0: false,
                checked1: true,
                checked2: false,
                checked3: false
            })
        } else if (index === 2) {
            this.setState({
                checked0: false,
                checked1: false,
                checked2: true,
                checked3: false
            })
        } else if (index === 3) {
            this.setState({
                checked0: false,
                checked1: false,
                checked2: false,
                checked3: true
            })
        }
    }

    checkboxForm = (value, time) => {
        const date = parseInt(value.substring(0, 2));
        const str = value.substring(2, value.length);
        return (
            <View>
                {
                    [0, 1, 2, 3].map(index => {
                        const checked = this.state.checked + index.toString();
                        return (
                            <View style={styles.checkedRow} key={index}>
                                <CheckBox
                                    title={(date + index) + str}
                                    checkedColor='#3C82FF'
                                    uncheckedColor={'#000'}
                                    iconType={'materialIcons'}
                                    checkedIcon={'radio-button-checked'}
                                    uncheckedIcon={'radio-button-unchecked'}
                                    checked={
                                        index === 0 ? this.state.checked0 :
                                            index === 1 ? this.state.checked1 :
                                                index === 2 ? this.state.checked2 : this.state.checked3
                                    }
                                    onPress={() => this.checkboxClicked(index)}
                                    containerStyle={{ borderWidth: 0, marginLeft: perfectSize(-5), backgroundColor: 'white' }}
                                />
                                <Text>{time}</Text>
                            </View>
                        );
                    })
                }
            </View>
        );
    };

    render() {
        const data = this.props.route.params.data;
        return (
            <ScrollView style={styles.container}>
                <View style={{ ...GlobalStyles.panel, alignItems: 'center' }}>
                    <View style={{ ...GlobalStyles.flexBetween, ...GlobalStyles.row, width: Constants.width100, marginTop: 30, marginBottom: 10, }}>
                        <StyledTouch title={'<'} onClick={() => {
                            this.props.navigation.goBack();
                        }} />
                        <StyledTouch title={'Ver calendario'} onClick={() => {
                            this.props.navigation.navigate('CalendarWithoutEvents')
                        }} click={false} color={Constants.blueColor} />
                    </View>
                    <View style={styles.blackBackground}>
                        <Text style={{ fontSize: Constants.smallFont, color: 'white' }}>${data.price}/hr</Text>
                    </View>
                    <Text style={{ ...GlobalStyles.mediumFont, marginTop: Constants.marginTop10 }}>
                        {data.title}
                    </Text>
                    <View style={styles.address}>
                        {
                            data.address !== 'Remoto' ?
                                <SimpleLineIcons
                                    name={'location-pin'}
                                    size={perfectSize(20)}
                                    color={'blue'}
                                />
                                :
                                <SimpleLineIcons
                                    name={'home'}
                                    size={perfectSize(20)}
                                    color={'blue'}
                                />
                        }
                        <Text style={{ marginLeft: perfectSize(10) }}>{data.address}</Text>
                    </View>
                    {
                        data.address !== 'Remoto' &&
                        <View style={styles.mapView}>
                            <Text>Map View</Text>
                        </View>
                    }
                </View>

                <View style={GlobalStyles.panel}>
                    <Text style={GlobalStyles.betweenFont}>
                        Descripción
                    </Text>
                    <Text>
                        orem ipsum dolor sit amet consectetur adipiscing…
                    </Text>
                </View>

                <View style={styles.panel1}>
                    <Text style={GlobalStyles.betweenFont}>Turnos disponibles</Text>
                    <Text>Selecciona los días que te gustaría trabajar.</Text>
                    {this.checkboxForm(data.date, data.time)}

                    <StyledButton title={'Postular ahora'} onClick={() => {
                        this.props.navigation.navigate('Welcome', { data: data.title })
                    }} />
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    floatRight: {
        alignItems: 'flex-end',
    },
    panel1: {
        padding: perfectSize(20),
    },
    blackBackground: {
        backgroundColor: 'black',
        paddingHorizontal: perfectSize(15),
        paddingVertical: perfectSize(8),
        borderRadius: 10,
        marginTop: Constants.marginTop20,
        justifyContent: 'center',
        alignItems: 'center',
        width: perfectSize(100),
    },
    mapView: {
        backgroundColor: 'pink',
        padding: perfectSize(20),
        marginTop: Constants.marginTop10,
    },
    address: {
        flexDirection: 'row', alignItems: 'center',
        marginTop: Constants.marginTop10,
    },
    checkedRow: {
        ...GlobalStyles.row,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});


