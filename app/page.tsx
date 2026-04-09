'use client';

import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Camera, Bell, ChefHat, Menu, X, Star, CheckCircle2, ChevronRight, Apple, Play } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center icon-glow">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">Protein Tracker Pro</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 rounded-full border border-[var(--dark-border)] text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
            <Apple className="w-4 h-4" /> App Store
          </button>
          <button className="px-5 py-2 rounded-full border border-[var(--dark-border)] text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
            <Play className="w-4 h-4" /> Google Play
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-nav border-t border-[var(--dark-border)] p-6 flex flex-col gap-4 md:hidden"
        >
          <button className="w-full py-3 rounded-full border border-[var(--dark-border)] text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
            <Apple className="w-4 h-4" /> App Store
          </button>
          <button className="w-full py-3 rounded-full border border-[var(--dark-border)] text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
            <Play className="w-4 h-4" /> Google Play
          </button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden mesh-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-[60%_40%] gap-12 items-center relative z-10">
        
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-block px-3 py-1 rounded-full border border-[var(--primary-subtle)] bg-[var(--primary-glow)] mb-6"
          >
            <span className="text-[var(--primary)] text-xs font-bold uppercase tracking-widest">AI-Powered Nutrition Tracking</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-[clamp(52px,7vw,96px)] font-display font-bold leading-[0.95] tracking-tight mb-6"
          >
            Protein Tracking.<br />
            <span className="text-[var(--primary)]">Perfected.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--text-secondary-dark)] max-w-xl mb-10 leading-relaxed"
          >
            The smartest way to hit your daily protein goals — powered by AI, designed for real life.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6"
          >
            <button className="btn-primary px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 text-base">
              <Apple className="w-5 h-5" /> Download on App Store
            </button>
            <button className="px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 text-base border border-white/20 hover:bg-white/5 transition-colors">
              <Play className="w-5 h-5" /> Get it on Google Play
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="flex items-center gap-2 text-xs text-white/40 font-medium tracking-wide"
          >
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <span>4.8 rating · 10,000+ users · Free to download</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="relative hidden lg:flex justify-end lg:-mr-12"
        >
          <div className="iphone-glow"></div>
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="iphone-frame"
          >
            <div className="iphone-notch"></div>
            <div className="iphone-screen bg-[#0a0a0a] flex flex-col pt-12 px-4">
              {/* Fake App UI */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="text-white/50 text-xs mb-1">Today</div>
                  <div className="text-white font-bold text-xl">142g / 180g</div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-[var(--primary)] border-t-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-[var(--primary)]">78%</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10"></div>
                    <div className="flex-1">
                      <div className="h-3 w-20 bg-white/20 rounded-full mb-2"></div>
                      <div className="h-2 w-12 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="text-[var(--primary)] font-bold text-sm">+32g</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

const CountUp = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const SocialProof = () => {
  return (
    <section className="bg-[var(--dark-surface)] border-y border-[var(--dark-border)] py-8 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--dark-border)] text-center">
          <div className="pt-4 md:pt-0">
            <div className="text-3xl font-display font-bold text-white mb-1"><CountUp end={4.8} /> <span className="text-[var(--primary)]">★</span></div>
            <div className="text-sm text-[var(--text-secondary-dark)] uppercase tracking-wider font-medium">App Store Rating</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl font-display font-bold text-white mb-1"><CountUp end={10} suffix="K+" /></div>
            <div className="text-sm text-[var(--text-secondary-dark)] uppercase tracking-wider font-medium">Active Users</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl font-display font-bold text-white mb-1">iOS & Android</div>
            <div className="text-sm text-[var(--text-secondary-dark)] uppercase tracking-wider font-medium">Available Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-[var(--primary)] text-sm font-bold uppercase tracking-widest mb-4"
          >
            What Makes It Different
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(36px,4vw,56px)] font-display font-bold leading-tight"
          >
            Everything You Need to<br />Hit Your Goals
          </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {/* Card 1 */}
          <motion.div variants={item} className="glass-card rounded-3xl p-8 md:mt-0">
            <div className="w-14 h-14 rounded-2xl bg-[var(--primary-subtle)] border border-[var(--primary-glow)] flex items-center justify-center mb-6 icon-glow">
              <Camera className="w-7 h-7 text-[var(--primary)]" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">AI Food Analyzer</h3>
            <p className="text-[var(--text-secondary-dark)] leading-relaxed">
              Take a photo of any meal. Our AI instantly identifies the food and logs the protein — no manual entry needed.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="glass-card rounded-3xl p-8 md:mt-12">
            <div className="w-14 h-14 rounded-2xl bg-[var(--primary-subtle)] border border-[var(--primary-glow)] flex items-center justify-center mb-6 icon-glow">
              <Bell className="w-7 h-7 text-[var(--primary)]" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Smart Meal Reminders</h3>
            <p className="text-[var(--text-secondary-dark)] leading-relaxed">
              Customizable reminders keep you consistent. Never miss a meal or fall short of your daily protein target.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="glass-card rounded-3xl p-8 md:mt-6">
            <div className="w-14 h-14 rounded-2xl bg-[var(--primary-subtle)] border border-[var(--primary-glow)] flex items-center justify-center mb-6 icon-glow">
              <ChefHat className="w-7 h-7 text-[var(--primary)]" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">High-Protein Recipes</h3>
            <p className="text-[var(--text-secondary-dark)] leading-relaxed">
              Discover curated recipes built around your goals — from post-workout meals to high-protein breakfasts.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Showcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-[#050709]" ref={ref}>
      {/* Background Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[40%_60%] gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[clamp(36px,4vw,56px)] font-display font-bold leading-tight mb-6">
            See Every Feature.<br />In One App.
          </h2>
          <p className="text-lg text-[var(--text-secondary-dark)] leading-relaxed mb-8">
            A beautifully designed interface that gets out of your way. Track your macros, view your progress, and discover new meals without the clutter.
          </p>
          <ul className="space-y-4">
            {['Dark mode optimized', 'Lightning fast logging', 'Beautiful charts & insights'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="relative h-[600px] hidden md:block">
          {/* Mockup 1 (Back) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, x: 100 }}
            animate={isInView ? { opacity: 0.6, y: -60, x: 140 } : { opacity: 0, y: 50, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 z-0"
          >
            <div className="iphone-frame border-[#222]">
               <div className="iphone-notch"></div>
               <div className="iphone-screen bg-[#111] p-6 pt-16">
                 <div className="h-40 bg-white/5 rounded-2xl mb-4"></div>
                 <div className="h-20 bg-white/5 rounded-2xl mb-4"></div>
                 <div className="h-20 bg-white/5 rounded-2xl"></div>
               </div>
            </div>
          </motion.div>

          {/* Mockup 2 (Middle) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={isInView ? { opacity: 0.8, y: -30, x: 70 } : { opacity: 0, y: 50, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-85 z-10"
          >
            <div className="iphone-frame border-[#1a1a1a]">
               <div className="iphone-notch"></div>
               <div className="iphone-screen bg-[#0a0a0a] p-6 pt-16">
                 <div className="grid grid-cols-2 gap-4 mb-4">
                   <div className="h-24 bg-[var(--primary-subtle)] rounded-2xl"></div>
                   <div className="h-24 bg-white/5 rounded-2xl"></div>
                 </div>
                 <div className="h-32 bg-white/5 rounded-2xl mb-4"></div>
               </div>
            </div>
          </motion.div>

          {/* Mockup 3 (Front) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, x: -100 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 50, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="iphone-frame shadow-2xl">
               <div className="iphone-notch"></div>
               <div className="iphone-screen bg-black p-6 pt-16">
                 <div className="text-2xl font-bold text-white mb-6">Dashboard</div>
                 <div className="w-full aspect-square rounded-full border-[16px] border-[var(--primary-subtle)] border-t-[var(--primary)] flex items-center justify-center mb-8">
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white">142g</div>
                     <div className="text-xs text-white/50 uppercase tracking-widest">Protein</div>
                   </div>
                 </div>
                 <button className="w-full py-4 rounded-full bg-[var(--primary)] text-white font-bold">Log Meal</button>
               </div>
            </div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-white/60 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              Daily Dashboard
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      title: "Set Your Goal",
      desc: "Enter your weight, activity level, and target — the app calculates your ideal daily protein."
    },
    {
      title: "Log With Ease",
      desc: "Use AI photo scan, barcode scanner, or search from our 1M+ food database."
    },
    {
      title: "Track & Improve",
      desc: "Watch your daily progress, hit streaks, and get smarter about your nutrition."
    }
  ];

  return (
    <section className="py-32 bg-[var(--light-bg)] text-gray-900 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-[var(--primary)] text-sm font-bold uppercase tracking-widest mb-4"
          >
            Getting Started
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(36px,4vw,56px)] font-display font-bold leading-tight"
          >
            Simple. Powerful. Yours.
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-[2px] border-t-2 border-dashed border-[var(--primary)] opacity-20 hidden md:block"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                {/* Node */}
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 relative z-10 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-subtle)] flex items-center justify-center text-[var(--primary)] font-display font-bold text-xl">
                    {i + 1}
                  </div>
                </div>
                
                {/* Decorative Number */}
                <div className="absolute -top-10 -left-4 text-[120px] font-display font-bold text-[var(--primary)] opacity-[0.04] leading-none select-none pointer-events-none hidden md:block">
                  0{i + 1}
                </div>

                <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = [
    {
      text: "This app changed how I think about nutrition. The AI scanner is insanely accurate.",
      author: "Marcus R.",
      role: "Fitness Enthusiast"
    },
    {
      text: "Finally an app that's simple enough to stick with. I've been consistent for 3 months.",
      author: "Sarah K.",
      role: "Weight Loss Journey"
    },
    {
      text: "The recipe section alone is worth it. I've discovered so many high-protein meals.",
      author: "Jason M.",
      role: "Bodybuilder"
    }
  ];

  return (
    <section className="py-32 bg-[var(--dark-bg)] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(36px,4vw,56px)] font-display font-bold leading-tight text-center mb-20"
        >
          Real People. Real Results.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-4 -left-2 text-[100px] font-serif text-[var(--primary)] opacity-10 leading-none select-none">
                &quot;
              </div>
              <div className="flex text-yellow-500 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg text-white/90 italic mb-8 relative z-10 leading-relaxed border-l-2 border-[var(--primary)] pl-4">
                &quot;{review.text}&quot;
              </p>
              <div className="relative z-10">
                <div className="font-bold text-white">{review.author}</div>
                <div className="text-sm text-[var(--text-secondary-dark)]">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-[#050709] border-t border-[var(--dark-border)]" ref={ref}>
      {/* Animated Radial Pulse */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)] rounded-full blur-[100px] pointer-events-none"
      ></motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="w-24 h-24 mx-auto bg-[var(--dark-surface)] rounded-3xl border border-[var(--dark-border)] flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(57,158,183,0.3)]"
        >
          <CheckCircle2 className="w-12 h-12 text-[var(--primary)]" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(40px,5vw,72px)] font-display font-bold leading-tight mb-6"
        >
          Start Tracking Today.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-[var(--text-secondary-dark)] mb-12"
        >
          Free to download. No credit card. Just results.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
        >
          <button className="btn-primary px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 text-base">
            <Apple className="w-5 h-5" /> Download on App Store
          </button>
          <button className="px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 text-base border border-white/20 hover:bg-white/5 transition-colors bg-white/5 backdrop-blur-sm">
            <Play className="w-5 h-5" /> Get it on Google Play
          </button>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-white/40 font-medium"
        >
          Join 10,000+ people already tracking
        </motion.p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[var(--dark-bg)] border-t border-[rgba(255,255,255,0.06)] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[var(--primary)] flex items-center justify-center">
            <CheckCircle2 className="w-3 h-3 text-white" />
          </div>
          <span className="font-display font-bold text-white">Protein Tracker Pro</span>
        </div>
        
        <div className="text-sm text-[var(--text-secondary-dark)] text-center md:text-left">
          © 2025 Protein Tracker Pro. All rights reserved.
        </div>

        <div className="flex gap-6 text-sm text-[var(--text-secondary-dark)]">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--dark-bg)] selection:bg-[var(--primary)] selection:text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Showcase />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
