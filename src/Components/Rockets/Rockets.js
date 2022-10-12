import React from 'react';
import RocketContainer from './RocketContainer';
import RocketImg1 from '../Images/Rockets-img-1.jpg';
import RocketImg2 from '../Images/Rockets-img-2.jpg';
import RocketImg3 from '../Images/Rockets-img-3.jpg';

function Rockets() {
  return (
    <div>
      <RocketContainer img={RocketImg1} name="Falcon 1" description="The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth." />
      <RocketContainer img={RocketImg2} name="Falcon 9" description="Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit." />
      <RocketContainer img={RocketImg3} name="Falcon Heavy" description="With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost." />
    </div>
  );
}

export default Rockets;
