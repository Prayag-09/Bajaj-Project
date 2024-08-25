import { Hono } from 'hono';

interface ProcessedData {
  numbers: string[];
  alphabets: string[];
  highestLowercase: string[];
}

interface BFHLRequest {
  data: string[];
}

interface BFHLResponse {
  is_success: boolean;
  user_id: string;
  email: string;
  roll_number: string;
  numbers: string[];
  alphabets: string[];
  highest_lowercase_alphabet: string[];
}

const app = new Hono();

// Custom CORS Middleware
app.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type');
  
  if (c.req.method === 'OPTIONS') {
    return c.text('', 204); // Handle preflight request
  }

  await next();
});

const processData = (data: string[]): ProcessedData => {
  const numbers: string[] = [];
  const alphabets: string[] = [];
  let highestLowercase = '';

  data.forEach(item => {
    if (!isNaN(Number(item))) {
      numbers.push(item);
    } else {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        if (!highestLowercase || item > highestLowercase) {
          highestLowercase = item;
        }
      }
    }
  });

  return {
    numbers,
    alphabets,
    highestLowercase: highestLowercase ? [highestLowercase] : []
  };
};

app.post('/bfhl', async (c) => {
  const body: BFHLRequest = await c.req.json();
  const { data } = body;

  const { numbers, alphabets, highestLowercase } = processData(data);

  const response: BFHLResponse = {
    is_success: true,
    user_id: 'T Prayag',
    email: 'prayag.t2021@vitstudent.ac.in',
    roll_number: "21BEC0817",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase
  };

  return c.json(response);
});

app.get('/bfhl', (c) => {
  return c.json({ operation_code: 1 });
});

export default app;
