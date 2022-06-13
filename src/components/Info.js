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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            neque vulputate, cursus libero quis, condimentum magna. Nam dictum
            leo ex, id condimentum massa facilisis eu. Aenean nec varius dui.
            Vivamus quis commodo velit. In vitae facilisis neque. Vestibulum
            pellentesque viverra posuere. Vestibulum maximus sem mi, vitae
            laoreet tortor bibendum ut. Nunc semper nulla ut est blandit maximus
            ac eget odio. Sed ac dignissim diam. Ut mollis posuere dapibus.
            Morbi et fringilla nunc, sed consequat nulla. Phasellus ac odio sed
            risus semper sagittis et eu eros. Cras in erat quis ex imperdiet
            convallis quis vitae nunc. In eleifend facilisis metus, sit amet
            scelerisque purus. Proin pulvinar libero eget dui condimentum, ac
            molestie diam consequat. Ut mattis metus volutpat, lobortis ex eget,
            maximus justo. Morbi lacus nunc, aliquam vitae nisl eu, ullamcorper
            commodo lacus. Nulla facilisi. Nunc tincidunt ipsum vitae aliquam
            sodales. Praesent eget leo nisi. Nunc facilisis eu arcu in
            condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Etiam congue ante nec lacus gravida
            aliquet. Nunc feugiat nibh nec porta suscipit. Mauris dignissim
            lacus ac tristique interdum. Aliquam in vestibulum ligula. Duis
            feugiat metus vitae justo venenatis sodales id at turpis. Nullam in
            ipsum nec dui tempus laoreet. Donec imperdiet, magna vel tempus
            faucibus, libero mi hendrerit lorem, at bibendum ante purus in quam.
            Duis justo augue, tempus ac turpis vel, feugiat volutpat ligula.
            Phasellus ac ultrices arcu. Nunc justo velit, interdum sit amet
            tincidunt nec, egestas eu nibh. Nunc vel vestibulum dui. Praesent
            nec luctus ligula, eu euismod augue.
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
