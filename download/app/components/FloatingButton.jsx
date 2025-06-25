export default function FloatingButton({ text, onClick }) {
    return (
      <button className="fixed bottom-4 right-4 bg-yellow-600 text-white font-bold rounded-full px-6 py-3 shadow-lg hover:scale-105 hover:shadow-2xl transition" onClick={onClick}>
        {text}
      </button>
    );
  }
  