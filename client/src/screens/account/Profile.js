import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import { GlobalStyles } from '../../globals/styles';
import { Constants } from '../../globals/constant';
import StyledTouch from '../../components/StyledTouch';
import { Button, Avatar } from 'react-native-elements';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from "@react-navigation/native";



const perfectSize = create(PREDEF_RES.iphoneX.dp);

const data = {
    firstName: 'Felipe',
    lastName: 'Gonzales',
    role: 'Guardia de seguridad',
    address: 'Santiago Centro · Región Metropolitana',
    email: 'felipe.gonzalez@gmail.com',
    tel: '+1 0234 567 891'
}
export default function Profile() {
    const navigation = useNavigation()
    return (
        <View style={styles.profile__container}>
            {/* Header buttons */}
            <View
                style={{
                    ...GlobalStyles.flexBetween,
                    ...GlobalStyles.row,
                    width: Constants.width100,
                    marginTop: 30,
                    marginBottom: 27,
                }}
            >
                <StyledTouch
                    title={'<'}
                    onClick={() => {
                        navigation.goBack()
                    }}
                />
                <Button
                    title="Editar perfil"
                    type="outline"
                    buttonStyle={{ width: 101, height: 38 }}
                />
            </View>
            {/* User Avatar */}
            <View style={styles.profile__avatar_container}>
                <TouchableOpacity activeOpacity={.3}>
                    <Avatar
                        rounded
                        size="xlarge"
                        containerStyle={{ alignSelf: 'center' }}
                        // onPress={() => changeAvatar()}
                        source={
                            require('../../assets/images/avatar.jpg')
                        }
                    />
                    <Image style={{ position: 'absolute', top: 55, right: 90, width: 41, height: 40 }} source={require('../../assets/images/change-avatar.png')} />
                </TouchableOpacity>
                {/* style={{ position: 'absolute', top: 65, right: 100 }} */}
                <Text style={styles.profile__name}>{data.firstName} {data.lastName}</Text>
                <Text style={styles.profile__role}>{data.role}</Text>
            </View>
            <View style={styles.profile__address}>
                <Text style={styles.profile__data_title}>Dirección</Text>
                <Text style={[styles.profile__data_subtitle, { paddingBottom: 28 }]}>{data.address}</Text>
                <Text style={styles.profile__data_title}>Email</Text>
                <Text style={[styles.profile__data_subtitle, { paddingBottom: 28 }]}>{data.email}</Text>
                <Text style={styles.profile__data_title}>Teléfono</Text>
                <Text style={[styles.profile__data_subtitle, { paddingBottom: 39 }]}>{data.tel}</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('RegisterDocuments')
                    }}
                    style={[styles.profile__button, { marginTop: 39 }]}
                >
                    <SimpleLineIcons
                        name={'settings'}
                        size={perfectSize(20)}
                        color='#4875e9'
                    />
                    <Text style={{ fontWeight: 'bold' }}>Preferencias de trabajo</Text>
                    <Text>></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Tus_Documentos')
                    }}
                    style={[styles.profile__button, { marginTop: 10 }]}
                >
                    <SimpleLineIcons
                        name={'folder'}
                        size={perfectSize(20)}
                        color='#4875e9'
                    />
                    <Text style={{ fontWeight: 'bold' }}>Tus documentos</Text>
                    <Text>{'>'}</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    profile__container: {
        minWidth: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: perfectSize(20),
    },
    profile__avatar_container: {
        justifyContent: 'center',
    },
    profile__name: { textAlignVertical: "center", textAlign: "center", marginTop: 20, fontSize: 30 },
    profile__role: { textAlignVertical: "center", textAlign: "center", fontSize: 16 },
    profile__address: { marginTop: 38 },
    profile__data_title: { color: '#6e6d6d', fontSize: 12 },
    profile__data_subtitle: { fontSize: 14, fontWeight: 'bold' },
    profile__button: {
        paddingHorizontal: perfectSize(15),
        paddingVertical: perfectSize(14),
        borderColor: '#e8eef4',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
    }

})
