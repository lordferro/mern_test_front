import { useStore } from 'hooks/zustand';
import { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { TestItem } from './TestItem';
import { NavLink } from 'react-router-dom';

export const TestList = () => {
  const { fetch, tests } = useStore(state => ({
    fetch: state.fetch,
    tests: state.tests,
  }));

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      {tests ? (
        <ul >
          {tests.map(test => (
            <TestItem key={test._id} test={test}></TestItem>
          ))}
        </ul>
      ) : (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
          )}
          <NavLink to="/">go home</NavLink>
    </>
  );
};
