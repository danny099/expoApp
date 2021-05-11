import React, { Component } from 'react'
import { View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'

const category = ['A', 'B', 'C']

export default function Checkbox(props) {

    const { setCategoryArr, categoryArr } = props



    const onSelectionsChange = (selected) => {
        // selected is array of { label, value }
        setCategoryArr({ selected })
    }
    return (
        <View>
            <SelectMultiple
                items={category}
                selectedItems={categoryArr.selected}
                onSelectionsChange={onSelectionsChange} />
        </View>
    )
}

