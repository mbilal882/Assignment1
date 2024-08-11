import React from 'react'
import { useState } from 'react'

export default function About() {
    const [cards, setCards] = useState([
        {
            image: "https://www.w3schools.com/w3images/team2.jpg",
            name: "John Doe",
            desc: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
            function: "CEO & Founder",
        },
        {
            image: "https://www.w3schools.com/w3images/team1.jpg",
            name: "Jane Doe",
            desc: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
            function: "Architect",
        },
        {
            image: "https://www.w3schools.com/w3images/team3.jpg",
            name: "Mike Ross",
            desc: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
            function: "Architect",
        },
        {
            image: "https://www.w3schools.com/w3images/team4.jpg",
            name: "Dan Star",
            desc: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
            function: "Architect",
        }
    ])
    return (
        <di>
            <div className='container'>
                <h1>
                    About
                </h1>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                {
                    cards.map((card) => {
                        return (
                            <div className='d-inline-block mb-4 ms-3 shadow'>
                                <div class="card" style={{ width: '16rem' }}>
                                    <img src={card.image} class="card-img-top" alt="Image" />
                                    <div class="card-body">
                                        <h5 class="card-title">{card.name}</h5>
                                        <h6>{card.function}</h6>
                                        <p class="card-text">{card.desc}</p>
                                        <button class="btn btn-secondary container-fluid">Cencel</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </di>
    )
}
