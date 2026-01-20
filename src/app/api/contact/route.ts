import { NextRequest, NextResponse } from 'next/server';

// To enable email sending:
// 1. npm install resend
// 2. Add RESEND_API_KEY to .env.local
// 3. Uncomment the resend code below
//
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

// To enable database storage:
// 1. Set up Prisma with your database
// 2. Add ContactSubmission model to schema.prisma:
//    model ContactSubmission {
//      id        String   @id @default(cuid())
//      name      String
//      email     String
//      message   String
//      createdAt DateTime @default(now())
//    }
// 3. Uncomment the prisma code below
//
// import { prisma } from '@/lib/prisma';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactForm(data: unknown): { isValid: boolean; errors: Record<string, string>; parsed?: ContactFormData } {
  const errors: Record<string, string> = {};

  if (!data || typeof data !== 'object') {
    return { isValid: false, errors: { form: 'Invalid request body' } };
  }

  const formData = data as Record<string, unknown>;

  if (!formData.name || typeof formData.name !== 'string' || formData.name.trim() === '') {
    errors.name = 'Name is required';
  }

  if (!formData.email || typeof formData.email !== 'string' || formData.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(formData.email)) {
    errors.email = 'Invalid email format';
  }

  if (!formData.message || typeof formData.message !== 'string' || formData.message.trim() === '') {
    errors.message = 'Message is required';
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: {},
    parsed: {
      name: (formData.name as string).trim(),
      email: (formData.email as string).trim(),
      message: (formData.message as string).trim(),
    },
  };
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();

    const validation = validateContactForm(body);

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.parsed!;

    // Log submission for development
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Database storage (uncomment when Prisma is set up):
    // await prisma.contactSubmission.create({
    //   data: {
    //     name,
    //     email,
    //     message,
    //   },
    // });

    // Email notification (uncomment when Resend is set up):
    // await resend.emails.send({
    //   from: 'Contact Form <noreply@yourdomain.com>',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New contact form submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid JSON in request body',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
