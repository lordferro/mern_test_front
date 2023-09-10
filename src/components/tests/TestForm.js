import Button from 'components/Button/Button';
import { useNavigate } from 'react-router';

export const TestForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span className="text">What do you want to do</span>
        <Button name="pass" onClick={() => {navigate('tests')}}>
          Pass test
        </Button>
        <Button name="create" onClick={() => {navigate('create')}}>
          Create test
        </Button>
        <Button name="create" onClick={() => {navigate('passed')}}>
          Look who pass my tests
        </Button>
      </div>
    </>
  );
};
