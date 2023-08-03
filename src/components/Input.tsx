import { StyleSheet, TextInput, View } from "react-native";
import { height, width } from "../constants/Dimensions";
import { useState } from "react";
import { Text, TextVariant } from "@core/text";

interface InputProps {
    onChange: (text: string) => void;
    style?: object;
    label: string;
    editable?: boolean;
    placeholder?: string;
}


export const Input = ({ label, onChange, style: StyleView = {}, editable = true, placeholder = '' }: InputProps) => {
    const [value, setValue] = useState('');

    const onChangeValue = (text: string) => {
        onChange(text);
        setValue(text);
    }

    return (
        <View style={StyleView}>
            <Text
                variant={TextVariant.BODY}
                style={style.label}
            >
                {label}
            </Text>
            <TextInput
                editable={editable}
                placeholder={placeholder}
                style={style.input}
                selectTextOnFocus={true}
                value={value}
                onChangeText={onChangeValue}
                placeholderTextColor={'#999'}
                returnKeyType="done"
            />
        </View>
    )
}


const style = StyleSheet.create({
    label: {
        paddingLeft: width*0.005
    }, 
    input: {
        paddingHorizontal: width * 0.04,
        fontSize: height * 0.0165,
        color: '#111',
        fontWeight: '400',
        includeFontPadding: false,
        textAlignVertical: 'center',
        marginVertical: height * 0.01,
        borderColor: '#111',
        borderWidth: 1,
        height: height * 0.07,
        borderRadius: 7,
    }
})


