import React, { useEffect, useState } from "react";
import { Text, FlatList,StyleSheet,_View} from "react-native";
import pets from '../../mocks/pets';
import Card from "./Cards";

export default function ListaPets(){
    const [lista,setLista] = useState([]);

    useEffect(()=> {
        setLista(pets.lista);
    },[]);

    return(
        <FlatList
            data={lista}
            renderItem={({item}) => <Card {...item}/>}
            keyExtractor={({name}) => name}
        />
    )

}