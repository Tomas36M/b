import React from 'react';

const Accordion = ({ id, title, text, src }) => {
    return (
        <div className='pb-2'>
            <div className="accordion-item">
                <h2 className="accordion-header" id={`heading${id}`}>
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={'#' + id}
                        aria-expanded={false} // Set to false to keep it closed by default
                        aria-controls={id}
                    >
                        <span className='font-text'><strong>{title}</strong></span>
                    </button>
                </h2>
                <div
                    id={id}
                    className={'accordion-collapse collapse'} // Removed 'show' class to keep it closed by default
                    aria-labelledby={`heading${id}`}
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <p><span className='font-text'>{text}</span></p>
                        <a target='_blank' rel="noreferrer" href={src}><span className='font-text'>Link to paper</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
