import { NextResponse } from 'next/server';
import { getReviews, setReviews, Review } from '@/lib/dataStore';

export async function GET() {
  const reviews = getReviews();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const reviews = getReviews();
    
    if (body.id) {
      const index = reviews.findIndex((r: Review) => r.id === body.id);
      if (index !== -1) {
        reviews[index] = body;
      }
    } else {
      reviews.push({ ...body, id: Date.now().toString(), date: new Date().toISOString().split('T')[0] });
    }
    
    setReviews(reviews);
    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save review' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }
    
    const reviews = getReviews().filter((r: Review) => r.id !== id);
    setReviews(reviews);
    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}
