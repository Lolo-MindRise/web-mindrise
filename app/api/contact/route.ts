import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  source?: string;
  message?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  if (!body.name?.trim() || !body.email?.includes('@') || !body.message?.trim() || !body.consent) {
    return NextResponse.json({ error: 'invalid_fields' }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.warn('[contact] CONTACT_WEBHOOK_URL is not set; payload not forwarded.');
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...body,
        source_origin: 'mindrise-labs.com',
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) {
      console.error('[contact] webhook responded with', res.status);
      return NextResponse.json({ error: 'webhook_failed' }, { status: 502 });
    }
    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error('[contact] webhook fetch error', err);
    return NextResponse.json({ error: 'webhook_unreachable' }, { status: 502 });
  }
}
