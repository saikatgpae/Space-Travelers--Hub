import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../../redux/rockets/rocketsRedux';
import './Rockets.css';

const RocketContainer = (props) => {
  const dispatch = useDispatch();
  const {
    // eslint-disable-next-line react/prop-types
    id, name, description, img, reserved,
  } = props;

  const handleReserve = (id, e) => {
    if (e.target.textContent === 'Reserve Rocket') {
      dispatch(reserveRocket(id));
    } else {
      dispatch(cancelRocket(id));
    }
  };

  return (
    <div>
      <div id={id} className="container my-4">
        <div className="row">
          <img className="rocketImg col-4" src={img} alt="Rocket" />
          <div className="col-8">
            <h3 className="col-12">{name}</h3>
            <p className="col-12 my-4">
              <span className={reserved ? 'reservedStausActive p-1 mx-2' : 'reservedStaus'}>
                Reserved
              </span>
              {description}
            </p>
            <button
              onClick={(event) => handleReserve(id, event)}
              type="button"
              className={reserved ? 'cancelButton p-3 col-4' : 'reserveButton p-3 col-4'}
            >
              {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketContainer;
