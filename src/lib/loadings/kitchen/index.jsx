import React from "react";

const Kitchen = props => (
    <div className="kitchen-loading">
        <div className="loading--box upper loading--box-animate" style={{ left: '20px', bottom: 0, animationDelay: '.7s' }} />
        <div className="loading--box loading--box-animate" style={{ left: '32px', bottom: 0, animationDelay: '.6s' }} />
        <div className="loading--box dbl-width loading--box-animate" style={{ left: '44px', bottom: 0, animationDelay: '.5s' }} />
        <div className="loading--box sink loading--box-animate" style={{ left: '50px', bottom: '11px', animationDelay: '.5s' }} />
        <div className="loading--box hang loading--box-animate" style={{ left: '44px', top: 0, animationDelay: '.4s' }} />
        <div className="loading--box hang loading--box-animate" style={{ left: '56px', top: 0, animationDelay: '.3s' }} />
        <div className="loading--box loading--box-animate" style={{ left: '68px', bottom: 0, animationDelay: '.1s' }} />
        <div className="loading--box upper loading--box-animate" style={{ left: '68px', top: 0, animationDelay: '.1s' }} />
        <div className="loading--box dbl-height loading--box-animate" style={{ left: '80px', bottom: 0 }} />
    </div>
)

export default Kitchen;