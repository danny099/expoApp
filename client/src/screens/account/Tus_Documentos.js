import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';

// Styles
import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';


//components
import StyledTouch from '../../components/StyledTouch';

const perfectSize = create(PREDEF_RES.iphoneX.dp);


export default function Tus_Documentos() {
    const navigation = useNavigation()

    return (

        <View style={styles.container}>
            {/* X */}
            <View style={{
                ...GlobalStyles.flexBetween,
                ...GlobalStyles.row,
                width: Constants.width100,
                marginTop: 30,
            }}>
                <StyledTouch title={'<'} onClick={() => {
                    navigation.goBack();
                }} />
            </View>
            {/* Notifications */}
            <View>
                <Text style={{ marginTop: 20, fontSize: 22, lineHeight: 24, fontWeight: 'bold', alignSelf: 'flex-start' }}>Tus documentos</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>Aquí podrás ver y actualizar tus documentos.</Text>
                <View style={{
                    width: '100%',
                    marginTop: 20,
                    borderBottomColor: '#f5f6f8',
                    borderBottomWidth: 7,
                    alignSelf: "flex-end",
                    marginBottom: 20

                }}></View>
            </View>

            <View>
                <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: 'bold' }}>Curriculum</Text>
                <View style={{ marginTop: 15, backgroundColor: '#f8fafc', width: '100%', height: 48, borderRadius: 10 }}>
                    <Text style={{ marginTop: 13, marginLeft: 20, color: '#4875e9', fontSize: 16 }}>Felipe_CV.pdf</Text>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', position: 'absolute', top: 15, right: 15 }} onPress={() => console.log('Delete Curriculum')}>
                        <SimpleLineIcons
                            name={'trash'}
                            size={perfectSize(15)}
                            color={'blue'}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: 'bold', marginTop: 28 }}>Otros documentos</Text>
                <View style={{ marginTop: 15, backgroundColor: '#f8fafc', width: '100%', height: 48, borderRadius: 10 }}>
                    <Text style={{ marginTop: 13, marginLeft: 20, color: '#4875e9', fontSize: 16 }}>Certificado_Felipe.pdf</Text>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', position: 'absolute', top: 15, right: 15 }} onPress={() => console.log('Delete Otros documentos')}>
                        <SimpleLineIcons
                            name={'trash'}
                            size={perfectSize(15)}
                            color={'blue'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={{ backgroundColor: '#4875e9', witdh: 316, height: 48, borderRadius: 12, marginTop: 240 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', marginTop: 14 }}>Guardar</Text>
            </TouchableOpacity>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: perfectSize(20),
    },
    goHomeTxt: {
        color: '#4875e9',
        marginTop: 30,
        fontSize: 16
    },
    input__container: {
        flexDirection: 'row',
        borderRadius: 20
    },
    input__oval: {
        width: 42,
        height: 42,
        borderRadius: 100 / 2,
        backgroundColor: "#d1d1d1",
        marginTop: 20,
        marginLeft: .1,
        marginRight: 15,
        borderColor: '#d1d1d1'
    }
})
