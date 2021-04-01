import React, { useState, useEffect } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

// true/true = OK
// true/false = Redirecionar para home
// false/true = Redirecionar para Products
// false/false = OK
const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const [address, setAddress] = useState({});

  const addressStoraged = localStorage.getItem('@ze-delivery-app/address');
  useEffect(() => {
    setAddress(addressStoraged);
  }, [addressStoraged]);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return !!!address ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: !!address ? '/products' : '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
