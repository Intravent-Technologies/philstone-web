import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (body.id) {
      const { data, error } = await supabase
        .from('reviews')
        .update(body)
        .eq('id', body.id)
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    } else {
      const { data, error } = await supabase
        .from('reviews')
        .insert([{ ...body, id: crypto.randomUUID(), date: new Date().toISOString().split('T')[0] }])
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    }
  } catch (error) {
    console.error('Error saving review:', error);
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
    
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    const { data } = await supabase.from('reviews').select('*');
    return NextResponse.json({ success: true, reviews: data });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}
