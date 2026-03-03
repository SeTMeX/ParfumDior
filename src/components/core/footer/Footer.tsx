const Footer = () => {
    return (
        <footer className="text-white bg-gradient-to-r from-slate-900 to-slate-400">
            <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
                <div className="grid grid-cols-3 gap-12 mb-16">
                    <div className="flex flex-col gap-12">
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            We are a premium fragrance brand crafting distinctive scents designed to elevate everyday moments.
                        </p>

                        <div>
                            <p className="text-white text-base font-medium mb-5">Social media</p>
                            <div className="grid grid-cols-3 gap-y-3 gap-x-4 text-white/80 text-sm">
                                {[
                                    "Instagram", "Twitter", "Tiktok",
                                    "Facebook", "Linkedin", "Youtube",
                                ].map((platform) => (
                                    <a
                                        key={platform}
                                        href="#"
                                        className="flex items-center gap-1 hover:text-white transition group"
                                    >
                                        {platform}
                                        <span className="text-xs opacity-60 group-hover:opacity-100 transition">↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-white text-xs font-semibold tracking-widest mb-3">ADDRESS</p>
                            <p className="text-white/70 text-sm leading-relaxed">
                                1901 Thornridge Cir.<br />
                                Shiloh, Hawaii 81063
                            </p>
                        </div>

                        <div>
                            <p className="text-white text-xs font-semibold tracking-widest mb-3">PHONE</p>
                            <p className="text-white/70 text-sm">[+373] 812381283</p>
                        </div>

                        <div>
                            <p className="text-white text-xs font-semibold tracking-widest mb-3">EMAIL</p>
                            <p className="text-white/70 text-sm">hello@diorparfum.com</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-white text-3xl font-semibold leading-tight mb-8">
                            Subscribe to<br />get Our Newsletter
                        </p>

                        <div className="flex items-center bg-white rounded-full p-1.5">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 min-w-0 bg-transparent text-gray-800 placeholder-gray-400 text-sm px-3 outline-none"
                            />
                            <button className="bg-gray-900 hover:bg-gray-700 transition text-white text-xs font-medium px-4 py-2 rounded-full shrink-0">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-6 flex items-center justify-between">
                    <p className="text-white/50 text-sm">© Copyright 2026, All Rights Reserved</p>
                    <div className="flex items-center gap-6 text-white/50 text-sm">
                        <a href="#" className="hover:text-white transition">FAQ</a>
                        <a href="#" className="hover:text-white transition">Term of Service</a>
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;