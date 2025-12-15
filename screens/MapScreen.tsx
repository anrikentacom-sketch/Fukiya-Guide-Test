import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SHOPS } from '../constants';
import { Icon } from '../components/Icon';
import { BottomNav } from '../components/BottomNav';

export const MapScreen: React.FC = () => {
  const navigate = useNavigate();
  // We'll focus on shop #5 ("Bengara Pottery") for the map preview as per screenshot
  const activeShop = SHOPS.find(s => s.id === '5') || SHOPS[0];

  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden bg-slate-200">
        
        {/* Layer 1: Background Map */}
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center opacity-80 dark:opacity-60"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYQ10VN9WUYR_0H4VrLsb3phBI5W6PMXbri0whjQo3c22KS14eVx97GYTi4pET8VNegu0yxKKoTOQPOaKQrpLJH7ucSVN1_vDYa3emda_Ov651a-xRCzPU77H9z2NhdgjiPVpcxmakxk_dCOA_3MElSyTYyMWkgLjpOpR6xIOYX8aTz8GjXB5uq8nbsgQvzwXgpr7C3voMD0HNpWcI6E8p6kix7U1r-qeYUIFRnspRSbhg2ZpbPHVgh2pRcLDgxz3UhyZRJ9eI0H7U")', filter: 'contrast(0.9) brightness(1.1)' }}
        >
          {/* Pins */}
          {/* Active Pin */}
          <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer z-10 group">
             <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg text-white transition-transform hover:scale-110">
                <span className="absolute inset-0 rounded-full bg-primary opacity-50 animate-ping"></span>
                <Icon name="storefront" size={28} className="relative z-10" />
             </div>
             <div className="mt-1 px-2 py-1 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-sm rounded text-xs font-bold shadow-sm whitespace-nowrap text-primary">
                {activeShop.name}
             </div>
          </div>

          {/* Inactive Pins */}
          <div className="absolute top-[30%] left-[30%] flex flex-col items-center cursor-pointer z-0 opacity-90">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-md text-primary hover:bg-primary hover:text-white transition-colors">
               <Icon name="restaurant" size={20} />
            </div>
          </div>
           <div className="absolute top-[60%] left-[75%] flex flex-col items-center cursor-pointer z-0 opacity-90">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-md text-primary hover:bg-primary hover:text-white transition-colors">
               <Icon name="shopping_bag" size={20} />
            </div>
          </div>
        </div>

        {/* Layer 2: Top UI */}
        <div className="absolute top-0 left-0 w-full z-20 flex flex-col gap-3 px-4 pt-4 pb-4 bg-gradient-to-b from-white/80 to-transparent dark:from-black/60 pointer-events-none">
           {/* Search */}
           <div className="pointer-events-auto shadow-float rounded-lg w-full bg-surface-light dark:bg-surface-dark h-12 flex items-center px-4">
              <Icon name="search" className="text-text-sub" size={24} />
              <input 
                className="flex-1 bg-transparent border-none focus:ring-0 text-base ml-2 placeholder:text-text-sub text-slate-900 dark:text-white"
                placeholder="お店を検索"
              />
           </div>
           
           {/* Chips */}
           <div className="flex gap-2 overflow-x-auto hide-scrollbar pointer-events-auto pb-1">
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white pl-3 pr-4 shadow-sm active:scale-95">
                 <Icon name="star" size={18} />
                 <span className="text-sm font-bold">すべて</span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark text-slate-800 dark:text-white pl-3 pr-4 shadow-sm active:scale-95">
                 <Icon name="restaurant" className="text-primary" size={18} />
                 <span className="text-sm font-medium">食事</span>
              </button>
              <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark text-slate-800 dark:text-white pl-3 pr-4 shadow-sm active:scale-95">
                 <Icon name="shopping_bag" className="text-primary" size={18} />
                 <span className="text-sm font-medium">お土産</span>
              </button>
           </div>
        </div>

        {/* Layer 3: Side Controls */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20 pointer-events-auto">
           <div className="flex flex-col gap-0.5 rounded-lg bg-surface-light dark:bg-surface-dark shadow-float overflow-hidden">
              <button className="flex size-10 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Icon name="add" size={24} />
              </button>
              <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-700"></div>
              <button className="flex size-10 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                <Icon name="remove" size={24} />
              </button>
           </div>
        </div>
        <div className="absolute right-4 bottom-[280px] z-20 pointer-events-auto">
            <button className="flex size-12 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark shadow-float text-primary">
               <Icon name="my_location" size={24} />
            </button>
        </div>

        {/* Layer 4: Bottom Sheet */}
        <div className="absolute bottom-[72px] left-0 w-full z-20 p-4 pointer-events-auto">
           <div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-float overflow-hidden animate-slide-up">
              <div className="relative w-full h-32 bg-gray-200">
                 <div 
                   className="absolute inset-0 bg-cover bg-center"
                   style={{ backgroundImage: `url("${activeShop.images[0]}")` }}
                 />
                 <button className="absolute top-2 right-2 bg-black/40 text-white rounded-full p-1 backdrop-blur-sm">
                    <Icon name="close" size={20} />
                 </button>
              </div>
              <div className="flex flex-col gap-3 p-4">
                 <div>
                    <div className="flex items-center gap-2">
                       <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded">体験</span>
                       <h3 className="text-lg font-bold text-slate-900 dark:text-white">{activeShop.name}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                       <span className="text-green-600 font-medium">営業中</span>
                       <span>•</span>
                       <span>10:00 - 17:00</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                       <Icon name="star" className="text-primary" size={16} filled />
                       <span className="text-sm font-bold">{activeShop.rating?.rating}</span>
                       <span className="text-xs text-slate-500">({activeShop.rating?.count}件の評価)</span>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <button onClick={() => navigate(`/detail/${activeShop.id}`)} className="flex-1 flex items-center justify-center h-10 rounded-lg bg-primary text-white text-sm font-bold gap-2">
                       <Icon name="navigation" size={20} />
                       ルート案内
                    </button>
                    <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-900 dark:text-white">
                       <Icon name="share" size={20} />
                    </button>
                 </div>
              </div>
           </div>
        </div>

        <BottomNav />
    </div>
  );
};
