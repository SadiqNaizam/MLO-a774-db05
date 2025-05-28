import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/Login/LoginCard';

// Define the structure of the data passed to the login submit handler
interface LoginData {
  username: string;
  password: string;
}

/**
 * LoginPage component
 * This is the main page for user login.
 * It uses MainAppLayout for the overall page structure and centers the LoginCard.
 */
const LoginPage: React.FC = () => {
  /**
   * Handles the login form submission.
   * @param data - An object containing the username and password.
   * @returns A promise that resolves when the login attempt is complete.
   */
  const handleLoginSubmit = async (data: LoginData): Promise<void> => {
    console.log('Login attempt from page:', { username: data.username, password: '***' }); // Avoid logging plaintext password in production

    // Simulate an API call
    try {
      // In a real application, this is where you'd call your authentication API
      // e.g., const response = await authApi.login(data.username, data.password);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      
      // Handle successful login
      console.log(`Simulated login successful for user: ${data.username}`);
      // Typically, you would redirect the user or update application state here
      // alert(`Welcome, ${data.username}!`);
    } catch (error) {
      // Handle login failure
      console.error('Simulated login failed:', error);
      // Display an error message to the user
      // Example: setErrorState('Invalid username or password.');
      // For now, re-throw to be caught by LoginCard's internal handler if it exists, or just log.
      // throw error; // If LoginCard is designed to catch and display this.
    }
  };

  return (
    <MainAppLayout title="Login Page"> {/* Sets the document title and provides centering layout */}
      <LoginCard onLoginSubmit={handleLoginSubmit} />
    </MainAppLayout>
  );
};

export default LoginPage;
