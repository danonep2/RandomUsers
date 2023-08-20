import { Modalize } from "react-native-modalize";
import React, { View, Text, StyleSheet, Button, Image } from "react-native";
import { User } from "../interfaces/apiResuts";

interface ModalProps {
    modalRef: any;
    user: User | null;
}

const Modal = (props: ModalProps): JSX.Element | null => {
    const { modalRef, user  } = props;
    if (!user){
        return null;
    }
    const { name, dob, picture, id } = user;

    return (
        <Modalize key={id.value} ref={modalRef} adjustToContentHeight>
            <Text style={styles.modalTitle}>Informações</Text>
            <View style={styles.container}>
                <View  style={styles.avatar}>
                    <Image source={{uri: picture.large}} style={{width: 80, height: 80}}/>
                </View>
                <Text style={styles.name}>{name.first + name.last}</Text>
                <Text>{dob.age} yers</Text>
            </View>
            <View style={styles.actions}>
                <Button title="Editar" color={"#088"}/>
                <Button title="Apagar" color={"#c00"}/>
            </View>
        </Modalize>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        borderColor: "#000",
    },
    modalTitle: {
        textAlign: "center",
        fontSize: 25,
        margin: 20,
    },
    avatar:{
        display:"flex",
        margin: 15,
        borderRadius: 50,
        width: 80,
        overflow:"hidden",
        height: 80,
        alignContent: "center",
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor:"#ddd"
    },
    name:{
        fontSize: 30,
    },
    actions:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 40
    }
});

export { Modal };
