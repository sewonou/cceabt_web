import React from 'react';

const TeamItem = ({memberName, memberTitle, memberDescription}) => {
    return (
        <div className="col-lg-4 col-md-6 d-flex">
        <div className="member">
            <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="{memberName}"/>
                <div className="member-content">
                    <h4>{memberName}</h4>
                    <span>{memberTitle}</span>
                    <p>
                        {memberDescription}
                    </p>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"/></a>
                        <a href=""><i className="bi bi-facebook"/></a>
                        <a href=""><i className="bi bi-instagram"/></a>
                        <a href=""><i className="bi bi-linkedin"/></a>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default TeamItem;
