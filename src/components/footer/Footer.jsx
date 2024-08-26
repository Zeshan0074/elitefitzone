import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
// import Logos from '../../images/logo.png'
import { FaFacebook,FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter,AiFillInstagram } from 'react-icons/ai'
import Logo from '../navbar/Logo'

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to={"/"}>
                    {/* <img src={Logos} alt={"Footer Logo"}  className='logo'/> */}
                    <Logo/>
                    </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptate error accusantium voluptas labore ex, reiciendis saepe quod repellendus consequatur.</p>
                <div className="footer_socials">
                    <FaLinkedin/>
                    <FaFacebook/>
                    <AiOutlineTwitter/>
                    <AiFillInstagram/>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to={"/about"}>About</Link>
                <Link to={"/plans"}>Plans</Link>
                <Link to={"/trainers"}>Trainers</Link>
                <Link to={"/gallery"}>Gallery</Link>
                <Link to={"/contact"}>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link  >Blog </Link>
                <Link  >Case Studies</Link>
                <Link  >Events</Link>
                <Link  >Communities</Link>
                <Link  >FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to={"/contact"}>Contact Us</Link>
                <Link >Support</Link>
            </article>
        </div>
        <div className="footer_copyright">
            <small>2024 EliteFitZone &copy; All Rights Reserved</small>
        </div>
      
    </footer>
  )
}

export default Footer
