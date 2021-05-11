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

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/checked.png')}
                    style={{ width: perfectSize(300), height: perfectSize(300) }}
                />
                <Text style={GlobalStyles.betweenFont}>
                    ¡Listo! postulaste a
                </Text>
                <Text style={GlobalStyles.mediumFont}>
                    {this.props.route.params.data}
                </Text>
                <Text>
                    Te notificaremos cuando tu postulación este aprobada. Puedes ver el estado en la sección de Tus turnos.
                </Text>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
                    <Text style={styles.goHomeTxt}>
                        Volver al home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
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
        fontSize: Constants.betweenFont
    }
})
