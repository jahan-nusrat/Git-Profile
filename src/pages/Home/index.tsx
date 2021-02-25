import React from 'react'
import Switch from "react-switch";

const Home = () => {
  const handleToggleTheme = () => {
    console.log('height')
  }
  return (
    <div>
      <h1>Profile Finder</h1>
      <h3>Find Your GitHub Profile Quickly and Easily</h3>
      <h4>Enter the developer name below</h4>
      <form onSubmit={e=>e.preventDefault()}>
        <input placeholder="ex: jahan-nusrat" type="text"/>
        <button>Meet</button>
      </form>
      <div>
        <span>Dark Mode</span>
        <Switch
          onChange={handleToggleTheme}
          checked = {false}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
        />
        <h3>by Nusrat Jahan</h3>
      </div>
    </div>
  )
}

export default Home
