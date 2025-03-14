import React from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import "./App.css";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <h1>Welcome to Bucket List Tracker</h1>
      <h2>Hello, {user.username}</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App);
