import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json({ error: 'Failed to fetch case studies' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const slug = body.title ? body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '';
    
    if (body.id) {
      const { data, error } = await supabase
        .from('case_studies')
        .update(body)
        .eq('id', body.id)
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    } else {
      const { data, error } = await supabase
        .from('case_studies')
        .insert([{ 
          ...body, 
          id: crypto.randomUUID(), 
          slug,
          metrics: body.metrics || []
        }])
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    }
  } catch (error) {
    console.error('Error saving case study:', error);
    return NextResponse.json({ error: 'Failed to save case study' }, { status: 500 });
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
      .from('case_studies')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    const { data } = await supabase.from('case_studies').select('*');
    return NextResponse.json({ success: true, caseStudies: data });
  } catch (error) {
    console.error('Error deleting case study:', error);
    return NextResponse.json({ error: 'Failed to delete case study' }, { status: 500 });
  }
}
