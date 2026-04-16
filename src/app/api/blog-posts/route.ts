import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const slug = body.title ? body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '';
    
    if (body.id) {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(body)
        .eq('id', body.id)
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    } else {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([{ 
          ...body, 
          id: crypto.randomUUID(), 
          slug,
          date: new Date().toISOString().split('T')[0],
          read_time: body.readTime || body.read_time || '5 min read'
        }])
        .select();
      
      if (error) throw error;
      return NextResponse.json({ success: true, data });
    }
  } catch (error) {
    console.error('Error saving blog post:', error);
    return NextResponse.json({ error: 'Failed to save blog post' }, { status: 500 });
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
      .from('blog_posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    const { data } = await supabase.from('blog_posts').select('*');
    return NextResponse.json({ success: true, blogPosts: data });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
