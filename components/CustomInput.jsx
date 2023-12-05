import {View, TextInput, Button, StyleSheet} from 'react-native'

const CustomInput = (
    {
        placeholderProp,
        textItemProp,
        onChangeTextHandlerEvent,
        
        
    }
) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholderTextColor= "#fff"
                style={styles.textInput}
                placeholder={placeholderProp}
                onChangeText={onChangeTextHandlerEvent}
                value={textItemProp}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 65,
        marginBottom: 30
      },
      textInput: {
        color:"#fff",
        width: 300,
        borderBottomColor: "#8377D1",
        borderBottomWidth: 1,
        padding:2
      },
})