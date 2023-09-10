import { Route, Routes } from 'react-router';
import { AuthForm } from './authForm/AuthForm';
import { TestForm } from './tests/TestForm';
import { useStore } from 'hooks/zustand';
import { Layout } from './Layout';
import { TestList } from './tests/TestList';
import { Test } from './tests/Test';
import { Create } from './tests/Create';
import { Passed } from './tests/Passed';

export const App = () => {
  const { name } = useStore(state => ({
    name: state.name,
  }));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={name ? <TestForm /> : <AuthForm />} />
        <Route path="/tests" element={<TestList />} />
        <Route path="/create" element={<Create />} />
        <Route path="/passed" element={<Passed />} />
        <Route path="/tests/:testId" element={<Test />} />
      </Route>
    </Routes>
  );
};
