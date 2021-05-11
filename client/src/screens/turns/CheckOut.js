import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';

import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';
import StyledButton from '../../components/StyledButton';
import StyledTouch from '../../components/StyledTouch';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from "@react-navigation/native";

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function CheckOut() {

    const navigation = useNavigation()

    const close = () => {
        navigation.goBack();
    }


    return (
        <ScrollView style={styles.container}>
            <View style={{ ...GlobalStyles.panel, alignItems: 'center' }}>
                <View style={{ ...GlobalStyles.flexBetween, ...GlobalStyles.row, width: Constants.width100, marginTop: 30, marginBottom: 10, }}>
                    <StyledTouch title={'<'} onClick={() => {
                        navigation.goBack();
                    }} />
                    <StyledTouch title={'?'} onClick={() => {
                        console.log('123');
                    }} click={false} />
                </View>
                <View style={styles.blackBackground}>
                    <Text style={{ fontSize: Constants.smallFont, color: 'white' }}>$19/hr</Text>
                </View>
                <Text style={{ ...GlobalStyles.mediumFont, marginTop: Constants.marginTop10 }}>
                    guardia de seguridad
                </Text>
                <View style={styles.address}>
                    {
                        'orem ipsum dolor sit amet consectetur adipiscing…' !== 'Remoto' ?
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
                    <Text style={{ marginLeft: perfectSize(10) }}>orem ipsum dolor sit amet consectetur adipiscing…</Text>
                </View>
                {
                    'orem ipsum dolor sit amet consectetur adipiscing…' !== 'Remoto' &&
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
            <Text style={[GlobalStyles.betweenFont, { marginLeft: perfectSize(20), marginTop: perfectSize(20) }]}>
                Turnos
            </Text>
            <View style={{ flexDirection: 'row', ...GlobalStyles.flexBetween, margin: perfectSize(20) }}>
                <View style={{ flexDirection: 'row' }}>
                    <SimpleLineIcons
                        name={'calendar'}
                        size={perfectSize(20)}
                        color={'blue'}
                    />
                    <Text style={{ marginLeft: perfectSize(10) }}>17 de abril</Text>
                </View>
                <View style={styles.time}>
                    <Text>09:00 a 17:00 hrs</Text>
                </View>
            </View>

            <View style={[styles.panel1, { marginTop: perfectSize(180) }]}>

                <StyledButton title={'Check out'} onClick={() => {
                    navigation.navigate('Genial')
                }} />
                <TouchableOpacity
                    onPress={() => {
                        close();
                    }}
                >
                </TouchableOpacity>
            </View>

        </ScrollView >

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