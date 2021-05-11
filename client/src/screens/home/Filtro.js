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
                <View style={GlobalStyles.panel}>
                    <View style={styles.floatRight}>
                        <StyledTouch title={'X'} onClick={() => {
                            this.close();
                        }} />
                    </View>

                    <Text style={{ fontSize: Constants.mediumFont }}>
                        Ordenar por
                    </Text>

                    <View style={{ ...GlobalStyles.flexAround, flexDirection: 'row', marginTop: Constants.marginTop20 }}>
                        <StyledTouch title={'Más actual'} onClick={() => {
                            console.log(1);
                        }} click={this.state.actual} />
                        <StyledTouch title={'Remoto'} onClick={() => {
                            console.log(1);
                        }} click={this.state.remoto} />
                        <StyledTouch title={'Full Time'} onClick={() => {
                            console.log(1);
                        }} click={this.state.fulltime} />
                    </View>
                </View>

                <View style={GlobalStyles.panel}>
                    <Text style={{ fontSize: Constants.mediumFont }}>Preferencias de trabajo</Text>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('123');
                        }}
                        style={styles.touch}
                    >
                        <Text>Seguridad</Text>
                        <Text>></Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('123');
                        }}
                        style={styles.touch}
                    >
                        <Text>Guardia seguridad</Text>
                        <Text>></Text>
                    </TouchableOpacity>
                </View>

                <View style={GlobalStyles.panel}>
                    <Text style={{ fontSize: Constants.mediumFont }}>Fecha</Text>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('123');
                        }}
                        style={styles.touch}
                    >
                        <Text>Categoría</Text>
                        <Text>></Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.panel1}>
                    <Text style={{ fontSize: Constants.mediumFont }}>Ubicación</Text>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('123');
                        }}
                        style={styles.touch}
                    >
                        <Text>Santiago, Región metropolita…</Text>
                        <SimpleLineIcons
                            name={'location-pin'}
                            size={perfectSize(20)}
                            color={'blue'}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.panel1}>
                    <StyledButton title={'Buscar'} onClick={() => {
                        console.log('Buscar');
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
    },
});


