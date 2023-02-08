import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card--container">
        <div className="card--left">
          <img
            className="card--image"
            src="/los_angeles.jpeg"
            width="125px"
            height="168px"
          />
        </div>
        <div className="card--right">
          <div className="card--top">
            <div className="card--location">
              <img
                src="/public/iconmonstr-location-pin-thin-240.png"
                width="7px"
                height="10px"
              />
              <p>
                <span className="card--country">{props.location} </span>
                <a
                  className="card--link"
                  href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
                >
                  <span>View on Google Maps</span>
                </a>
              </p>
            </div>
            <h1 className="card--title">{props.title}</h1>
          </div>
          <div className="card--bottom">
            <p className="card--dates">
              {props.startDate} - {props.endDate}
            </p>
            <p>{props.description},</p>
          </div>
          {/* <div className="border" /> */}
        </div>
      </div>
      <div className="border"></div>
    </>
  );
};

export default Card;
