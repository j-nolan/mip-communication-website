import React from 'react'
import Link from 'gatsby-link'
import hbpLogo from '../assets/HBP_logo.svg'
import './Header.css'

export default () => (
  <div>
    <div className="header">
      <a href="https://www.humanbrainproject.eu" className="hbp-logo">
        <img src={hbpLogo} alt="Human Brain Project logo" />
      </a>
      <div className="website-name">MEDICAL INFORMATICS PLATFORM</div>
      <div className="tag-line">
        UNDERSTANDING BRAIN DISEASES AND FOSTERING COLLABORATIONS<br />
        BETWEEN BRAIN SCIENCE RESEARCH AND CLINICAL PRACTICE
      </div>
    </div>
    <div role="presentation">
      <div className="hbp-rainbow-color" style={{ backgroundColor: '#E29D9B' }} />
      <div className="hbp-rainbow-color" style={{ backgroundColor: '#F6A86A' }} />
      <div className="hbp-rainbow-color" style={{ backgroundColor: '#F5CE79' }} />
      <div className="hbp-rainbow-color" style={{ backgroundColor: '#74C9D3' }} />
      <div className="hbp-rainbow-color" style={{ backgroundColor: '#8FCAD2' }} />
      <div className="hbp-rainbow-color" style={{ backgroundColor: '#6EB5CC' }} />
      <div className="hbp-rainbow-color" style={{ backgroundColor: '#68A6CF' }} />
      <div className="hbp-rainbow-color" style={{ backgroundColor: '#588EA2' }} />
    </div>
    <div role="navigation">
      <ul className="top-navigation">
        <li className="align-left"><Link to="/">Home</Link></li>
        <li className="align-left"><Link to="/overview">Overview</Link></li>
        <li className="align-left"><Link to="/how-it-works">How it works</Link></li>
        <li className="align-left"><Link to="/health-partners">Health partners</Link></li>
        <li className="align-left"><Link to="/documentation">Documentation</Link></li>
        <li className="align-left"><Link to="/news-and-events">News and events</Link></li>
        <li className="align-left"><Link to="/contact">Contact</Link></li>
        <li className="no-bullet align-right">
          <a
            href="https://mip.humanbrainproject.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <div className="main-text">Login</div>
            <div className="secondary-text">to platform</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
)
