import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from '.';

describe('<SearchInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/search in posts/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue={'um valor qualquer'} />);

    const input = screen.getByPlaceholderText(/search in posts/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<SearchInput handleChange={fn} searchValue="" />);
    expect(container).toMatchSnapshot();
  });
});
