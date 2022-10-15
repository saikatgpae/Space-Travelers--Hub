import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchRockets from '../../redux/rockets/rocketsRedux';
import RocketContainer from './RocketContainer';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);
  return (
    <div className="rockets">
      {rockets.map((rocket) => (
        <RocketContainer
          key={rocket.rocket_id}
          id={rocket.rocket_id}
          name={rocket.rocket_name}
          description={rocket.description}
          img={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
