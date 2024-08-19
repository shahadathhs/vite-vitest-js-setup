import PropTypes from 'prop-types';

const TestWithMockData = ({ data }) => {
  return (
    <div>
      <h2>Test with mock data</h2>
      <ul>
        <li>{data.length} data</li>
        <br />
        {data.length > 0 && data.map((item) => (
          <li key={item.id}>
            {item.id} {item.first_name}, {item.last_name}, {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

TestWithMockData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TestWithMockData;
