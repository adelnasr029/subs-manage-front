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
            <Route path="/login" element={
              <Layout>
              <Login/>
            </Layout>
              }
              />
                <Route
                path="/signup"
                element={
                  <Layout>
                  <ProtectedRoute>
                    <Signup />
                  </ProtectedRoute>
                  </Layout>
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
                  <ProtectedRoute>
                    <Layout>
                      <Dashboard/>
                    </Layout>
                  </ProtectedRoute>
                }/>
              <Route
                path="/subscriber/:id"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <SubscriberDetails />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Home/>} />
          </Routes>
        </Router>
      </AuthProvider>
  )
}

