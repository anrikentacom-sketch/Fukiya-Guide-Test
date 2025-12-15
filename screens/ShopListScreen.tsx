import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SHOPS } from '../constants';
import { BottomNav } from '../components/BottomNav';
import { Icon } from '../components/Icon';
import { Category } from '../types';

export const ShopListScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');

  const categories: { id: Category; label: string; icon?: string }[] = [
    { id: 'ALL', label: 'すべて' },
    { id: 'CAFE', label: 'カフェ', icon: 'local_cafe' },
    { id: 'SOUVENIR', label: 'お土産', icon: 'shopping_bag' },
    { id: 'EXPERIENCE', label: '体験', icon: 'palette' },
    { id: 'STAY', label: '宿泊', icon: 'hotel' },
  ];

  const filteredShops = activeCategory === 'ALL' 
    ? SHOPS.filter(s => s.id !== '5' && s.id !== '6' && s.id !== '7') // Filter out map/fav specific mocks for main list cleanliness
    : SHOPS.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark pb-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-slate-200/50 dark:border-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors">
            <Icon name="arrow_back" className="text-slate-900 dark:text-white" />
          </button>
          <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">ショップ一覧</h1>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors text-primary">
            <Icon name="map" filled />
          </button>
        </div>
        
        {/* Search */}
        <div className="px-4 pb-3">
          <div className="relative flex w-full items-center">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Icon name="search" className="text-slate-400" />
            </div>
            <input 
              className="block w-full rounded-full border-none bg-surface-light dark:bg-surface-dark py-3 pl-11 pr-4 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm focus:ring-2 focus:ring-primary focus:ring-opacity-50" 
              placeholder="お店を検索..." 
              type="text" 
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto px-4 pb-4 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full px-4 shadow-sm transition-all active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-primary/50'
              }`}
            >
              {cat.icon && (
                <Icon name={cat.icon} size={18} className={activeCategory === cat.id ? 'text-white' : 'text-slate-500 dark:text-slate-400'} />
              )}
              <span className="text-sm font-bold">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4 p-4">
        {filteredShops.map((shop) => (
          <div 
            key={shop.id}
            onClick={() => navigate(`/detail/${shop.id}`)}
            className={`group relative flex ${shop.category === 'EXPERIENCE' || shop.category === 'STAY' ? 'flex-row items-stretch p-3 gap-4' : 'flex-col gap-0'} rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden transition-shadow hover:shadow-md border border-slate-100 dark:border-white/5 cursor-pointer`}
          >
            {/* Image Section */}
            <div className={`relative shrink-0 overflow-hidden ${shop.category === 'EXPERIENCE' || shop.category === 'STAY' ? 'w-32 rounded-lg' : 'h-48 w-full'}`}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url("${shop.images[0]}")` }}
              />
              {!(shop.category === 'EXPERIENCE' || shop.category === 'STAY') && (
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="inline-flex items-center rounded-md bg-white/90 dark:bg-black/80 px-2 py-1 text-xs font-bold text-primary backdrop-blur-sm">
                    <span className="mr-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    営業中
                  </span>
                  <span className="inline-flex items-center rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {categories.find(c => c.id === shop.category)?.label}
                  </span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className={`${shop.category === 'EXPERIENCE' || shop.category === 'STAY' ? 'flex flex-1 flex-col justify-between py-1' : 'flex flex-col gap-3 p-4'}`}>
              
              {/* Header */}
              {!(shop.category === 'EXPERIENCE' || shop.category === 'STAY') && (
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">{shop.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <Icon name="location_on" size={14} />
                      <span>現在地から {shop.location.distance}</span>
                    </div>
                  </div>
                  <button className="rounded-full bg-slate-100 p-2 text-slate-400 hover:text-primary hover:bg-red-50 dark:bg-white/5 dark:hover:bg-white/10 transition-colors">
                    <Icon name="favorite" size={20} />
                  </button>
                </div>
              )}

              {/* Header for Horizontal Cards */}
              {(shop.category === 'EXPERIENCE' || shop.category === 'STAY') && (
                 <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">{categories.find(c => c.id === shop.category)?.label}</span>
                      <span className="text-[10px] text-slate-400">• {shop.location.distance}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{shop.name}</h3>
                 </div>
              )}

              {/* Description */}
              <p className={`text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2 ${shop.category === 'EXPERIENCE' || shop.category === 'STAY' ? 'mt-1 text-xs' : ''}`}>
                {shop.description}
              </p>

              {/* Footer */}
              {!(shop.category === 'EXPERIENCE' || shop.category === 'STAY') ? (
                <div className="mt-1 flex items-center justify-end">
                  <button className="flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-red-700">
                    詳細を見る
                    <Icon name="arrow_forward" size={18} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between mt-2">
                  <span className="rounded bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-300">
                    {shop.category === 'STAY' ? '空室あり' : '要予約'}
                  </span>
                  <button className="text-xs font-bold text-primary">詳細</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};
