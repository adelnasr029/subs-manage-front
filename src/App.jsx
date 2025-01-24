import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./components/auth/AuthContext";
import Signup from "./components/auth/Signup"
import Login from "./components/auth/Login"
import Logout from "./components/auth/Logout";
import Dashboard from "./components/subscriptions/Dashboard"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import SubscriberDetails from "./components/subscriptions/SubscriberDetails";
import Layout from './components/Layout'
import Home from "./components/Home";


export default function App() {
  return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" 
            element={
              <Layout>
                <Home/>
              </Layout>              } 
            />
            <Route path="/login" 
            element={
              <Layout>
                <Login/>
              </Layout>
              } 
            />
            <Route
                path="/signup"
                element={
                  <ProtectedRoute>
                    <Signup />
                  </ProtectedRoute>
                }/>
              <Route
                path="/logout"
                element={
                <ProtectedRoute>
                  <Layout>
                    <Logout />
                  </Layout>
                </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                    <Layout>
                      <Dashboard />
                    </Layout>
                }/>
              <Route
                path="/subscriber/:id"
                element={
                    <Layout>
                      <SubscriberDetails />
                    </Layout>
                }
              />
              <Route path="*" element={<Home/>} />
          </Routes>
        </Router>
      </AuthProvider>
  )
}

