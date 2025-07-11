import React from 'react'
import { useState } from 'react'




const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = [
    'Premium Lifestyle, Affordable Price',
    'Prime Location',
    'World-className Amenities',
    'Smart Investment'
  ]
  const content = [
    <>
      <div className='accitem' key={0}>
        <p className='text-[18px]'>Starting at ₹45 Lakhs, own a luxury home without compromising on quality or comfort.</p>
      </div>
    </>,
    <>
      <div className='accitem' key={1}>
        <p className='pb-[10px] text-[18px]'>Located at NH-58, Modipuram (Ansal Town), Meerut, Anandam Floors is just minutes from:</p>
        <ul className='flex gap-[20px] flex-col text-[rgb(0_0_0_/_60%)]'>
          <li>•	Meerut Metro Station (Upcoming)</li>
          <li>•	Top Schools & Universities</li>
          <li>•	Hospitals, Malls & Public Parks</li>
        </ul>
      </div>
    </>,
    <>
      <div className='accitem' key={2}>
        <ul className='flex gap-[20px] flex-col text-[rgb(0_0_0_/_60%)]'>
          <li>•	Landscaped Gardens & Kids Play Area</li>
          <li>•	Clubhouse with Gym & Indoor Games</li>
          <li>•	Private Parking & 24x7 Security</li>
          <li>•	Gated Community with CCTV Surveillance</li>
          <li>•	Jogging Track & Badminton Court</li>
          <li>•	Designer Entry Gate & Common Lighting</li>
        </ul>
      </div>
    </>,
    <>
      <div className='accitem' key={3}>
        <ul className='flex gap-[20px] flex-col text-[rgb(0_0_0_/_60%)]'>
          <li>•	Freehold Property: 100% ownership rights</li>
          <li>•	RERA Approved: Full legal transparency</li>
          <li>•	High Rental Yield: Excellent rental potential due to connectivity & development</li>
          <li>•	Bank Loans Available from top institutions</li>
        </ul>
      </div>
    </>

  ]
  return (
    <>

      <div className=' flex gap-4 w-full'>
        {/* Left Side Menu */}
        <div className='w-[35%]'>
        <ul className='flex flex-col gap-[20px]'>
          {titles.map((title, index) => (
            <li key={index}  onClick={() => { setActiveIndex(index) }}
              className={`flex px-4 py-2 gap-1 cursor-pointer text-[18px] font-semibold transition-all duration-300 ${
              activeIndex === index ? ' text-[#852438]' : 'text-[#000]'
              }`}>
              <i className={`ri-checkbox-circle-line text-xl transition 
                activeIndex === index ? 'text-[#852438]' : 'text-[#000]'
                `}></i>
              <span>{title}</span>
            </li>
          ))}
        </ul>
        </div>

        {/* Right Side Content */}
        <div className='w-[65%]'>
        {content[activeIndex]}
        </div>
      </div>
    </>
  )
}

export default Accordion