import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, BookOpen, Search, Rss, UserPlus, Sparkles } from 'lucide-react';
import { blogPosts } from '../../../constants/blogData';
import { SEO } from '../../../components/common/SEO';

export function BlogPage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  React.useEffect(() => {
    document.title = "Blog | EuropeCV - Career Tips & AI Insights";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-28 pb-16">
      <SEO 
        title="AI Career Blog | Resume Tips & Job Insights | EuropeCV"
        description="Discover the latest trends in AI job searching, ATS optimization, and European recruitment. Stay ahead with expert career advice from EuropeCV."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <BookOpen className="w-3 h-3" />
            EuropeCV Insights
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            The Future of <span className="text-blue-600">Career Growth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium"
          >
            Expert advice on building ATS-friendly resumes, writing AI-powered cover letters, and navigating the European job market in 2026.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 px-4">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text"
              placeholder="Search articles, categories or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-[2rem] text-sm font-medium focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all shadow-xl shadow-slate-200/40 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/5 transition-all"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 flex-1">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[9px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-black text-blue-600 group/link"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-400">
              <Search className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">No articles found</h2>
            <p className="text-slate-600 font-medium">Try adjusting your search criteria or keywords.</p>
          </div>
        )}

        {/* RSS & CTA Section */}
        <div className="mt-24 max-w-4xl mx-auto space-y-8">
          {/* RSS Feed Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-blue-500/30 transition-all group shadow-sm hover:shadow-xl hover:shadow-blue-600/5"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                <Rss className="w-7 h-7" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-black text-slate-900 mb-1">Stay Updated via RSS</h3>
                <p className="text-slate-500 text-sm font-medium">Get our latest career insights directly in your favorite feed reader.</p>
              </div>
            </div>
            <a 
              href="/blog/feed.xml" 
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shrink-0 flex items-center gap-2"
            >
              <Rss className="w-3 h-3" />
              Subscribe to Feed
            </a>
          </motion.div>

          {/* AI CV Builder CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-blue-600 rounded-[2.5rem] p-8 sm:p-10 text-white relative overflow-hidden group shadow-2xl shadow-blue-600/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-white/20 transition-all" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-100 text-[10px] font-black uppercase tracking-widest mb-4">
                  <Sparkles className="w-3 h-3" />
                  AI-Powered Results
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight leading-tight">Ready to create your CV?</h2>
                <p className="text-blue-100 text-base font-medium opacity-90">
                  Put these tips into action with our AI-powered CV builder and land your dream job faster.
                </p>
              </div>
              <Link 
                to="/login"
                className="px-8 py-5 bg-white text-blue-600 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shrink-0 shadow-lg shadow-black/10 flex items-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Create free account
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
