import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const [greeting, setGreeting] = useState(messages[0]);
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];


  return (
    <div>
      <h3>{greeting}!訪問いただきましてありがとうございます！</h3>
      <button onClick={() => setGreeting(randomMessage())}>新しい挨拶</button>
    </div>
  );
}
