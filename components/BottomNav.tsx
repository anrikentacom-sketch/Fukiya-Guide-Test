import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from './Icon';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 dark:border-white/5 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md pb-safe">
      <div className="flex h-16 items-center justify-around px-2">
        <button 
          onClick={() => navigate('/')}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${isActive('/') || isActive('/list') ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'}`}
        >
          <Icon name="storefront" filled={isActive('/list')} />
          <span className="text-[10px] font-medium">一覧</span>
        </button>

        <button 
          onClick={() => navigate('/map')}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${isActive('/map') ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'}`}
        >
          <Icon name="map" filled={isActive('/map')} />
          <span className="text-[10px] font-medium">マップ</span>
        </button>

        <button 
          onClick={() => navigate('/favorites')}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${isActive('/favorites') ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'}`}
        >
          <Icon name="favorite" filled={isActive('/favorites')} />
          <span className="text-[10px] font-medium">保存</span>
        </button>
      </div>
      <div className="h-4 w-full"></div>
    </div>
  );
};
