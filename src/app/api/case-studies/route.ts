import { NextResponse } from 'next/server';
import { getCaseStudies, setCaseStudies, CaseStudy } from '@/lib/dataStore';

export async function GET() {
  const caseStudies = getCaseStudies();
  return NextResponse.json(caseStudies);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const caseStudies = getCaseStudies();
    
    const slug = body.title ? body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '';
    
    if (body.id) {
      const index = caseStudies.findIndex((s: CaseStudy) => s.id === body.id);
      if (index !== -1) {
        caseStudies[index] = { ...body, slug: caseStudies[index].slug };
      }
    } else {
      caseStudies.unshift({
        ...body,
        id: Date.now().toString(),
        slug,
      });
    }
    
    setCaseStudies(caseStudies);
    return NextResponse.json({ success: true, caseStudies });
  } catch (error) {
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
    
    const caseStudies = getCaseStudies().filter((s: CaseStudy) => s.id !== id);
    setCaseStudies(caseStudies);
    return NextResponse.json({ success: true, caseStudies });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete case study' }, { status: 500 });
  }
}
