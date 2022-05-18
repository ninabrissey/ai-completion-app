require('dotenv').config();

export const postUserText = async () => {
  return await fetch(
    'https://api.openai.com/v1/engines/text-curie-001/completions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
      },
      body: JSON.stringify(data),
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  });
};
