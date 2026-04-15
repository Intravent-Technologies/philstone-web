import { NextResponse } from 'next/server';
import { getInquiries, setInquiries, Inquiry } from '@/lib/dataStore';

export async function GET() {
  const inquiries = getInquiries();
  return NextResponse.json(inquiries);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const inquiries = getInquiries();
    
    if (body.id) {
      const index = inquiries.findIndex((i: Inquiry) => i.id === body.id);
      if (index !== -1) {
        inquiries[index] = body;
      }
    } else {
      inquiries.unshift({
        ...body,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        status: 'new',
        replies: [],
      });
    }
    
    setInquiries(inquiries);
    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
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
    
    const inquiries = getInquiries().filter((i: Inquiry) => i.id !== id);
    setInquiries(inquiries);
    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete inquiry' }, { status: 500 });
  }
}
