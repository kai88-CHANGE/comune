export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ja';

export const ui = {
  ja: {
    'site.name': 'コムーネ',
    'site.tagline': '生徒自治の境界線を問う、思考のための機関誌',
    'nav.articles': '記事一覧',
    'nav.issues': '論点マップ',
    'nav.about': 'この媒体について',
    'nav.contact': 'お問い合わせ',
    'section.latest': '最新記事',
    'section.categories': 'カテゴリ',
    'articles.all': 'すべて',
    'articles.back': '← 記事一覧に戻る',
    'articles.readMore': 'すべての記事を読む →',
    'articles.count': '本',
    'article.issue': '第',
    'article.issueUnit': '号',
    'article.structure': 'この記事の構成',
    'article.sections': ['実例', '一般化', '主張', '反論の想定', '読者への問い'],
    'issues.title': '論点マップ',
    'issues.desc': 'このサイトが扱う自治の境界線論点を一覧化する。記事を書くたびに更新される。',
    'issues.current': '現状（一般的な学校では）',
    'issues.position': '編集部の立場',
    'issues.related': '関連記事',
    'issues.read': '読む →',
    'issues.note': '論点は記事を書くたびに追加・更新される。',
    'about.title': 'この媒体について',
    'cat.seitokai': '生徒会論',
    'cat.kyoiku': '学校教育論',
    'cat.jichi': '自治の境界線',
    'cat.desc.seitokai': '権限・予算・選挙・審査フローなど、仕組み自体の設計論',
    'cat.desc.kyoiku': '学校という制度が生徒に何を委ねるべきか',
    'cat.desc.jichi': '「どこまで認めるか」を正面から扱う中核連載',
    'nav.newspaper': '新聞',
    'newspaper.title': 'コムーネ新聞',
    'newspaper.desc': '印刷・配布用のPDF版機関誌。記事とは独立した紙面として発行する。',
    'newspaper.issue': '第',
    'newspaper.issueUnit': '号',
    'newspaper.pages': 'ページ',
    'newspaper.view': 'PDFで読む',
    'newspaper.download': 'ダウンロード',
    'newspaper.back': '← 新聞一覧に戻る',
    'newspaper.noFile': 'PDFファイルは準備中です。',
    'newspaper.embed.label': 'PDFビューア',
  },
  en: {
    'site.name': 'Comune',
    'site.tagline': 'A journal questioning the boundaries of student self-governance',
    'nav.articles': 'Articles',
    'nav.issues': 'Issues Map',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'section.latest': 'Latest',
    'section.categories': 'Categories',
    'articles.all': 'All',
    'articles.back': '← Back to articles',
    'articles.readMore': 'View all articles →',
    'articles.count': '',
    'article.issue': 'Issue ',
    'article.issueUnit': '',
    'article.structure': 'Structure of this article',
    'article.sections': ['Case', 'Generalization', 'Argument', 'Counterargument', 'Question for readers'],
    'issues.title': 'Issues Map',
    'issues.desc': 'A running index of the governance boundary questions this journal examines. Updated with each article.',
    'issues.current': 'Status (in typical Japanese schools)',
    'issues.position': 'Editorial position',
    'issues.related': 'Related articles',
    'issues.read': 'Read →',
    'issues.note': 'Issues are added and updated as new articles are published.',
    'about.title': 'About Comune',
    'cat.seitokai': 'Student Council Theory',
    'cat.kyoiku': 'School Education Theory',
    'cat.jichi': 'Boundaries of Self-Governance',
    'cat.desc.seitokai': 'Design of authority, budgets, elections, and approval flows',
    'cat.desc.kyoiku': 'What should schools delegate to students?',
    'cat.desc.jichi': 'The core series: where should the line be drawn?',
    'nav.newspaper': 'Newspaper',
    'newspaper.title': 'Comune Newspaper',
    'newspaper.desc': 'PDF editions for print and distribution. Published independently from web articles.',
    'newspaper.issue': 'Issue ',
    'newspaper.issueUnit': '',
    'newspaper.pages': 'pages',
    'newspaper.view': 'Read PDF',
    'newspaper.download': 'Download',
    'newspaper.back': '← Back to newspaper',
    'newspaper.noFile': 'PDF is not yet available.',
    'newspaper.embed.label': 'PDF viewer',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return (ui[lang] as any)[key] ?? (ui[defaultLang] as any)[key] ?? key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
