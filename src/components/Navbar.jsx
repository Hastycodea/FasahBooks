import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faWhatsapp  } from '@fortawesome/free-brands-svg-icons'
import { faClock, faPhone } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center text-sm text-gray-600'>
        <div className='flex space-x-3 items-center'>
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faClock} />
          <p>Mon - Fri: 9am - 5pm | Sat 9am - 3pm</p>
        </div>
        <div className='flex space-x-2 items-center'>
          <FontAwesomeIcon icon={faPhone} />
          <p>+254 710 594179</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar