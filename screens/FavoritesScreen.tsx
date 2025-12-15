import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SHOPS } from '../constants';
import { Icon } from '../components/Icon';
import { BottomNav } from '../components/BottomNav';

export const FavoritesScreen: React.FC = () => {
  const navigate = useNavigate();
  // Filter shops that are marked as favorite in constants
  const favShops = SHOPS.filter(s => s.isFavorite);

  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
        <div className="flex items-center justify-between p-4 h-16">
           <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10">
             <Icon name="arrow_back" className="text-slate-900 dark:text-white" />
           </button>
           <h2 className="text-lg font-bold flex-1 text-center pr-10 text-slate-900 dark:text-white">お気に入り</h2>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {favShops.map((shop) => (
           <div key={shop.id} className="group flex flex-row items-center gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-3 shadow-sm border border-slate-100 dark:border-white/5 active:scale-[0.99] transition-all">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                 <img src={shop.images[0]} alt={shop.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-1 min-w-0">
                 <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${shop.status === 'OPEN' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'}`}>
                       {shop.status === 'OPEN' ? '営業中' : '本日休業'}
                    </span>
                    <span className="text-xs text-slate-500 truncate">
                        {shop.category === 'EXPERIENCE' ? '体験・お土産' : shop.category === 'CAFE' ? 'カフェ・軽食' : '史跡・観光'}
                    </span>
                 </div>
                 <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">{shop.name}</h3>
                 <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{shop.description}</p>
              </div>
              <button className="flex size-10 shrink-0 items-center justify-center rounded-full text-primary hover:bg-primary/5">
                 <Icon name="favorite" filled />
              </button>
           </div>
        ))}
        
        {favShops.length === 0 && (
           <div className="flex flex-col items-center gap-6 py-12">
             <div className="bg-primary/5 rounded-full p-6 text-primary/40">
                <Icon name="favorite" size={64} />
             </div>
             <p className="text-slate-900 font-bold">まだお気に入りがありません</p>
           </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};
