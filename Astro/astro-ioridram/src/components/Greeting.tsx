export default function Greeting({ messages }) {
  return (
    <div>
      <h3>{messages[0]}!訪問いただきましてありがとうございます！</h3>
      <button>新しい挨拶</button>
    </div>
  );
}
