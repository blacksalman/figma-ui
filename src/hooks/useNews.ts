import { useState, useEffect } from 'react';
import { NewsState } from '@/types/news';
import { API_CONFIG } from '@/config/api';

export const useNews = (category: string = API_CONFIG.DEFAULT_CATEGORY) => {
  const [state, setState] = useState<NewsState>({
    articles: [],
    loading: true,
    error: null,
    selectedCategory: category
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const response = await fetch(`/api/news?category=${category}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        setState({
          articles: data.articles,
          loading: false,
          error: null,
          selectedCategory: category
        });
      } catch (error) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'An error occurred'
        }));
      }
    };

    fetchNews();
  }, [category]);

  return state;
}; 