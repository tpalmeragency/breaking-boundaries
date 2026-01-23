import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic validation
    if (!body.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log('Received contact form submission:', body);

    if (!process.env.HUBSPOT_ACCESS_TOKEN) {
      throw new Error('Missing HUBSPOT_ACCESS_TOKEN');
    }

    const hubspotRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        properties: {
          email: body.email,
          firstname: body.firstName,
          lastname: body.lastName,
          company: body.company,
          phone: body.phone,
          message: body.message, // custom field if exists
        },
      }),
    });

    const data = await hubspotRes.json();

    if (!hubspotRes.ok) {
      console.error('HubSpot error:', data);
      return NextResponse.json({ error: 'HubSpot failed', details: data }, { status: 500 });
    }

    return NextResponse.json({ success: true, hubspot: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
