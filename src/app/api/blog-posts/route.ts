import { NextResponse } from 'next/server';
import { getBlogPosts, setBlogPosts, BlogPost } from '@/lib/dataStore';

export async function GET() {
  const blogPosts = getBlogPosts();
  return NextResponse.json(blogPosts);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const blogPosts = getBlogPosts();
    
    const slug = body.title ? body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '';
    
    if (body.id) {
      const index = blogPosts.findIndex((p: BlogPost) => p.id === body.id);
      if (index !== -1) {
        blogPosts[index] = { ...body, slug: blogPosts[index].slug };
      }
    } else {
      blogPosts.unshift({
        ...body,
        id: Date.now().toString(),
        slug,
        date: new Date().toISOString().split('T')[0],
      });
    }
    
    setBlogPosts(blogPosts);
    return NextResponse.json({ success: true, blogPosts });
  } catch (error) {
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
    
    const blogPosts = getBlogPosts().filter((p: BlogPost) => p.id !== id);
    setBlogPosts(blogPosts);
    return NextResponse.json({ success: true, blogPosts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
