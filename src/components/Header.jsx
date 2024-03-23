import siteLogo from '../assets/investment-calculator-logo.png'

export default function Header() {
  return (
    <>
      <div id='header'>
          <img src={siteLogo} alt="site-logo"  />
          <h1>React Investment Calculator</h1>
      </div>
    </>

  )
}