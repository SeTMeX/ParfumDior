import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-card text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">

                {/* Main grid: stacks on mobile, 2 cols on md, 3 cols on lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 sm:mb-16">

                    {/* Left section */}
                    <div className="flex flex-col gap-10">
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            {t("footer.left-sec.p-text")}
                            {t("footer.left-sec.p-text")}
                        </p>

                        <div>
                            <p className="text-base font-medium mb-5">Social media</p>

                            <div className="grid grid-cols-3 gap-y-3 gap-x-4 text-muted-foreground text-sm">
                                {[
                                    "Instagram", "Twitter", "Tiktok",
                                    "Facebook", "Linkedin", "Youtube",
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

                    {/* Middle section — full width on mobile, col on md+ */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-xs font-semibold tracking-widest mb-3 text-muted-foreground uppercase">
                                {t("footer.newsletter.adress")}
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                1901 Thornridge Cir.<br />
                                Shiloh, Hawaii 81063
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold tracking-widest mb-3 text-muted-foreground uppercase">
                                {t("footer.newsletter.phone")}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                [+373] 812381283
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold tracking-widest mb-3 text-muted-foreground uppercase">
                                EMAIL
                            </p>
                            <p className="text-sm text-muted-foreground">
                                hello@diorparfum.com
                            </p>
                        </div>
                    </div>

                    {/* Newsletter — full width on mobile, spans both cols on md, own col on lg */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <p className="text-2xl sm:text-3xl font-semibold leading-tight mb-8">
                            {t("footer.newsletter.subtext1")}<br />{t("footer.newsletter.subtext2")}
                        </p>

                        <div className="flex items-center bg-muted rounded-full p-1.5">
                            <input
                                type="email"
                                placeholder={t("footer.newsletter.email")}
                                placeholder={t("footer.newsletter.email")}
                                className="flex-1 min-w-0 bg-transparent text-foreground placeholder:text-muted-foreground text-sm px-3 outline-none"
                            />
                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium px-4 py-2 rounded-full shrink-0 transition">
                                {t("footer.newsletter.subbtn")}
                                {t("footer.newsletter.subbtn")}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar — stacks on mobile */}
                <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-sm text-center sm:text-left">
                        © Copyright 2026, {t("footer.bottomsec.rights")}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-muted-foreground text-sm">
                        <a href="#" className="hover:text-foreground transition">{t("footer.bottomsec.faq")}</a>
                        <a href="#" className="hover:text-foreground transition">{t("footer.bottomsec.terms")}</a>
                        <a href="#" className="hover:text-foreground transition">{t("footer.bottomsec.policy")}</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;