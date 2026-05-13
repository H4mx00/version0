import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  ChevronRight, 
  BookOpen,
  Sparkles,
  Zap,
  Tag,
  Hash,
  Linkedin,
  Facebook,
  Twitter
} from 'lucide-react';
import { blogPosts } from '../../../constants/blogData';
import { SEO } from '../../../components/common/SEO';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  React.useEffect(() => {
    if (post) {
      document.title = `${post.title} | EuropeCV Blog`;
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const shareLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-[#0077b5] hover:text-white'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-[#1877f2] hover:text-white'
    },
    { 
      name: 'X (Twitter)', 
      icon: Twitter, 
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'hover:bg-black hover:text-white'
    }
  ];

  // Find related posts (simple logic: same category or next/prev)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${post.title} | Career Insights | EuropeCV`}
        description={post.description}
      />
      {/* Header / Hero */}
      <div className="relative pt-24 sm:pt-32 pb-16 bg-slate-100/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-black text-slate-400 hover:text-blue-600 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-8"
            >
              {post.category}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-10"
            >
              {post.title}
            </motion.h1>
            
            <div className="flex flex-wrap items-center gap-8 text-[11px] font-black text-slate-500 uppercase tracking-widest border-t border-slate-200 pt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                  E
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400 text-[9px] tracking-[0.2em]">Author</span>
                  <span className="text-slate-900">EuropeCV Editorial</span>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-slate-400 text-[9px] tracking-[0.2em]">Published</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-slate-400 text-[9px] tracking-[0.2em]">Read Time</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div 
              className="prose prose-xl max-w-none prose-slate prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 prose-strong:text-slate-900 blog-content font-medium text-slate-700 leading-relaxed
                [&_.lead]:text-xl [&_.lead]:text-slate-500 [&_.lead]:font-semibold [&_.lead]:mb-10
                [&_section]:mb-16
                [&_h2]:text-3xl [&_h2]:mb-6 [&_h2]:mt-12
                [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-3
                [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:space-y-3
                [&_li]:pl-2
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post Metadata Footer */}
            <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col gap-10">
              {/* Tags */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Tag className="w-3 h-3" />
                  Topics
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-xl border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Keywords (SEO) */}
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
                  <Hash className="w-3 h-3" />
                  SEO Keywords
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map(keyword => (
                    <span key={keyword} className="px-3 py-1.5 bg-white text-slate-400 text-[10px] font-bold rounded-lg border border-slate-200 italic">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-y border-slate-50">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Share2 className="w-3 h-3" />
                    Share This Article
                  </span>
                  <div className="flex items-center gap-2">
                    {shareLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Share on ${link.name}`}
                        className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 transition-all border border-slate-100 ${link.color}`}
                      >
                        <link.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-16">
            {/* AI Ad */}
            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-blue-600/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 text-white mb-6 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-black mb-4 leading-tight">Apply smarter with AI</h3>
                <p className="text-blue-100 text-sm font-bold mb-10 leading-relaxed">
                  Ready to turn these insights into success? Use EuropeCV to build an ATS-proof resume in minutes.
                </p>
                <Link 
                  to="/login" 
                  className="w-full py-5 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg"
                >
                  Start Building Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Recommended Reading
              </h3>
              <div className="space-y-10">
                {relatedPosts.map(rp => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`} className="group flex flex-col gap-3">
                    <div className="inline-flex self-start px-2.5 py-1 bg-slate-100 text-slate-500 font-black text-[9px] uppercase tracking-widest rounded-lg">
                      {rp.category}
                    </div>
                    <h4 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {rp.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed">
                      {rp.description}
                    </p>
                    <div className="flex items-center gap-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {rp.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
