import renderer from 'react-test-renderer';
import Missions from './__mock__/Mission';

describe('Missions', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Missions />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
