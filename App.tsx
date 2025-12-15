import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ShopListScreen } from './screens/ShopListScreen';
import { ShopDetailScreen } from './screens/ShopDetailScreen';
import { MapScreen } from './screens/MapScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="/list" element={<ShopListScreen />} />
        <Route path="/detail/:id" element={<ShopDetailScreen />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
