import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';

// import svg

import Bell_1 from '../../icons/bell-1'

//components
import StyledTouch from '../../components/StyledTouch';


export default function Genial() {
    const navigation = useNavigation()

    return (

        <View style={styles.container}>
            {/* X */}
            <View style={{
                ...GlobalStyles.flexBetween,
                ...GlobalStyles.row,
                width: Constants.width100,
                justifyContent: 'flex-end',
                marginTop: 30,
                marginRight: 30
            }}>
                <StyledTouch title={'X'} onClick={() => {
                    navigation.goBack();
                }} />
            </View>
            <View style={{
                marginTop: 198, justifyContent: 'center', marginBottom: 32
            }}>
                <Bell_1 />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
                Mantente siempre conectado
                </Text>
            <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 16, lineHeight: 24 }}>
                Activa las notificaciones y recibe noticias sobre nuevas oportunidades y el estado de tus solicitudes.
                </Text>


            <TouchableOpacity style={{ width: 316, height: 48, backgroundColor: "#4875e9", marginTop: 156, borderRadius: 24 }}
                onPress={() => navigation.navigate('NotificacionesUsuario')}>
                <Text style={{ color: 'white', textAlign: 'center', marginTop: 14, fontWeight: 'bold' }}>Sí, permitir notificaciones</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.goHomeTxt}>
                    No permitir
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
        marginTop: 30,
        fontSize: 16
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
