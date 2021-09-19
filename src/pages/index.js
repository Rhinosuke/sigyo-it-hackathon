import * as React from "react"
import Layout from '../components/Layout'
import Map from '../components/Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const cardStyles = {
  width: "100%",
}

const StepsCardComponent = () => {
  return (
    <div className="overflow-x-auto">
      <ul className="w-full steps">
        <li data-content="☂️" className="step">1</li>
        <li data-content="❄️" className="step step-secondary">2</li>
        <li data-content="🌧️" className="step step-secondary">3</li>
        <li data-content="☀️" className="step step-secondary">4</li>
        <li data-content="☁️" className="step">5</li>
        <li data-content="⛈️" className="step step-accent">6</li>
        <li data-content="🍱" className="step step-accent">7</li>
        <li data-content="🍱" className="step">8</li>
        <li data-content="🍱" className="step step-error">9</li>
        <li data-content="🍱" className="step step-error">10</li>
        <li data-content="🍱" className="step">11</li>
        <li data-content="🍱" className="step">12</li>
        <li data-content="🍱" className="step step-warning">13</li>
        <li data-content="🍱" className="step step-warning">14</li>
        <li data-content="🍱" className="step">15</li>
        <li data-content="🍱" className="step step-neutral">16</li>
        <li data-content="🍱" className="step step-neutral">17</li>
        <li data-content="🍱" className="step step-neutral">18</li>
        <li data-content="🍱" className="step step-neutral">19</li>
        <li data-content="🍱" className="step step-neutral">20</li>
        <li data-content="🍱" className="step step-neutral">21</li>
        <li data-content="🍱" className="step step-neutral">22</li>
        <li data-content="🍱" className="step step-neutral">23</li>
      </ul>
    </div>
  )
}

const Card = ({ children, title }) => {
  return <div className="card bg-base-200 rounded-box shadow-lg" style={cardStyles}>
    <div className="card-body" style={{height: '100%'}}>
      <h2 className="card-title">{title || title}</h2>
      {children}
    </div>
  </div>
}

const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
      <main style={pageStyles}>
        <title>Home Page</title>
        <div data-theme="light">
          <div className="grid gap-6">
            <Card>
              <StepsCardComponent />
            </Card>
            <div class="grid grid-cols-2 gap-6">
              <Card>
                <Map />
              </Card>
              <Card>
                <h3>font awesome</h3>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <h3>image</h3>
                <img src={'/images/pin_red.png'} alt="Logo" className="h-10 w-10" />
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
