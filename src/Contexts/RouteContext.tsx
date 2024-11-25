import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { useLocation } from 'react-router-dom';

interface RouteContextProviderProps {
  children: ReactNode;
}

interface RouteContextProps {
  currentRoute: string;
  previousRoute: string;
}

const RouteContext = createContext<RouteContextProps | null>(null);

const RouteProvider: React.FC<RouteContextProviderProps> = ({ children }) => {
  const location = useLocation();
  const [routeState, setRouteState] = useState({
    currentRoute: location.pathname,
    previousRoute: '',
  });

  useEffect(() => {
    setRouteState((prev) => ({
      previousRoute: prev.currentRoute,
      currentRoute: location.pathname,
    }));
  }, [location]);

  return (
    <RouteContext.Provider value={routeState}>{children}</RouteContext.Provider>
  );
};

export const useRouteContext = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('need to use useRouteContext inside of useRouteContext');
  }
  return context;
};

export default RouteProvider;
