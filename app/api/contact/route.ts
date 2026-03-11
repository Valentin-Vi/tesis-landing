import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const { email, description } = await request.json();

    if (!email || !description) {
      return Response.json(
        { error: 'Email and description are required' },
        { status: 400 }
      );
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.error('DATABASE_URL environment variable is not set');
      return Response.json(
        { error: 'Database connection is not configured. Please contact the administrator.' },
        { status: 503 }
      );
    }

    const sql = neon(databaseUrl);

    await sql`
      INSERT INTO contacts (email, description)
      VALUES (${email}, ${description})
    `;

    return Response.json({ success: true, message: 'Contact submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    );
  }
}
