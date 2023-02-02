import React from 'react'
import './css/About.css';

export default function About(props) {
  return (
    <div className={`aboutSection padding-top ${props.mode}`}>
      <div className='container'>
        <h1 className='mainHeading text-center py-3'>About Us</h1>
        <p className="paraBlack">"Welcome to our company, where we believe in providing the best text analysis services on the market. Our team of experts has years of experience and a passion for helping businesses and individuals understand the meaning behind their written words.</p>
        <p className="paraBlack">We understand that effective communication is key, and our goal is to make that process as easy as possible for you. Our state-of-the-art text analyzer technology is designed to provide deep insights into your written content, from sentiment analysis to keyword extraction.</p>
        <p className="paraBlack">We are constantly updating our services to stay ahead of the curve, so you can rest assured that you are receiving the most accurate and up-to-date information. Our commitment to excellence is evident in everything we do, from the quality of our products to our exceptional customer service.</p>
        <p className="paraBlack">Thank you for considering us as your text analysis partner. Let us help you unlock the full potential of your written content today."</p>
      </div>
    </div>
  )
}
