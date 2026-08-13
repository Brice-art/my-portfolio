import { useState, useEffect, useRef, createContext, useContext } from "react";
import AnimatedBackground from "./AnimatedBackground";
import { TbDownload, TbSchoolFilled } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

const COPY = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",
    downloadCV: "Download CV",
    heroHeadline: "I'm",
    heroWords: ["Brice Byiringiro", "a Full-Stack Developer"],
    heroSub:
      "Full-stack developer who enjoys understanding complex systems, solving difficult problems, and building software people can rely on.",
    heroRecentLabel: "Latest Project",
    heroRecentText:
      "Recovered and improved a production Laravel booking platform by restoring Stripe payments, email delivery, real-time updates with Laravel Reverb, and deployment workflows on Laravel Cloud.",
    heroCTA: "Explore My Work →",
    heroContact: "Contact Me",
    heroConnect: "Let's Connect",
    stat1v: "8",
    stat1s: "+",
    stat1l: "Projects Built",
    stat2v: "1",
    stat2s: "",
    stat2l: "Production System",
    stat3v: "3",
    stat3s: "",
    stat3l: "Languages",
    stat4v: "7",
    stat4s: "+",
    stat4l: "Years in Japan",
    aboutLabel: "About Me",
    aboutHeadline: "I build software\nthat solves real problems.",
    aboutAccent: "Reliable. Practical. Maintainable.",
    aboutP1:
      "My journey into software started with a background in civil engineering, where I learned to approach complex problems with structure and precision. Today I apply that same mindset to designing and building full-stack web applications.",
    aboutP2:
      "I've developed applications from scratch, maintained production systems, integrated third-party services like Stripe, diagnosed challenging bugs, and delivered solutions directly to clients. I enjoy understanding how systems work and making them better.",
    aboutCTA: "Explore My Projects →",
    infoEduTitle: "Education",
    infoEduBody:
      "Associate's degree in Civil Engineering from Japan. Now focused on professional full-stack software development through continuous learning and real-world projects.",
    infoLangTitle: "Languages",
    infoLangBody:
      "English (Fluent) • Japanese (Fluent, BJT 430) • Kinyarwanda (Native)",
    infoFocusTitle: "Focus",
    infoFocusBody:
      "Laravel, PHP, JavaScript, React, Node.js, REST APIs, SQL databases, authentication, backend architecture, and scalable web applications.",
    infoBgTitle: "Background",
    infoBgBody:
      "Originally from Rwanda. Lived and studied in Japan for more than seven years, developing both technical skills and cross-cultural communication.",
    coreHeadline: "Core Expertise",
    coreItems: [
      "Laravel Development",
      "REST API Design",
      "Authentication & Authorization",
      "Payment Integrations",
      "Database Design",
      "Backend Architecture",
      "Production Debugging",
      "System Maintenance",
      "Full-Stack Development",
      "Cloud Deployment",
      "Git Workflow",
      "Problem Solving",
    ],
    philosophyLabel: "My Philosophy",
    philosophyText:
      "Good software isn't just about writing code. It's about understanding the problem, communicating clearly, and building solutions people can trust.",
    experienceLabel: "Experience",
    experienceTimeline: [
      {
        year: "2026",
        title: "Full-Stack Developer",
        description:
          "Worked with a client to maintain and improve a production Laravel booking platform hosted on Laravel Cloud.",
      },
      { year: "2025", title: "Built MERN Applications" },
      { year: "2025", title: "Developed Browser Extensions" },
      { year: "2024", title: "Started Full-Stack Development" },
    ],
    openSourceLabel: "Open Source",
    openSourceText:
      "I enjoy building software publicly and continuously improving my projects.",
    openSourceCTA: "View my repositories →",
    skillsLabel: "SKILLS",
    skillsHeadline: "Technologies & Tools",
    skillsSub:
      "Technologies I use to build, deploy, and maintain modern web applications.",
    skillFrontend: "Frontend",
    skillBackend: "Backend",
    skillData: "Data & Tools",
    projLabel: "FEATURED PROJECTS",
    projHeadline: "Projects",
    projSub:
      "Production systems, full-stack applications, browser extensions, and software built to solve real-world problems.",
    projLive: "Live",
    projInProgress: "In Progress",
    projLiveDemo: "Live Demo",
    projSource: "Source Code",
    proj: [
      {
        title: "Production Laravel Booking Platform",
        subtitle: "Production booking system hosted on Laravel Cloud.",
        description:
          "Inherited an existing Laravel booking platform and became responsible for improving its reliability. Restored email functionality, repaired Laravel Reverb real-time updates, strengthened Stripe payment verification to prevent duplicate charges, improved deployment workflows on Laravel Cloud, and added production testing. Collaborated directly with the client throughout diagnosis, implementation, and delivery.",
        highlight: "Production Recovery",
      },
      {
        title: "Huye Finds",
        subtitle:
          "Helping students discover the best places around the University of Rwanda.",
        description:
          "A location-based platform that helps students find affordable restaurants, accommodation, and essential services around Huye. Built with a mobile-first experience, real-time search, location filtering, and an interface designed specifically for student life.",
        highlight: "Built to solve a real community problem",
      },
      {
        title: "Agakayi Notes",
        subtitle: "A modern note-taking application built with the MERN stack.",
        description:
          "Designed a full-stack MERN application with secure JWT authentication, REST APIs, MongoDB data storage, and a responsive React frontend. Focused on clean backend architecture, reusable components, and efficient data flow.",
        highlight: "Full-stack architecture and secure auth",
      },
      {
        title: "RShift Chrome Extension",
        subtitle:
          "Turn work schedules into Google Calendar events with one click.",
        description:
          "Built while working part-time in Japan to eliminate repetitive manual scheduling. The extension extracts shift information from a scheduling website, authenticates with Google using OAuth, and automatically creates Calendar events. Demonstrates DOM manipulation, browser APIs, OAuth authentication, and third-party API integration.",
        highlight: "Automates a real daily workflow",
      },
      {
        title: "MyStore E-Commerce",
        subtitle: "An e-commerce platform built entirely with core PHP.",
        description:
          "Built entirely with core PHP to strengthen my understanding of MVC architecture, object-oriented programming, routing, authentication, SQL, and backend fundamentals without relying on frameworks.",
        highlight: "Core PHP and MVC fundamentals",
      },
    ],
    contactLabel: "CONTACT",
    contactHeadline: "Let's solve something together.",
    contactSub:
      "Whether you need a Laravel developer, a full-stack engineer, or someone who enjoys tackling difficult technical challenges, I'd love to hear from you.",
    contactEmail: "✉ Email Me",
    contactFooter: "Brice Byiringiro • Kigali, Rwanda • Tokyo, Japan",
  },
  jp: {
    navHome: "ホーム",
    navAbout: "自己紹介",
    navProjects: "プロジェクト",
    navSkills: "スキル",
    navContact: "連絡先",
    downloadCV: "履歴書",
    heroHeadline: "I'm",
    heroWords: ["Brice Byiringiro", "a Software Engineer"],
    heroSub:
      "土木工学のバックグラウンドを持ち、バックエンドAPI・データベース・フルスタックプロジェクトを実際に構築しながら学んでいます。",
    heroRecentLabel: "最近の制作",
    heroRecentText:
      "Laravel Cloud上のクライアント予約システムを復旧し、メール・リアルタイム・Stripe決済を修復、実運用テストを追加しました。",
    heroCTA: "制作物を見る →",
    heroContact: "連絡する",
    heroConnect: "つながりましょう",
    stat1v: "7",
    stat1s: "+",
    stat1l: "日本在住年数",
    stat2v: "3",
    stat2s: "",
    stat2l: "話せる言語",
    stat3v: "930",
    stat3s: "",
    stat3l: "TOEICスコア",
    stat4v: "430",
    stat4s: "",
    stat4l: "BJT日本語スコア",
    aboutLabel: "自己紹介",
    aboutHeadline: "課題解決が好きな\nエンジニア、",
    aboutAccent: "作ることを愛する。",
    aboutP1:
      "日本で土木工学を学んだあと、橋よりもソフトウェアシステムの設計に興味を持つようになりました。JavaScript・React・Node.js・Python・データベースを使いながら、実際に構築して力をつけています。",
    aboutP2:
      "学びのほとんどは、実際にプロダクトをリリースして、なぜ壊れるかを理解することから来ています。",
    aboutCTA: "プロジェクトを見る →",
    infoEduTitle: "学歴",
    infoEduBody: "日本の高専で土木工学で卒業。現在はソフトウェア開発に転向中。",
    infoLangTitle: "言語",
    infoLangBody:
      "英語（流暢・TOEIC 930）· 日本語（流暢・BJT 430）· キニャルワンダ語（母国語）",
    infoFocusTitle: "フォーカス",
    infoFocusBody:
      "バックエンドAPI・データベース・OOPパターン・効率的なフルスタックWebアプリ。",
    infoBgTitle: "バックグラウンド",
    infoBgBody: "ルワンダ出身。7年以上日本で生活・学習。",
    coreHeadline: "コアエキスパート",
    coreItems: [
      "Laravel開発",
      "REST API設計",
      "認証と認可",
      "決済統合",
      "データベース設計",
      "バックエンドアーキテクチャ",
      "本番デバッグ",
      "システム保守",
      "フルスタック開発",
      "クラウドデプロイ",
      "Gitワークフロー",
      "問題解決",
    ],
    philosophyLabel: "私の哲学",
    philosophyText:
      "良いソフトウェアはコードを書くことだけではありません。問題を理解し、明確に伝え、人々が信頼できる解決策を作ることです。",
    experienceLabel: "経験",
    experienceTimeline: [
      {
        year: "2026",
        title: "フルスタック開発者",
        description:
          "Laravel Cloudでホストされた本番予約プラットフォームの保守・改善をクライアントとともに行いました。",
      },
      { year: "2025", title: "MERNアプリを構築" },
      { year: "2025", title: "ブラウザ拡張機能を開発" },
      { year: "2024", title: "フルスタック開発を開始" },
    ],
    openSourceLabel: "オープンソース",
    openSourceText:
      "公開でソフトウェアを構築し、プロジェクトを継続的に改善することを楽しんでいます。",
    openSourceCTA: "リポジトリを見る →",
    skillsLabel: "スキル",
    skillsHeadline: "使用技術",
    skillsSub: "APIからUIまで、フルスタックアプリを構築するために使用するスタック。",
    skillFrontend: "フロントエンド",
    skillBackend: "バックエンド",
    skillData: "データ & ツール",
    projLabel: "主なプロジェクト",
    projHeadline: "制作物",
    projSub: "API・認証・ブラウザ拡張機能・フルスタックアプリなど、実際のプロジェクト。",
    projLive: "公開中",
    projInProgress: "開発中",
    projLiveDemo: "デモを見る",
    projSource: "ソースコード",
    proj: [
      {
        title: "Laravel Cloud BnB",
        subtitle: "Laravel Cloud上で運用される予約システム。",
        description:
          "クライアントの本番Laravelアプリを引き継ぎ、メール通知とLaravel Cloud内蔵Reverbを使ったリアルタイム更新を復旧。Stripe決済検証を強化し、画面更新による二重課金を防止しました。問題の特定と解決を重視し、クライアントには丁寧に報告・連携しました。",
        highlight: "クライアント本番復旧",
      },
      {
        title: "Huye Finds",
        subtitle: "Discover the best places around UR Huye",
        description:
          "学生がフエ大学周辺のリーズナブルな飲食店・サービスを見つけられるプラットフォーム。リアルタイム検索・位置フィルター・学生向けUXを実装したモバイルファーストな設計。",
        highlight: "実コミュニティのために構築",
      },
      {
        title: "Agakayi ノートアプリ",
        subtitle: "MERNスタックで構築したフルスタックのノート管理アプリ。",
        description:
          "JWT認証・RESTfulルーティング・MongoDBによるCRUD——ページリロードなしのクリーンなAPIレイヤー。ルワンダの伝統的なノート「agakayi」に着想を得た設計。バックエンドアーキテクチャとセキュアなセッション管理に重点を置いています。",
        highlight: "本番環境 · agakayi.xyzで公開中",
      },
      {
        title: "Rshift Chrome拡張機能",
        subtitle: "シフトスケジュール → Googleカレンダー。ワンクリックで。",
        description:
          "日本でアルバイトをしていた時に開発した。自分のスケジュールをすべてGoogleカレンダーで管理したいと思ったきっかけから開発した。DOMを解析してシフトデータを抽出し、OAuthでGoogleカレンダーにエクスポート。ワンクリックで手動入力ゼロ。認証・API通信・イベント作成をエンドツーエンドで処理。",
        highlight: "日常のワークフローを自動化",
      },
      {
        title: "ECサイト（生PHP）",
        subtitle: "フレームワークなしのPHPで構築。",
        description:
          "管理ダッシュボード・カート・ユーザー/管理者認証・商品検索を実装。フレームワークを使わない制約により、MVC・OOP・SQLの深い理解を促進。ルーティング・DBクエリ・認証処理をすべて手書き。",
        highlight: "MVCとOOPをゼロから実装",
      },
    ],
    contactLabel: "連絡先",
    contactHeadline: "一緒に作りましょう。",
    contactSub: "バックエンド開発・フルスタック業務・その他何でも、気軽にご連絡ください。",
    contactEmail: "✉ メールする",
    contactFooter: "ブリス — キガリ · 東京",
  },
};

const LangCtx = createContext({ lang: "en", t: COPY.en });
const useLang = () => useContext(LangCtx);

function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [start, target, duration]);

  return count;
}

const Nav = ({ lang, setLang }) => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    [t.navHome, "#home"],
    [t.navAbout, "#about"],
    [t.navSkills, "#skills"],
    [t.navProjects, "#projects"],
    [t.navContact, "#contact"],
  ];

  return (
    <>
      <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-extrabold text-white">
            B
          </div>
          <div className="pr-3 text-[0.95rem] font-extrabold text-slate-900">Brice</div>
        </div>

        <div className="nav-links flex items-center gap-8">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions flex items-center gap-3">
          <div className="lang-toggle">
            <button
              type="button"
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === "jp" ? "active" : ""}`}
              onClick={() => setLang("jp")}
            >
              JP
            </button>
          </div>

          <a href="/Resume-Brice.pdf" download className="btn-primary px-4 py-2 text-[0.8rem]">
            <TbDownload className="text-base" />
            {t.downloadCV}
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle items-center justify-center gap-1.5"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} className="nav-link" onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}

        <div className="lang-toggle self-start">
          <button
            type="button"
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn ${lang === "jp" ? "active" : ""}`}
            onClick={() => setLang("jp")}
          >
            JP
          </button>
        </div>

        <a href="/Brice-Resume.pdf" download className="btn-primary self-start px-4 py-2 text-[0.8rem]">
          <TbDownload className="text-base" />
          {t.downloadCV}
        </a>
      </div>
    </>
  );
};

const Hero = () => {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setDisplayed("");
    setDeleting(false);
    setWordIdx(0);
  }, [t]);

  useEffect(() => {
    const word = t.heroWords[wordIdx];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((idx) => (idx + 1) % t.heroWords.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx, t]);

  const fadeClass = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5";
  const headlineParts = t.heroHeadline.split("\n");

  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pb-10 pt-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className={`${fadeClass} mb-5 text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-slate-900 transition-all duration-700 ease-out`}>
              {headlineParts.map((line, index) => (
                <span key={`${line}-${index}`} className="block">
                  {line}
                </span>
              ))}
              <span className="block text-blue-600">
                {displayed}
                <span className="cursor" />
              </span>
            </h1>

            <p className={`${fadeClass} mb-6 max-w-xl text-[clamp(0.95rem,1.7vw,1.05rem)] leading-7 text-slate-500 transition-all duration-700 ease-out`}>
              {t.heroSub}
            </p>

            <div className={`${fadeClass} mb-6 max-w-xl rounded-2xl border border-blue-200 bg-blue-50/80 p-4 transition-all duration-700 ease-out`}>
              <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-blue-600">
                {t.heroRecentLabel}
              </div>
              <div className="text-[0.95rem] leading-6 text-slate-700">{t.heroRecentText}</div>
            </div>

            <div className={`${fadeClass} hero-actions mb-6 flex flex-wrap gap-3 transition-all duration-700 ease-out`}>
              <a href="#projects" className="btn-primary">
                {t.heroCTA}
              </a>
              <a href="#contact" className="btn-secondary">
                {t.heroContact}
              </a>
            </div>

            <div className={`${fadeClass} hero-social-row flex items-center gap-4 transition-all duration-700 ease-out`}>
              <span className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-slate-400">
                {t.heroConnect}
              </span>
              <div className="flex items-center gap-3">
                <a href="https://github.com/Brice-art" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/briceali/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="mailto:bricealibyilingiro@gmail.com" className="social-btn" aria-label="Email">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={`${fadeClass} lg:block mx-auto w-full max-w-[540px] transition-all duration-700 ease-out hidden`}>
            <div className="relative mx-auto max-w-[540px]">
              <div className="rounded-t-[12px] rounded-b-none bg-slate-800 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.18),0_4px_16px_rgba(0,0,0,0.1)]">
                <div className="mx-auto mb-2 h-2 w-14 rounded-full bg-slate-900" />
                <div className="overflow-hidden rounded-md bg-slate-900">
                  <div className="p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      <div className="ml-2 flex-1 rounded bg-slate-700/80 px-2 py-1 text-[0.6rem] text-slate-400">
                        notes.controller.js
                      </div>
                    </div>

                    <pre className="overflow-hidden font-mono text-[0.68rem] leading-7 text-slate-300">
                      <code>
                        <span className="text-purple-300">const</span> <span className="text-sky-300">createNote</span> = <span className="text-purple-300">async</span> (<span className="text-rose-300">req</span>, <span className="text-rose-300">res</span>) =&gt; {'{'}
                        {'\n'}    <span className="text-purple-300">const</span> {'{'} title, content {'}'} = <span className="text-rose-300">req</span>.body;
                        {'\n'}    <span className="text-purple-300">const</span> note = <span className="text-purple-300">await</span> <span className="text-sky-300">Note</span>.<span className="text-sky-300">create</span>({'{'}
                        {'\n'}      title, content,
                        {'\n'}      userId: <span className="text-rose-300">req</span>.user.<span className="text-rose-300">id</span>,
                        {'\n'}    {'}'});
                        {'\n'}    <span className="text-rose-300">res</span>.<span className="text-sky-300">status</span>(201).<span className="text-sky-300">json</span>(note);
                        {'\n'}  {'}'};
                        {'\n\n'}  <span className="italic text-slate-400">// JWT auth · MongoDB · REST API</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="h-3.5 bg-gradient-to-b from-slate-300 to-slate-500" />
              <div className="mx-auto h-1.5 w-[50%] rounded-b-md bg-slate-500" />

              <div className="absolute -bottom-5 right-[-30px] z-10 w-[28%] h-[50%] rounded-[20px] bg-slate-800 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <div className="mx-auto mb-1.5 h-1.5 w-[40%] rounded-full bg-slate-900" />
                <div className="overflow-hidden rounded-[14px] bg-slate-900 p-1.5">
                  <div className="mb-1 rounded bg-slate-800 px-1.5 py-1 text-[0.48rem] font-semibold text-emerald-400">
                    agakayi.xyz
                  </div>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="mb-1 flex items-center gap-1 bg-slate-800 px-1.5 py-2">
                      <span className={`h-1 w-1 rounded-full ${i === 1 ? "bg-emerald-400" : i === 2 ? "bg-sky-400" : "bg-purple-400"}`} />
                      <div className="h-3 flex-1 bg-slate-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, suffix, label, started }) => {
  const num = parseInt(value, 10);
  const count = useCountUp(num, 1600, started);

  return (
    <div className="stat-card">
      <div className="text-[clamp(1.7rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em] text-slate-900">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-[clamp(0.75rem,1.4vw,0.8rem)] font-medium text-slate-500">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="px-5 py-16 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        <StatItem value={t.stat1v} suffix={t.stat1s} label={t.stat1l} started={started} />
        <StatItem value={t.stat2v} suffix={t.stat2s} label={t.stat2l} started={started} />
        <StatItem value={t.stat3v} suffix={t.stat3s} label={t.stat3l} started={started} />
        <StatItem value={t.stat4v} suffix={t.stat4s} label={t.stat4l} started={started} />
      </div>
    </div>
  );
};

const About = () => {
  const { t } = useLang();
  const ref = useReveal();
  const headlineParts = t.aboutHeadline.split("\n");
  const infoCards = [
    { icon: <TbSchoolFilled className="text-2xl" />, title: t.infoEduTitle, body: t.infoEduBody },
    { icon: <IoLanguage className="text-2xl" />, title: t.infoLangTitle, body: t.infoLangBody },
    { icon: <FiTarget className="text-2xl" />, title: t.infoFocusTitle, body: t.infoFocusBody },
    { icon: <FaMapMarkerAlt className="text-2xl" />, title: t.infoBgTitle, body: t.infoBgBody },
  ];

  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <div className="mb-3 flex items-center gap-2">
          <span className="live-dot bg-blue-600" />
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-blue-600">
            {t.aboutLabel}
          </span>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-slate-900">
              {headlineParts.map((line, index) => (
                <span key={`${line}-${index}`} className="block">
                  {line}
                </span>
              ))}
              <span className="block text-blue-600">{t.aboutAccent}</span>
            </h2>
            <p className="mb-4 text-[0.95rem] leading-7 text-slate-500">{t.aboutP1}</p>
            <p className="mb-8 text-[0.95rem] leading-7 text-slate-500">{t.aboutP2}</p>
            <a href="#projects" className="btn-primary">
              {t.aboutCTA}
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {infoCards.map(({ icon, title, body }) => (
              <div key={title} className="info-card">
                <div className="mb-2 text-blue-600">{icon}</div>
                <div className="mb-2 text-[clamp(0.8rem,1.3vw,0.85rem)] font-bold text-slate-900">
                  {title}
                </div>
                <div className="text-[clamp(0.74rem,1.3vw,0.8rem)] leading-6 text-slate-500">
                  {body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreExpertise = () => {
  const { t } = useLang();
  const ref = useReveal();

  return (
    <section id="expertise" className="px-5 py-24 md:px-8">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="live-dot bg-blue-600" />
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-blue-600">
                {t.coreHeadline}
              </span>
            </div>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {t.coreItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-[0.9rem] font-medium text-slate-700">
                  <span className="text-blue-600">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
              <div className="mb-3 text-[0.9rem] font-bold text-slate-900">{t.philosophyLabel}</div>
              <p className="m-0 text-[0.95rem] leading-8 text-slate-700">{t.philosophyText}</p>
            </div> */}
          </div>

          <div className="grid gap-4 rounded-[20px] border border-slate-200 bg-slate-100 p-6">
            <div className="mb-2 text-[0.95rem] font-bold text-slate-900">{t.experienceLabel}</div>
            {t.experienceTimeline.map((item) => (
              <div key={`${item.year}-${item.title}`} className="flex gap-4">
                <div className="min-w-[52px] text-[0.95rem] font-bold text-blue-600">{item.year}</div>
                <div>
                  <div className="text-[0.95rem] font-bold text-slate-900">{item.title}</div>
                  {item.description ? (
                    <div className="mt-1 text-[0.88rem] leading-7 text-slate-600">{item.description}</div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const { t } = useLang();
  const ref = useReveal();

  const groups = [
    {
      title: t.skillFrontend,
      items: ["React", "JavaScript", "HTML / CSS", "Tailwind-style UI"],
    },
    {
      title: t.skillBackend,
      items: ["Node.js", "Express.js", "Python", "PHP / Laravel", "REST APIs", "JWT Auth"],
    },
    {
      title: t.skillData,
      items: ["MongoDB", "SQL / PostgreSQL", "Git", "Linux CLI", "OOP", "MVC Pattern", "DSA"],
    },
  ];

  return (
    <section id="skills" className="px-5 py-24 md:px-8">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-blue-600">
            {t.skillsLabel}
          </div>
          <h2 className="mb-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-slate-900">
            {t.skillsHeadline}
          </h2>
          <p className="mx-auto max-w-xl text-[0.95rem] leading-7 text-slate-500">{t.skillsSub}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {groups.map(({ title, items }) => (
            <div key={title} className="skill-card">
              <h3 className="mb-4 text-[clamp(0.85rem,1.4vw,0.9rem)] font-bold text-slate-900">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OpenSource = () => {
  const { t } = useLang();
  const ref = useReveal();

  return (
    <section id="open-source" className="px-5 py-24 md:px-8">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <div className="grid gap-5 text-center">
          <div className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-blue-600">
            {t.openSourceLabel}
          </div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-slate-900">
            {t.openSourceLabel}
          </h2>
          <p className="mx-auto max-w-2xl text-[0.95rem] leading-8 text-slate-500">
            {t.openSourceText}
          </p>
          <a href="https://github.com/Brice-art" target="_blank" rel="noreferrer" className="btn-primary mx-auto max-w-[220px] justify-center">
            {t.openSourceCTA}
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectMockup = ({ children, hasPhone = false, phoneChildren }) => (
  <div className="relative p-6 pb-0">
    <div className="rounded-t-[10px] bg-slate-800 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="ml-2 h-4 flex-1 rounded bg-slate-600/80" />
      </div>
      <div className="aspect-[16/9] overflow-hidden rounded bg-slate-900">{children}</div>
    </div>
    <div className="h-2.5 bg-gradient-to-b from-slate-300 to-slate-500" />
    <div className="mx-auto h-1.5 w-[45%] rounded-b-md bg-slate-500" />

    {hasPhone ? (
      <div className="absolute -bottom-2 right-3 z-10 w-[22%] rounded-[14px] bg-slate-800 p-1.5 shadow-[0_16px_36px_rgba(0,0,0,0.25)]">
        <div className="mx-auto mb-1.5 h-1.5 w-[40%] rounded-full bg-slate-900" />
        <div className="aspect-[9/19] overflow-hidden rounded-[10px] bg-slate-900">{phoneChildren}</div>
      </div>
    ) : null}
  </div>
);

const ScreenBooking = () => (
  <div className="flex h-full flex-col overflow-hidden bg-gradient-to-br from-indigo-50 via-slate-50 to-white font-sans">
    <div className="flex items-center gap-2 border-b border-slate-200 bg-white/80 px-3 py-2 backdrop-blur-sm">
      <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[0.7rem] font-bold text-white">
        B
      </div>
      <div>
        <div className="text-[0.6rem] font-bold text-slate-900">BnB Booking</div>
        <div className="text-[0.44rem] text-slate-500">Laravel Cloud workflow</div>
      </div>
      <div className="flex-1" />
      <span className="rounded-full bg-blue-100 px-2 py-1 text-[0.45rem] font-bold text-blue-700">
        Live support
      </span>
    </div>

    <div className="flex flex-1 flex-col gap-2 p-3 text-slate-800">
      <div className="flex items-center justify-between gap-2">
        <div>
          <div className="text-[0.7rem] font-bold text-slate-900">Booking flow</div>
          <div className="text-[0.75rem] text-slate-600">Secure payment, email alerts, and reservations.</div>
        </div>
        <span className="rounded-lg bg-emerald-100 px-2 py-1 text-[0.55rem] font-bold text-emerald-700">
          Stripe guarded
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          ["Check-in", "Jun 15"],
          ["Check-out", "Jun 18"],
          ["Guests", "2 adults"],
          ["Room", "Studio Suite"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-2.5">
            <div className="mb-1 text-[0.5rem] uppercase tracking-wide text-slate-500">{label}</div>
            <div className="text-[0.72rem] font-bold text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-3">
        <div className="mb-2 text-[0.7rem] font-bold text-slate-900">Payment status</div>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[0.7rem] font-bold text-blue-700">
            ✓
          </div>
          <div>
            <div className="text-[0.76rem] font-bold text-slate-900">Payment verified</div>
            <div className="text-[0.55rem] text-slate-500">
              Webhook validation prevents duplicate charges on refresh.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenBookingPhone = () => (
  <div className="flex h-full flex-col overflow-hidden bg-slate-50 font-sans">
    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-2 py-2 text-[0.55rem] font-bold">
      <span className="text-slate-800">Booking verified</span>
      <span className="text-blue-700">Refund ready</span>
    </div>
    <div className="flex flex-1 flex-col gap-2 p-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-2.5">
        <div className="mb-1 text-[0.62rem] text-slate-500">Reserved room</div>
        <div className="text-[0.8rem] font-bold text-slate-900">Studio Suite</div>
        <div className="mt-1 text-[0.6rem] text-slate-500">Jun 15 - Jun 18 · 2 guests</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[["Email", "Sent"], ["Reverb", "Connected"]].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-2">
            <div className="mb-1 text-[0.55rem] text-slate-500">{label}</div>
            <div className="text-[0.72rem] font-bold text-slate-900">{value}</div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-2.5">
        <div className="mb-1 text-[0.62rem] text-slate-500">Testing workflow</div>
        <div className="text-[0.76rem] font-bold text-slate-900">Production smoke test + refund passed</div>
      </div>
    </div>
  </div>
);

const ScreenHuye = () => (
  <div className="flex h-full flex-col overflow-hidden bg-gradient-to-br from-[#f5ede0] via-[#e8d5c0] to-[#d4b896] font-sans">
    <div className="flex items-center gap-1.5 border-b border-white/40 bg-white/40 px-2 py-1.5 backdrop-blur-sm">
      <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-[#1a4a2e] text-[0.45rem] font-black text-white">
        H
      </div>
      <span className="text-[0.5rem] font-bold text-[#1a4a2e]">Huye Finds</span>
      <div className="flex-1" />
      {['Food & Drinks', 'Shopping', 'Services', 'Accommodation'].map((label) => (
        <span key={label} className="hidden text-[0.38rem] font-medium text-slate-700 md:inline">
          {label}
        </span>
      ))}
      <button type="button" className="rounded-md bg-[#1a4a2e] px-2 py-1 text-[0.38rem] font-semibold text-white">
        Sign in
      </button>
    </div>

    <div className="flex flex-1 items-center gap-3 p-3">
      <div className="w-[48%]">
        <div className="mb-2 text-[0.42rem] text-[#1a4a2e]">✦</div>
        <div className="mb-2 text-[0.78rem] font-extrabold leading-[1.2] text-slate-900">
          Find everything
          <br />
          you need in
          <br />
          <span className="text-[#1a4a2e]">Huye.</span>
        </div>
        <div className="mb-3 text-[0.42rem] leading-5 text-slate-700">
          Discover the best places around UR Huye.
          <br />
          Restaurants, shops, services and more.
        </div>
        <div className="flex gap-2">
          <button type="button" className="rounded-lg bg-[#1a4a2e] px-2 py-1 text-[0.38rem] font-semibold text-white">
            ⊙ Explore Places
          </button>
          <button type="button" className="rounded-lg border border-[#1a4a2e] px-2 py-1 text-[0.38rem] font-semibold text-[#1a4a2e]">
            ♡ Save Favorites
          </button>
        </div>
      </div>

      <div className="flex w-[42%] items-end justify-center">
        <div className="w-[72%] rounded-2xl border-2 border-slate-300 bg-slate-100 p-1 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
          <div className="mb-1 flex items-center justify-between px-1 text-[0.38rem] font-semibold text-slate-900">
            <span>14:37</span>
            <div className="h-1.5 w-4 rounded-full bg-[#1a4a2e]" />
            <span className="text-slate-600">4G 🔋</span>
          </div>
          <div className="rounded-xl bg-white p-1.5">
            <div className="mb-1 text-[0.36rem] text-slate-500">Hello, Customer 👋</div>
            <div className="mb-2 text-[0.5rem] font-bold text-slate-900">What are you looking for today?</div>
            <div className="mb-2 flex items-center gap-1 rounded bg-slate-100 px-1.5 py-1 text-[0.34rem] text-slate-400">
              🔍 Search for places...
            </div>
            <div className="mb-1 flex items-center justify-between text-[0.38rem] font-semibold text-slate-900">
              <span>Categories</span>
              <span className="text-[#1a4a2e]">View all</span>
            </div>
            <div className="mb-2 grid grid-cols-2 gap-1">
              {[
                ["🍔", "Food & Drinks", "34 places"],
                ["🛍", "Shopping", "41 places"],
                ["✏", "Services", "27 places"],
                ["🏠", "Accommodation", "15 places"],
              ].map(([icon, name, count]) => (
                <div key={name} className="rounded bg-slate-50 p-1 text-center">
                  <div className="text-[0.5rem]">{icon}</div>
                  <div className="mt-1 text-[0.35rem] font-semibold text-slate-900">{name}</div>
                  <div className="text-[0.3rem] text-slate-500">{count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenHuyePhone = () => (
  <div className="h-full overflow-hidden bg-[#faf7f2] font-sans">
    <div className="bg-gradient-to-b from-[#e8d5c0] to-[#f5ede0] p-1.5" />
    <div className="space-y-2 p-1.5">
      <div className="flex items-center gap-2 rounded bg-white p-1.5 ring-1 ring-[#e8e0d5]">
        <span className="text-[0.6rem]">🎓</span>
        <div>
          <div className="text-[0.38rem] font-bold text-slate-900">New in Huye? We've got you.</div>
          <div className="text-[0.34rem] text-[#1a4a2e]">Explore trusted places and make your student life easier.</div>
        </div>
      </div>

      <div className="text-[0.4rem] font-bold text-slate-900">Browse by category</div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          ["🍔", "Food & Drinks", "4 places"],
          ["🛍", "Shopping", "3 places"],
          ["✏", "Services", "3 places"],
          ["🏠", "Accommodation", "2 places"],
        ].map(([icon, name, count]) => (
          <div key={name} className="flex w-full items-center gap-2 rounded border border-[#ede5dc] bg-white p-1">
            <div className="flex h-4 w-4 items-center justify-center rounded bg-[#f5ede0] text-[0.42rem]">
              {icon}
            </div>
            <div>
              <div className="text-[0.34rem] font-semibold text-slate-900">{name}</div>
              <div className="text-[0.32rem] text-slate-500">{count}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ScreenAgakayi = () => {
  const notes = [
    {
      title: "Study plan",
      body: "Review algorithms, practice daily coding.",
      tag: "Learning",
      date: "May 12, 2026",
      pinned: true,
      border: "border-emerald-400",
    },
    {
      title: "Motivation",
      body: "Consistency beats talent. Show up every day.",
      tag: "Motivation",
      date: "Jan 20, 2026",
      pinned: true,
      border: "border-yellow-400",
    },
    {
      title: "Project idea",
      body: "Build a habit tracker with streak counter and weekly analytics.",
      tag: "Business",
      date: "Jan 20, 2026",
      pinned: true,
      border: "border-orange-400",
    },
    {
      title: "API Integration",
      body: "Explore Alpha Vantage for financial data. Record key safely.",
      tag: "Software Dev",
      date: "Jun 16, 2026",
      pinned: false,
      border: "border-emerald-400",
    },
    {
      title: "AI Note",
      body: "Build an agent that monitors logs of a running app continuously.",
      tag: "Tech",
      date: "Jun 9, 2026",
      pinned: false,
      border: "border-yellow-400",
    },
    {
      title: "Mindset",
      body: "Nobody invests in you more than your own consistent effort.",
      tag: "Motivation",
      date: "Apr 9, 2026",
      pinned: false,
      border: "border-orange-400",
    },
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#f4f4f6] font-sans">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-2.5 py-1.5">
        <div className="flex h-4 w-4 items-center justify-center rounded bg-blue-600 text-[0.42rem] text-white">
          ✎
        </div>
        <span className="text-[0.52rem] font-bold text-slate-900">Agakayi</span>
        <div className="flex-1" />
        <span className="text-[0.4rem] text-slate-500">👤 Brice</span>
        <span className="text-[0.4rem] text-slate-500">[→</span>
      </div>

      <div className="flex items-center gap-2 border-b border-slate-100 bg-white px-2.5 py-1">
        <div className="flex flex-1 items-center gap-2 rounded bg-slate-100 px-2 py-1 text-[0.36rem] text-slate-400">
          🔍 Search notes...
        </div>
        <div className="rounded border border-slate-200 px-1.5 py-0.5 text-[0.36rem] text-slate-600">
          🗑 Archive
        </div>
        <div className="flex">
          <div className="flex h-4 w-4 items-center justify-center border border-slate-200 bg-slate-100 text-[0.38rem]">
            ⊞
          </div>
          <div className="flex h-4 w-4 items-center justify-center border border-slate-200 bg-white text-[0.38rem]">
            ≡
          </div>
        </div>
        <div className="rounded bg-blue-600 px-1.5 py-0.5 text-[0.38rem] font-bold text-white">
          + New Note
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-2">
        <div className="mb-2 flex items-center gap-1 text-[0.38rem] font-bold text-slate-900">
          <span>📌</span> Pinned Notes
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {notes.filter((note) => note.pinned).map((note) => (
            <div key={note.title} className={`relative rounded border border-slate-200 bg-white p-2 ${note.border} border-l-4`}>
              <span className="absolute right-1 top-1 text-[0.36rem] text-blue-600">📌</span>
              <div className="mb-1 pr-3 text-[0.4rem] font-bold text-slate-900">{note.title}</div>
              <div className="mb-2 text-[0.34rem] leading-4 text-slate-600">{note.body}</div>
              <div className="flex items-center justify-between">
                <span className="rounded bg-slate-100 px-1 text-[0.3rem] text-slate-600">{note.tag}</span>
                <span className="text-[0.3rem] text-slate-400">{note.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-2 text-[0.38rem] font-bold text-slate-900">All Notes</div>
        <div className="grid grid-cols-3 gap-2">
          {notes.filter((note) => !note.pinned).map((note) => (
            <div key={note.title} className={`rounded border border-slate-200 bg-white p-2 ${note.border} border-l-4`}>
              <div className="mb-1 text-[0.4rem] font-bold text-slate-900">{note.title}</div>
              <div className="mb-2 text-[0.34rem] leading-4 text-slate-600">{note.body}</div>
              <div className="flex items-center justify-between">
                <span className="rounded bg-slate-100 px-1 text-[0.3rem] text-slate-600">{note.tag}</span>
                <span className="text-[0.3rem] text-slate-400">{note.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ScreenAgakayiPhone = () => {
  const items = [
    { title: "Study plan", tag: "Learning", date: "May 12, 2026", border: "border-emerald-400", pinned: true },
    { title: "Motivation", tag: "Motivation", date: "Jan 20, 2026", border: "border-yellow-400", pinned: true },
    { title: "Project idea", tag: "Business", date: "Jan 20, 2026", border: "border-orange-400", pinned: true },
    { title: "API Integration", tag: "Software Dev", date: "Jun 16, 2026", border: "border-emerald-400", pinned: false },
    { title: "AI Note", tag: "Tech", date: "Jun 9, 2026", border: "border-yellow-400", pinned: false },
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#f4f4f6] font-sans">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-1.5 py-1">
        <div className="flex h-3 w-3 items-center justify-center rounded bg-blue-600 text-[0.3rem] text-white">
          ✎
        </div>
        <span className="text-[0.46rem] font-bold text-slate-900">Agakayi</span>
        <div className="flex-1" />
        <span className="text-[0.34rem] text-slate-500">👤 Brice</span>
      </div>
      <div className="border-b border-slate-100 bg-white px-1.5 py-1">
        <div className="rounded bg-slate-100 px-1.5 py-1 text-[0.34rem] text-slate-400">🔍 Search notes...</div>
      </div>
      <div className="flex items-center gap-1 border-b border-slate-100 bg-white px-1.5 py-1 text-[0.34rem] text-slate-600">
        <span className="rounded border border-slate-200 px-1 py-0.5">🗑 Archive</span>
        <div className="flex-1" />
        <span>⊞</span>
        <span>≡</span>
        <span className="rounded bg-blue-600 px-1 py-0.5 text-white">+ New</span>
      </div>
      <div className="flex-1 space-y-1.5 overflow-hidden p-1.5">
        <div className="flex items-center gap-1 text-[0.38rem] font-bold text-slate-900">
          <span>📌</span> Pinned Notes
        </div>
        {items.map((item) => (
          <div key={item.title} className={`relative rounded border border-slate-200 bg-white p-1.5 ${item.border} border-l-4`}>
            {item.pinned ? <span className="absolute right-1 top-1 text-[0.32rem] text-blue-600">📌</span> : null}
            <div className="pr-3 text-[0.38rem] font-bold text-slate-900">{item.title}</div>
            <div className="mt-1 flex items-center justify-between">
              <span className="rounded bg-slate-100 px-1 text-[0.3rem] text-slate-600">{item.tag}</span>
              <span className="text-[0.28rem] text-slate-400">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScreenRshift = () => (
  <div className="h-full bg-[#1e1e2e] p-2 font-mono">
    <div className="mb-2 flex items-center gap-2">
      <div className="flex h-4 w-4 items-center justify-center rounded bg-emerald-500/20 text-[0.48rem] text-emerald-400 ring-1 ring-emerald-500/30">
        ⇌
      </div>
      <div className="h-1.5 w-16 rounded-full bg-slate-100" />
      <div className="flex-1" />
      <div className="flex h-4 w-10 items-center justify-center rounded bg-emerald-500 text-[0.42rem] font-bold text-white">
        Export →
      </div>
    </div>

    <div className="mb-2 rounded bg-[#12121f] p-2">
      <div className="mb-2 text-[0.52rem] font-bold text-emerald-400">Detected Shifts</div>
      {[
        { date: "Mon 7/21", time: "09:00–17:00" },
        { date: "Wed 7/23", time: "10:00–19:00" },
        { date: "Fri 7/25", time: "08:00–16:00" },
      ].map((item) => (
        <div key={item.date} className="flex justify-between border-b border-emerald-900/50 py-1 text-[0.5rem] text-slate-400 last:border-b-0">
          <span>{item.date}</span>
          <span className="text-emerald-400">{item.time}</span>
        </div>
      ))}
    </div>

    <div className="flex h-5 items-center justify-center rounded bg-emerald-500 text-[0.5rem] font-bold text-white">
      Add to Calendar
    </div>
  </div>
);

const ScreenEcom = () => (
  <div className="h-full overflow-hidden bg-slate-50">
    <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-3 py-2">
      <div className="h-1.5 w-10 rounded-full bg-emerald-500" />
      <div className="flex-1" />
      <div className="h-1.5 w-6 rounded-full bg-slate-200" />
      <div className="h-1.5 w-6 rounded-full bg-slate-200" />
    </div>
    <div className="space-y-2 p-2">
      <div className="flex gap-2 overflow-hidden">
        {['All', 'Electronics', 'Clothing', 'Books'].map((label) => (
          <div key={label} className={`rounded border px-2 py-1 ${label === 'All' ? 'border-emerald-500/40 bg-emerald-50' : 'border-slate-200 bg-slate-100'}`}>
            <div className={`h-1.5 w-5 rounded-full ${label === 'All' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="rounded border border-slate-100 bg-white p-1.5">
            <div className="mb-1 h-6 rounded bg-slate-100" />
            <div className="mb-1 h-1.5 w-4/5 rounded-full bg-slate-900" />
            <div className="mb-2 h-1.5 w-1/2 rounded-full bg-emerald-500" />
            <div className="flex h-3 items-center justify-center rounded bg-emerald-500">
              <div className="h-1 w-3/5 rounded-full bg-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ScreenEcomPhone = () => (
  <div className="h-full bg-slate-50 p-1.5">
    <div className="mb-1.5 flex h-4 items-center rounded bg-emerald-500 px-1.5">
      <div className="h-1 rounded-full bg-white/80" />
    </div>
    {[...Array(5)].map((_, index) => (
      <div key={index} className="mb-1 flex gap-1 rounded border border-slate-100 bg-white p-1">
        <div className="h-5 w-5 rounded bg-slate-100" />
        <div className="flex-1">
          <div className="mb-0.5 h-1.5 w-3/4 rounded-full bg-slate-900" />
          <div className="h-1.5 w-2/5 rounded-full bg-emerald-500" />
        </div>
      </div>
    ))}
  </div>
);

const PROJECT_META = [
  {
    id: "bnb",
    live: false,
    githubUrl: "https://github.com/Brice-art",
    stack: ["Laravel", "Stripe", "Reverb", "Email Automation", "PHPUnit"],
    screen: <ScreenBooking />,
    hasPhone: false,
  },
  {
    id: "huye",
    live: true,
    liveUrl: "https://huye-finds.vercel.app",
    githubUrl: "https://github.com/Brice-art/HuyeFinds-frontend",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Express"],
    screen: <ScreenHuye />,
    hasPhone: true,
    phoneScreen: <ScreenHuyePhone />,
  },
  {
    id: "agakayi",
    live: true,
    liveUrl: "https://agakayi.xyz",
    githubUrl: "https://github.com/Brice-art/Agakayi",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    screen: <ScreenAgakayi />,
    hasPhone: true,
    phoneScreen: <ScreenAgakayiPhone />,
  },
  {
    id: "rshift",
    live: false,
    githubUrl: "https://github.com/Brice-art/Rshift-extraction-chrome-extension",
    stack: ["JavaScript", "DOM API", "Google Calendar API", "OAuth 2.0", "Chrome Extensions"],
    screen: <ScreenRshift />,
    hasPhone: false,
  },
  {
    id: "ecom",
    live: false,
    githubUrl: "https://github.com/Brice-art/ecommerce-site-php-mysql",
    stack: ["PHP", "MySQL", "MVC Pattern", "OOP", "SQL"],
    screen: <ScreenEcom />,
    hasPhone: true,
    phoneScreen: <ScreenEcomPhone />,
  },
];

const ProjectCard = ({ meta, copy, reverse }) => {
  const { t } = useLang();
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal project-section">
      <div className={`grid grid-cols-1 gap-6 lg:gap-10 ${reverse ? "lg:grid-flow-col-dense lg:grid-cols-2" : "lg:grid-cols-2"}`} dir={reverse ? "rtl" : "ltr"}>
        <div className={`hidden lg:block bg-slate-100 ${reverse ? "lg:border-l" : "lg:border-r"} border-slate-200`} dir="ltr">
          <ProjectMockup hasPhone={meta.hasPhone} phoneChildren={meta.phoneScreen}>
            {meta.screen}
          </ProjectMockup>
        </div>

        <div className="flex flex-col justify-center p-4 md:p-10" dir="ltr">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {meta.live ? (
              <>
                <span className="live-dot bg-blue-600" />
                <span className="text-[0.75rem] font-semibold text-blue-600">{t.projLive}</span>
              </>
            ) : (
              <span className="rounded bg-slate-200 px-2 py-1 text-[0.75rem] font-semibold text-slate-500">
                {t.projInProgress}
              </span>
            )}
            <span className="text-[0.7rem] text-slate-400">{copy.highlight}</span>
          </div>

          <h3 className="mb-2 text-[clamp(1.2rem,2.2vw,1.5rem)] font-extrabold tracking-[-0.02em] text-slate-900">
            {copy.title}
          </h3>
          <p className="mb-4 text-[clamp(0.8rem,1.4vw,0.875rem)] font-medium text-blue-600">
            {copy.subtitle}
          </p>
          <p className="mb-6 text-[clamp(0.8rem,1.4vw,0.875rem)] leading-7 text-slate-500">
            {copy.description}
          </p>

          <div className="mb-7 flex flex-wrap gap-2">
            {meta.stack.map((stack) => (
              <span key={stack} className="skill-tag">
                {stack}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {meta.live ? (
              <a href={meta.liveUrl} target="_blank" rel="noreferrer" className="btn-live">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {t.projLiveDemo}
              </a>
            ) : null}

            <a href={meta.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              {t.projSource}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useLang();
  const ref = useReveal();

  return (
    <section id="projects" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div ref={ref} className="reveal mb-12 text-center">
          <div className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-blue-600">
            {t.projLabel}
          </div>
          <h2 className="mb-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-slate-900">
            {t.projHeadline}
          </h2>
          <p className="mx-auto max-w-xl text-[0.95rem] leading-7 text-slate-500">{t.projSub}</p>
        </div>

        {PROJECT_META.map((meta, index) => (
          <ProjectCard key={meta.id} meta={meta} copy={t.proj[index]} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLang();
  const ref = useReveal();

  return (
    <section id="contact" className="bg-slate-900 px-5 py-24 md:px-8">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <div className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-blue-400">
          {t.contactLabel}
        </div>
        <h2 className="mb-4 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-50">
          {t.contactHeadline}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-slate-400">{t.contactSub}</p>

        <div className="contact-actions mb-12 flex flex-wrap justify-center gap-4">
          <a href="mailto:bricealibyilingiro@gmail.com" className="contact-btn primary">
            {t.contactEmail}
          </a>
          <a href="https://www.linkedin.com/in/briceali" target="_blank" rel="noreferrer" className="contact-btn">
            LinkedIn
          </a>
          <a href="https://github.com/Brice-art" target="_blank" rel="noreferrer" className="contact-btn">
            GitHub
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-8 text-[0.8rem] text-slate-500">
          <span>{t.contactFooter}</span>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const t = COPY[lang];

  return (
    <LangCtx.Provider value={{ lang, t }}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Nav lang={lang} setLang={setLang} />
        <Hero />
        <Stats />
        <About />
        <CoreExpertise />
        <Skills />
        <Projects />
        <OpenSource />
        <Contact />
      </div>
    </LangCtx.Provider>
  );
}
