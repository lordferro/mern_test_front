import { useStore } from 'hooks/zustand';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Question } from './Question';
import Button from 'components/Button/Button';

export const Test = () => {
  const [score, setScore] = useState({});
  const [test, setTest] = useState(null);
  const { testId } = useParams();
  const { getTestById, updatePassedTest } = useStore(state => ({
    getTestById: state.getTestById,
    updatePassedTest: state.updatePassedTest,
  }));
  const navigate = useNavigate();

  useEffect(() => {
    setTest(getTestById(testId));
  }, [testId, getTestById]);

  return (
    <div>
      <h2>{test?.title}</h2>
      <p>{test?.description}</p>
      <ul>
        {test?.questions.map(question => (
          <Question
            setScore={setScore}
            key={question?.question}
            question={question}
          />
        ))}
      </ul>
      <Button
        onClick={() => {
          updatePassedTest(
            testId,
            Object.values(score).reduce((partialSum, a) => partialSum + a, 0)
          );
         navigate('..', { relative: 'path' });
        }}
      >
        Answer
      </Button>
    </div>
  );
};
