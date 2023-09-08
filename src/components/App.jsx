import { Form } from './form/Form';
import './App.css';

export const App = () => {
  return (
    <div className="content">
      <h1 className="header">|Test Center</h1>
      <span className="text">|Please login or register</span>
      <Form />
    </div>
  );
};
