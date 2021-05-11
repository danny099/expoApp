import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomSheet, Input } from "react-native-elements";


// Components
import StyledTouch from '../../components/StyledTouch'
import CheckBoxComponent from '../../components/Checkbox'



export default function TypeOfWorkOne() {
    const navigation = useNavigation()
    const [isCategory, setIsCategory] = useState(false)
    const [isTypeOfWork, setIsTypeOfWork] = useState(false)
    // Show items
    const [categoryArr, setCategoryArr] = useState({ selected: [] })
    const [typeWorkArr, setTypeWorkArr] = useState({ selected: [] })

    const valid = typeWorkArr.selected.length > 0 && categoryArr.selected.length > 0



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
                <View>
                    <Text style={{ fontSize: 20, lineHeight: 24, fontWeight: 'bold', textAlign: 'left', width: 262, height: 83 }}>Selecciona el tipo de trabajo que te interesa</Text>
                </View>
                <TouchableOpacity
                    onPress={() => setIsCategory(!isCategory)}
                    style={{ marginTop: 30, width: 315, height: 48, borderRadius: 10, borderWidth: 1, borderColor: '#e8eef4' }}
                >
                    <Text style={{ paddingLeft: 20, paddingBottom: 13, paddingTop: 13, color: "#8d8d8d" }}>Categoría</Text>
                    <MaterialCommunityIcons
                        name={'greater-than'}
                        size={10}
                        style={{ alignSelf: 'flex-end', position: 'relative', top: -27, left: -20, color: "#a7a7a7" }}
                    />
                </TouchableOpacity>
                {/* Selected Documents */}
                <View style={{ width: 300, marginTop: 15, height: 48, flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* items */}
                    {categoryArr.selected.map((category, i) => (
                        <View style={{ width: 71, height: 32, backgroundColor: "#f5f6f8", borderRadius: 8 }} key={i}>
                            <Text style={{ textAlign: 'center', marginTop: 8, color: '#787e85', fontSize: 13, lineHeight: 16 }}>{category.value}</Text>
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    onPress={() => setIsTypeOfWork(!isTypeOfWork)}
                    style={{ marginTop: 10, width: 315, height: 48, borderRadius: 10, borderWidth: 1, borderColor: '#e8eef4' }} >
                    <Text style={{ paddingLeft: 20, paddingBottom: 13, paddingTop: 13, color: "#8d8d8d" }}>Tipo de trabajo</Text>
                    <MaterialCommunityIcons
                        name={'greater-than'}
                        size={10}
                        style={{ alignSelf: 'flex-end', position: 'relative', top: -27, left: -20, color: "#a7a7a7" }}
                    />
                </TouchableOpacity>
                {/* Selected Documents */}
                <View style={{ width: 300, marginTop: 15, height: 48, flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* items */}
                    {typeWorkArr.selected.map((category, i) => (
                        <View style={{ width: 71, height: 32, backgroundColor: "#f5f6f8", borderRadius: 8 }} key={i}>
                            <Text style={{ textAlign: 'center', marginTop: 8, color: '#787e85', fontSize: 13, lineHeight: 16 }}>{category.value}</Text>
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Listo')}
                    disabled={!valid}
                    style={valid
                        ?
                        { backgroundColor: '#4875e9', width: 316, height: 48, borderRadius: 12, marginTop: 310 }
                        :
                        { backgroundColor: '#a4baf4', width: 316, height: 48, borderRadius: 12, marginTop: 310 }} >
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold', paddingTop: 14 }}>Continuar</Text>
                </TouchableOpacity>
            </View>
            {/* Categorias */}
            <CategoryBottomSheet
                isCategory={isCategory}
                setIsCategory={setIsCategory}
                setCategoryArr={setCategoryArr}
                categoryArr={categoryArr} />
            {/* TypeOfWork */}
            <TypeOfWorkBottomSheet
                isTypeOfWork={isTypeOfWork}
                setIsTypeOfWork={setIsTypeOfWork}
                typeWorkArr={typeWorkArr}
                setTypeWorkArr={setTypeWorkArr}
            />
        </View>
    )
}

/**
 * Function to show Category Modal
 * @param {*} param0 
 * @returns 
 */
function CategoryBottomSheet({ isCategory, setIsCategory, setCategoryArr, categoryArr }) {
    return (
        <BottomSheet
            isVisible={isCategory}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        >
            <View style={{ backgroundColor: "white" }}>
                {/* Button */}
                <View>
                    <Text style={{ marginBottom: 25, marginTop: 21, textAlign: 'center', fontSize: 20, lineHeight: 24, fontWeight: 'bold' }}>Selecciona las categorías de trabajo que te gustaría conseguir</Text>
                </View>
                {/* Search input */}
                <View style={{ borderRadius: 8, borderColor: '#e8eef4', borderWidth: 1, marginBottom: 50 }}>
                    <Input
                        placeholder='Buscar'
                        rightIcon={{ type: 'font-awesome', name: 'search' }}
                    />
                </View>
                {/* Checkbox */}
                <CheckBoxComponent setCategoryArr={setCategoryArr} categoryArr={categoryArr} />
                <TouchableOpacity
                    onPress={() => setIsCategory(!isCategory)}
                    style={{ marginBottom: 19, width: 330, height: 48, backgroundColor: '#4875e9', borderRadius: 12, alignItems: 'center', alignContent: 'center', alignSelf: 'center', marginTop: 117 }}>
                    <Text style={{ color: 'white', fontSize: 16, paddingTop: 14, fontWeight: 'bold' }}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
    )
}


/**
 * Function to show Type of work Modal
 * @param {*} param0 
 * @returns 
 */
function TypeOfWorkBottomSheet({ isTypeOfWork, setIsTypeOfWork, setTypeWorkArr, typeWorkArr }) {
    return (
        <BottomSheet
            isVisible={isTypeOfWork}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        >
            <View style={{ backgroundColor: "white" }}>
                {/* Button */}
                <View>
                    <Text style={{ marginBottom: 25, marginTop: 21, textAlign: 'center', fontSize: 20, lineHeight: 24, fontWeight: 'bold' }}>Ahora selecciona los tipos de trabajos que te gustaría conseguir</Text>
                </View>
                {/* Search input */}
                <View style={{ borderRadius: 8, borderColor: '#e8eef4', borderWidth: 1, marginBottom: 50 }}>
                    <Input
                        placeholder='Buscar'
                        rightIcon={{ type: 'font-awesome', name: 'search' }}
                    />
                </View>
                {/* Checkbox */}
                <CheckBoxComponent setCategoryArr={setTypeWorkArr} categoryArr={typeWorkArr} />
                <TouchableOpacity
                    onPress={() => setIsTypeOfWork(!isTypeOfWork)}
                    style={{ marginBottom: 19, width: 330, height: 48, backgroundColor: '#4875e9', borderRadius: 12, alignItems: 'center', alignContent: 'center', alignSelf: 'center', marginTop: 117 }}>
                    <Text style={{ color: 'white', fontSize: 16, paddingTop: 14, fontWeight: 'bold' }}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({})
