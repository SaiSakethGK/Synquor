import { NextResponse } from 'next/server';

// Sample grant data
const grants = [
  {
    id: 1,
    title: 'National Science Foundation - AI Research Grants',
    description: 'Funding for innovative research in artificial intelligence and machine learning applications for social good.',
    amount: '$50,000 - $200,000',
    deadline: 'March 15, 2024',
    type: 'Research',
    eligibility: 'Non-profits, Educational Institutions',
    status: 'Open',
    matchScore: 92,
  },
  {
    id: 2,
    title: 'Gates Foundation - Global Health Innovation',
    description: 'Supporting innovative approaches to solving global health challenges through technology and community-based solutions.',
    amount: '$100,000 - $500,000',
    deadline: 'Rolling',
    type: 'Program, Research',
    eligibility: 'Non-profits, Research Institutions',
    status: 'Open',
    matchScore: 87,
  },
  {
    id: 3,
    title: 'Community Foundation - Local Impact Grants',
    description: 'Supporting local organizations making a difference in their communities through innovative programs and services.',
    amount: '$5,000 - $25,000',
    deadline: 'February 28, 2024',
    type: 'Program, Capacity Building',
    eligibility: 'Local Non-profits',
    status: 'Closing Soon',
    matchScore: 78,
  },
  {
    id: 4,
    title: 'Department of Education - Educational Technology Grants',
    description: 'Funding for innovative educational technology solutions that improve learning outcomes in K-12 settings.',
    amount: '$25,000 - $100,000',
    deadline: 'April 30, 2024',
    type: 'Program, Equipment',
    eligibility: 'Educational Institutions, Non-profits',
    status: 'Open',
    matchScore: 85,
  },
  {
    id: 5,
    title: 'Environmental Protection Agency - Climate Innovation',
    description: 'Supporting research and programs focused on climate change mitigation and adaptation strategies.',
    amount: '$50,000 - $150,000',
    deadline: 'May 15, 2024',
    type: 'Research, Program',
    eligibility: 'Non-profits, Research Institutions',
    status: 'Open',
    matchScore: 76,
  },
];

export async function GET(request: Request) {
  // Simulate API processing time
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Get search parameters
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';
  const type = searchParams.get('type') || '';
  const amount = searchParams.get('amount') || '';
  const deadline = searchParams.get('deadline') || '';
  
  // Filter grants based on search parameters
  let filteredGrants = [...grants];
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredGrants = filteredGrants.filter(
      grant => 
        grant.title.toLowerCase().includes(lowerQuery) || 
        grant.description.toLowerCase().includes(lowerQuery) ||
        grant.eligibility.toLowerCase().includes(lowerQuery)
    );
  }
  
  if (type) {
    filteredGrants = filteredGrants.filter(
      grant => grant.type.toLowerCase().includes(type.toLowerCase())
    );
  }
  
  if (amount) {
    // Simple filtering based on amount ranges
    if (amount === 'under10k') {
      filteredGrants = filteredGrants.filter(grant => grant.amount.includes('$5,000'));
    } else if (amount === '10k-50k') {
      filteredGrants = filteredGrants.filter(grant => grant.amount.includes('$25,000'));
    } else if (amount === '50k-100k') {
      filteredGrants = filteredGrants.filter(grant => grant.amount.includes('$50,000'));
    } else if (amount === 'over100k') {
      filteredGrants = filteredGrants.filter(grant => grant.amount.includes('$100,000'));
    }
  }
  
  if (deadline) {
    // Simple filtering based on deadline
    if (deadline === 'within30days') {
      filteredGrants = filteredGrants.filter(grant => grant.status === 'Closing Soon');
    } else if (deadline === 'rolling') {
      filteredGrants = filteredGrants.filter(grant => grant.deadline === 'Rolling');
    }
  }
  
  // Simulate AI-powered matching by sorting by match score
  filteredGrants.sort((a, b) => b.matchScore - a.matchScore);
  
  return NextResponse.json({ 
    grants: filteredGrants,
    total: filteredGrants.length,
    message: 'AI-powered grant matching complete'
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { organizationProfile } = body;
    
    // Simulate DeepSeek API integration for personalized grant matching
    // In a real implementation, this would call the DeepSeek API with the organization profile
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return personalized grant recommendations
    const personalizedGrants = grants
      .map(grant => ({
        ...grant,
        // Simulate personalized match scores based on organization profile
        matchScore: Math.floor(Math.random() * 20) + 80 // Random score between 80-99
      }))
      .sort((a, b) => b.matchScore - a.matchScore);
    
    return NextResponse.json({
      grants: personalizedGrants,
      total: personalizedGrants.length,
      message: 'Personalized AI grant matching complete'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 400 }
    );
  }
} 