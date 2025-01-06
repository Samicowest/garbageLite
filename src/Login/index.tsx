import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebaseConfig";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from: Location })?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration successful");
        navigate(from, { replace: true });
      } catch (error) {
        console.error("Error registering:", error);
        alert("Error registering");
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful");
        navigate(from, { replace: true });
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Error logging in");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In successful");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error with Google Sign-In:", error);
      alert("Error with Google Sign-In");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? "Register" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isRegistering && (
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 mt-4"
        >
          {isRegistering ? "Register with Google" : "Login with Google"}
        </button>
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="w-full text-blue-500 py-2 mt-4"
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default Login;
