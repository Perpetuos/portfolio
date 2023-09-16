import React from 'react'
import './home.css'
import { BrowserRouter as NavLink} from 'react-router-dom';


export default function home() {
    return (
        <div className='main-home'>

            <div className="container">
                <div className="container-text">
                    <h1 className="h1-text">David Ferreira</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis fuga suscipit
                        reprehenderit asperiores itaque odit doloribus nihil, sed vitae eos! Illo obcaecati possimus ipsa
                        reprehenderit accusantium itaque eos earum.
                    </p>

                </div>
                <div className="container-img">
                    <img src="/src/assets/images/4.png" alt="" width={"100%"} />

                </div>

                
            </div>


        </div>
    )
}