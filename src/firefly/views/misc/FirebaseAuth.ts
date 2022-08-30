// wrapper for Firebase Authentication
// similar API to react-firestore, but instead of returning a collection or document,
// it returns the logged in user (or null if not logged in) along with loading state and errors

import Firebase from 'firebase/compat/app'
import React from 'react'

export interface AuthState {
  isLoading?: boolean;
  error?: any;
  auth?: Firebase.User;
  children?: any;
}

class FirebaseAuth extends React.Component<AuthState> {
  state: AuthState = {
    isLoading: true,
    error: undefined,
    auth: undefined,
  }
  private unsubscribe: Firebase.Unsubscribe | undefined;


  componentDidMount() {
    this.unsubscribe = Firebase.auth()
      .onAuthStateChanged(this.handleAuth, this.handleError)
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  handleAuth = (auth: Firebase.User | null) => {
    this.setState({
      isLoading: false,
      auth,
      error: null,
    })
  }

  handleError = (error: any) => {
    this.setState({
      isLoading: false,
      auth: null,
      error,
    })
  }

  render() {
    return this.props.children(this.state)
  }

}

export default FirebaseAuth
