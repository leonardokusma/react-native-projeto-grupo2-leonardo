import React from 'react';
import {View, Text,StyleSheet, ImageBackground,Image} from 'react-native';
import {useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins'
import imageBack from  '../../assets/Vector.png';
import user from '../../assets/Ícones/PNG/Usuário (1).png';
import hamburger from '../../assets/Ícones/PNG/Hamburguer.png';



export default function Home(title){
  const fontLoaded = useFonts({
  Poppins_400Regular
  });

  if(!fontLoaded){
    return null
  }
    return(
        <ImageBackground source={imageBack}
        style={styles.background}
        resizeMode='cover'>
        <View style={styles.header}>
          <Image source={hamburger} style={styles.iconeHambur}/>
          <Image source={user} style={styles.iconeUser}/>
        </View>
        <Text style={styles.headerText}>Olá!Veja os amigos{"\n"}disponíveis para a adoção!</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  header: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingTop:'10%',
    justifyContent:'space-between'
  },
  background:{
    width:'100%',
    height:'65%'
  },
  headerText:{
    paddingTop:'20%',
    fontSize: 20,
    fontFamily:'Poppins_400Regular',
    color:'#3772ff',
    textAlign:'center'
  },
  iconeHambur:{
    width:40,
    height:40,
    resizeMode:'contain',
    paddingLeft:'8%',
    paddingRight:'8%'
  },
  iconeUser:{
    width:60,
    height:60,
    resizeMode:'contain',
    paddingLeft:'8%',
    paddingRight:'8%'
  }
})