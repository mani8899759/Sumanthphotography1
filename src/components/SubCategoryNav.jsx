import React from 'react';
import { NavLink } from 'react-router-dom';

export const SubCategoryNav = ({ subcategories = [] }) => {
  if (!subcategories || subcategories.length === 0) return null;

  return (
    <div className="w-full bg-white text-black py-4 px-6 border-b border-neutral-100 sticky top-[52px] md:top-[72px] z-40 backdrop-blur-md bg-white/90">
      {/* subcategory-nav-wrapper enables horizontal scroll on mobile (CSS in index.css) */}
      <div className="subcategory-nav-wrapper max-w-6xl mx-auto">
        <div className="flex items-center justify-center md:justify-center gap-4 sm:gap-8 flex-wrap md:flex-wrap">
          {subcategories.map((sub) => (
            <NavLink
              key={sub.id}
              to={sub.path}
              className={({ isActive }) =>
                `text-[10px] sm:text-xs font-semibold uppercase tracking-wider py-1 transition-all duration-300 relative whitespace-nowrap ${isActive
                  ? "text-black opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-black"
                  : "text-neutral-500 opacity-70 hover:opacity-100 hover:text-black"
                }`
              }
            >
              {sub.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
