import React,{  StyleSheet ,View, Text, TouchableOpacity, Image } from "react-native";

import { User } from "../interfaces/apiResuts";

interface IUserComponent {
    userData: User,
    userModal: (id:string) => void,
}

const UserComponent = (props: IUserComponent): JSX.Element =>{
    const { userData, userModal} = props;

    const { dob, name, picture, id } = userData;

    return(
    <TouchableOpacity style={style.container} onPress={() => userModal(id.value)}>
        <Image source={{uri: picture.large}} style={style.avatar}/>
        <View style={style.infos}>
            <Text style={style.name}>{ name.first + name.last}</Text>
            <Text>{ dob.age } years</Text>
        </View>
    </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
    },
    avatar:{
        display:"flex",
        alignContent: "center",
        justifyContent: "center",
        margin: 15,
        borderRadius: 50,
        width: 80,
        overflow:"hidden",
        height: 80,
        borderWidth: 1,
    },
    infos:{
        marginTop: 20,
    },
    name:{
        fontSize: 30
    }
})

export { UserComponent };
