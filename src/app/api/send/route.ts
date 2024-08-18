// pages/api/send.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/global/mail';
import { contactSchemaType } from '@/schema/contac-schema';



// Inicializa el cliente de Resend con la clave de API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastname, email, phone, service, message }: contactSchemaType = await req.json();

    const { data, error } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ['jeuzmaldo2020@gmail.com'],
    subject: `Require ${service} service --- Client: ${firstName} ${lastname}`,
      react: EmailTemplate({
        firstName: firstName,
        lastname: lastname,
        email: email,
        phone: phone,
        service: service,
        message: message
      })
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export const runtime = "edge";