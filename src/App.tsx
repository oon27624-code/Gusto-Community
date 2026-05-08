/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Search, Bell, User, ArrowRight, Heart, MessageSquare, GraduationCap, Share2, Globe } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="font-display text-2xl font-bold tracking-tighter text-primary">
              GustoCommunity
            </h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-primary border-b-2 border-primary pb-1">Home</a>
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Discover</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:relative lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="Search campus..."
                className="bg-surface border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/5 rounded-full text-on-surface-variant hover:text-on-surface transition-all">
                <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-full text-on-surface-variant hover:text-on-surface transition-all">
                <User className="w-5 h-5" />
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM2qDcqLh9ktpoWU2i75_fiEhNt3Z9rr8GeLe3rMUSu-TJ8sjCgNSYYwMVbHvTxEdABVHRw7c9iUEy7VRYmlT2cniqZJxJd8CWDvlRxYCxe109Jc68WjAQFgWaBVFw9jwJeh3dg20CMSW-c52VErHc-TXhbjAEOlZqCOi0T-3Tz3jUrjSB2ir14eQvvHi4SUkw56e1k8g3VVOSs3UtqUw2KeRtTihpFlKMNVbARDpWDwiSjrMO3tYTyZ44k758QdNs3898Ki95TEQ" 
            alt="Campus" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">The Pulse of Campus Life</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Your Campus.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Your Moments.</span>
          </h1>
          <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto font-medium">
            Connect with peers, discover trending events, and immerse yourself in the high-energy social scene of your university. Exclusive access starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              Join the Community
            </button>
            <button className="bg-white/5 border border-white/10 backdrop-blur-md text-on-surface px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Explore as Guest
            </button>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-6 py-24 space-y-32">
        
        {/* Trending Posts */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold font-display">Trending Campus Posts</h2>
            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Featured Post */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group border border-white/5 shadow-2xl shadow-black/50"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhBQ4lPm_8KqQRDToooVcLJDQgSKOoF5BbHQwsUdEkcYhW-SeCn-r0sdD8y5bUkGhZpBohKt9OBK6wGNVbF7OCFB4y_X_Wlnue2ky6qpNNf_ewFRroDikzS3mt29VhHDkyQpUVRsq9IMcb9DDbwyHhYf1MlQ6sRat_O5MHpMJJKkHB-pzbAoo0o2TJuT9FqNsywD9j53HwAcpQwFMYzaGuF2_TPKMR-kYAHha6Ol7DRALO4Ijii7Wgzwq3rnMnJ_TG7XhlTazE-dE" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                alt="Event" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-[10px] font-bold text-primary uppercase">#LiveMusic</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/70 uppercase">Main Quad</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">Spring Fest Headliner Announced</h3>
                <p className="text-on-surface-variant text-sm max-w-lg line-clamp-2">
                  The wait is over! Catch the biggest act of the year performing live on the main campus quad this Saturday.
                </p>
              </div>
            </motion.div>

            {/* Social Post */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-white/5 bg-surface-container/50 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDisp1ftEsUmyR6XlpMLMqw2eL8TDhaoWci2JjEzWcRFCoG6UE3AxhrewvWWzu7Fvsc-RoNR3cMGhIgHMw53WIi3U9kmU2oL6lmvmXia4r9RgNRdqmbEshZvUP0nr0iMPoueQyZ1aSkxfFTUvbrw6yHahWN83gv3iL41Cg8j37hrnfnPayhI0ETLBBxmrqMHCb21f4hmWwQloINsudYKxVh_JVtjIFG9XXRcejGZ9_o2zHgnmVKvMCxKO3xinZGIsBIxRfQfSLbm5A" 
                  className="w-10 h-10 rounded-full border border-white/10" alt="Avatar" />
                  <div>
                    <p className="text-sm font-bold">Sarah J.</p>
                    <p className="text-xs text-on-surface-variant">2 hours ago</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">Library Cafe Hack</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Skip the line at the library cafe by ordering through the new campus app integration. Game changer for midterms.
                </p>
              </div>
              <div className="flex gap-4 items-center pt-4 text-on-surface-variant border-t border-white/5">
                <button className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors">
                  <Heart className="w-4 h-4" /> 248
                </button>
                <button className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4" /> 42
                </button>
              </div>
            </motion.div>

            {/* Feature Card */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="rounded-2xl bg-[#151619] border border-white/5 p-8 text-center flex flex-col items-center justify-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-50" />
                <GraduationCap className="w-12 h-12 text-primary mb-6 glow-text-primary" />
                <h4 className="text-xl font-bold mb-2">Study Group Finder</h4>
                <p className="text-on-surface-variant text-sm mb-6 max-w-[200px]">Connect with classmates in your courses instantly.</p>
                <button className="px-6 py-2 rounded-full border border-primary text-primary text-xs font-bold hover:bg-primary/10 transition-all">
                  Find a Group
                </button>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold font-display">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Campus Smash Bros Tournament",
                category: "Esports",
                location: "Student Union Building, Room 204",
                date: "Oct 12",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZGi2-5kK1RF2_hU5M6AlPek-VYOziUbGUt1PPhhRzc-PAZpa-fuQURow2fHyCWYXxsAGPSEM_7ZmXwVu0pcIRQMiA79TcaLE8h7U9HEgFfDDitRjH37s4ZAAOHHZxvf2k9Rnd9AVKF2EdIz-8yPUAMBkF8enpaOwJ2LhWESTiGPpvVLuTwluJDsnNQvsUZx3jF4eH8Jlaj5z4dZVdzVrMgBMo6XJU1-6rVyccYg4SIjp2ayV72wm8uyDzODVnEgKmm0igfyXiLEY",
                color: "text-blue-400"
              },
              {
                title: "Tech Industry Mixer",
                category: "Career",
                location: "Innovation Center, 3rd Floor Atrium",
                date: "Oct 15",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaqo5Hl17eoAnkC1TF13hAu_b16JZiIzz5u-CyH5JuzridunYqm9kiVi9ze4MESbNyg77wL8tvExP5sVWU938X1D4Cvs1qwFcpcBavhMJSNd1nxLXkfPI71IXn9itgAGRMnZoBw_20r7S5VuGkf_8CrH7IvxOSM32ViJv8b-TfNtXfMLYz9AmXZErsqQQljk0eAkiAEDBHu1zZi-kra0Tb79tODbD8UV6YNwsNKnllUwJZ5aPcqhDlKE3KVg_gwooMnjFn7S1pF-4",
                color: "text-purple-400"
              }
            ].map((event, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/5 bg-surface-container overflow-hidden group shadow-xl"
              >
                <div className="h-44 relative bg-black/40">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${event.color} mb-1`}>{event.category}</p>
                      <h3 className="text-lg font-bold leading-tight line-clamp-2">{event.title}</h3>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-2 py-1.5 text-center min-w-[50px]">
                      <p className="text-[10px] font-bold uppercase text-on-surface-variant leading-none mb-1">{event.date.split(' ')[0]}</p>
                      <p className="text-lg font-bold text-primary leading-none">{event.date.split(' ')[1]}</p>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-6">{event.location}</p>
                  <button className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-bold hover:bg-white/5 transition-all">RSVP</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 bg-surface-container/30">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h1 className="font-display text-xl font-bold tracking-tighter text-primary">
              GustoCommunity
            </h1>
            <p className="text-sm text-on-surface-variant">
              © 2026 GustoCommunity. Built for students.<br />
              Created by Aye Tharaphi Kyaw
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Campus Guidelines</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Support</a>
          </div>
          <div className="flex md:justify-end gap-6 text-on-surface-variant">
            <a href="#" className="hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
