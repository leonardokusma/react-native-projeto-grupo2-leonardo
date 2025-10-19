import React from 'react';
import {View, Text,StyleSheet, ImageBackground,Image} from 'react-native';
import user from '../../assets/Ícones/PNG/Usuário (1).png';
import hamburger from '../../assets/Ícones/PNG/Hamburguer.png';
import Header from '../header';

export default function Home(){
  const title = 'Olá!Veja os amigos\ndisponíveis para a adoção!'
    return(
      <Header user={user} title={title} ></Header>
    )
}

