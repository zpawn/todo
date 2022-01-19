import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { initApp } from './store/app';
import Layout from './components/Layout';
import ToDo from './pages/ToDo';
import SignIn from './pages/SignIn';

const Spinner = () => <span>Loading...</span>;

const App = () => {
  const isInit = useSelector((state) => !!state?.app?.init);
  const isAuth = useSelector((state) => !!state?.auth?.token);
  const dispatch = useDispatch();

  console.log('>>>', { isInit, isAuth });

  useEffect(() => {
    dispatch(initApp());
  }, []);

  return !isInit ? (
    <Spinner />
  ) : (
    <Layout>
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route
          path='*'
          element={isAuth ? <ToDo /> : <Navigate to='/sign-in' />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
