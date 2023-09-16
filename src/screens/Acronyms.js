import React from 'react';
import DATA from '../data/DataAcronyms';
import CommomScreen from '../components/CommomScreen';
export default function Acronyms(){
    return(
        <CommomScreen DATA={DATA}/>
    )
}