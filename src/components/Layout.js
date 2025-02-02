import * as React from 'react'

const roundStyles = {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2"
}

// styles
const pageStyles = {
  color: "#232129",
  padding: 20,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Header = ({pageTitle}) => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box m-3">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
          <path style={roundStyles} d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        </button>
      </div> 
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">
            {`With two icons ${pageTitle}`}
        </span>
      </div> 
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
          <path style={roundStyles} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
        </svg>
        </button>
      </div>
    </div>
  )
}

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Header
        pageTitle={pageTitle}
      />
      <main style={pageStyles}>
        {children}
      </main>
    </div>
  )
}
export default Layout
