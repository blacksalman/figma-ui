'use client';

import { useState } from 'react';
import { NewsCard } from '@/components/NewsCard';
import { CategorySelector } from '@/components/CategorySelector';
import { useNews } from '@/hooks/useNews';
import { API_CONFIG } from '@/config/api';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(API_CONFIG.DEFAULT_CATEGORY);
  const { articles, loading, error } = useNews(selectedCategory);

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Latest News</h1>
        
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
