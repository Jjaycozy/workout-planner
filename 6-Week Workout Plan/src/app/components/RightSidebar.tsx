export function RightSidebar() {
  return (
    <aside className="w-80 bg-white border-l border-gray-200 p-6 overflow-auto">
      <div className="mb-6">
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4 border border-pink-200">
          <div className="flex justify-between items-start mb-2">
            <span className="text-gray-600" style={{ fontSize: '0.75rem' }}>CURRENT LEVEL</span>
            <span className="text-purple-600" style={{ fontSize: '0.875rem' }}>83%</span>
          </div>
          <p className="text-gray-800 mb-1">Improved</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full" style={{ width: '83%' }}></div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-5 text-white mb-6">
        <p className="text-purple-200 mb-2" style={{ fontSize: '0.75rem' }}>MOTIVATIONAL QUOTE</p>
        <p className="mb-4" style={{ fontSize: '0.875rem' }}>
          "The only bad workout is the one that didn't happen."
        </p>
        <p className="text-purple-200" style={{ fontSize: '0.75rem' }}>- Unknown</p>
      </div>

      <div className="space-y-4 mb-6">
        <h3 className="text-gray-700">Your Stats</h3>

        <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-pink-200 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>Workouts Done</p>
              <p className="text-pink-600">12 / 24</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>Total Time</p>
              <p className="text-purple-600">18h 45m</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-5 text-white">
        <h4 className="mb-3">Fitness Tips</h4>
        <ul className="space-y-2" style={{ fontSize: '0.875rem' }}>
          <li className="flex items-start gap-2">
            <span className="text-pink-200">•</span>
            <span>Stay hydrated throughout your workout</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-200">•</span>
            <span>Warm up before and stretch after</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-200">•</span>
            <span>Listen to your body and rest when needed</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-200">•</span>
            <span>Track your progress consistently</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
