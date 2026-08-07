import { useState, useEffect, useRef, createContext, useContext } from "react";
import AnimatedBackground from "./AnimatedBackground";
import { TbSchoolFilled } from "react-icons/tb";
import { TbBriefcaseFilled } from "react-icons/tb";
import { TbCode } from "react-icons/tb";
import { TbDatabase } from "react-icons/tb";
import { TbTools } from "react-icons/tb";
import { TbDownload } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";

/* ─────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────── */
const COPY = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",

    downloadCV: "Download CV",

    heroGreeting: "Hello, I'm Brice Ali",

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
      {
        year: "2025",
        title: "Built MERN Applications",
      },
      {
        year: "2025",
        title: "Developed Browser Extensions",
      },
      {
        year: "2024",
        title: "Started Full-Stack Development",
      },
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

    projMoreGH: "View More on GitHub",

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
    heroGreeting: "こんにちは、ブリスです",
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
      {
        year: "2025",
        title: "MERNアプリを構築",
      },
      {
        year: "2025",
        title: "ブラウザ拡張機能を開発",
      },
      {
        year: "2024",
        title: "フルスタック開発を開始",
      },
    ],
    openSourceLabel: "オープンソース",
    openSourceText:
      "公開でソフトウェアを構築し、プロジェクトを継続的に改善することを楽しんでいます。",
    openSourceCTA: "リポジトリを見る →",
    skillsLabel: "スキル",
    skillsHeadline: "使用技術",
    skillsSub:
      "APIからUIまで、フルスタックアプリを構築するために使用するスタック。",
    skillFrontend: "フロントエンド",
    skillBackend: "バックエンド",
    skillData: "データ & ツール",
    projLabel: "主なプロジェクト",
    projHeadline: "制作物",
    projSub:
      "API・認証・ブラウザ拡張機能・フルスタックアプリなど、実際のプロジェクト。",
    projMoreGH: "GitHubでもっと見る",
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
          "日本でアルバイトをしていた時に開発した。自分のスケジュールをすべてGoogleカレンダーで管理したいと思ったきっかけから開発した。　DOMを解析してシフトデータを抽出し、OAuthでGoogleカレンダーにエクスポート。ワンクリックで手動入力ゼロ。認証・API通信・イベント作成をエンドツーエンドで処理。",
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
    contactSub:
      "バックエンド開発・フルスタック業務・その他何でも、気軽にご連絡ください。",
    contactEmail: "✉ メールする",
    contactFooter: "ブリス — キガリ · 東京",
  },
};

/* ─────────────────────────────────────────────
   LANGUAGE CONTEXT
───────────────────────────────────────────── */
const LangCtx = createContext({ lang: "en", t: COPY.en });
const useLang = () => useContext(LangCtx);

/* ─────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    :root {
      --primary:       #3B5FFB;
      --primary-light: #5B7BFF;
      --primary-dim:   #E8EDFF;
      --primary-mid:   #C2CFFF;
      --primary-dark:  #2E4BD1;
      --bg:          #ffffff;
      --bg2:         #f9fafb;
      --bg3:         #f3f4f6;
      --border:      #e5e7eb;
      --text:        #0f172a;
      --text2:       #374151;
      --text3:       #6b7280;
      --text4:       #9ca3af;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    ::selection { background: var(--primary-dim); color: var(--primary); }

    .nav-link {
      font-size: 0.875rem; font-weight: 500;
      color: var(--text3); text-decoration: none;
      transition: color 0.15s; position: relative;
    }
    .nav-link:hover { color: var(--text); }
    .nav-link.active { color: var(--text); }
    .nav-link.active::after {
      content: ''; position: absolute;
      bottom: -4px; left: 0; right: 0;
      height: 2px; background: var(--primary); border-radius: 1px;
    }

    /* Language toggle */
    .lang-toggle {
      display: flex; align-items: center;
      background: var(--bg3); border: 1px solid var(--border);
      border-radius: 20px; padding: 2px; gap: 0;
    }
    .lang-btn {
      padding: 0.25rem 0.65rem;
      border-radius: 16px; border: none; cursor: pointer;
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem; font-weight: 600;
      transition: background 0.15s, color 0.15s;
      background: transparent; color: var(--text3);
    }
    .lang-btn.active {
      background: var(--primary); color: #fff;
    }

    .btn-primary {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.75rem 1.5rem; background: var(--primary); color: #fff;
      font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 600;
      text-decoration: none; border: none; border-radius: 8px; cursor: pointer;
      transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
    }
    .btn-primary:hover { background: var(--primary-dark); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(59,95,251,0.3); }
    .btn-primary:active { transform: translateY(0); }

    .btn-secondary {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.75rem 1.5rem; background: transparent; color: var(--text2);
      font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 500;
      text-decoration: none; border: 1.5px solid var(--border); border-radius: 8px; cursor: pointer;
      transition: border-color 0.15s, color 0.15s, background 0.15s;
    }
    .btn-secondary:hover { border-color: var(--text3); color: var(--text); background: var(--bg3); }

    .btn-live {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.7rem 1.4rem; background: var(--primary); color: #fff;
      font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 600;
      text-decoration: none; border-radius: 8px; cursor: pointer;
      transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
    }
    .btn-live:hover { background: var(--primary-dark); transform: translateY(-1px); box-shadow: 0 4px 20px rgba(59,95,251,0.35); }

    .btn-ghost {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.7rem 1.4rem; background: transparent; color: var(--text2);
      font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 500;
      text-decoration: none; border: 1.5px solid var(--border); border-radius: 8px; cursor: pointer;
      transition: border-color 0.15s, color 0.15s, background 0.15s;
    }
    .btn-ghost:hover { border-color: var(--text3); background: var(--bg3); color: var(--text); }

    .skill-tag {
      display: inline-block; padding: 0.3rem 0.75rem;
      background: var(--bg3); border: 1px solid var(--border); border-radius: 20px;
      font-size: 0.78rem; font-weight: 500; color: var(--text2);
      transition: border-color 0.15s, color 0.15s, background 0.15s;
    }
    .skill-tag:hover { border-color: var(--primary); color: var(--primary); background: var(--primary-dim); }

    .live-dot {
      display: inline-block; width: 8px; height: 8px;
      background: var(--primary-light); border-radius: 50%;
      animation: pulse-dot 2s ease-in-out infinite;
    }
    @keyframes pulse-dot {
      0%, 100% { box-shadow: 0 0 0 0 rgba(91,123,255,0.5); }
      50%       { box-shadow: 0 0 0 5px rgba(91,123,255,0); }
    }

    .reveal {
      opacity: 0; transform: translateY(24px);
      transition: opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1);
    }
    .reveal.visible { opacity: 1; transform: none; }

    .cursor {
      display: inline-block; width: 3px; height: 0.85em;
      background: var(--primary); margin-left: 2px; vertical-align: middle;
      animation: blink 1.1s step-end infinite;
    }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

    /* Laptop */
    .laptop-wrap { position: relative; width: 100%; max-width: 540px; }
    .laptop-body {
      background: #1e293b; border-radius: 12px 12px 0 0; padding: 12px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1);
    }
    .laptop-notch { width: 60px; height: 8px; background: #0f172a; border-radius: 4px; margin: 0 auto 10px; }
    .laptop-screen { background: #0f172a; border-radius: 6px; overflow: hidden; aspect-ratio: 16/10; position: relative; }
    .laptop-base { background: linear-gradient(180deg, #cbd5e1 0%, #94a3b8 100%); height: 14px; border-radius: 0 0 4px 4px; }
    .laptop-foot { background: #94a3b8; height: 6px; width: 50%; margin: 0 auto; border-radius: 0 0 8px 8px; }

    /* Phone */
    .phone-wrap { position: absolute; bottom: -20px; right: -30px; width: 28%; z-index: 10; }
    .phone-body { background: #1e293b; border-radius: 20px; padding: 8px; box-shadow: 0 20px 40px rgba(0,0,0,0.25); }
    .phone-notch { width: 40%; height: 6px; background: #0f172a; border-radius: 3px; margin: 0 auto 6px; }
    .phone-screen { background: #0f172a; border-radius: 14px; overflow: hidden; aspect-ratio: 9/19; }

    /* Code */
    .code-kw  { color: #c678dd; }
    .code-fn  { color: #61afef; }
    .code-str { color: #98c379; }
    .code-num { color: #d19a66; }
    .code-cm  { color: #5c6370; font-style: italic; }
    .code-var { color: #e06c75; }

    .stat-card {
      background: var(--bg); border: 1px solid var(--border); border-radius: 12px;
      padding: 1.5rem; text-align: center;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .stat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.07); }

    .info-card {
      background: var(--bg); border: 1px solid var(--border); border-radius: 12px;
      padding: 1.25rem 1.5rem; transition: border-color 0.15s, box-shadow 0.15s;
    }
    .info-card:hover { border-color: var(--primary-mid); box-shadow: 0 4px 16px rgba(59,95,251,0.08); }

    .skill-card {
      background: var(--bg); border: 1px solid var(--border); border-radius: 14px;
      padding: 1.75rem; transition: box-shadow 0.2s, border-color 0.2s;
    }
    .skill-card:hover { border-color: var(--primary-mid); box-shadow: 0 8px 24px rgba(59,95,251,0.09); }

    .project-section {
      background: var(--bg2); border: 1px solid var(--border);
      border-radius: 20px; overflow: hidden; margin-bottom: 1.5rem;
      transition: box-shadow 0.2s;
    }
    .project-section:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.07); }

    .social-btn {
      display: inline-flex; align-items: center; justify-content: center;
      width: 40px; height: 40px; background: var(--bg); border: 1.5px solid var(--border);
      border-radius: 50%; text-decoration: none; color: var(--text3);
      transition: border-color 0.15s, color 0.15s, background 0.15s; font-size: 1rem;
    }
    .social-btn:hover { border-color: var(--primary); color: var(--primary); background: var(--primary-dim); }

    .contact-btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.85rem 1.75rem; border: 1.5px solid rgba(255,255,255,0.18);
      color: rgba(255,255,255,0.9); font-family: 'Inter', sans-serif;
      font-size: 0.875rem; font-weight: 500; text-decoration: none; border-radius: 8px;
      transition: background 0.15s, border-color 0.15s;
    }
    .contact-btn:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.4); }
    .contact-btn.primary { background: var(--primary); border-color: var(--primary); color: #fff; font-weight: 600; }
    .contact-btn.primary:hover { background: var(--primary-dark); border-color: var(--primary-dark); }

    .site-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      padding: 0 2rem; height: 64px; display: flex; align-items: center; justify-content: space-between;
      background: transparent; border-bottom: 1px solid transparent; transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
    }
    .site-nav.scrolled {
      background: rgba(255,255,255,0.92); backdrop-filter: blur(16px);
      border-bottom-color: rgba(229,231,235,0.8);
    }
    .site-nav .nav-links, .site-nav .nav-actions { display: flex; align-items: center; }
    .site-nav .nav-links { gap: 2rem; }
    .site-nav .nav-actions { gap: 0.75rem; }
    .mobile-menu-toggle {
      display: none; align-items: center; justify-content: center; width: 40px; height: 40px;
      border: 1px solid var(--border); border-radius: 999px; background: var(--bg); color: var(--text2); cursor: pointer;
    }
    .mobile-menu-toggle span {
      display: block; width: 18px; height: 2px; background: currentColor; border-radius: 999px; margin: 2px 0;
    }
    .mobile-menu {
      display: none; position: fixed; top: 64px; left: 0; right: 0; z-index: 999;
      background: rgba(255,255,255,0.96); border-bottom: 1px solid var(--border); padding: 1rem 1.25rem 1.25rem;
      box-shadow: 0 16px 40px rgba(15,23,42,0.06);
      flex-direction: column; gap: 0.8rem;
    }
    .mobile-menu.open { display: flex; }
    .mobile-menu .nav-link { font-size: 0.95rem; }

    @media (max-width: 960px) {
      .site-nav { padding: 0 1.25rem; }
      .site-nav .nav-links, .site-nav .nav-actions { display: none; }
      .mobile-menu-toggle { display: inline-flex; flex-direction: column; }
      .hero-grid, .about-grid, .project-grid { grid-template-columns: 1fr !important; }
      .hero-grid { gap: 2.5rem; }
      .about-grid { gap: 2rem; }
      .skills-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      .hero-section { padding: 96px 1.25rem 0 !important; }
      .about-section, .skills-section, .projects-section, .contact-section {
        padding: 4.5rem 1.25rem !important;
      }
      .laptop-wrap, .phone-wrap { display: none; }
    }

    @media (max-width: 768px) {
      .laptop-wrap, .phone-wrap { display: none; }
      .stats-grid { grid-template-columns: 1fr 1fr !important; }
      .project-content { padding: 1.5rem !important; }
      .project-visual { padding: 1rem 1rem 0 !important; }
      .hero-actions, .hero-social-row { gap: 0.75rem; }
      .contact-actions { flex-direction: column; align-items: stretch; }
      .hero-social-row { flex-wrap: wrap; }
    }

    @media (max-width: 560px) {
      .site-nav { padding: 0 1rem; height: 60px; }
      .mobile-menu { top: 60px; }
      .hero-section { padding: 88px 1rem 0 !important; }
      .about-section, .skills-section, .projects-section, .contact-section {
        padding: 4rem 1rem !important;
      }
      .stats-grid { grid-template-columns: 1fr !important; }
      .skills-grid { grid-template-columns: 1fr !important; }
      .hero-actions { flex-direction: column; align-items: stretch; }
      .hero-actions .btn-primary, .hero-actions .btn-secondary,
      .hero-actions .btn-live, .hero-actions .btn-ghost,
      .contact-actions .contact-btn {
        width: 100%; justify-content: center;
      }
      .hero-social-row { justify-content: flex-start; flex-wrap: wrap; }
      .project-content { padding: 1.25rem !important; }
      .project-visual { padding: 0.75rem 0.75rem 0 !important; }
      .project-content h3 { font-size: 1.2rem !important; }
      .project-content p { font-size: 0.82rem !important; }
      .project-content .skill-tag { font-size: 0.72rem !important; }
    }
  `}</style>
);

/* ─────────────────────────────────────────────
   UTILITIES
───────────────────────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
const Nav = ({ lang, setLang }) => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
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
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              width: 34,
              height: 34,
              background: "var(--primary)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.9rem",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            B
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 800, paddingRight: 12 }}>
            Brice
          </div>
        </div>

        <div className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="lang-toggle">
            <button
              className={`lang-btn${lang === "en" ? " active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={`lang-btn${lang === "jp" ? " active" : ""}`}
              onClick={() => setLang("jp")}
            >
              JP
            </button>
          </div>
          <a
            href="/Resume-Brice.pdf"
            download
            className="btn-primary"
            style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
          >
            <TbDownload /> {t.downloadCV}
          </a>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <div className="lang-toggle" style={{ alignSelf: "flex-start" }}>
          <button
            className={`lang-btn${lang === "en" ? " active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={`lang-btn${lang === "jp" ? " active" : ""}`}
            onClick={() => setLang("jp")}
          >
            JP
          </button>
        </div>
        <a
          href="/Resume-Brice.pdf"
          download
          className="btn-primary"
          style={{
            padding: "0.55rem 0.95rem",
            fontSize: "0.8rem",
            alignSelf: "flex-start",
          }}
        >
          <TbDownload /> {t.downloadCV}
        </a>
      </div>
    </>
  );
};

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
const Hero = () => {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
  }, []);

  // Reset typing when language changes
  useEffect(() => {
    setDisplayed("");
    setDeleting(false);
    setWordIdx(0);
  }, [t]);

  useEffect(() => {
    const word = t.heroWords[wordIdx];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        70,
      );
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length - 1)),
        40,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % t.heroWords.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx, t]);

  const fadeStyle = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  const headlineParts = t.heroHeadline.split("\n");

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 2rem 0",
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.4) 0%, rgba(240,253,244,0.25) 50%, rgba(255,255,255,0.4) 100%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <h1
              style={{
                ...fadeStyle(0.2),
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--text)",
                marginBottom: "1.25rem",
              }}
            >
              {headlineParts.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlineParts.length - 1 && <br />}
                </span>
              ))}{" "}
              <span
                style={{
                  color: "var(--primary)",
                  whiteSpace: "pre-line",
                }}
              >
                {displayed}
                <span className="cursor" />
              </span>
            </h1>

            <p
              style={{
                ...fadeStyle(0.32),
                fontSize: "clamp(0.95rem, 1.7vw, 1.05rem)",
                color: "var(--text3)",
                lineHeight: 1.7,
                maxWidth: 420,
                marginBottom: "1.5rem",
              }}
            >
              {t.heroSub}
            </p>

            <div
              style={{
                ...fadeStyle(0.4),
                maxWidth: 540,
                marginBottom: "1.75rem",
                padding: "1rem 1.2rem",
                borderRadius: 18,
                background: "rgba(59,95,251,0.08)",
                border: "1px solid rgba(59,95,251,0.14)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                  marginBottom: "0.35rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {t.heroRecentLabel}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text2)",
                  lineHeight: 1.6,
                }}
              >
                {t.heroRecentText}
              </div>
            </div>

            <div
              className="hero-actions"
              style={{
                ...fadeStyle(0.42),
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              <a href="#projects" className="btn-primary">
                {t.heroCTA}
              </a>
              <a href="#contact" className="btn-secondary">
                {t.heroContact}
              </a>
            </div>

            {/* <div
              style={{
                ...fadeStyle(0.44),
                maxWidth: 520,
                borderRadius: 18,
                padding: "1rem 1rem",
                background: "rgba(59,95,251,0.08)",
                border: "1px solid rgba(59,95,251,0.16)",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                }}
              >
                <span>🟢</span>
                <span>Currently</span>
              </div>
              <div
                style={{
                  display: "grid",
                  gap: "0.45rem",
                  fontSize: "0.88rem",
                  color: "var(--text2)",
                  lineHeight: 1.6,
                }}
              >
                <span>Building Laravel applications</span>
                <span>Learning system design</span>
                <span>Open to Full-Stack opportunities</span>
              </div>
            </div> */}

            <div
              className="hero-social-row"
              style={{
                ...fadeStyle(0.52),
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(0.75rem, 1.3vw, 0.8rem)",
                  color: "var(--text4)",
                  fontWeight: 500,
                }}
              >
                {t.heroConnect}
              </span>
              <a
                href="https://github.com/Brice-art"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="GitHub"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/briceali/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:bricealibyilingiro@gmail.com"
                className="social-btn"
                title="Email"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — CSS Laptop */}
          <div
            style={{ ...fadeStyle(0.35), position: "relative", width: "100%" }}
          >
            <div className="laptop-wrap" style={{ margin: "0 auto" }}>
              <div className="laptop-body">
                <div className="laptop-notch" />
                <div className="laptop-screen">
                  <div
                    style={{
                      padding: "1rem",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "#ff5f57",
                        }}
                      />
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "#febc2e",
                        }}
                      />
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "#28c840",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          background: "#1e293b",
                          borderRadius: 4,
                          padding: "2px 8px",
                          marginLeft: 6,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.6rem",
                            color: "#475569",
                          }}
                        >
                          notes.controller.js
                        </span>
                      </div>
                    </div>
                    <pre
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.68rem",
                        lineHeight: 1.7,
                        color: "#abb2bf",
                      }}
                    >
                      <code>
                        {`  `}
                        <span className="code-kw">const</span>
                        {` `}
                        <span className="code-fn">createNote</span>
                        {` = `}
                        <span className="code-kw">async</span>
                        {` (`}
                        <span className="code-var">req</span>
                        {`, `}
                        <span className="code-var">res</span>
                        {`) => {`}
                        {"\n"}
                        {`    `}
                        <span className="code-kw">const</span>
                        {` { title, content } = `}
                        <span className="code-var">req</span>
                        {`.body;`}
                        {"\n"}
                        {`    `}
                        <span className="code-kw">const</span>
                        {` note = `}
                        <span className="code-kw">await</span>
                        {` `}
                        <span className="code-fn">Note</span>
                        {`.`}
                        <span className="code-fn">create</span>
                        {`({`}
                        {"\n"}
                        {`      title, content,`}
                        {"\n"}
                        {`      userId: `}
                        <span className="code-var">req</span>
                        {`.user.`}
                        <span className="code-var">id</span>
                        {`,`}
                        {"\n"}
                        {`    });`}
                        {"\n"}
                        {`    `}
                        <span className="code-var">res</span>
                        {`.`}
                        <span className="code-fn">status</span>
                        {`(`}
                        <span className="code-num">201</span>
                        {`).`}
                        <span className="code-fn">json</span>
                        {`(note);`}
                        {"\n"}
                        {`  };`}
                        {"\n\n"}
                        {`  `}
                        <span className="code-cm">
                          // JWT auth · MongoDB · REST API
                        </span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="laptop-base" />
              <div className="laptop-foot" />
              <div className="phone-wrap">
                <div className="phone-body">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div
                      style={{
                        padding: "6px",
                        height: "100%",
                        background: "#0f172a",
                      }}
                    >
                      <div
                        style={{
                          background: "#1e293b",
                          borderRadius: 6,
                          padding: "6px",
                          marginBottom: 4,
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.45rem",
                            color: "#22c55e",
                            fontFamily: "monospace",
                            fontWeight: 600,
                          }}
                        >
                          agakayi.xyz
                        </div>
                      </div>
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          style={{
                            background: "#1e293b",
                            borderRadius: 4,
                            padding: "4px 6px",
                            marginBottom: 3,
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background:
                                i === 1
                                  ? "#22c55e"
                                  : i === 2
                                    ? "#61afef"
                                    : "#c678dd",
                            }}
                          />
                          <div
                            style={{
                              height: 3,
                              background: "#334155",
                              borderRadius: 2,
                              flex: 1,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */
const StatItem = ({ value, suffix, label, started }) => {
  const num = parseInt(value, 10);
  const count = useCountUp(num, 1600, started);
  return (
    <div className="stat-card">
      <div
        style={{
          fontSize: "clamp(1.7rem, 3vw, 2.25rem)",
          fontWeight: 800,
          color: "var(--text)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "clamp(0.75rem, 1.4vw, 0.8rem)",
          color: "var(--text3)",
          marginTop: "0.4rem",
          fontWeight: 500,
        }}
      >
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
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ padding: "4rem 2rem", background: "transparent" }}>
      <div
        className="stats-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
      >
        <StatItem
          value={t.stat1v}
          suffix={t.stat1s}
          label={t.stat1l}
          started={started}
        />
        <StatItem
          value={t.stat2v}
          suffix={t.stat2s}
          label={t.stat2l}
          started={started}
        />
        <StatItem
          value={t.stat3v}
          suffix={t.stat3s}
          label={t.stat3l}
          started={started}
        />
        <StatItem
          value={t.stat4v}
          suffix={t.stat4s}
          label={t.stat4l}
          started={started}
        />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
const About = () => {
  const { t } = useLang();
  const ref = useReveal();
  const headlineParts = t.aboutHeadline.split("\n");
  const infoCards = [
    { icon: <TbSchoolFilled />, title: t.infoEduTitle, body: t.infoEduBody },
    { icon: <IoLanguage />, title: t.infoLangTitle, body: t.infoLangBody },
    { icon: <FiTarget />, title: t.infoFocusTitle, body: t.infoFocusBody },
    { icon: <FaMapMarkerAlt />, title: t.infoBgTitle, body: t.infoBgBody },
  ];
  return (
    <section
      id="about"
      className="about-section"
      style={{ padding: "6rem 2rem", background: "transparent" }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <div className="live-dot" style={{ background: "var(--primary)" }} />
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--primary)",
              textTransform: "uppercase",
            }}
          >
            {t.aboutLabel}
          </span>
        </div>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--text)",
                marginBottom: "1.25rem",
              }}
            >
              {headlineParts.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlineParts.length - 1 && <br />}
                </span>
              ))}{" "}
              <span style={{ color: "var(--primary)" }}>{t.aboutAccent}</span>
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text3)",
                lineHeight: 1.75,
                marginBottom: "1rem",
              }}
            >
              {t.aboutP1}
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text3)",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              {t.aboutP2}
            </p>
            <a href="#projects" className="btn-primary">
              {t.aboutCTA}
            </a>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {infoCards.map(({ icon, title, body }) => (
              <div key={title} className="info-card">
                <div style={{ fontSize: "1.4rem", marginBottom: "0.6rem" }}>
                  {icon}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.8rem, 1.3vw, 0.85rem)",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.74rem, 1.3vw, 0.8rem)",
                    color: "var(--text3)",
                    lineHeight: 1.6,
                  }}
                >
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

/* ─────────────────────────────────────────────
   CORE EXPERTISE
───────────────────────────────────────────── */
const CoreExpertise = () => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <section
      id="expertise"
      className="expertise-section"
      style={{ padding: "6rem 2rem", background: "transparent" }}
    >
      <div ref={ref} className="reveal" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                className="live-dot"
                style={{ background: "var(--primary)" }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--primary)",
                  textTransform: "uppercase",
                }}
              >
                {t.coreHeadline}
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {t.coreItems.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.9rem 1rem",
                    background: "var(--bg3)",
                    borderRadius: 14,
                    border: "1px solid var(--border)",
                    color: "var(--text2)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: "var(--primary)" }}>✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "rgba(59,95,251,0.08)",
                borderRadius: 18,
                border: "1px solid rgba(59,95,251,0.16)",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                }}
              >
                {t.philosophyLabel}
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text2)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {t.philosophyText}
              </p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              borderRadius: 20,
              background: "var(--bg3)",
              padding: "1.5rem",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "0.75rem",
              }}
            >
              {t.experienceLabel}
            </div>
            {t.experienceTimeline.map((item) => (
              <div
                key={item.year + item.title}
                style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
              >
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    minWidth: 52,
                  }}
                >
                  {item.year}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    {item.title}
                  </div>
                  {item.description && (
                    <div
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text2)",
                        marginTop: "0.25rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SKILLS
───────────────────────────────────────────── */
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
      items: [
        "Node.js",
        "Express.js",
        "Python",
        "PHP / Laravel",
        "REST APIs",
        "JWT Auth",
      ],
    },
    {
      title: t.skillData,
      items: [
        "MongoDB",
        "SQL / PostgreSQL",
        "Git",
        "Linux CLI",
        "OOP",
        "MVC Pattern",
        "DSA",
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="skills-section"
      style={{ padding: "6rem 2rem", background: "transparent" }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--primary)",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            {t.skillsLabel}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            {t.skillsHeadline}
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text3)",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            {t.skillsSub}
          </p>
        </div>
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
        >
          {groups.map(({ title, items }) => (
            <div key={title} className="skill-card">
              <h3
                style={{
                  fontSize: "clamp(0.85rem, 1.4vw, 0.9rem)",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "1rem",
                }}
              >
                {title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {items.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
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

/* ─────────────────────────────────────────────
   OPEN SOURCE
───────────────────────────────────────────── */
const OpenSource = () => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <section
      id="open-source"
      className="open-source-section"
      style={{ padding: "6rem 2rem", background: "transparent" }}
    >
      <div ref={ref} className="reveal" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--primary)",
              textTransform: "uppercase",
            }}
          >
            {t.openSourceLabel}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            {t.openSourceLabel}
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text3)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            {t.openSourceText}
          </p>
          <a
            href="https://github.com/Brice-art"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ maxWidth: 220, margin: "0 auto" }}
          >
            {t.openSourceCTA}
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PROJECT MOCKUP SCREENS (unchanged)
───────────────────────────────────────────── */
const ProjectMockup = ({
  screenBg = "#0f172a",
  children,
  hasPhone = false,
  phoneChildren,
}) => (
  <div style={{ position: "relative", padding: "1.5rem 1.5rem 0" }}>
    <div
      style={{
        background: "#1e293b",
        borderRadius: "10px 10px 0 0",
        padding: "10px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#ff5f57",
          }}
        />
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#febc2e",
          }}
        />
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#28c840",
          }}
        />
        <div
          style={{
            flex: 1,
            background: "#334155",
            borderRadius: 4,
            height: 16,
            marginLeft: 6,
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
          }}
        >
          <div
            style={{
              height: 4,
              width: "60%",
              background: "#475569",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
      <div
        style={{
          background: screenBg,
          borderRadius: 4,
          overflow: "hidden",
          aspectRatio: "16/9",
        }}
      >
        {children}
      </div>
    </div>
    <div
      style={{
        height: 10,
        background: "linear-gradient(180deg,#cbd5e1,#94a3b8)",
        borderRadius: "0 0 4px 4px",
      }}
    />
    <div
      style={{
        height: 5,
        width: "45%",
        background: "#94a3b8",
        margin: "0 auto",
        borderRadius: "0 0 6px 6px",
      }}
    />
    {hasPhone && (
      <div
        style={{
          position: "absolute",
          bottom: -10,
          right: 10,
          width: "22%",
          zIndex: 10,
        }}
      >
        <div
          style={{
            background: "#1e293b",
            borderRadius: 14,
            padding: "6px",
            boxShadow: "0 16px 36px rgba(0,0,0,0.25)",
          }}
        >
          <div
            style={{
              width: "40%",
              height: 5,
              background: "#0f172a",
              borderRadius: 3,
              margin: "0 auto 5px",
            }}
          />
          <div
            style={{
              background: "#0f172a",
              borderRadius: 10,
              overflow: "hidden",
              aspectRatio: "9/19",
            }}
          >
            {phoneChildren}
          </div>
        </div>
      </div>
    )}
  </div>
);

// Accurate replica of Huye Finds desktop — warm gradient hero + nav + phone
const BookingScreen = () => (
  <div
    style={{
      background: "linear-gradient(135deg,#eef2ff 0%,#f8fafc 100%)",
      height: "100%",
      fontFamily: "Inter,sans-serif",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 12px",
        background: "rgba(255,255,255,0.85)",
        borderBottom: "1px solid rgba(148,163,184,0.2)",
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          background: "#3b82f6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.75rem",
        }}
      >
        B
      </div>
      <div>
        <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "#0f172a" }}>
          BnB Booking
        </div>
        <div style={{ fontSize: "0.44rem", color: "#475569" }}>
          Laravel Cloud workflow
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <div
        style={{
          fontSize: "0.48rem",
          color: "#2563eb",
          background: "#dbeafe",
          borderRadius: 999,
          padding: "4px 8px",
          fontWeight: 700,
        }}
      >
        Live support
      </div>
    </div>
    <div
      style={{
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{ fontSize: "0.7rem", color: "#0f172a", fontWeight: 700 }}
          >
            Booking flow
          </div>
          <div style={{ fontSize: "0.95rem", color: "#475569" }}>
            Secure payment, email alerts, and reservations.
          </div>
        </div>
        <div
          style={{
            background: "#ecfdf5",
            color: "#16a34a",
            borderRadius: 8,
            padding: "4px 8px",
            fontSize: "0.6rem",
            fontWeight: 700,
          }}
        >
          Stripe guarded
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
        }}
      >
        {[
          ["Check-in", "Jun 15"],
          ["Check-out", "Jun 18"],
          ["Guests", "2 adults"],
          ["Room", "Studio Suite"],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "10px 12px",
              border: "1px solid rgba(148,163,184,0.18)",
            }}
          >
            <div
              style={{ fontSize: "0.55rem", color: "#64748b", marginBottom: 4 }}
            >
              {label}
            </div>
            <div
              style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a" }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: 18,
          padding: "14px",
          border: "1px solid rgba(148,163,184,0.18)",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            color: "#0f172a",
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Payment status
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "#dbeafe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563eb",
              fontSize: "0.85rem",
            }}
          >
            ✓
          </div>
          <div>
            <div
              style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a" }}
            >
              Payment verified
            </div>
            <div style={{ fontSize: "0.65rem", color: "#64748b" }}>
              Webhook validation prevents duplicate charges on refresh.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BookingPhoneScreen = () => (
  <div
    style={{
      background: "#f8fafc",
      height: "100%",
      overflow: "hidden",
      fontFamily: "Inter,sans-serif",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        background: "#fff",
        borderBottom: "1px solid rgba(148,163,184,0.18)",
        padding: "8px 10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "0.6rem", color: "#0f172a", fontWeight: 700 }}>
        Booking verified
      </span>
      <span style={{ fontSize: "0.6rem", color: "#2563eb", fontWeight: 700 }}>
        Refund ready
      </span>
    </div>
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "12px",
          border: "1px solid rgba(148,163,184,0.18)",
        }}
      >
        <div style={{ fontSize: "0.75rem", color: "#475569", marginBottom: 6 }}>
          Reserved room
        </div>
        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a" }}>
          Studio Suite
        </div>
        <div style={{ fontSize: "0.72rem", color: "#64748b", marginTop: 6 }}>
          Jun 15 - Jun 18 · 2 guests
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        {[
          ["Email", "Sent"],
          ["Reverb", "Connected"],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "10px",
              flex: 1,
              border: "1px solid rgba(148,163,184,0.18)",
            }}
          >
            <div
              style={{ fontSize: "0.65rem", color: "#64748b", marginBottom: 4 }}
            >
              {label}
            </div>
            <div
              style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a" }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "12px",
          border: "1px solid rgba(148,163,184,0.18)",
        }}
      >
        <div style={{ fontSize: "0.72rem", color: "#475569", marginBottom: 4 }}>
          Testing workflow
        </div>
        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a" }}>
          Production smoke test + refund passed
        </div>
      </div>
    </div>
  </div>
);

const HuyeScreen = () => (
  <div
    style={{
      background: "linear-gradient(135deg,#f5ede0 0%,#e8d5c0 40%,#d4b896 100%)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "Inter,sans-serif",
    }}
  >
    {/* Nav */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 10px",
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(255,255,255,0.4)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 3,
          background: "#1a4a2e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "0.45rem", color: "#fff", fontWeight: 900 }}>
          H
        </span>
      </div>
      <span style={{ fontSize: "0.52rem", fontWeight: 700, color: "#1a4a2e" }}>
        Huye Finds
      </span>
      <div style={{ flex: 1 }} />
      {["Food & Drinks", "Shopping", "Services", "Accommodation"].map((l) => (
        <span
          key={l}
          style={{ fontSize: "0.42rem", color: "#374151", fontWeight: 500 }}
        >
          {l}
        </span>
      ))}
      <div
        style={{
          width: 32,
          height: 12,
          background: "#1a4a2e",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 4,
        }}
      >
        <span style={{ fontSize: "0.42rem", color: "#fff", fontWeight: 600 }}>
          Sign in
        </span>
      </div>
    </div>
    {/* Hero body */}
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        padding: "10px 14px",
        gap: 10,
        overflow: "hidden",
      }}
    >
      {/* Left text */}
      <div style={{ flex: "0 0 48%" }}>
        <div style={{ fontSize: "0.42rem", color: "#1a4a2e", marginBottom: 4 }}>
          ✦
        </div>
        <div
          style={{
            fontSize: "0.78rem",
            fontWeight: 800,
            color: "#111",
            lineHeight: 1.2,
            marginBottom: 4,
          }}
        >
          Find everything
          <br />
          you need in
          <br />
          <span style={{ color: "#1a4a2e" }}>Huye.</span>
        </div>
        <div
          style={{
            fontSize: "0.42rem",
            color: "#555",
            lineHeight: 1.5,
            marginBottom: 8,
          }}
        >
          Discover the best places around UR Huye.
          <br />
          Restaurants, shops, services and more.
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          <div
            style={{
              background: "#1a4a2e",
              borderRadius: 10,
              padding: "3px 8px",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span
              style={{ fontSize: "0.4rem", color: "#fff", fontWeight: 600 }}
            >
              ⊙ Explore Places
            </span>
          </div>
          <div
            style={{
              border: "1px solid #1a4a2e",
              borderRadius: 10,
              padding: "3px 8px",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span
              style={{ fontSize: "0.4rem", color: "#1a4a2e", fontWeight: 600 }}
            >
              ♡ Save Favorites
            </span>
          </div>
        </div>
        {/* Feature icons row */}
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          {[
            "🔍 Easy to find",
            "✏ See details",
            "♡ Save & Rate",
            "👥 For Students",
          ].map((f) => (
            <div key={f} style={{ fontSize: "0.38rem", color: "#555" }}>
              {f}
            </div>
          ))}
        </div>
      </div>
      {/* Right — phone mockup */}
      <div
        style={{
          flex: "0 0 42%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            width: "72%",
            background: "#f0f0f0",
            borderRadius: 14,
            padding: "5px 4px 8px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
            border: "2px solid #ddd",
          }}
        >
          {/* Status bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2px 6px 4px",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "0.4rem", fontWeight: 600, color: "#111" }}
            >
              14:37
            </span>
            <div
              style={{
                width: 18,
                height: 5,
                background: "#1a4a2e",
                borderRadius: 3,
              }}
            />
            <span style={{ fontSize: "0.38rem", color: "#555" }}>4G 🔋</span>
          </div>
          {/* Screen */}
          <div
            style={{
              background: "#fff",
              borderRadius: 10,
              overflow: "hidden",
              padding: "6px",
            }}
          >
            <div
              style={{ fontSize: "0.38rem", color: "#888", marginBottom: 1 }}
            >
              Hello, Customer 👋
            </div>
            <div
              style={{
                fontSize: "0.52rem",
                fontWeight: 700,
                color: "#111",
                marginBottom: 5,
                lineHeight: 1.2,
              }}
            >
              What are you looking for today?
            </div>
            <div
              style={{
                background: "#f5f5f5",
                borderRadius: 5,
                padding: "3px 5px",
                display: "flex",
                alignItems: "center",
                gap: 3,
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: "0.38rem", color: "#aaa" }}>
                🔍 Search for places...
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              <span
                style={{ fontSize: "0.42rem", fontWeight: 600, color: "#111" }}
              >
                Categories
              </span>
              <span style={{ fontSize: "0.38rem", color: "#1a4a2e" }}>
                View all
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 3,
                marginBottom: 6,
              }}
            >
              {[
                ["🍔", "Food & Drinks", "34 places"],
                ["🛍", "Shopping", "41 places"],
                ["✏", "Services", "27 places"],
                ["🏠", "Accommodation", "15 places"],
              ].map(([ic, name, count]) => (
                <div
                  key={name}
                  style={{
                    background: "#f9f9f9",
                    borderRadius: 5,
                    padding: "4px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "0.6rem" }}>{ic}</div>
                  <div
                    style={{
                      fontSize: "0.38rem",
                      fontWeight: 600,
                      color: "#111",
                      marginTop: 1,
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: "0.34rem", color: "#888" }}>
                    {count}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 3,
              }}
            >
              <span
                style={{ fontSize: "0.42rem", fontWeight: 600, color: "#111" }}
              >
                Popular Near You
              </span>
              <span style={{ fontSize: "0.38rem", color: "#1a4a2e" }}>
                View all
              </span>
            </div>
            {[
              ["Inzora Restaurant", "⭐ 4.5 (32)", "Rwandan · $$"],
              ["Petro Huye Superma...", "⭐ 4.0 (18)", "Shop · $"],
            ].map(([name, rating, tag]) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "3px 0",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    background: "#e8d5c0",
                    borderRadius: 4,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "0.38rem",
                      fontWeight: 600,
                      color: "#111",
                      lineHeight: 1.3,
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: "0.34rem", color: "#888" }}>
                    {rating} · {tag}
                  </div>
                </div>
                <div
                  style={{
                    width: 14,
                    height: 14,
                    background: "#1a4a2e",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "0.38rem", color: "#fff" }}>📞</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
// Accurate Huye Finds mobile screen
const HuyePhoneScreen = () => (
  <div
    style={{
      background: "#faf7f2",
      height: "100%",
      overflow: "hidden",
      fontFamily: "Inter,sans-serif",
    }}
  >
    {/* Top strip */}
    <div
      style={{
        background: "linear-gradient(180deg,#e8d5c0,#f5ede0)",
        padding: "5px 6px 8px",
      }}
    />
    {/* Body */}
    <div style={{ padding: "5px 6px" }}>
      {/* New in Huye banner */}
      <div
        style={{
          background: "#fff",
          borderRadius: 5,
          padding: "4px 5px",
          marginBottom: 5,
          border: "1px solid #e8e0d5",
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <span style={{ fontSize: "0.6rem" }}>🎓</span>
        <div>
          <div style={{ fontSize: "0.38rem", fontWeight: 700, color: "#111" }}>
            New in Huye? We've got you.
          </div>
          <div style={{ fontSize: "0.34rem", color: "#1a4a2e" }}>
            Explore trusted places and make your student life easier.
          </div>
        </div>
      </div>
      {/* Categories */}
      <div
        style={{
          fontSize: "0.4rem",
          fontWeight: 700,
          color: "#111",
          marginBottom: 4,
        }}
      >
        Browse by category
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 3,
          marginBottom: 5,
          width: "100%",
        }}
      >
        {[
          ["🍔", "Food & Drinks", "4 places"],
          ["🛍", "Shopping", "3 places"],
          ["✏", "Services", "3 places"],
          ["🏠", "Accommodation", "2 places"],
        ].map(([ic, name, count]) => (
          <div
            key={name}
            style={{
              background: "#fff",
              border: "1px solid #ede5dc",
              borderRadius: 5,
              padding: "4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 3,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                background: "#f5ede0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.5rem",
                flexShrink: 0,
              }}
            >
              {ic}
            </div>
            <div>
              <div
                style={{ fontSize: "0.38rem", fontWeight: 600, color: "#111" }}
              >
                {name}
              </div>
              <div style={{ fontSize: "0.32rem", color: "#888" }}>{count}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Popular */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        <span style={{ fontSize: "0.4rem", fontWeight: 700, color: "#111" }}>
          Popular places
        </span>
        <span style={{ fontSize: "0.36rem", color: "#1a4a2e" }}>See all →</span>
      </div>
      <div
        style={{
          background: "#fff",
          border: "1px solid #ede5dc",
          borderRadius: 6,
          padding: "4px",
          display: "flex",
          gap: 4,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            background: "linear-gradient(135deg,#8b5e3c,#c8956a)",
            borderRadius: 5,
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "0.4rem", fontWeight: 700, color: "#111" }}>
            Amahoro Canteen
          </div>
          <div style={{ fontSize: "0.36rem", color: "#888" }}>
            ⭐⭐⭐⭐ 4.0 (1) · Tumba Center
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <div
              style={{
                background: "#fff3e0",
                borderRadius: 3,
                padding: "1px 4px",
              }}
            >
              <span
                style={{
                  fontSize: "0.34rem",
                  color: "#d97706",
                  fontWeight: 600,
                }}
              >
                1000
              </span>
            </div>
            <div
              style={{
                background: "#1a4a2e",
                borderRadius: 3,
                padding: "2px 5px",
              }}
            >
              <span
                style={{ fontSize: "0.34rem", color: "#fff", fontWeight: 600 }}
              >
                View Details
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Bottom nav */}
    <div
      style={{
        position: "absolute",
        bottom: 6.8,
        left: 6,
        right: 6,
        background: "#fff",
        borderTop: "1px solid #ede5dc",
        borderRadius: "0 0 5px 5px",
        display: "flex",
        justifyContent: "space-around",
        padding: "4px 0",
      }}
    >
      {["🏠 Home", "♡ Favorites", "🔍 Search", "🎓 Hub"].map((l) => (
        <div
          key={l}
          style={{
            fontSize: "0.34rem",
            color: l.includes("Home") ? "#1a4a2e" : "#888",
            textAlign: "center",
            fontWeight: l.includes("Home") ? 700 : 400,
          }}
        >
          {l}
        </div>
      ))}
    </div>
  </div>
);
// Accurate replica of Agakayi Notes desktop UI (grid layout, white theme, blue accent)
const AgakayiScreen = () => {
  const notes = [
    {
      title: "Study plan",
      body: "Review algorithms, practice daily coding.",
      tag: "Learning",
      date: "May 12, 2026",
      pinned: true,
      border: "#4ade80",
    },
    {
      title: "Motivation",
      body: "Consistency beats talent. Show up every day.",
      tag: "Motivation",
      date: "Jan 20, 2026",
      pinned: true,
      border: "#facc15",
    },
    {
      title: "Project idea",
      body: "Build a habit tracker with streak counter and weekly analytics.",
      tag: "Business",
      date: "Jan 20, 2026",
      pinned: true,
      border: "#fb923c",
    },
    {
      title: "API Integration",
      body: "Explore Alpha Vantage for financial data. Record key safely.",
      tag: "Software Dev",
      date: "Jun 16, 2026",
      pinned: false,
      border: "#4ade80",
    },
    {
      title: "AI Note",
      body: "Build an agent that monitors logs of a running app continuously.",
      tag: "Tech",
      date: "Jun 9, 2026",
      pinned: false,
      border: "#facc15",
    },
    {
      title: "Mindset",
      body: "Nobody invests in you more than your own consistent effort.",
      tag: "Motivation",
      date: "Apr 9, 2026",
      pinned: false,
      border: "#fb923c",
    },
  ];
  return (
    <div
      style={{
        background: "#f4f4f6",
        height: "100%",
        overflow: "hidden",
        fontFamily: "Inter,sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#fff",
          padding: "6px 10px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          borderBottom: "1px solid #e5e7eb",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            background: "#3b5bdb",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "0.45rem", color: "#fff" }}>✎</span>
        </div>
        <span style={{ fontSize: "0.52rem", fontWeight: 700, color: "#111" }}>
          Agakayi
        </span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: "0.42rem", color: "#555" }}>👤 Brice</span>
        <span style={{ fontSize: "0.42rem", color: "#555", marginLeft: 6 }}>
          [→
        </span>
      </div>
      {/* Toolbar */}
      <div
        style={{
          background: "#fff",
          padding: "4px 10px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          borderBottom: "1px solid #f0f0f0",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            background: "#f4f4f6",
            border: "1px solid #e5e7eb",
            borderRadius: 4,
            padding: "2px 8px",
            display: "flex",
            alignItems: "center",
            gap: 3,
            flex: 1,
          }}
        >
          <span style={{ fontSize: "0.38rem", color: "#aaa" }}>
            🔍 Search notes...
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            border: "1px solid #e5e7eb",
            borderRadius: 4,
            padding: "2px 5px",
          }}
        >
          <span style={{ fontSize: "0.4rem", color: "#555" }}>🗑 Archive</span>
        </div>
        <div style={{ display: "flex", gap: 1 }}>
          <div
            style={{
              width: 14,
              height: 14,
              border: "1px solid #e5e7eb",
              borderRadius: "3px 0 0 3px",
              background: "#f4f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "0.4rem" }}>⊞</span>
          </div>
          <div
            style={{
              width: 14,
              height: 14,
              border: "1px solid #e5e7eb",
              borderRadius: "0 3px 3px 0",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "0.4rem" }}>≡</span>
          </div>
        </div>
        <div
          style={{
            background: "#3b5bdb",
            borderRadius: 5,
            padding: "2px 7px",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <span style={{ fontSize: "0.42rem", color: "#fff", fontWeight: 700 }}>
            + New Note
          </span>
        </div>
      </div>
      {/* Body */}
      <div style={{ flex: 1, overflow: "hidden", padding: "6px 8px" }}>
        {/* Pinned */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            marginBottom: 4,
          }}
        >
          <span style={{ fontSize: "0.4rem" }}>📌</span>
          <span style={{ fontSize: "0.42rem", fontWeight: 700, color: "#111" }}>
            Pinned Notes
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 4,
            marginBottom: 6,
          }}
        >
          {notes
            .filter((n) => n.pinned)
            .map((n) => (
              <div
                key={n.title}
                style={{
                  background: "#fff",
                  borderRadius: 5,
                  padding: "5px 6px",
                  border: `1px solid #e5e7eb`,
                  borderLeft: `3px solid ${n.border}`,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: 4,
                    right: 5,
                    fontSize: "0.4rem",
                    color: "#3b5bdb",
                  }}
                >
                  📌
                </span>
                <div
                  style={{
                    fontSize: "0.42rem",
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: 2,
                    paddingRight: 10,
                  }}
                >
                  {n.title}
                </div>
                <div
                  style={{
                    fontSize: "0.36rem",
                    color: "#555",
                    lineHeight: 1.4,
                    marginBottom: 4,
                  }}
                >
                  {n.body}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.32rem",
                      background: "#f0f0f0",
                      borderRadius: 3,
                      padding: "1px 4px",
                      color: "#555",
                    }}
                  >
                    {n.tag}
                  </span>
                  <span style={{ fontSize: "0.32rem", color: "#aaa" }}>
                    {n.date}
                  </span>
                </div>
              </div>
            ))}
        </div>
        {/* All Notes */}
        <div
          style={{
            fontSize: "0.42rem",
            fontWeight: 700,
            color: "#111",
            marginBottom: 4,
          }}
        >
          All Notes
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 4,
          }}
        >
          {notes
            .filter((n) => !n.pinned)
            .map((n) => (
              <div
                key={n.title}
                style={{
                  background: "#fff",
                  borderRadius: 5,
                  padding: "5px 6px",
                  border: "1px solid #e5e7eb",
                  borderLeft: `3px solid ${n.border}`,
                }}
              >
                <div
                  style={{
                    fontSize: "0.42rem",
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: 2,
                  }}
                >
                  {n.title}
                </div>
                <div
                  style={{
                    fontSize: "0.36rem",
                    color: "#555",
                    lineHeight: 1.4,
                    marginBottom: 4,
                  }}
                >
                  {n.body}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.32rem",
                      background: "#f0f0f0",
                      borderRadius: 3,
                      padding: "1px 4px",
                      color: "#555",
                    }}
                  >
                    {n.tag}
                  </span>
                  <span style={{ fontSize: "0.32rem", color: "#aaa" }}>
                    {n.date}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
// Agakayi mobile — list view
const AgakayiPhoneScreen = () => {
  const items = [
    {
      title: "Study plan",
      tag: "Learning",
      date: "May 12, 2026",
      border: "#4ade80",
      pinned: true,
    },
    {
      title: "Motivation",
      tag: "Motivation",
      date: "Jan 20, 2026",
      border: "#facc15",
      pinned: true,
    },
    {
      title: "Project idea",
      tag: "Business",
      date: "Jan 20, 2026",
      border: "#fb923c",
      pinned: true,
    },
    {
      title: "API Integration",
      tag: "Software Dev",
      date: "Jun 16, 2026",
      border: "#4ade80",
      pinned: false,
    },
    {
      title: "AI Note",
      tag: "Tech",
      date: "Jun 9, 2026",
      border: "#facc15",
      pinned: false,
    },
  ];
  return (
    <div
      style={{
        background: "#f4f4f6",
        height: "100%",
        fontFamily: "Inter,sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#fff",
          padding: "5px 6px",
          display: "flex",
          alignItems: "center",
          gap: 4,
          borderBottom: "1px solid #e5e7eb",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            background: "#3b5bdb",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "0.38rem", color: "#fff" }}>✎</span>
        </div>
        <span style={{ fontSize: "0.48rem", fontWeight: 700, color: "#111" }}>
          Agakayi
        </span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: "0.38rem", color: "#555" }}>👤 Brice</span>
        <span style={{ fontSize: "0.38rem", color: "#555", marginLeft: 4 }}>
          [→
        </span>
      </div>
      {/* Search */}
      <div
        style={{
          padding: "4px 6px",
          background: "#fff",
          borderBottom: "1px solid #f0f0f0",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            background: "#f4f4f6",
            borderRadius: 4,
            padding: "3px 6px",
            display: "flex",
          }}
        >
          <span style={{ fontSize: "0.36rem", color: "#aaa" }}>
            🔍 Search notes...
          </span>
        </div>
      </div>
      {/* Toolbar */}
      <div
        style={{
          background: "#fff",
          padding: "3px 6px",
          display: "flex",
          alignItems: "center",
          gap: 4,
          borderBottom: "1px solid #f0f0f0",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "0.36rem",
            color: "#555",
            border: "1px solid #e5e7eb",
            borderRadius: 3,
            padding: "1px 4px",
          }}
        >
          🗑 Archive
        </span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: "0.5rem" }}>⊞</span>
        <span style={{ fontSize: "0.5rem", color: "#555" }}>≡</span>
        <div
          style={{ background: "#3b5bdb", borderRadius: 2, padding: "2px 5px" }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "0.36rem",
              color: "#fff",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            + New
          </span>
        </div>
      </div>
      {/* Notes */}
      <div style={{ flex: 1, overflow: "hidden", padding: "5px 6px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 3,
          }}
        >
          <span style={{ fontSize: "0.38rem" }}>📌</span>
          <span style={{ fontSize: "0.4rem", fontWeight: 700, color: "#111" }}>
            Pinned Notes
          </span>
        </div>
        {items.map((n) => (
          <div
            key={n.title}
            style={{
              background: "#fff",
              borderRadius: 5,
              padding: "4px 5px",
              marginBottom: 3,
              borderLeft: `3px solid ${n.border}`,
              position: "relative",
            }}
          >
            {n.pinned && (
              <span
                style={{
                  position: "absolute",
                  top: 3,
                  right: 4,
                  fontSize: "0.36rem",
                  color: "#3b5bdb",
                }}
              >
                📌
              </span>
            )}
            <div
              style={{
                fontSize: "0.42rem",
                fontWeight: 700,
                color: "#111",
                paddingRight: 12,
              }}
            >
              {n.title}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <span
                style={{
                  fontSize: "0.32rem",
                  background: "#f0f0f0",
                  borderRadius: 2,
                  padding: "1px 3px",
                  color: "#555",
                }}
              >
                {n.tag}
              </span>
              <span style={{ fontSize: "0.3rem", color: "#aaa" }}>
                {n.date}
              </span>
            </div>
          </div>
        ))}
        <div
          style={{
            fontSize: "0.4rem",
            fontWeight: 700,
            color: "#111",
            marginTop: 3,
          }}
        >
          All Notes
        </div>
      </div>
    </div>
  );
};
const RshiftScreen = () => (
  <div
    style={{
      background: "#1e1e2e",
      height: "100%",
      padding: "10px",
      fontFamily: "monospace",
    }}
  >
    <div
      style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          background: "#22c55e22",
          border: "1px solid #22c55e44",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "0.55rem", color: "#22c55e" }}>⇌</span>
      </div>
      <div
        style={{ height: 5, width: 80, background: "#f8fafc", borderRadius: 3 }}
      />
      <div style={{ flex: 1 }} />
      <div
        style={{
          height: 16,
          width: 50,
          background: "#22c55e",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "0.45rem", color: "#fff", fontWeight: 700 }}>
          Export →
        </span>
      </div>
    </div>
    <div
      style={{
        background: "#12121f",
        borderRadius: 6,
        padding: "8px",
        marginBottom: 8,
      }}
    >
      <div
        style={{
          fontSize: "0.55rem",
          color: "#22c55e",
          fontWeight: 700,
          marginBottom: 6,
        }}
      >
        Detected Shifts
      </div>
      {[
        { date: "Mon 7/21", time: "09:00–17:00" },
        { date: "Wed 7/23", time: "10:00–19:00" },
        { date: "Fri 7/25", time: "08:00–16:00" },
      ].map((s) => (
        <div
          key={s.date}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "3px 0",
            borderBottom: "1px solid #1e3a2f",
          }}
        >
          <span style={{ fontSize: "0.5rem", color: "#94a3b8" }}>{s.date}</span>
          <span style={{ fontSize: "0.5rem", color: "#22c55e" }}>{s.time}</span>
        </div>
      ))}
    </div>
    <div
      style={{
        height: 18,
        background: "#22c55e",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ fontSize: "0.5rem", color: "#fff", fontWeight: 700 }}>
        Add to Calendar
      </span>
    </div>
  </div>
);
const EcomScreen = () => (
  <div style={{ background: "#f9fafb", height: "100%", overflow: "hidden" }}>
    <div
      style={{
        background: "#fff",
        padding: "8px 10px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <div
        style={{ height: 5, width: 50, background: "#22c55e", borderRadius: 3 }}
      />
      <div style={{ flex: 1 }} />
      <div
        style={{ height: 5, width: 30, background: "#e5e7eb", borderRadius: 3 }}
      />
      <div
        style={{ height: 5, width: 30, background: "#e5e7eb", borderRadius: 3 }}
      />
    </div>
    <div style={{ padding: "8px 10px" }}>
      <div
        style={{ display: "flex", gap: 6, marginBottom: 8, overflow: "hidden" }}
      >
        {["All", "Electronics", "Clothing", "Books"].map((c) => (
          <div
            key={c}
            style={{
              padding: "2px 6px",
              background: c === "All" ? "#22c55e22" : "#f3f4f6",
              border: `1px solid ${c === "All" ? "#22c55e44" : "#e5e7eb"}`,
              borderRadius: 3,
            }}
          >
            <div
              style={{
                height: 3,
                width: 20,
                background: c === "All" ? "#22c55e" : "#9ca3af",
                borderRadius: 2,
              }}
            />
          </div>
        ))}
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: 5,
              padding: "6px",
              border: "1px solid #f3f4f6",
            }}
          >
            <div
              style={{
                height: 30,
                background: "#f3f4f6",
                borderRadius: 3,
                marginBottom: 4,
              }}
            />
            <div
              style={{
                height: 3,
                background: "#111827",
                borderRadius: 2,
                width: "80%",
                marginBottom: 3,
              }}
            />
            <div
              style={{
                height: 3,
                background: "#22c55e",
                borderRadius: 2,
                width: "50%",
                marginBottom: 4,
              }}
            />
            <div
              style={{
                height: 12,
                background: "#22c55e",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: 2.5,
                  width: "60%",
                  background: "#fff",
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const EcomPhoneScreen = () => (
  <div style={{ background: "#f9fafb", height: "100%", padding: "6px" }}>
    <div
      style={{
        height: 14,
        background: "#22c55e",
        borderRadius: 4,
        marginBottom: 5,
        display: "flex",
        alignItems: "center",
        padding: "0 5px",
      }}
    >
      <div
        style={{
          height: 3,
          width: "50%",
          background: "rgba(255,255,255,0.8)",
          borderRadius: 2,
        }}
      />
    </div>
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        style={{
          background: "#fff",
          borderRadius: 4,
          padding: "5px",
          marginBottom: 3,
          display: "flex",
          gap: 4,
          border: "1px solid #f3f4f6",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            background: "#f3f4f6",
            borderRadius: 3,
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              height: 3,
              background: "#111827",
              borderRadius: 2,
              width: "75%",
              marginBottom: 2,
            }}
          />
          <div
            style={{
              height: 2.5,
              background: "#22c55e",
              borderRadius: 2,
              width: "40%",
            }}
          />
        </div>
      </div>
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   PROJECTS
───────────────────────────────────────────── */
const PROJECT_META = [
  {
    id: "bnb",
    live: false,
    githubUrl: "https://github.com/Brice-art",
    stack: ["Laravel", "Stripe", "Reverb", "Email Automation", "PHPUnit"],
    screen: <BookingScreen />,
    hasPhone: false,
  },
  {
    id: "huye",
    live: true,
    liveUrl: "https://huye-finds.vercel.app",
    githubUrl: "https://github.com/Brice-art/HuyeFinds-frontend",
    stack: ["Typescript", "Node.js", "PostgreSQL", "Express"],
    screen: <HuyeScreen />,
    hasPhone: true,
    phoneScreen: <HuyePhoneScreen />,
  },
  {
    id: "agakayi",
    live: true,
    liveUrl: "https://agakayi.xyz",
    githubUrl: "https://github.com/Brice-art/Agakayi",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    screen: <AgakayiScreen />,
    hasPhone: true,
    phoneScreen: <AgakayiPhoneScreen />,
  },
  {
    id: "rshift",
    live: false,
    githubUrl:
      "https://github.com/Brice-art/Rshift-extraction-chrome-extension",
    stack: [
      "JavaScript",
      "DOM API",
      "Google Calendar API",
      "OAuth 2.0",
      "Chrome Extensions",
    ],
    screen: <RshiftScreen />,
    hasPhone: false,
  },
  {
    id: "ecom",
    live: false,
    githubUrl: "https://github.com/Brice-art/ecommerce-site-php-mysql",
    stack: ["PHP", "MySQL", "MVC Pattern", "OOP", "SQL"],
    screen: <EcomScreen />,
    hasPhone: true,
    phoneScreen: <EcomPhoneScreen />,
  },
];

const ProjectCard = ({ meta, copy, reverse }) => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal project-section"
      style={{ marginBottom: "2rem" }}
    >
      <div
        className="project-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          direction: reverse ? "rtl" : "ltr",
        }}
      >
        <div
          className="project-visual"
          style={{
            direction: "ltr",
            background: "var(--bg3)",
            borderRight: reverse ? "none" : "1px solid var(--border)",
            borderLeft: reverse ? "1px solid var(--border)" : "none",
          }}
        >
          <ProjectMockup
            hasPhone={meta.hasPhone}
            phoneChildren={meta.phoneScreen}
          >
            {meta.screen}
          </ProjectMockup>
        </div>
        <div
          className="project-content"
          style={{
            direction: "ltr",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            {meta.live ? (
              <>
                <div className="live-dot" />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--primary)",
                  }}
                >
                  {t.projLive}
                </span>
              </>
            ) : (
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--text4)",
                  background: "var(--bg3)",
                  padding: "0.1rem 0.5rem",
                  borderRadius: 4,
                }}
              >
                {t.projInProgress}
              </span>
            )}
            <span
              style={{
                fontSize: "0.7rem",
                color: "var(--text4)",
                marginLeft: 4,
              }}
            >
              {copy.highlight}
            </span>
          </div>
          <h3
            style={{
              fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "0.4rem",
            }}
          >
            {copy.title}
          </h3>
          <p
            style={{
              fontSize: "clamp(0.8rem, 1.4vw, 0.875rem)",
              fontWeight: 500,
              color: "var(--primary)",
              marginBottom: "1rem",
            }}
          >
            {copy.subtitle}
          </p>
          <p
            style={{
              fontSize: "clamp(0.8rem, 1.4vw, 0.875rem)",
              color: "var(--text3)",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            {copy.description}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1.75rem",
            }}
          >
            {meta.stack.map((t) => (
              <span key={t} className="skill-tag">
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {meta.live && (
              <a
                href={meta.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {t.projLiveDemo}
              </a>
            )}
            <a
              href={meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
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
    <section
      id="projects"
      className="projects-section"
      style={{ padding: "6rem 2rem", background: "transparent" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          ref={ref}
          className="reveal"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--primary)",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            {t.projLabel}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            {t.projHeadline}
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text3)",
              maxWidth: 440,
              margin: "0 auto",
            }}
          >
            {t.projSub}
          </p>
        </div>
        {PROJECT_META.map((meta, i) => (
          <ProjectCard
            key={meta.id}
            meta={meta}
            copy={t.proj[i]}
            reverse={i % 2 === 1}
          />
        ))}
        <div style={{ textAlign: "center", paddingTop: "1rem" }}>
          <a
            href="https://github.com/Brice-art"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            {t.projMoreGH}
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
const Contact = () => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <section
      id="contact"
      className="contact-section"
      style={{ padding: "6rem 2rem", background: "#0f172a" }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--primary)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          {t.contactLabel}
        </div>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#f8fafc",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          {t.contactHeadline}
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#94a3b8",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto 2.5rem",
          }}
        >
          {t.contactSub}
        </p>
        <div
          className="contact-actions"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <a
            href="mailto:bricealibyilingiro@gmail.com"
            className="contact-btn primary"
          >
            {t.contactEmail}
          </a>
          <a
            href="https://www.linkedin.com/in/brice-ali-byiringiro-ab1182254/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Brice-art"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            GitHub
          </a>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "#475569" }}>
            {t.contactFooter}
          </span>
          <span style={{ fontSize: "0.8rem", color: "#475569" }}>© 2026</span>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   ROOT — lang state lives here, passed down
───────────────────────────────────────────── */
export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const t = COPY[lang];

  return (
    <LangCtx.Provider value={{ lang, t }}>
      <GlobalStyles />
      <AnimatedBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav lang={lang} setLang={setLang} />
        <Hero />
        <Stats />
        <About />
        <CoreExpertise />
        <Skills />
        <Projects />
        <Contact />
        <OpenSource />
      </div>
    </LangCtx.Provider>
  );
}
