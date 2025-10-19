import React from "react";
import dunga from '../assets/Imagens/Imagem Dunga.png'
import felicia from '../assets/Imagens/Imagens Felícia.png'
import sirius from '../assets/Imagens/Imagem - sirius.png'

import fiona from '../assets/Imagens/Imagem-Fiona.png'
import sid from '../assets/Imagens/Imagem - Sid.png'
import yoda from '../assets/Imagens/Imagem - Yoda.png'
import lua from '../assets/Imagens/Imagenm Lua.png'
import amora from '../assets/Imagens/Imagem - Amora.png'
import zelda from '../assets/Imagens/Imagem - Zelda.png'

const pets = {
    titulo: "Pets",
    lista: [
        {
            name:'Dunga',
            image: dunga,
            age: '2 anos',
            size: 'Porte pequeno',
            characteristics:'Calmo e educado',
            from: 'Rio de Janeiro (RJ)'
        },
        {
            name:'Felícia',
            image: felicia,
            age: '3 meses',
            size: 'Porte pequeno',
            characteristics:'Ativa e carinhosa',
            from: 'Nova iguaçu  (RJ)'
        },
        {
            name:'Sirius',
            image: sirius,
            age: '6 meses',
            size: 'Porte grande',
            characteristics:'ativo e educado',
            from: 'Duque de Caxias (RJ)'
        },
        {
            name:'Fiona',
            image: fiona,
            age: '3 anos',
            size: 'Porte pequeno',
            characteristics:'calma e carinhosa',
            from: 'São Gonçalo (RJ)'
        },
        {
            name:'Sid',
            image: sid,
            age: '8 meses',
            size: 'Porte médio/grande',
            characteristics:'Brincalhão e amável',
            from: 'Rio de Janeiro (RJ)'
        },
        {
            name:'Yoda',
            image: yoda,
            age: '1 ano',
            size: 'Porte médio',
            characteristics:'ativo e carinhoso',
            from: 'Nova Iguaçu (RJ)'
        },
        {
            name:'Lua',
            image: lua,
            age: '6 meses',
            size: 'Porte médio',
            characteristics:'Ativa e carinhosa',
            from: 'Duque de Caxias (RJ)'
        },
        {
            name:'Amora',
            image: amora,
            age: '45 dias',
            size: 'Porte grande',
            characteristics:'Calma e carinhosa',
            from: 'São Gonçalo (RJ)'
        },
        {
            name:'Zelda',
            image: zelda,
            age: '5 meses',
            size: 'Porte médio',
            characteristics:'Ativa e amável',
            from: 'Rio de Janeiro (RJ)'
        }
    ]
};

export default pets;