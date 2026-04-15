import { NextResponse } from 'next/server';
import { getPartners, setPartners, Partner } from '@/lib/dataStore';

export async function GET() {
  const partners = getPartners();
  return NextResponse.json(partners);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const partners = getPartners();
    
    if (body.id) {
      const index = partners.findIndex((p: Partner) => p.id === body.id);
      if (index !== -1) {
        partners[index] = body;
      }
    } else {
      partners.push({ ...body, id: Date.now().toString() });
    }
    
    setPartners(partners);
    return NextResponse.json({ success: true, partners });
  } catch (error) {
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
    
    const partners = getPartners().filter((p: Partner) => p.id !== id);
    setPartners(partners);
    return NextResponse.json({ success: true, partners });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete partner' }, { status: 500 });
  }
}
