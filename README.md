# Auth React

## installation

```sh
npm install @arcana/auth-react
```

## Usage

Wrap you app with `ProvideAuth`

`index.js`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const provider = new AuthProvider(`${appId}`)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </React.StrictMode>
);
```

### Hooks

#### useAuth()

`App.js`

```js
import { useAuth } from "@arcana/auth-react";

function App() {
  const { loading, isLoggedIn, connect, user } = useAuth()

  const onConnectClick = async () => {
    try {
      await connect();
    } catch (err) {
      console.log({ err });
      // Handle error
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return (
      <button onClick={onConnectClick}>
        Connect
      </button>
    );
  }
  return <Info info={user} />;
}

export default App
```

`useAuth` return type

```ts
type AuthContextType = {
  loading: boolean;
  connect: () => Promise<EthereumProvider>;
  loginWithLink: (p: string) => Promise<EthereumProvider>;
  loginWithSocial: (p: string) => Promise<EthereumProvider>;
  logout: () => void;
  isLoggedIn: boolean;
  availableLogins: Logins[];
  provider: EthereumProvider;
  user: UserInfo | null;
  theme: "dark" | "light";
  logo: string
};
```

### Login component

`App.js`

```jsx
import { Auth } from "@arcana/auth-react";

function App() {
  const { isLoggedIn, user } = useAuth()
 
  if (!isLoggedIn) {
    return <Auth theme="light" />;
  }
  return <Info info={user} />;
  
}

export default App;
```
