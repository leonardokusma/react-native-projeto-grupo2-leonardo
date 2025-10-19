import React from "react";
import { StyleSheet, Image,Text,View} from "react-native";
import chat from '../../../assets/Ícones/PNG/chat (5).png';
import {useFonts,Poppins_400Regular,Poppins_600SemiBold} from '@expo-google-fonts/poppins'


export default function Card({image,name,age,size,caract,local}){
    const fontLoaded = useFonts({
      Poppins_400Regular,
      Poppins_600SemiBold
      });
    
    if(!fontLoaded){
        return null
    }

    return(
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
            <View style={styles.sideData}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.about}>{age}</Text>
                <Text style={styles.about}>{size}</Text>
                <Text style={styles.about}>{caract}</Text>
                <Text style={styles.local}>{local}</Text>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.speak}>Falar com o responsável</Text>
                    <Image source={chat}style={styles.chat}/>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        backgroundColor:'#f6f6f607',        
        alignItems:'center',
        marginTop:'5%%',
        paddingBottom:'5%',
    },
    sideData:{
        flexDirection:'column'
    },
    image:{
        width:'50%',    
       resizeMode:'contain'
    },
    name:{
        paddingTop:'10%',
        fontFamily:'Poppins_600SemiBold',
        fontSize:16,
        color:'#3772FF',
        textAlign: 'center'
    },
    about:{
        marginVertical:'2%',
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        color:'#737380'
    },
    local:{
        marginVertical:'6%',
        fontFamily:'Poppins_400Regular',
        fontSize:12,
        color:'#737380'
    },
    chat:{
        width:16,
        height:16,
        resizeMode:'contain',
        position:'absolute',
        left:'-16%',
    },
    speak:{
        marginVertical:'1%',
        fontFamily:'Poppins_400Regular',
        fontSize:10,
        color:'#737380'
    }
})