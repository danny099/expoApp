import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { Button, Image, Overlay, CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
// import AsyncStorage from '@react-native-community/async-storage';

// navigation
import { useNavigation } from "@react-navigation/native";

import { emailValidator, passwordValidator } from '../utils/Validator';
// import I18n from '../utils/languages/languageUtils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GlobalStyles } from '../globals/styles';
import { Constants } from '../globals/constant';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default function Header() {
    const navigation = useNavigation()


    return (
        <View style={GlobalStyles.appHeader}>
            <Image
                source={require('../assets/images/logo192.png')}
                style={{ width: perfectSize(40), height: perfectSize(40) }}
            />
            <View style={styles.row}>
                <TouchableOpacity style={{ marginRight: perfectSize(15) }}
                    onPress={() => {
                        navigation.navigate('Notificaciones')
                    }}>
                    <MaterialIcons
                        name={'notifications-none'}
                        size={perfectSize(40)}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Menu')
                    }}
                >
                    <MaterialIcons
                        name={'menu'}
                        size={perfectSize(40)}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    }
});
