const motivationalQuotes = [
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "The only bad workout is the one that didn't happen.",
  "Don't wish for it, work for it.",
  "Success starts with self-discipline.",
  "Push yourself because no one else is going to do it for you.",
  "Great things never come from comfort zones."
];

export function MotivationalSidebar() {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white sticky top-6">
      <h3 className="mb-4">Daily Motivation</h3>
      <div className="space-y-4">
        {motivationalQuotes.map((quote, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30"
          >
            <p className="italic">&ldquo;{quote}&rdquo;</p>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-white/30">
        <h4 className="mb-3">Workout Tips</h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-pink-200 mr-2">•</span>
            <span>Stay hydrated throughout your workout</span>
          </li>
          <li className="flex items-start">
            <span className="text-pink-200 mr-2">•</span>
            <span>Warm up before and stretch after</span>
          </li>
          <li className="flex items-start">
            <span className="text-pink-200 mr-2">•</span>
            <span>Listen to your body and rest when needed</span>
          </li>
          <li className="flex items-start">
            <span className="text-pink-200 mr-2">•</span>
            <span>Consistency is key to progress</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
