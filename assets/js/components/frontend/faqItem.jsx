import React from 'react';

const FaqItem = ({question, id, answer}) => {
    return (
        <div className="accordion-item">
            <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target={`#${id}`}>
                    <i className="bi bi-question-circle question-icon"/>
                    {question}
                </button>
            </h3>
            <div id={id} className="accordion-collapse collapse"
                 data-bs-parent="#faqlist">
                <div className="accordion-body">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FaqItem;
