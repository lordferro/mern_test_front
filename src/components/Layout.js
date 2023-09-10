import { Outlet } from 'react-router';
import './App.css';
export const Layout = () => {
  return (
    <div className="content">
      <div className="wrapper">
        <h1 className="header">Test Center</h1>
        <Outlet />
      </div>
    </div>
  );
};
