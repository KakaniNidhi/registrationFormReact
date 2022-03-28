import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({control, name, placeholder, keyboardType, secureTextEntry}) => {
    return(
        <View style={styles.screen}>
            <Controller 
                control={control}
                name={name}
                render={({field: {value, onChange, onBlur}})=>(
                    <TextInput 
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        style={styles.input}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default CustomInput;
