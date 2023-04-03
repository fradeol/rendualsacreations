import './bitcoinForm.css';
import background from '../../assets/bg.svg';
import shine from '../../assets/plus.svg';
import quote from '../../assets/quotes.svg';
import axios from "axios";
import { useState } from 'react';

export default function BitcoinForm() {
    //State changé à chaque clic de bouton
    const [currentBCValue, setCurrentBCValue] = useState()
    //Api 
    const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
    //récupération de la data avec axios
    async function loadData() {
        await axios(API_URL).then(function (response) {
            let dataBitcoin = response.data.bpi.USD.rate;
            setCurrentBCValue(dataBitcoin);
        });
    }

    
    return (
        <div className='form'>
            <img src={background} alt="arrière plan" className='bg'/>
            <div className="vignette">
                <img className='quote' src={quote} alt="signe de citation" />
                <h1>Aujourd'hui BTC vaut ${currentBCValue}</h1>
                <button onClick={loadData}><img src={shine} alt="plus ou effet brillant" /> Hop!</button>
            </div>
        </div>
    )
}