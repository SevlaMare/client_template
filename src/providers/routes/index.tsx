import { useState, createContext, ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouteProps,
} from 'react-router-dom';

import { Home } from '@/pages/home';
import { About } from '@/pages/about';
import { Products } from '@/pages/products';
import { Product } from '@/pages/products/product';
import { NotFound } from '@/pages/notfound';

interface RouterContextType {
  routeProps?: RouteProps | null;
  setRouteProps: (props: RouteProps) => void;
}

interface RouterProps {
  children?: ReactNode;
}

export const ContextRouter = createContext<RouterContextType | null>(null);

export function RouterProvider({ children }: RouterProps) {
  const [routeProps, setRouteProps] = useState<RouteProps | null>(null);

  return (
    <Router>
      <ContextRouter.Provider value={{ routeProps, setRouteProps }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        {children}
      </ContextRouter.Provider>
    </Router>
  );
}
