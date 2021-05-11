import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { create, PREDEF_RES } from 'react-native-pixel-perfect';

import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';

// import svg

import Ilust_4 from '../../icons/ilust-4'


const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function Genial() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={{
                width: perfectSize(300), height: perfectSize(300), marginTop: 112, justifyContent: 'center',
            }}>
                <Ilust_4 />
            </View>
            <Text style={[GlobalStyles.betweenFont, { fontSize: 36 }]}>
                ¡Genial!
                </Text>
            <Text style={{ fontSize: 18, marginBottom: 68 }}>
                Terminaste un día de trabajo 🥳
            </Text>

            <TouchableOpacity style={styles.input__container}>
                <View style={styles.input__oval}>
                    <Text style={{ marginLeft: 8, marginTop: 8 }}>🤓</Text>
                </View>
                <View style={{ fontSize: 14, flexShrink: 1, width: 202, marginTop: 14 }}>
                    <Text>Antes de recibir tu pago, puedes ver y editar tus horas en la sección de <Text style={{ fontWeight: 'bold' }}>Registro de horas.</Text></Text>

                </View>
                <Text style={{ marginTop: 20, marginRight: 20, color: '#4875e9', fontSize: 25 }}>{'>'}</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.goHomeTxt}>
                    Volver al home
                    </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...GlobalStyles.container,
        alignItems: 'center',
        justifyContent: 'center'
    },
    goHomeTxt: {
        color: '#4875e9',
        marginTop: Constants.marginTop50 + 30,
        fontSize: 18
    },
    input__container: {
        width: 322,
        height: 76,
        backgroundColor: "#f0f4ff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20
    },
    input__oval: {
        width: 35,
        height: 35,
        borderRadius: 100 / 2,
        backgroundColor: "white",
        marginTop: 20.5,
        marginLeft: 20
    }
})
