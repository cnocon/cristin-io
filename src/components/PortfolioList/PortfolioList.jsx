import React from "react"
import * as Styled from "./PortfolioList.styles"
import weatherAppImg from "../../images/weather-app-screenshot.png"
import youTubeAppImg from "../../images/youtube-app-screenshot.png"
import flashcardsAppImg from "../../images/flashcards-app-screenshot.png"

const PortfolioList = () => {
  return (
    <>
    <div className="row" css={Styled.PortfolioItem}>
      <div className="col-sm-12">
        <h2>Front End Development Flash Cards App</h2>
      </div>
      <div className="col-sm-6 col-md-4">
        <header>
          <h4>
            <a href="https://github.com/cnocon/flash-cards" target="_blank" rel="noreferrer">GitHub</a>
            &nbsp;|&nbsp; 
            <a href="https://fed-flash-cards.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
          </h4>
        </header>
        <img src={flashcardsAppImg} alt="Screenshot of Flash Cards App" />
      </div>
      <div className="col-sm-12 col-md-8">
        <h4>Summary</h4>
        <p>A flash card app specifically geared toward teaching front end development skills. The questions are pulled in from a custom-built API and MongoDB database.</p>
        <h4>Technologies</h4>
        <ul>
          <li>MongoDB (custom API)</li>
          <li>Mongoose (custom API)</li>
          <li>Express (custom API)</li>
          <li>Node (custom API)</li>
          <li>React</li>
          <li>React Context API</li>
        </ul>
      </div>
    </div>

    <div className="row" css={Styled.PortfolioItem}>
      <div className="col-sm-12">
        <h2>YouTube Search App</h2>
      </div>
      <div className="col-sm-12 col-md-4">
        <header>
          <h4>
            <a href="https://github.com/cnocon/youtube-search-new" target="_blank" rel="noreferrer">GitHub</a>
            &nbsp;|&nbsp; 
            <a href="https://youtube-search-new.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
          </h4>
        </header>
        <img src={youTubeAppImg} alt="Screenshot of YouTube Search App" />
      </div>
      <div className="col-sm-12 col-md-8">
        <h4>Summary</h4>
        <p>Search for and watch content from YouTube.</p>
        <h4>Technologies</h4>
        <ul>
          <li>YouTube API V3</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div> 

    <div className="row" css={Styled.PortfolioItem}>
      <div className="col-sm-12">
        <h2>Weather Charts App</h2>
      </div>
      <div className="col-sm-6 col-md-4">
        <header>
          <h4>
            <a href="https://github.com/cnocon/weather-charts-app-new" target="_blank" rel="noreferrer">GitHub</a>
            &nbsp;|&nbsp; 
            <a href="https://weather-charts-app.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
          </h4>
        </header>
        <img src={weatherAppImg} alt="Screenshot of Weather Charts App" />
      </div>
      <div className="col-sm-12 col-md-8">
        
        <h4>Summary</h4>
        <p>This app lets you see a 7-day forecast including temperature, pressure, and humidity for any major U.S. city you search for. As a bonus, you can see the city rendered in satellite view in a Google Map.</p>
        <h4>Technologies</h4>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Google Maps API</li>
          <li>Open Weather API</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default PortfolioList;