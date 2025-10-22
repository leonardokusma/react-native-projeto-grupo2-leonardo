import {View,Text,StyleSheet,Image} from 'react-native';
import pets from '../assets/Ícones/PNG/pets-green.png'
import messages from '../assets/Ícones/PNG/chat (5).png'
import {useFonts,Poppins_400Regular,Poppins_600SemiBold} from '@expo-google-fonts/poppins'
import mock from '../mocks/tabbar'

export default function Tabbar(){

    const fontLoaded = useFonts({
      Poppins_400Regular
      });
    
      if(!fontLoaded){
        return null
      }

    return(
        <View style={styles.conteiner}>
            <View style={styles.textIcon}> 
                <Image source={pets} style={styles.image}/>
                <Text style={styles.text}>{mock.pets}</Text>
            </View>
                <View style={styles.textIcon}>
                <Image source={messages} style={styles.image}/>
                <Text style={styles.text}>{mock.mensagem}</Text>
            </View>
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
        height:'4%',
        marginTop:'8% '
    },
    textIcon:{
        paddingTop:10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },

    image:{
        height:20,
        width:19,
        marginHorizontal:'20%'
    },
    text:{
        fontFamily:'Poppins_400Regular',
        fontSize:12,
        color:'#f6f6f6',
        textAlign:'center'
    }
});