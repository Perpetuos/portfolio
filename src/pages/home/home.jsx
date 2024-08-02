import React from 'react'
import './home.css'
import { BrowserRouter as NavLink } from 'react-router-dom';
import { BsStarFill, BsLightningChargeFill, BsInstagram, BsLinkedin, BsGithub, BsWhatsapp, Bs1Circle, Bs2Circle, Bs3Circle } from 'react-icons/bs';
import { SiDart, SiAdobephotoshop, SiFigma, SiAdobeillustrator, SiAdobexd, SiCsharp, SiArduino, SiCreativetechnology } from 'react-icons/si';
import { BiLogoReact, BiLogoCss3, BiLogoHtml5, BiLogoFlutter, BiLogoNodejs, BiLogoJavascript } from 'react-icons/bi'


export default function home() {
    return (
        <div>
            <div className="container">
                <div className="container-text">
                    <h1 className='title'>O que é Arduino?</h1>

                    <p className='p-m'>
                    O Arduino é uma plataforma de prototipagem eletrônica de código aberto, fácil de usar e ideal para iniciantes. Com ele, você pode criar projetos incríveis que envolvem eletrônica e programação, despertando sua criatividade e habilidades técnicas.
                    </p>

                     </div>
                <div className="container-img">
                    <img src="/src/assets/images/5.png" alt="" width={"100%"} />

                </div>




            </div>


            <div className='container'>





                <div className="container-img">
                    <img src="/src/assets/images/8.png" alt="" width={"400vw"} />

                </div>

                <div className="container-text">

                    <h1 className='title'>Por que aprender Arduino?</h1>

                    

                    <div>

                        <p>
                            <BsLightningChargeFill color='orange' />  Aprender Arduino é divertido e educativo! Você pode criar projetos práticos e interessantes, como robôs, sensores e sistemas automatizados, enquanto aprende sobre eletrônica e programação.
                        </p>
                        <p>
                            <BsLightningChargeFill color='orange' />  Trabalhar com Arduino ajuda a desenvolver várias habilidades importantes, como pensamento lógico, resolução de problemas, criatividade e trabalho em equipe. Além disso, proporciona uma introdução ao mundo da engenharia e da tecnologia.
                        </p>
                    </div>


                </div>
            </div>

            <div className='container'>



                <div className="container-img">
                    <img src="/src/assets/images/9.png" alt="" width={"100%"} />

                </div>

                <div className="container-text">

                    <h1 className='title'>Projetos Simples com Arduino
                    </h1>

                    <div className='social-icons'>
                        <i> <SiArduino color='#FF9A00' /> </i>
                    </div>

                    <div>

                        <p>
                        <Bs3Circle color='blue' />  Crie um circuito simples que faz LEDs piscarem. É uma ótima maneira de aprender sobre circuitos e como programar o Arduino para controlar luzes.
                        </p>
                        <p>
                        <Bs3Circle color='blue' />  Construa um termômetro digital usando um sensor de temperatura. Você aprenderá a ler dados do sensor e a exibi-los em um display.
                        </p>
                        <p>
                        <Bs3Circle color='blue' />  Monte um carro robô que pode ser controlado remotamente ou programado para seguir uma linha. Este projeto envolve montagem mecânica, eletrônica e programação.
                        </p>
                    </div>


                </div>






            </div>
            <div className='container'>



                <div className="container-img">
                    <img src="/src/assets/images/10.png" alt="" width={"100%"} />

                </div>

                <div className="container-text">

                    <h1 className='title'>Recursos e Materiais
                    </h1>

                    <div>

                        <p>
                            <Bs1Circle color='green' />  Existem muitos kits de Arduino disponíveis online que incluem a placa Arduino e componentes básicos como LEDs, resistores, sensores e motores. Sites como Arduino.cc e lojas de eletrônicos são ótimos pontos de partida.
                        </p>
                        <p>
                            <Bs2Circle color='green' />  A comunidade Arduino é enorme e muito ativa. Você pode encontrar tutoriais, fóruns de discussão e projetos inspiradores em sites como o próprio Arduino.cc e no Instructables.
                        </p>

                    </div>


                </div>






            </div>







        </div>





    )
}