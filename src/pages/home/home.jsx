import React from 'react'
import './home.css'
import { BrowserRouter as NavLink } from 'react-router-dom';


export default function home() {
    return (
        <div>
            <div className="container">
                <div className="container-text">
                    <h1 className="h1-text">David Ferreira</h1>

                    <p>
                        A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
                    </p>

                    <div className='social-icons'>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-github"></i>
                    </div>
                    <a className='project' href="">
                        <i className="fas fa-star"></i>
                        <i> Star Me On Github</i>
                    </a>

                </div>
                <div className="container-img">
                    <img src="/src/assets/images/5.png" alt="" width={"100%"} />

                </div>




            </div>

            <div ><h1 className="h1-text-2">What I Do?</h1></div>

            <div className="container-2">



                <div className="container-img-2">
                    <img src="/src/assets/images/6.png" alt="" width={"100%"} />

                </div>

                <div className="container-text-2">

                    <h1 className="h1-text">Data science & analysis</h1>

                    <div>


                    <p>
                        Developing highly scalable production ready models for various deeplearning and statistical use cases
                    </p>
                    <p>
                        Experience of working with Computer Vision and NLP projects
                    </p>
                    <p>
                        Complex quantitative modelling for dynamic forecasting and time series analysis
                    </p>
                    </div>


                </div>




            </div>

            <div className="container">
            <div className="container-text">
                <h1 className="h1-text">David Ferreira</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis fuga suscipit
                    reprehenderit asperiores itaque odit doloribus nihil, sed vitae eos! Illo obcaecati possimus ipsa
                    reprehenderit accusantium itaque eos earum.
                </p>

                <div className='social-icons'>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-github"></i>
                </div>
                <a className='project' href="">
                    <i className="fas fa-star"></i>
                    <i> Star Me On Github</i>
                </a>

            </div>
            <div className="container-img">
                <img src="/src/assets/images/5.png" alt="" width={"100%"} />

            </div>



        </div>

        </div>





    )
}