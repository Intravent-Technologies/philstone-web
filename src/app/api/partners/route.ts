import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('partners')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching partners:', error);
    return NextResponse.json({ error: 'Failed to fetch partners' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (body.id) {
      const { data, error } = await supabase
        .from('partners')
        .update(body)
        .eq('id', body.id)
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    } else {
      const { data, error } = await supabase
        .from('partners')
        .insert([{ ...body, id: crypto.randomUUID() }])
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    }
  } catch (error) {
    console.error('Error saving partner:', error);
    return NextResponse.json({ error: 'Failed to save partner' }, { status: 500 });
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
      .from('partners')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    const { data } = await supabase.from('partners').select('*');
    return NextResponse.json({ success: true, partners: data });
  } catch (error) {
    console.error('Error deleting partner:', error);
    return NextResponse.json({ error: 'Failed to delete partner' }, { status: 500 });
  }
}
