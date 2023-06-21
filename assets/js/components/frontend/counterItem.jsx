import React from 'react';

const CounterItem = ({startCount, endCount, counterTitle}) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start={startCount} data-purecounter-end={endCount} data-purecounter-duration="1" className="purecounter"/>
                <p>{counterTitle}</p>
            </div>
        </div>
    );
};

export default CounterItem;
