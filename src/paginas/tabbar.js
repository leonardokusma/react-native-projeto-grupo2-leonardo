import {View,Text,StyleSheet,Image} from 'react-native';
import pets from '../assets/Ícones/PNG/pets.png'
import messages from '../assets/Ícones/PNG/mensagens (1).png'

export default function Tabbar(){

    return(
        <View style={styles.conteiner}>
            <Image source={pets} style={styles.image}/>
            <Image source={messages} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor:'#d4d3d3ff',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:"2%"
    },
    image:{
        height:20,
        width:16,
        marginHorizontal:'20%'
    }
});