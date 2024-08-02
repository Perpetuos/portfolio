import React from 'react'
import './contato.css'

import { BrowserRouter as NavLink } from 'react-router-dom';
import { BsStarFill, BsLightningChargeFill, BsInstagram, BsLinkedin, BsGithub, BsWhatsapp, Bs1Circle, Bs2Circle, Bs3Circle } from 'react-icons/bs';
import { SiDart, SiAdobephotoshop, SiFigma, SiAdobeillustrator, SiAdobexd, SiCsharp, SiArduino, SiCreativetechnology } from 'react-icons/si';
import { BiLogoReact, BiLogoCss3, BiLogoHtml5, BiLogoFlutter, BiLogoNodejs, BiLogoJavascript } from 'react-icons/bi'

export default function education() {
    return (

        <div className="container">
            <div className="container-text">
                <h1 className='title'>David Ferreira, RU:4022974 </h1>

                <p className='p-g'>
                    O projeto se trata de uma continuação do extensionista 1, mostrando como arduino pode ser uma alternativa simples e pratica para varias pessoas, seja pela facilidade de conteudos online, como o valor acessivel das peças.
                </p>





                <a href="https://github.com/Perpetuos/" class="button">Veja no GitHub</a>
                
            </div>
            <div className="container-img">
                <img src="/src/assets/images/david.png" alt="" width={"100%"} />

            </div>




        </div>

    )
}