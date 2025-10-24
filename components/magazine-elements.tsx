'use client'

interface MagazineBylineProps {
  author: string
  date: string
  readTime: string
}

export function MagazineByline({ author, date, readTime }: MagazineBylineProps) {
  return (
    <div className="magazine-byline">
      <div className="byline-content">
        <span className="byline-author">By {author}</span>
        <span className="byline-separator">•</span>
        <span className="byline-date">{date}</span>
        <span className="byline-separator">•</span>
        <span className="byline-read-time">{readTime} read</span>
      </div>
    </div>
  )
}

interface MagazineDropCapProps {
  children: React.ReactNode
}

export function MagazineDropCap({ children }: MagazineDropCapProps) {
  return <span className="magazine-drop-cap">{children}</span>
}

interface MagazineSidebarProps {
  title: string
  content: string
  type?: 'note' | 'quote' | 'fact'
}

export function MagazineSidebar({ title, content, type = 'note' }: MagazineSidebarProps) {
  return (
    <div className={`magazine-sidebar magazine-sidebar-${type}`}>
      <div className="sidebar-marker"></div>
      <h4 className="sidebar-title">{title}</h4>
      <p className="sidebar-content">{content}</p>
    </div>
  )
}

interface MagazineStatsProps {
  stats: Array<{ label: string; value: string; unit?: string }>
}

export function MagazineStats({ stats }: MagazineStatsProps) {
  return (
    <div className="magazine-stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="magazine-stat-item">
          <div className="stat-value">
            {stat.value}
            {stat.unit && <span className="stat-unit">{stat.unit}</span>}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export function MagazineColumnBreak() {
  return (
    <div className="magazine-column-break">
      <div className="column-break-line"></div>
      <div className="column-break-symbol">※</div>
      <div className="column-break-line"></div>
    </div>
  )
}

export function MagazineReadingTime({ minutes }: { minutes: number }) {
  return (
    <div className="magazine-reading-time">
      <span className="reading-time-icon">⏱</span>
      <span className="reading-time-text">{minutes} min read</span>
    </div>
  )
}

interface MagazineTagsProps {
  tags: string[]
}

export function MagazineTags({ tags }: MagazineTagsProps) {
  return (
    <div className="magazine-tags">
      <span className="tags-label">Tags:</span>
      {tags.map((tag, index) => (
        <span key={index} className="magazine-tag">
          #{tag}
        </span>
      ))}
    </div>
  )
}
