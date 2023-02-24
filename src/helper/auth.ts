const fakeAuthProvider = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    signin(callback: () => void): void {
      if (fakeAuthProvider.token) {
        this.isAuthenticated = true;
      }
      setTimeout(callback, 100); // fake async
    },
    signout(callback: () => void): void {
      this.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };
  
export default fakeAuthProvider
