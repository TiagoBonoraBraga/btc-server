import { Client } from '@prisma/client';
import { Pool } from 'pg';
import { env } from 'process';

const pool = new Pool({
    connectionString: env.DATABASE_URL,  
});

export async function checkEmailExists(email: string): Promise<Client> {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };

  const { rows } = await pool.query(query);

  return rows;
}
