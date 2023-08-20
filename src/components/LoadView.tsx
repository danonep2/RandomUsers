import { View, ActivityIndicator, StyleSheet, Text } from "react-native";


const LoadView = ():JSX.Element => {
    return(
        <View style={style.container}>
            <Text style={style.title}> Carregando dados ...</Text>
            <ActivityIndicator size={80} color={"black"}/>
        </View>
)}

const style = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: "center",
    },
    container:{
        display: "flex",
        alignSelf: "center",
        marginTop: "45%"
    }
})

export { LoadView };