import Button from 'components/Button/Button';
import { useNavigate } from 'react-router';

export const TestItem = ({ test }) => {
  const navigate = useNavigate();

  return (
    <li>
      {test.title}
      <Button
        onClick={() => {
          navigate(`${test._id}`);
        }}
      >
        try this
      </Button>
    </li>
  );
};
