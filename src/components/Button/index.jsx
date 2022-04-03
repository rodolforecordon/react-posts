import P from 'prop-types';
import './styles.css';

export const Button = ({ text, loadMorePosts, disabled }) => (
  <button className="button" onClick={loadMorePosts} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  loadMorePosts: P.func.isRequired,
  disabled: P.bool,
};
