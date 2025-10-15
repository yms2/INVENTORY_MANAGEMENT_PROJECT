import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductAdd from './pages/ProductAdd';
import Inbound from './pages/Inbound';
import Outbound from './pages/Outbound';
import Adjustment from './pages/Adjustment';
import Transfer from './pages/Transfer';
import History from './pages/History';
import MainLayout from './components/MainLayout';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 로컬스토리지에서 사용자 정보 확인
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // 로딩 중일 때
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Home />
                </MainLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/products" 
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Products />
                </MainLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/products/add" 
            element={
              isAuthenticated ? (
                <MainLayout>
                  <ProductAdd />
                </MainLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/inbound" 
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Inbound />
                </MainLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/outbound" 
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Outbound />
                </MainLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/adjustment" 
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Adjustment />
                </MainLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/transfer" 
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Transfer />
                </MainLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/history" 
            element={
              isAuthenticated ? (
                <MainLayout>
                  <History />
                </MainLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
