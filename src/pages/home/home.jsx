import React from 'react'
import './home.css'
import { BrowserRouter as NavLink } from 'react-router-dom';
import { BsStarFill, BsLightningChargeFill, BsInstagram, BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { SiDart, SiAdobephotoshop, SiFigma, SiAdobeillustrator, SiAdobexd } from 'react-icons/si';
import { BiLogoReact, BiLogoCss3, BiLogoHtml5, BiLogoFlutter, BiLogoNodejs, BiLogoJavascript } from 'react-icons/bi'


export default function home() {
    return (
        <div>
            <div className="container">
                <div className="container-text">
                    <h1 className='title'>David Ferreira</h1>

                    <p className='p-g'>
                        A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
                    </p>

                    <div className='social-icons'>
                        <i> <BsWhatsapp color='#25D366' /> </i>
                        <i> <BsInstagram color='#E4405F' /> </i>
                        <i> <BsLinkedin color='#0077B5' /> </i>
                        <i> <BsGithub color='#333' /> </i>
                    </div>


                    
                    <button className='project'> <i> <BsStarFill /> Star Me On Github </i></button>
                </div>
                <div className="container-img">
                    <img src="/src/assets/images/5.png" alt="" width={"100%"} />

                </div>




            </div>


            <div className='container'>





                <div className="container-img">
                    <img src="/src/assets/images/6.png" alt="" width={"100%"} />

                </div>

                <div className="container-text">

                    <h1 className='title'>Full Stack Development</h1>

                    <div className='social-icons'>
                        <i> <BiLogoHtml5 color='#E34F26' /> </i>
                        <i> <BiLogoCss3 color='#1572B6' /> </i>
                        <i> <BiLogoJavascript color='#F0DB4F' /> </i>
                        <i> <BiLogoReact color='#61DAFB' /> </i>
                        <i> <BiLogoNodejs color='#8CC84B' /> </i>
                        <i> <SiDart color='#0175C2' /> </i>
                        <i> <BiLogoFlutter color='#02569B' /> </i>

                    </div>

                    <div>

                        <p>
<<<<<<< HEAD
                            <BsLightningChargeFill color='orange' />  Developing highly scalable production ready models for various deeplearning and statistical use cases
                        </p>
                        <p>
                            <BsLightningChargeFill color='orange' />  Experience of working with Computer Vision and NLP projects
                        </p>
                        <p>
                            <BsLightningChargeFill color='orange' />  Complex quantitative modelling for dynamic forecasting and time series analysis
=======
                            Building responsive website front end using React-Redux
                        </p>
                        <p>
                            Developing mobile applications using Flutter, React Native and solo android apps using Kotlin
                        </p>
                        <p>
                            Creating application backend in Node, Express & Flask
>>>>>>> 488d7bac17f0721802c49ecec629c86ee71253ff
                        </p>
                    </div>


                </div>
            </div>

            <div className='container'>



                <div className="container-img">
                    <img src="/src/assets/images/7.png" alt="" width={"100%"} />

                </div>

                <div className="container-text">

                    <h1 className='title'>UI/UX Design
                    </h1>

                    <div className='social-icons'>
                        <i> <SiAdobephotoshop color='#0018A8' /> </i>
                        <i> <SiAdobeillustrator color='#FF9A00' /> </i>
                        <i> <SiAdobexd color='#FF0080' /> </i>
                        <i> <SiFigma color='#F24E1E' /> </i>
                    </div>

                    <div>

                        <p>
<<<<<<< HEAD
                            <BsLightningChargeFill color='orange' />  Designing highly attractive user interface for mobile and web applications
                        </p>
                        <p>
                            <BsLightningChargeFill color='orange' />  Customizing logo designs and building logos from scratch
                        </p>
                        <p>
                            <BsLightningChargeFill color='orange' />  Creating the flow of application functionalities to optimize user experience
=======
                            Designing highly attractive user interface for mobile and web applications
                        </p>
                        <p>
                            Customizing logo designs and building logos from scratch
                        </p>
                        <p>
                            Creating the flow of application functionalities to optimize user experience
>>>>>>> 488d7bac17f0721802c49ecec629c86ee71253ff
                        </p>
                    </div>


                </div>






            </div>







        </div>





    )
}