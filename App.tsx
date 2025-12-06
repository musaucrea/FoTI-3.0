import React, { useState } from 'react';
import { ViewState, Tour, Student } from './types';
import { TOURS, STUDENTS, RESEARCH_PAPERS } from './constants';
import { TourCard } from './components/TourCard';
import { AiAssistant } from './components/AiAssistant';
import { 
  GraduationCap, 
  Map as MapIcon, 
  BookOpen, 
  Users, 
  Search, 
  ArrowRight, 
  PlayCircle, 
  FileText,
  Briefcase,
  Globe,
  Award,
  TrendingUp,
  Menu,
  X,
  Clock,
  Star,
  CheckCircle,
  MessageSquare
} from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const handleNav = (target: ViewState) => {
    setView(target);
    setMobileMenuOpen(false);
    setSelectedTour(null);
    window.scrollTo(0, 0);
  };

  const getStudent = (id: string) => STUDENTS.find(s => s.id === id);

  // --- Views ---

  const HomeView = () => (
    <>
      {/* Hero */}
      <div className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-[pulse_30s_ease-in-out_infinite]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80")' }}
        />
        <div className="relative z-20 text-center max-w-4xl px-4">
          <div className="inline-block bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-1 mb-6">
            <span className="text-emerald-300 font-semibold tracking-wider text-sm uppercase">Reimagining Tourism Education</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
            Learn by Doing. <br/> Earn by Creating.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
            FoTI empowers students to run real tourism businesses, funding their research and launching their careers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => handleNav('TOURS')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center"
            >
              Explore Tours <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => handleNav('RESEARCH')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center"
            >
              Read Journal <BookOpen className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Model Explanation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">The FoTI Model</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We replace the traditional waiting period of internships with concurrent business operations. 
              Here is how our students grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Briefcase className="w-8 h-8 text-emerald-600" />, 
                title: "Business Operations", 
                desc: "Students manage live tourism products under supervision, generating revenue to fund their studies." 
              },
              { 
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />, 
                title: "Research & Development", 
                desc: "Real-world data leads to documentary evidence and peer-reviewed publications in the FoTI Journal." 
              },
              { 
                icon: <Award className="w-8 h-8 text-yellow-600" />, 
                title: "Career Acceleration", 
                desc: "Graduates transition to our 'Travel Agency for Hire' platform or join the FoTI Think Tank." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Featured Student Tours</h2>
              <p className="text-gray-500">Support student research by booking these unique experiences.</p>
            </div>
            <button onClick={() => handleNav('TOURS')} className="text-emerald-600 font-semibold hover:text-emerald-700 hidden md:flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOURS.slice(0, 3).map(tour => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                student={getStudent(tour.studentId)}
                onClick={() => { setSelectedTour(tour); setView('TOURS'); }} 
              />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <button onClick={() => handleNav('TOURS')} className="text-emerald-600 font-semibold">View All Tours</button>
          </div>
        </div>
      </section>

      {/* Call to Action - Talent */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots" /> 
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Looking for Talent?</h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
            Our graduates are not just students; they are experienced entrepreneurs and published researchers.
          </p>
          <button 
            onClick={() => handleNav('STUDENTS')}
            className="bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors"
          >
            Access Talent Pool
          </button>
        </div>
      </section>
    </>
  );

  const ToursView = () => (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        {selectedTour ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
            <div className="h-96 relative">
              <img src={selectedTour.image} alt={selectedTour.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedTour(null)}
                className="absolute top-6 left-6 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
              </button>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex gap-3 mb-4">
                     {selectedTour.tags.map(t => (
                       <span key={t} className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-semibold">{t}</span>
                     ))}
                  </div>
                  <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">{selectedTour.title}</h1>
                  <div className="flex items-center gap-6 text-gray-600 mb-8">
                    <span className="flex items-center"><MapIcon className="w-4 h-4 mr-2" /> {selectedTour.location}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {selectedTour.duration}</span>
                    <span className="flex items-center text-yellow-600"><Star className="w-4 h-4 mr-2 fill-current" /> {selectedTour.rating} (12 Reviews)</span>
                  </div>
                  <p className="text-gray-600 leading-loose mb-8 text-lg">
                    {selectedTour.description}
                  </p>
                  
                  {/* Outputs */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-emerald-600" />
                      Research Outputs
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                         <PlayCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                         <div>
                           <p className="font-semibold text-gray-900">Documentary Evidence</p>
                           <a href={selectedTour.documentaryUrl} className="text-sm text-blue-600 hover:underline">Watch: Behind the Scenes of {selectedTour.location} Research</a>
                         </div>
                      </div>
                      <div className="flex items-start">
                         <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                         <div>
                           <p className="font-semibold text-gray-900">Academic Publication</p>
                           <p className="text-sm text-gray-600 italic">"{selectedTour.paperTitle}"</p>
                           <a href="#" className="text-xs text-blue-600 hover:underline">Read in FoTI Journal</a>
                         </div>
                      </div>
                    </div>
                  </div>

                </div>
                
                {/* Sidebar */}
                <div className="md:w-1/3">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg sticky top-24">
                    <div className="text-3xl font-bold text-gray-900 mb-2">${selectedTour.price} <span className="text-base font-normal text-gray-500">/ person</span></div>
                    <p className="text-sm text-gray-500 mb-6">Proceeds fund student research.</p>
                    
                    <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors mb-4">
                      Book Now
                    </button>
                    <button className="w-full bg-slate-100 text-slate-700 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
                      Download Brochure
                    </button>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-4">Your Guide & Researcher</h4>
                      {(() => {
                         const student = getStudent(selectedTour.studentId);
                         return student ? (
                           <div className="flex items-center gap-3">
                             <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-full" />
                             <div>
                               <p className="font-semibold text-gray-900">{student.name}</p>
                               <p className="text-xs text-gray-500">{student.role}</p>
                             </div>
                           </div>
                         ) : null;
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Tour Marketplace</h1>
              <p className="text-xl text-gray-600">Innovative tourism products created by the next generation of industry leaders.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TOURS.map(tour => (
                <TourCard 
                  key={tour.id} 
                  tour={tour} 
                  student={getStudent(tour.studentId)}
                  onClick={() => { setSelectedTour(tour); window.scrollTo(0, 0); }} 
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );

  const ResearchView = () => (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">FoTI Journal</h1>
            <p className="text-xl text-gray-600">Peer-reviewed publications and documentary evidence from our student body.</p>
          </div>

          <div className="space-y-12">
            {RESEARCH_PAPERS.map(paper => {
              const student = getStudent(paper.authorId);
              return (
                <div key={paper.id} className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2 block">{paper.category}</span>
                    <div className="text-gray-500 text-sm mb-4">{paper.publishDate}</div>
                    {student && (
                      <div className="flex items-center gap-2">
                        <img src={student.avatar} className="w-8 h-8 rounded-full" alt="" />
                        <span className="text-sm font-medium text-gray-900">{student.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 hover:text-emerald-700 cursor-pointer">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {paper.abstract}
                    </p>
                    <div className="flex gap-4">
                      <button className="flex items-center text-sm font-bold text-slate-700 hover:text-emerald-600">
                        <FileText className="w-4 h-4 mr-2" /> Download PDF
                      </button>
                      <button className="flex items-center text-sm font-bold text-slate-700 hover:text-red-600">
                        <PlayCircle className="w-4 h-4 mr-2" /> Watch Documentary
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const StudentView = () => (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Talent Pool</h1>
          <p className="text-xl text-gray-600">Future leaders available for hire, scholarships, and policy roles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDENTS.map(student => (
            <div key={student.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="h-32 bg-gradient-to-r from-emerald-800 to-emerald-600"></div>
              <div className="px-6 relative flex-1 flex flex-col">
                <div className="-mt-12 mb-4">
                  <img src={student.avatar} alt={student.name} className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h3>
                <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded mb-4 w-fit">{student.role}</span>
                <p className="text-gray-600 text-sm mb-6 flex-1">{student.bio}</p>
                <div className="border-t border-gray-100 pt-4 pb-6 mt-auto">
                   <p className="text-xs text-gray-500 uppercase font-bold mb-2">Specialty</p>
                   <p className="text-sm font-medium text-gray-800">{student.specialty}</p>
                </div>
                <button className="w-full mb-6 bg-slate-800 text-white py-2 rounded-lg text-sm font-semibold hover:bg-slate-900">
                   View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutView = () => (
    <div className="pt-24 pb-20 min-h-screen bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Career Roadmap</h1>
            
            <div className="relative border-l-2 border-emerald-200 ml-4 space-y-12 pl-8 py-4">
                <div className="relative">
                    <span className="absolute -left-[41px] bg-emerald-100 p-2 rounded-full border-2 border-emerald-500">
                        <GraduationCap className="w-5 h-5 text-emerald-700" />
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Undergraduate/Postgraduate Student</h3>
                    <p className="text-gray-600">
                        Students enter the program. Instead of waiting for holidays, they launch pilot tourism products. 
                        Revenue funds their thesis research.
                    </p>
                </div>

                <div className="relative">
                    <span className="absolute -left-[41px] bg-emerald-100 p-2 rounded-full border-2 border-emerald-500">
                        <TrendingUp className="w-5 h-5 text-emerald-700" />
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Business Incubation</h3>
                    <p className="text-gray-600">
                        Successful products are scaled. Students gain "Certified Travel Agent" status within FoTI's internal agency.
                        Documentaries are published on YouTube.
                    </p>
                </div>

                <div className="relative">
                    <span className="absolute -left-[41px] bg-emerald-100 p-2 rounded-full border-2 border-emerald-500">
                        <Globe className="w-5 h-5 text-emerald-700" />
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Travel Agency for Hire</h3>
                    <p className="text-gray-600">
                        Graduates are listed on our "Travel Agency for Hire" platform. They can be hired by external tour operators
                        or continue running their FoTI-incubated business as alumni.
                    </p>
                </div>

                <div className="relative">
                    <span className="absolute -left-[41px] bg-emerald-100 p-2 rounded-full border-2 border-emerald-500">
                        <Users className="w-5 h-5 text-emerald-700" />
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">4. FoTI Think Tank</h3>
                    <p className="text-gray-600">
                        The most talented postgraduates join the Think Tank as policy analysts, shaping the future of African tourism
                        through high-level research and government advisory.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );

  const FeedbackView = () => {
    const [formData, setFormData] = useState({
      type: 'Suggestion',
      name: '',
      email: '',
      message: ''
    });
    const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS'>('IDLE');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('SUBMITTING');
      // Simulate API call
      setTimeout(() => {
        setStatus('SUCCESS');
      }, 1500);
    };

    if (status === 'SUCCESS') {
      return (
        <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">Your feedback has been received. We appreciate your contribution to improving FoTI.</p>
            <button 
              onClick={() => { setStatus('IDLE'); setFormData({type: 'Suggestion', name: '', email: '', message: ''}); setView('HOME'); }}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-24 pb-20 min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-emerald-900 p-8 text-white">
              <h1 className="text-3xl font-serif font-bold mb-2">We Value Your Feedback</h1>
              <p className="text-emerald-100">Help us improve the FoTI experience for students and travelers alike.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Feedback Type</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Suggestion', 'Issue', 'Other'].map(type => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({...formData, type})}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        formData.type === type 
                          ? 'bg-emerald-600 text-white ring-2 ring-emerald-600 ring-offset-2' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name (Optional)</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email (Optional)</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  placeholder="Tell us about your experience or suggestion..."
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={!formData.message || status === 'SUBMITTING'}
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {status === 'SUBMITTING' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : 'Submit Feedback'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div 
            onClick={() => handleNav('HOME')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">F</div>
            <span className="text-xl font-bold tracking-tight text-emerald-900">FoTI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Tours', 'Journal', 'Students', 'Career Path'].map((item) => {
                const target = item === 'Career Path' ? 'CAREERS' : item === 'Journal' ? 'RESEARCH' : item.toUpperCase() as ViewState;
                return (
                    <button 
                        key={item}
                        onClick={() => handleNav(target)}
                        className={`text-sm font-semibold transition-colors ${view === target ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
                    >
                        {item}
                    </button>
                )
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">
             <button className="p-2 text-gray-400 hover:text-emerald-600"><Search className="w-5 h-5" /></button>
             <button className="bg-emerald-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-800 transition-colors">
                Login
             </button>
          </div>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-xl">
                 <div className="flex flex-col space-y-4">
                    {['Home', 'Tours', 'Journal', 'Students', 'Career Path'].map((item) => {
                         const target = item === 'Career Path' ? 'CAREERS' : item === 'Journal' ? 'RESEARCH' : item.toUpperCase() as ViewState;
                         return (
                            <button 
                                key={item}
                                onClick={() => handleNav(target)}
                                className="text-left font-semibold text-gray-700 py-2"
                            >
                                {item}
                            </button>
                         )
                    })}
                 </div>
            </div>
        )}
      </nav>

      <main>
        {view === 'HOME' && <HomeView />}
        {view === 'TOURS' && <ToursView />}
        {view === 'RESEARCH' && <ResearchView />}
        {view === 'STUDENTS' && <StudentView />}
        {view === 'CAREERS' && <AboutView />}
        {view === 'FEEDBACK' && <FeedbackView />}
      </main>

      <AiAssistant />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-white font-serif font-bold">F</div>
                        <span className="text-xl font-bold text-white">FoTI</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                        The Foundations of Tourism Institute bridges the gap between academic theory and business practice, empowering the next generation of African tourism leaders.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Platform</h4>
                    <ul className="space-y-2 text-sm">
                        <li><button onClick={() => handleNav('TOURS')} className="hover:text-emerald-400">Tours Marketplace</button></li>
                        <li><button onClick={() => handleNav('RESEARCH')} className="hover:text-emerald-400">Academic Journal</button></li>
                        <li><button onClick={() => handleNav('STUDENTS')} className="hover:text-emerald-400">Hire Talent</button></li>
                        <li><button onClick={() => handleNav('FEEDBACK')} className="hover:text-emerald-400 text-emerald-400 font-semibold flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Feedback</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-emerald-400">Student Handbook</a></li>
                        <li><a href="#" className="hover:text-emerald-400">Research Guidelines</a></li>
                        <li><a href="#" className="hover:text-emerald-400">Scholarship Portal</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Contact</h4>
                    <p className="text-sm text-slate-400 mb-2">Nairobi, Kenya</p>
                    <p className="text-sm text-slate-400">info@foti.africa</p>
                </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Foundations of Tourism Institute.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                    <a href="#" className="hover:text-white">Sitemap</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;