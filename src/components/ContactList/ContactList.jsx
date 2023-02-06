import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
const ContactList = ({ filterContact, removeContact }) =>
  filterContact.length === 0 ? (
    <p>There is no contact list</p>
  ) : (
    <ul className={css.list}>
      {filterContact.map(({ name, id, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}{' '}
          <button
            className={css.btnDelete}
            onClick={() => removeContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

export default ContactList;

ContactList.propTypes = {
  removeContact: PropTypes.func,
  filterContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

ContactList.defaultProps = {
  filterContact: [],
};
