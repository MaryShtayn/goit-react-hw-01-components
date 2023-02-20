import PropTypes from 'prop-types';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
});
