import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SHOPS } from '../constants';
import { Icon } from '../components/Icon';

export const ShopDetailScreen: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const shop = SHOPS.find(s => s.id === id) || SHOPS[0]; // Fallback to first shop

  // Use English name if available as per screenshot
  const displayName = shop.nameEn || shop.name;
  const displayDesc = shop.descriptionEn || shop.description;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark">
      
      {/* Hero Section */}
      <div className="relative h-80 w-full shrink-0">
        <div 
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url("${shop.images[1] || shop.images[0]}")` }}
        >
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20"></div>
        </div>
        
        {/* Top Nav Overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 pt-4 text-white">
          <button 
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/30 active:scale-95"
          >
            <Icon name="arrow_back" size={24} />
          </button>
          <div className="flex gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/30 active:scale-95">
              <Icon name="share" size={24} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white backdrop-blur-md transition hover:bg-white/90 active:scale-95 text-primary">
              <Icon name="favorite" filled size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sheet */}
      <div className="relative -mt-8 flex flex-1 flex-col rounded-t-3xl bg-background-light dark:bg-background-dark px-6 pt-8 shadow-lg">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">{displayName}</h1>
          <div className="mt-2 flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-1 text-sm font-medium text-slate-500 dark:text-slate-400">
               <Icon name="star" className="text-primary" size={18} filled />
               <span className="text-slate-900 dark:text-white font-bold">{shop.rating?.rating || 4.5}</span>
               <span>({shop.rating?.count || 88} Reviews)</span>
            </div>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{shop.priceRange || '$$'}</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">1.2 km away</span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {shop.tags.map((tag, idx) => (
              <span 
                key={tag} 
                className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-bold ${
                  tag.includes('Bengara') 
                    ? 'bg-red-100 text-[#b94a48] dark:bg-[#3d1818] dark:text-red-300'
                    : idx === 0 ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 grid grid-cols-4 gap-4">
          {['call', 'language', 'map', 'more_horiz'].map((icon, idx) => (
             <button key={icon} className="flex flex-col items-center gap-2 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 transition group-active:scale-95 dark:bg-slate-800 dark:ring-slate-700">
                <Icon name={icon} className="text-primary" size={24} />
              </div>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {['Call', 'Website', 'Map', 'More'][idx]}
              </span>
            </button>
          ))}
        </div>

        {/* About */}
        <div className="mb-8">
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">About</h2>
          <p className="font-body text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {displayDesc}
          </p>
          <button className="mt-2 text-sm font-bold text-primary underline-offset-4 hover:underline">Read more</button>
        </div>

        {/* Info List */}
        <div className="mb-8 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-800/50">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name="schedule" size={20} />
            </div>
            <div className="flex-1 pt-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Open Now</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{shop.hours || '10:00 - 17:00'}</p>
              {shop.closedDays && <p className="mt-1 text-xs text-red-500 font-medium">Closed: {shop.closedDays}</p>}
            </div>
            <Icon name="chevron_right" className="mt-2 text-slate-400" size={20} />
          </div>
          <div className="h-px w-full bg-slate-100 dark:bg-slate-700"></div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name="location_on" size={20} />
            </div>
            <div className="flex-1 pt-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white">{shop.location.address}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{shop.location.city}</p>
            </div>
            <Icon name="chevron_right" className="mt-2 text-slate-400" size={20} />
          </div>
          <div className="h-px w-full bg-slate-100 dark:bg-slate-700"></div>
          <div className="flex items-start gap-4">
             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name="phone" size={20} />
            </div>
            <div className="flex-1 pt-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white">{shop.phone}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Contact for reservations</p>
            </div>
          </div>
        </div>

        {/* Popular Items */}
        {shop.items && (
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Popular Items</h2>
              <button className="text-sm font-bold text-primary">View All</button>
            </div>
            <div className="-mx-6 overflow-x-auto px-6 hide-scrollbar pb-4">
              <div className="flex gap-4">
                {shop.items.map(item => (
                  <div key={item.id} className="w-40 shrink-0 flex-col gap-2">
                    <div 
                      className="aspect-square w-full rounded-2xl bg-cover bg-center shadow-md"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    />
                    <div className="mt-2">
                      <h3 className="truncate text-sm font-bold text-slate-900 dark:text-white">{item.name}</h3>
                      <p className="text-xs font-medium text-primary">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Map Preview */}
        <div className="mb-24">
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">Location</h2>
          <div className="relative overflow-hidden rounded-2xl shadow-sm">
             <div 
               className="aspect-[16/9] w-full bg-slate-200 bg-cover bg-center" 
               style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZWW-OcfNlV1qjtTHJsDCVHr4N6fQDW_JDNGpvtg4VKbk3XG5AH69ffifF8FS2CvXyK0u60-K_Q-VZQJTl_46dREAxQkG-2USJ3U4BIeuel8uqvYTWhCV4lQ2Rj2eAcOlDyROBdJLJINFvI_yjBt2HpV_0PgaZjbh1lwkGparRhVwFsiMoVlRye-X0bo5pC14UGpFrYpJETLsx-SQM1Z7QW_if8EoldO2qkYfCTvSgvAevd3N7KEZn-k60KERaHEd131gfvQkBgyuR")' }}
             />
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <Icon name="location_on" className="text-4xl text-primary drop-shadow-md" size={48} filled />
             </div>
             <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-sm dark:bg-slate-800/90 dark:text-white">
                Tap to explore
             </div>
          </div>
        </div>

      </div>

       {/* Sticky Bottom Bar */}
       <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/90 p-4 backdrop-blur-lg dark:border-slate-700 dark:bg-slate-900/90">
         <div className="mx-auto flex w-full max-w-md gap-3">
           <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-100 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-200 active:scale-95 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
             <Icon name="chat" size={20} />
             Message
           </button>
           <button className="flex flex-[2] items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-red-600 active:scale-95">
             <Icon name="near_me" size={20} />
             Navigate to Shop
           </button>
         </div>
       </div>

    </div>
  );
};
