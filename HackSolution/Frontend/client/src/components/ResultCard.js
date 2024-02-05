import React from 'react'
import './resultcard.css';

function ResultCard() {
  return (
    <div className='container' >
         <div className="rounded-box">
        <div className="inner-rectangle"><div className='text-1'>COMPLIANCE</div></div>
        <div className="inner-rectangle"><div className='text-2'>CORRECTNESS</div></div>
        <div className="inner-rectangle"><div className='text-3'>COMPLETENESS</div></div>
      </div>
    </div>
  )
}

export default ResultCard