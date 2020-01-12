import Blazy from "blazy";
import React, {useEffect} from "react";
import PageContainer from "../core/PageContainer";
import "./Accomodations.css";

const HotelLink = ({ img, address, bookingLink, mapLink, phoneInstructions }) => (
  <div className="column">
    <div className="hotel-image">
      <img
        alt="Target"
        className="b-lazy"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src={img}
      />
    </div>
    <div className="hotel-address">
      {address}
    </div>
    <div className="hotel-link">
      <a href={mapLink} target="_blank" rel="noopener noreferrer">
        <i>View Map</i>
      </a>
    </div>
    <div className="hotel-link">
      <a href={bookingLink} target="_blank" rel="noopener noreferrer">
        <i>Book Online Now</i>
      </a>
      <p>{phoneInstructions}</p>
    </div>
  </div>
);

const Accomodations = () => {
  useEffect(() => {
    window.bLazy = new Blazy();
  });

  return (
    <PageContainer hasBackground>
      <div className="section accomodations">
        <div className="container">
          <div className="columns is-centered">
            <div className="column headline">
              <p className="venue-heading">ACCOMODATIONS</p>
            </div>
          </div>
          <div className="columns is-centered">
            <HotelLink
              img="holiday_inn.png"
              address={
                <React.Fragment>
                  <p>Holiday Inn Express</p>
                  <p>941 N Quincy Ave</p>
                  <p>Ottumwa, IA 52501</p>
                </React.Fragment>
              }
              bookingLink="https://www.ihg.com/holidayinnexpress/hotels/us/en/ottumwa/omtqu/hoteldetail?fromRedirect=true&qSrt=sBR&qIta=99585603&icdv=99585603&qSlH=OMTQU&qAAR=IL4D4&qRtP=IL4D4&setPMCookies=true&qSHBrC=EX&qDest=941%20North%20Quincy%20Avenue,%20Ottumwa,%20IA,%20US&srb_u=1"
              mapLink="https://www.google.com/maps/place/Holiday+Inn+Express+%26+Suites+Ottumwa/@41.0136876,-92.4419238,17z/data=!3m1!4b1!4m8!3m7!1s0x87e61d5190fb4c57:0x7e70aec2264adbcb!5m2!4m1!1i2!8m2!3d41.0136876!4d-92.4397351"
              phoneInstructions="Or call (641) 814-4500 and request the wedding rate"
            />
            <HotelLink
              img="hampton_inn.png"
              address={
                <React.Fragment>
                  <p>Hampton Inn by Hilton</p>
                  <p>943 N Quincy Ave</p>
                  <p>Ottumwa, IA 52501</p>
                </React.Fragment>
              }
              bookingLink="https://secure3.hilton.com/en_US/hp/reservation/book.htm?execution=e1s1"
              mapLink="https://www.google.com/maps/place/Hampton+Inn+Ottumwa/@41.0145007,-92.4419207,17z/data=!3m1!4b1!4m8!3m7!1s0x87e61ddfa3fb6779:0xe84fb7e39ced3629!5m2!4m1!1i2!8m2!3d41.0145007!4d-92.439732"
              phoneInstructions={`Use code 0560061264 under "Corporate Account" when booking, or call (641) 814-8888 and request the wedding rate`}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Accomodations;
