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

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            actual: true,
            remoto: false,
            fulltime: false,
        };

        this.close = this.close.bind(this);
    }

    close() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={GlobalStyles.container}>
                    <View
                        style={{
                            ...GlobalStyles.flexBetween,
                            ...GlobalStyles.row,
                            width: Constants.width100,
                            marginTop: 30,
                            marginBottom: 10,
                        }}
                    >
                        <StyledTouch
                            title={'<'}
                            onClick={() => {
                                this.close();
                            }}
                        />
                    </View>
                    <Text style={styles.headerText}>Más información aquí</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Profile')
                        }}
                        style={styles.touch}
                    >
                        <SimpleLineIcons
                            name={'user'}
                            size={perfectSize(20)}
                            color={'blue'}
                        />
                        <Text >Tu cuenta</Text>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Turns')

                        }}
                        style={styles.touch}
                    >
                        <SimpleLineIcons
                            name={'rocket'}
                            size={perfectSize(20)}
                            color={'blue'}
                        />
                        <Text>Tus turnos</Text>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('UpcomingShifts')
                        }}
                        style={styles.touch}
                    >
                        <SimpleLineIcons
                            name={'envelope-letter'}
                            size={perfectSize(20)}
                            color={'blue'}
                        />
                        <Text>Turnos disponibles</Text>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('RegisterHours')
                        }}
                        style={styles.touch}
                    >
                        <SimpleLineIcons
                            name={'clock'}
                            size={perfectSize(20)}
                            color={'blue'}
                        />
                        <Text>Registro de hora</Text>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('');
                        }}
                        style={styles.touch}
                    >
                        <SimpleLineIcons
                            name={'credit-card'}
                            size={perfectSize(20)}
                            color={'blue'}
                        />
                        <Text>Tus pagos</Text>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Inbox')

                        }}
                        style={styles.touch}
                    >
                        <SimpleLineIcons
                            name={'speech'}
                            size={perfectSize(20)}
                            color={'blue'}
                        />
                        <Text>chat</Text>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.close();
                        }}
                    >
                        <Text
                            style={{
                                color: '#ce0000',
                                fontSize: perfectSize(17),
                                marginLeft: perfectSize(0),
                                marginTop: perfectSize(60),
                            }}
                        >
                            <SimpleLineIcons
                                name={'logout'}
                                size={perfectSize(20)}
                                color={'#ce0000'}

                            />
                            {`  `} Cerrar sesión
                        </Text>
                    </TouchableOpacity>
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
    touch: {
        paddingHorizontal: perfectSize(20),
        paddingVertical: perfectSize(15),
        borderColor: '#e8eef4',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Constants.marginTop10,
        fontWeight: 'bold',
    },
    icon: {
        margin: 20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: Constants.bigFont,
        marginTop: Constants.marginTop10,
    },
});
