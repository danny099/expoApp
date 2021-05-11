import React, { useEffect, useState } from 'react';
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

// navigation
import { useNavigation } from "@react-navigation/native";

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function Turns() {
    const [data, setData] = useState({
        data: {
            proximos: '49',
            pendientes: '3',
            historial: '2',
        },
    })

    const navigation = useNavigation();




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
                            navigation.goBack();
                        }}
                    />
                </View>
                <Text style={styles.headerText}>Tus turnos</Text>
                <Text style={{ fontSize: Constants.smallFont, marginBottom: perfectSize(20) }}>Ve toda la información de tus turnos, siempre te notificaremos si existe alguna novedad.</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('UpcomingShifts')

                    }}
                    style={styles.touch}
                >
                    <Text style={styles.grayCircle}></Text>
                    <Text style={styles.buttonText}>Próximos</Text>
                    <Text style={styles.blueCircle}>{data.data.proximos}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('PendingShifts')
                        
                    }}
                    style={styles.touch}
                >
                    <Text style={styles.grayCircle}></Text>
                    <Text style={styles.buttonText}>Pendientes</Text>
                    <Text style={styles.blueCircle}>{data.data.pendientes}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        console.log('');
                    }}
                    style={styles.touch}
                >
                    <Text style={styles.grayCircle}></Text>
                    <Text style={styles.buttonText}>Historia</Text>
                    <Text style={styles.blueCircle}>{data.data.historial}</Text>
                </TouchableOpacity>

            </View>


        </ScrollView>

    );
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
    buttonText: {
        fontWeight: 'bold',
        fontSize: Constants.smallFont,
        marginTop: Constants.marginTop10,
    },
    blueCircle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: '#f0f4ff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 3,
        color: '#4875e9',
    },
    grayCircle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: '#EDEDED',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 3,
        color: '#4875e9',
    },
});
