import React from 'react'
import { Link } from 'react-router-dom';


class FooterBar extends React.Component
{
    render()
    {
        return( <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">Visual Algo</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class="nav-link" href="#">Merge Sort</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Quick Sort</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Bubble Sort</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Merge Sort</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Selection Sort</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Random Quick Sort</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Counting Sort</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Radix Sort</Link>
                </li>
            </ul>
            </div>
        </div>
     </nav>)
    }
}


export default FooterBar