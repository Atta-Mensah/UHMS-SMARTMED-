import "../global.css";

const Header = () => {
  return (
            <header className="uhms-header flex-none h-20 px-4 md:px-8 flex items-center justify-between text-white">
            {/* <!-- Logo and Branding --> */}
            <div className="flex items-center gap-4">
                <button id="menu-btn" className="lg:hidden text-white p-3 rounded-xl hover:bg-white/10 transition-colors">
                    <i className="fas fa-bars text-xl"></i>
                </button>
                
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-white/20 to-white/10 flex items-center justify-center backdrop-blur-sm">
                        <i className="fas fa-stethoscope text-xl text-white"></i>
                    </div>
                    <div>
                        <h1 className="uhms-logo text-xl md:text-2xl">UHMS SmartMed Practice</h1>
                        <p className="text-white/80 text-xs md:text-sm" id="user-greeting">Welcome!</p>
                    </div>
                </div>
            </div>

            <div className="mt-1">
                <span className="bg-linear-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Supreme-walafahw3 Led Administration
                </span>
            </div>
            
            {/* <!-- Mode Toggle and Controls --> */}
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-1">
                    <button id="mode-dashboard" className="px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-white text-uhms-blue shadow-sm">
                        <i className="fas fa-home mr-2"></i>Dashboard
                    </button>
                    <button id="mode-practice" className="px-4 py-2 rounded-lg text-sm font-semibold transition-all text-white/90 hover:text-white hover:bg-white/10">
                        <i className="fas fa-graduation-cap mr-2"></i>Practice
                    </button>
                    <button id="mode-exam" className="px-4 py-2 rounded-lg text-sm font-semibold transition-all text-white/90 hover:text-white hover:bg-white/10">
                        <i className="fas fa-file-alt mr-2"></i>Exam
                    </button>
                </div>
                
                <div className="flex items-center gap-3">
                    {/* <!-- Current Module --> */}
                    <div className="hidden md:block text-right">
                        <div className="text-xs text-white/70">Current Module</div>
                        <div id="current-module" className="font-bold text-white">Respiratory System</div>
                    </div>
                    
                    <button id="submit-btn" className="uhms-danger-btn flex items-center gap-2 hidden">
                        <i className="fas fa-paper-plane"></i>
                        <span id="submit-btn-text">Submit</span>
                    </button>
                    
                    {/* <!-- AI Tutor Button --> */}
                    <button  className="uhms-secondary-btn bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                        <i className="fas fa-robot mr-2"></i>
                        UHMS AI Tutor
                    </button>
                </div>
            </div>
        </header>
        
  )
}

export default Header