import { render } from '@testing-library/react';
import App from './App';

test('App renders properly', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot()
});
