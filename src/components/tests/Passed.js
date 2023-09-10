import axios from 'axios';
import { useEffect, useState } from 'react';

export const Passed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/test/getResults');
      setData(data);
    })();
  });
  return (
    data.length > 0 && (
      <ul>
        {data.map(test => (
          <li key={test._id}>
            {test.name}
            <ul>
              {test.passedTests.map(passed => (
                <li key={passed.test._id}>
                  {passed.test.title}: {passed.score}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )
  );
};
