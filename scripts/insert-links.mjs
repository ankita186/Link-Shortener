import { Client } from '@neondatabase/serverless';

const url = 'postgresql://neondb_owner:npg_49KqQbivyaJp@ep-odd-river-aoeyjzze-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require';
const client = new Client({ connectionString: url });
await client.connect();

const rows = [
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://example.com/welcome', '8fK2pQ'],
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://nextjs.org/docs', 'jR4nVz'],
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://github.com/vercel/next.js', 'Lx7mTq'],
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://capgemini.com/insights', '2yB8uF'],
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://openai.com/blog', 'qW9sNz'],
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://developer.mozilla.org', 'Mp3dVk'],
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://drizzle.team', 'hC5xRt'],
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Vz1kJp'],
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://twitter.com/AgenticAI', '9nX7wB'],
  ['user_3DzKYlWyClNENLLM82G3nxZYvn7', 'https://linkedin.com/in/user_3DzKYlWyClNENLLM82G3nxZYvn7', 'bT6uLs']
];

const query = `INSERT INTO links (user_id, url, short_code) VALUES ${rows
  .map((_, index) => `($${index * 3 + 1}, $${index * 3 + 2}, $${index * 3 + 3})`)
  .join(', ')}`;

try {
  const result = await client.query(query, rows.flat());
  console.log('Inserted rows:', result.rowCount ?? result.rows?.length ?? 'unknown');
} catch (error) {
  console.error('Insert failed:', error);
  process.exitCode = 1;
} finally {
  await client.end();
}
