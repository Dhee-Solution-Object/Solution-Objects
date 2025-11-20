export default function AIAnimation() {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      {/* Simple Modern Grid Pattern */}
      <div className="relative w-full max-w-lg aspect-square">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br bg-background rounded-3xl" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8b5cf6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Center Icon/Badge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-background rounded-3xl flex items-center justify-center">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#icon-grad)" opacity="0.8"/>
                <path d="M2 17L12 22L22 17" stroke="url(#icon-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="url(#icon-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366f1' }} />
                    <stop offset="100%" style={{ stopColor: '#a855f7' }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-800">AI Powered</h3>
              <p className="text-slate-600">Advanced Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
