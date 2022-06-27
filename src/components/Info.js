import React, { useState } from 'react'
import { VscEyeClosed } from 'react-icons/vsc'

const Info = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <>
      <div
        className='info-background'
        style={{ display: isShown ? 'block' : 'none' }}
      ></div>
      <div className='info-wrapper'>
        <div
          className='info-tip'
          onClick={() => {
            setIsShown(!isShown)
          }}
        >
          tip
        </div>
        <div
          className='info-body'
          style={{
            height: isShown ? '20rem' : '0',
            fontSize: isShown ? 'medium' : 0,
          }}
        >
          <div className='info-text'>
            Welcome to the Duck Market! I (David) have created this project with
            only one purpose (and it is not to sell real ducks) - I wanted to
            learn more about React JS and Three JS. The project itself was built
            only using the aforementioned technologies (and SCSS, I really like
            this CSS framework). <span>I was not </span> paying much attention
            to the styling and design of the page as the main purpose was to
            understand how to implement some React features combined with the 3D
            modules implemented through the Three JS framework, this is why many
            components were built using the react-bootstrap package. The website
            uses React's state flow management system created with the help of
            Context API and useReducer hooks, all these components and states
            are completely dynamic product pages and cart not hard-coded but if
            you are interested you can check the full code in my GitHub
            repository. In conclusion, I would say that Three JS is a great
            framework, which works smoothly with the React components system,
            but this particular site may be a bit slow as all these modules were
            not formatted properly and they all have high resolution.
            <br />{' '}
            <span>
              You can also rotate the duck model yourself, just click on any of
              them and you will see a modal window. Also, all the attributions
              (to the authors of the 3D models) were made in the components with
              the coresponding names (e.g MollyTheDuckling.js).
            </span>
          </div>
          <VscEyeClosed
            id='info-close'
            onClick={() => {
              setIsShown(false)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Info
