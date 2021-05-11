import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as DocumentPicker from 'expo-document-picker';


// Components
import StyledTouch from '../../components/StyledTouch'

export default function RegisterDocuments() {
    const navigation = useNavigation()

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        alert(result.uri);
        console.log(result);
        //upload to server
    };


    return (
        // Container
        <View style={{
            minWidth: '100%',
            height: '100%',
            backgroundColor: '#fff',
        }}>
            {/* Button header */}
            <View
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 60,
                    marginLeft: 30,
                    marginBottom: 27,
                }}
            >
                <StyledTouch
                    title={'<'}
                    onClick={() => {
                        navigation.goBack()
                    }}
                />
            </View>
            {/* Header titel */}
            <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, lineHeight: 24, fontWeight: 'bold', textAlign: 'center' }}>Felipe, antes de continuar necesitaré la siguiente información</Text>
                <TouchableOpacity style={{ marginTop: 30, width: 315, height: 48, borderRadius: 10, borderWidth: 1, borderColor: '#4875e9', borderStyle: 'dashed' }} onPress={() => pickDocument()}>
                    <Text style={{ paddingLeft: 20, paddingBottom: 13, paddingTop: 13, color: "#4875e9" }}>Agregar documentos</Text>
                    <MaterialCommunityIcons
                        name={'calendar'}
                        size={25}
                        style={{ alignSelf: 'flex-end', position: 'relative', top: -35, left: -20, color: "#4875e9" }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#4875e9', width: 316, height: 48, borderRadius: 12, marginTop: 416 }}
                    onPress={() => navigation.navigate('TypeOfWorkOne')}
                >
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold', paddingTop: 14 }}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
