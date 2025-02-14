import React, { useEffect, useState } from 'react'

const Accordion = () => {
    const[faqs,setfaqs]=useState([])
    const[openID,setopenID]=useState(null)

    useEffect(()=>{
        fetch('http://localhost:5003/faqs')
        .then((res)=>res.json())
        .then((data)=>setfaqs(data))
        .catch((err)=> <h4>Error fetching..{err}</h4>)
    },[])
    const toggleFaq=(id)=>{
        setopenID(openID===id? null:id)
    }
    console.log("faqs",faqs)
  return (
    <div className='accordion'>
        {
            faqs.map((faq)=>(

                <div key={faq.id} className='faq-item'>
                   <button onClick={()=>toggleFaq(faq.id)}> {faq.Q}</button> 
                    {openID === faq.id && <p>{faq.A}</p>}
                </div>
            ))
        }
        
    </div>
  )
}

export default Accordion
