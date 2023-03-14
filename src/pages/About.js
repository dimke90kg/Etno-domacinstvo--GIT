import React from 'react'
import BannerImage from "../assets/banner2.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})`}}></div>
        <div className='aboutBottom'><h1>O nama</h1>
        <p>Etno domaćinstvo Dimitrijević nalazi se na pola puta između Kragujevca i Gornjeg Milanovca u podnožju planine Rudnik. 
           U našoj ponudi možete naći veliki izbor domamaćih jela. U sklopu našeg domaćinstva nalaze se i tri apartmana kao i igralište za naše najdraže goste.
           Okružen zelenilom sa pogledom na planinu pruža gostima pravi odmor. 
            
            </p></div>
    </div>
  )
}

export default About