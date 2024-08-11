import React from 'react'
import { animateScroll, scroller, ScrollLink } from 'react-scroll';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg bg-light shadow">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">B R Architects</a>
                    <button class="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button class="nav-link " onClick={() => {
                                    scroller.scrollTo("projects", {
                                        duration: 100,
                                    })
                                }} >Projects</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={() => {
                                    scroller.scrollTo("about", {
                                        duration: 10,
                                    })
                                }}>About</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={() => {
                                    scroller.scrollTo("contact", {
                                        duration: 100,
                                    })
                                }}>Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
