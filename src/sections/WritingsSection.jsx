import { MediumIcon } from '../components/Icons'

const ARTICLES = [
  {
    id: 'api-rta',
    date: 'September 2026',
    platform: 'Medium',
    title: 'API-RTA 2026: Passing the API Red Team Analyst',
    url: 'https://medium.com/@jasonsantos1228/api-rta-2026-passing-the-api-red-team-analyst-a722409d0367',
    tags: ['API Security', 'Red Team', 'Certification'],
  },
  {
    id: 'capen',
    date: 'August 2026',
    platform: 'Medium',
    title: 'CAPen Exam Review 2026: Passing the Certified AppSec Pentester with Merit',
    url: 'https://medium.com/@jasonsantos1228/capen-exam-review-2026-passing-the-certified-appsec-pentester-with-merit-41d3dbf6583f',
    tags: ['AppSec', 'Penetration Testing', 'Certification'],
  },
  {
    id: 'ev-analytics',
    date: 'August 2026',
    platform: 'Medium',
    title: 'End-to-End EV Market Analytics: Data Modeling with Snowflake Schema & Power BI Forecasting',
    url: 'https://medium.com/@jasonsantos1228/end-to-end-ev-market-analytics-data-modeling-with-snowflake-schema-power-bi-forecasting-ca015b95798b',
    tags: ['Data Analytics', 'Power BI', 'Snowflake Schema'],
  },
]

export default function WritingsSection() {
  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#16FF00]">Writings</h2>
        <div className="text-xs font-mono opacity-50 mb-2">&gt;&gt; ARTICLE_ARCHIVE_04</div>
      </div>
      <p className="text-xs opacity-50 mb-8 font-mono">&gt;&gt; PUBLISHED TECHNICAL WRITEUPS &amp; CASE STUDIES ON MEDIUM</p>

      <div className="space-y-5">
        {ARTICLES.map((article, index) => (
          <div
            key={article.id}
            className="border border-[#16FF00]/20 p-6 bg-black/40 hover:border-[#16FF00]/50 hover:bg-[#16FF00]/5 transition-all group"
          >
            {/* Top meta row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3 font-mono text-[10px]">
                <span className="text-[#16FF00]/50 uppercase tracking-widest">{article.date}</span>
                <span className="w-1 h-1 bg-[#16FF00]/30 rounded-full" />
                <span className="text-[#16FF00]/50 uppercase tracking-widest">{article.platform}</span>
                <span className="w-1 h-1 bg-[#16FF00]/30 rounded-full" />
                <span className="text-[#16FF00]/40 uppercase tracking-widest">ARTICLE_{String(index + 1).padStart(2, '0')}</span>
              </div>
              <span className="text-[#16FF00]/30 group-hover:text-[#16FF00] transition-colors text-base">↗</span>
            </div>

            {/* Title */}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-bold text-white hover:text-[#16FF00] transition-colors leading-snug mb-4 uppercase tracking-tight font-mono"
            >
              {article.title}
            </a>

            {/* Tags & View Article button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3 border-t border-[#16FF00]/15">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest px-2 py-0.5 border border-[#16FF00]/20 text-[#16FF00]/60 font-mono group-hover:border-[#16FF00]/40 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#16FF00] px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#16FF00] bg-[#050505] hover:bg-[#16FF00] hover:text-black transition-colors self-start sm:self-auto flex-shrink-0"
              >
                <MediumIcon />
                <span>View Article</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-10 border-t border-dashed border-[#16FF00]/20 pt-4">
        <p className="text-[9px] font-mono opacity-30 tracking-widest">
          MORE ARTICLES AT{' '}
          <a
            href="https://medium.com/@jasonsantos1228"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-60 transition-opacity"
          >
            MEDIUM.COM/@JASONSANTOS1228
          </a>
        </p>
      </div>
    </div>
  )
}
