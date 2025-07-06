 import logo from './assets/icon.png'
 

 function Logo(){
    return(
        //onclick action that goes to the maakleerplek website
        <a href="https://www.maakleerplek.be" target="_blank" rel="noopener noreferrer">
            <img src={logo} className="logo" alt="Logo" />
        </a>
    )
 }

export default Logo;