import React, { useEffect } from 'react'
import projectData from "../data/projectsData"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink, FiArrowLeft, FiArrowRight } from "react-icons/fi"

const ProjectPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const data = projectData.find((project) => String(project.id) === String(id))
    const currentIdx = projectData.findIndex(p => String(p.id) === String(id))
    const prev = currentIdx > 0 ? projectData[currentIdx - 1] : null
    const next = currentIdx >= 0 && currentIdx < projectData.length - 1 ? projectData[currentIdx + 1] : null

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [id])

    if (!data) {
        return (
            <div className='pp-wrap'>
                <div className='pp-notfound'>
                    <div className='pp-eyebrow'>Project — not found</div>
                    <h1>That case study doesn’t exist.</h1>
                    <p>Maybe the link is old, or I renamed the project. No stress — back to the index and pick another one.</p>
                    <Link to="/" className="pp-btn pp-btn--dark">← Back to portfolio</Link>
                </div>
            </div>
        )
    }

    const paragraphs = (data.description || "").split("\n\n").map(s => s.trim()).filter(Boolean)

    // helper to render a paragraph with simple heading detection
    const renderParagraph = (text, idx) => {
        // also handle lines starting with "— "
        if (text.includes("— ") && text.split("— ").length > 2) {
            // bullet list
            const parts = text.split("\n").filter(Boolean)
            const headingLine = parts[0]
            const items = parts.slice(1)
            const isList = items.some(l => l.trim().startsWith("—"))
            if (isList) {
                return (
                    <div key={idx} className="pp-block">
                        <p className="pp-para-heading">{headingLine}</p>
                        <ul className="pp-list">
                            {items.map((it, i) => (
                                <li key={i}>{it.replace(/^—\s*/, "")}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        }
        // generic heading + body on same block separated by newline
        if (text.includes("\n— ")) {
            const [head, ...rest] = text.split("\n")
            return (
                <div key={idx} className="pp-block">
                    <p className="pp-para-heading">{head}</p>
                    <ul className="pp-list">
                        {rest.filter(Boolean).map((it, i) => (
                            <li key={i}>{it.replace(/^—\s*/, "")}</li>
                        ))}
                    </ul>
                </div>
            )
        }
        // if paragraph starts with known heading phrase
        const knownHeads = ["Why I built it:", "Why this", "What I built:", "What I actually shipped:", "What I forced", "How I approached", "What I cared about:", "What was tricky:", "What bit me:", "Hard parts:", "What I learned:", "Takeaway:", "Honest note:", "If I rebuilt", "If I did it again", "Details I enjoyed", "Next time:"]
        const isHeadingPara = knownHeads.some(h => text.startsWith(h))
        if (isHeadingPara && text.length > 80) {
            // split first sentence as heading
            const colonIdx = text.indexOf(":")
            if (colonIdx > 0 && colonIdx < 40) {
                return (
                    <div key={idx} className="pp-block">
                        <p className="pp-para-heading">{text.slice(0, colonIdx + 1)}</p>
                        <p className="pp-para">{text.slice(colonIdx + 1).trim()}</p>
                    </div>
                )
            }
        }
        return <p key={idx} className="pp-para">{text}</p>
    }

    return (
        <div className='pp-wrap'>
            {/* top bar */}
            <div className='pp-topbar'>
                <Link to="/" className="pp-back" onClick={() => window.scrollTo(0,0)}>
                    <FiArrowLeft /> <span>Index</span>
                </Link>
                <span className='pp-topbar-meta'>
                    Case study — 0{currentIdx + 1} / 0{projectData.length} &nbsp;·&nbsp; {data.year} · {data.category || data.technologies}
                </span>
                <button className="pp-back pp-back--ghost" onClick={() => navigate(-1)}>Close ×</button>
            </div>

            <article className='pp-article'>
                {/* header */}
                <header className='pp-header'>
                    <div className='pp-kicker'>
                        <span>{data.technologies}</span>
                        <span className="pp-kicker-dot">•</span>
                        <span>{data.category}</span>
                        {data.status && <><span className="pp-kicker-dot">•</span><span className={data.status === "Live" ? "pp-live" : ""}>{data.status}</span></>}
                    </div>
                    <h1 className='pp-title'>{data.title}</h1>
                    <p className='pp-lead'>{data.shortDesc}</p>

                    <div className='pp-meta-grid'>
                        <div className='pp-meta'>
                            <dt>Role</dt><dd>{data.role || "Solo — Design & Build"}</dd>
                        </div>
                        <div className='pp-meta'>
                            <dt>Timeline</dt><dd>{data.timeline || data.year}</dd>
                        </div>
                        <div className='pp-meta'>
                            <dt>Team</dt><dd>{data.team || "Solo"}</dd>
                        </div>
                        <div className='pp-meta'>
                            <dt>Stack</dt><dd>{(data.stack || data.technologies.split('|')).join(' · ')}</dd>
                        </div>
                    </div>

                    <div className='pp-actions'>
                        {data.liveProject && (
                            <a href={data.liveProject} target="_blank" rel="noreferrer" className="pp-btn pp-btn--dark">
                                <span>Open live site</span> <FiExternalLink />
                            </a>
                        )}
                        {data.gitHub ? (
                            <a href={data.gitHub} target="_blank" rel="noreferrer" className="pp-btn pp-btn--light">
                                <AiFillGithub /> <span>View code</span>
                            </a>
                        ) : (
                            <span className="pp-btn pp-btn--light pp-btn--disabled" title="Private / NDA — happy to walk through on a call">
                                <AiFillGithub /> <span>Private source</span>
                            </span>
                        )}
                        <span className="pp-note">Tip: Render cold starts ~30s. If it spins, give it a moment.</span>
                    </div>
                </header>

                {/* hero media */}
                <div className='pp-media'>
                    <div className='pp-media-frame'>
                        <img src={data.image} alt={data.title} />
                    </div>
                    <div className='pp-media-caption'>
                        <span>Fig. 0{currentIdx+1} — {data.title} · {data.year}</span>
                        <span>Screenshot · actual product, not a mock</span>
                    </div>
                </div>

                {/* body grid */}
                <div className='pp-body-grid'>
                    <div className='pp-body'>
                        {/* highlights */}
                        {data.highlights && (
                            <div className='pp-highlights'>
                                <h3 className='pp-h3'>At a glance</h3>
                                <ul>
                                    {data.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                </ul>
                            </div>
                        )}

                        <div className='pp-prose'>
                            <h3 className='pp-h3'>The story</h3>
                            {paragraphs.map((p, i) => renderParagraph(p, i))}
                        </div>

                        {/* handwritten aside — makes it human */}
                        <div className='pp-aside-hand'>
                            <div className='pp-hand-label'>A note, honestly</div>
                            <p>
                                I built this one solo, late nights after my civil degree, figuring things out from docs and broken deploys.
                                No design system, no PM — just me, VS Code, and a lot of “why is this CORS error happening again?” 
                                It’s not perfect, but it’s real — and it taught me to ship even when it’s messy.
                            </p>
                        </div>

                        <div className='pp-stack-block'>
                            <h3 className='pp-h3'>Stack & decisions</h3>
                            <div className='pp-tags'>
                                {(data.stack || data.technologies.split('|').map(s=>s.trim())).map(t => (
                                    <span key={t} className='pp-tag'>{t}</span>
                                ))}
                            </div>
                            <p className='pp-small'>
                                I picked this stack because I knew it well enough to move fast, but not so well that I wouldn’t learn. 
                                Trade-off: faster shipping, a bit of tech debt I’ve since cleaned up in my ERP work at Sharpminds.
                            </p>
                        </div>
                    </div>

                    <aside className='pp-sidebar'>
                        <div className='pp-side-card'>
                            <h4>Project info</h4>
                            <dl className='pp-side-dl'>
                                <div><dt>Year</dt><dd>{data.year}</dd></div>
                                <div><dt>Type</dt><dd>{data.category}</dd></div>
                                <div><dt>Status</dt><dd>{data.status}</dd></div>
                                <div><dt>Role</dt><dd>{data.role}</dd></div>
                            </dl>
                            <div className='pp-side-links'>
                                {data.liveProject && <a href={data.liveProject} target="_blank" rel="noreferrer" className="pp-side-link">Live site ↗</a>}
                                {data.gitHub ? <a href={data.gitHub} target="_blank" rel="noreferrer" className="pp-side-link">GitHub ↗</a> : <span className="pp-side-link pp-side-link--muted">GitHub — private</span>}
                                <Link to="/#projects" className="pp-side-link">More projects →</Link>
                            </div>
                        </div>

                        <div className='pp-side-card pp-side-card--paper'>
                            <h4>What I’d tell a junior</h4>
                            <p>
                                Don’t chase the perfect stack. Pick one, ship 3 bad versions, then rewrite. 
                                The fastest feedback is a live URL your friends can break.
                            </p>
                            <p style={{marginTop:10, fontFamily:'IBM Plex Mono, monospace', fontSize:'0.70rem', color:'#8C8C88'}}>— Venkatesh, Nirmal (remote)</p>
                        </div>

                        <div className='pp-side-card pp-side-card--outline'>
                            <h4>Need ERP context?</h4>
                            <p className='pp-small'>The live startup ERP (Purchase / Quality / Sales & Inventory) is private under NDA — happy to walk through architecture, Redis/BullMQ choices, and Mongo aggregations on a call.</p>
                            <a href="mailto:venkateshvnky3803@gmail.com?subject=Walkthrough%20request%20—%20Sharpminds%20ERP" className="pp-btn pp-btn--dark pp-btn--full">Request walkthrough</a>
                        </div>
                    </aside>
                </div>

                {/* prev / next */}
                <nav className='pp-paginate'>
                    <div className='pp-paginate-card'>
                        {prev ? (
                            <Link to={`/project/${prev.id}`} className="pp-paginate-link">
                                <span className="pp-paginate-label"><FiArrowLeft /> Previous</span>
                                <span className="pp-paginate-title">{prev.title}</span>
                                <span className="pp-paginate-meta">{prev.technologies}</span>
                            </Link>
                        ) : <span className="pp-paginate-empty">Start of index</span>}
                    </div>
                    <div className='pp-paginate-card pp-paginate-card--next'>
                        {next ? (
                            <Link to={`/project/${next.id}`} className="pp-paginate-link">
                                <span className="pp-paginate-label">Next <FiArrowRight /></span>
                                <span className="pp-paginate-title">{next.title}</span>
                                <span className="pp-paginate-meta">{next.technologies}</span>
                            </Link>
                        ) : <span className="pp-paginate-empty">End of index</span>}
                    </div>
                </nav>

                <div className='pp-bottom-bar'>
                    <Link to="/" className="pp-back">← Back to all work</Link>
                    <span className='pp-bottom-note'>Built by Chanda Venkatesh — Nirmal, Telangana · <a href="mailto:venkateshvnky3803@gmail.com">venkateshvnky3803@gmail.com</a></span>
                </div>
            </article>
        </div>
    )
}

export default ProjectPage
