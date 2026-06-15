export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, user_id } = req.body;

  return res.status(200).json({
    success: true,
    reply: `Отримано повідомлення: ${message}`,
    user_id
  });
}
