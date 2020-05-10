import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<h3>Sign-up with your email and you will get a quote every day!</h3>
        <input id='email' placeholder='E-Mail' className='form-control'/>
		<select>
		</select>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
