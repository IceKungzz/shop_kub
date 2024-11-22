import { render, screen } from '@testing-library/react';
import App from './App';
//ggg55555555
//test 222
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
