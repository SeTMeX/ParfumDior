const Footer = () => {
    return (
        <footer className="bg-card text-foreground">
            <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
                <div className="grid grid-cols-3 gap-12 mb-16">

                    {/* left section */}
                    <div className="flex flex-col gap-12">
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            We are a premium fragrance brand crafting distinctive scents designed to elevate everyday moments.
                        </p>

                        <div>
                            <p className="text-base font-medium mb-5">Social media</p>

                            <div className="grid grid-cols-3 gap-y-3 gap-x-4 text-muted-foreground text-sm">
                                {[
                                    "Instagram","Twitter","Tiktok",
                                    "Facebook","Linkedin","Youtube",
                                ].map((platform) => (
                                    <a
                                        key={platform}
                                        href="#"
                                        className="flex items-center gap-1 hover:text-foreground transition group"
                                    >
                                        {platform}
                                        <span className="text-xs opacity-60 group-hover:opacity-100 transition">
                                            ↗
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* middle section */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-xs font-semibold tracking-widest mb-3 text-muted-foreground">
                                ADDRESS
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                1901 Thornridge Cir.<br />
                                Shiloh, Hawaii 81063
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold tracking-widest mb-3 text-muted-foreground">
                                PHONE
                            </p>
                            <p className="text-sm text-muted-foreground">
                                [+373] 812381283
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold tracking-widest mb-3 text-muted-foreground">
                                EMAIL
                            </p>
                            <p className="text-sm text-muted-foreground">
                                hello@diorparfum.com
                            </p>
                        </div>
                    </div>

                    {/* newsletter */}
                    <div>
                        <p className="text-3xl font-semibold leading-tight mb-8">
                            Subscribe to<br />get Our Newsletter
                        </p>

                        <div className="flex items-center bg-muted rounded-full p-1.5">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 min-w-0 bg-transparent text-foreground placeholder:text-muted-foreground text-sm px-3 outline-none"
                            />

                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium px-4 py-2 rounded-full shrink-0 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* bottom bar */}
                <div className="border-t border-border pt-6 flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">
                        © Copyright 2026, All Rights Reserved
                    </p>

                    <div className="flex items-center gap-6 text-muted-foreground text-sm">
                        <a href="#" className="hover:text-foreground transition">FAQ</a>
                        <a href="#" className="hover:text-foreground transition">Term of Service</a>
                        <a href="#" className="hover:text-foreground transition">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;