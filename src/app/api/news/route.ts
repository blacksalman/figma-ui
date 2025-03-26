import { NextResponse } from 'next/server';
import { API_CONFIG } from '@/config/api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || API_CONFIG.DEFAULT_CATEGORY;

  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/top-headlines?country=${API_CONFIG.COUNTRY}&category=${category}&pageSize=${API_CONFIG.PAGE_SIZE}&apiKey=${API_CONFIG.API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('News API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch news' },
      { status: 500 }
    );
  }
} 