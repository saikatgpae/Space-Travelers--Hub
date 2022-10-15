import renderer from 'react-test-renderer';
import Rockets from './__mock__/Rockets';

describe('Rockets', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Rockets />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
