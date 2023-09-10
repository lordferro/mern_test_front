import Input from 'components/Input/Input';


export const Question = ({ question, setScore }) => {

  return (
    <>
      <p>{question?.question}</p>
      <ul>
        {question?.answers.map((answer, index) => (
          <li key={answer?.variant}>
            <Input
              id={question?.question}
              value={answer?.variant}
              onChange={e => {
                setScore(state => ({
                  ...state,
                  [question?.question]: Number(answer.correct),
                }));
              }}
              label={answer?.variant}
              type="radio"
            />
          </li>
        ))}
      </ul>
    </>
  );
};
