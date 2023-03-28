import React from "react";
import '../Rol/Style.css';
import Costumer from './img/Costumer.png'
import service_provider from './img/service_provider.png'

export const MainRool = () => {
    return(
<body>
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={service_provider}/>
                    <h3>Prestador De Sercicio</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Al ingresar podras hacer publicidad de tus conocimientos para asi adquirir mas clientela.</p>
                        <a href="#">Ingresar</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={Costumer}/>
                    <h3>Cliente</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Al ingresar podras encontrar personas con conocimientos empiricos para asi adquirir un servicio de acuerdo a tu necesidad.</p>
                        <a href="#">Ingresar</a>
                </div>
            </div>
        </div>
    </div>
</body>
    );

}

