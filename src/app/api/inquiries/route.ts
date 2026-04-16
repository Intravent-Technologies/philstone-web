import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (body.id) {
      const { data, error } = await supabase
        .from('inquiries')
        .update(body)
        .eq('id', body.id)
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    } else {
      const { data, error } = await supabase
        .from('inquiries')
        .insert([{ 
          ...body, 
          id: crypto.randomUUID(), 
          date: new Date().toISOString().split('T')[0],
          status: 'new',
          replies: body.replies || []
        }])
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    }
  } catch (error) {
    console.error('Error saving inquiry:', error);
    return NextResponse.json({ error: 'Failed to save inquiry' }, { status: 500 });
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
      .from('inquiries')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    const { data } = await supabase.from('inquiries').select('*');
    return NextResponse.json({ success: true, inquiries: data });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return NextResponse.json({ error: 'Failed to delete inquiry' }, { status: 500 });
  }
}
