import React,{ FlatList }  from "react-native";
import { UserComponent, Separator } from "../components";

import { Results } from "../interfaces/apiResuts"

interface ListProps {
    data: Results;
    userModal: (id:string) => void;
}

const List = (props:ListProps): JSX.Element =>{
    const { userModal, data } = props;

    return(
        <FlatList
        data={data.results}
        keyExtractor={item => item.id.value}
        ItemSeparatorComponent={()=> <Separator/> }
        renderItem={( { item } ) => <UserComponent userData={item} userModal={userModal} />}
        />
    )
}

export { List };
