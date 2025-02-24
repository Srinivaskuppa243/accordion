import React, { useEffect, useState } from 'react';

const Accordion = () => {
    const [faqs, setFaqs] = useState([]);
    const [openID, setOpenID] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5003/faqs')
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch data");
                return res.json();
            })
            .then((data) => setFaqs(data))
            .catch((err) => setError(err.message));
    }, []);

    const toggleFaq = (id) => {
        setOpenID(openID === id ? null : id);
    };

    return (
        <div className='accordion'>
            {error && <h4 style={{ color: "red" }}>{error}</h4>}
            {faqs.map((faq) => (
                <div key={faq.id} className='faq-item'>
                    <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                        <strong>{faq.Q}</strong>
                    </div>
                    {openID === faq.id && <p className="faq-answer">{faq.A}</p>}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
