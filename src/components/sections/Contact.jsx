import React, { useState } from 'react'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { ImLocation } from "react-icons/im"
import { FaWhatsapp } from "react-icons/fa"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setStatus('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'venkateshvnky3803@gmail.com'
      }
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally { setLoading(false) }
  }

  return (
    <section id='contact' className="section" style={{ borderBottom: 'none' }}>
      <div className="section-head reveal">
        <div>
          <div className="section-label">04 — Contact</div>
          <h2 className="section-title">Say hi. <em>I reply myself.</em></h2>
        </div>
        <p className="section-desc">No bot, no hiring portal black hole. Your message goes to my inbox and I answer within a day — usually sooner.</p>
      </div>

      <div className="contact-grid2">
        <div className="reveal">
          <h3 className="contact-lead">Hiring for a <em>small, fast team?</em> Let’s see if I fit.</h3>
          <p className="contact-sub">I like teams where you hear the customer and ship the fix the same week. Tell me what you’re building, what’s painful right now, and what “done” looks like. I’ll give you a straight answer — even if it’s “not me.”</p>

          <div className="contact-list">
            <a className="contact-item" href="mailto:venkateshvnky3803@gmail.com">
              <span className="contact-item-icon"><AiOutlineMail /></span>
              <span className="contact-item-text"><small>Email — fastest</small><span>venkateshvnky3803@gmail.com</span></span>
            </a>
            <a className="contact-item" href="tel:+918463944069">
              <span className="contact-item-icon"><AiOutlinePhone /></span>
              <span className="contact-item-text"><small>Phone</small><span>+91 84639 44069</span></span>
            </a>
            <a className="contact-item" href="https://wa.me/918463944069" target="_blank" rel="noreferrer">
              <span className="contact-item-icon"><FaWhatsapp /></span>
              <span className="contact-item-text"><small>WhatsApp</small><span>Ping me — I’m usually around</span></span>
            </a>
            <div className="contact-item">
              <span className="contact-item-icon"><ImLocation /></span>
              <span className="contact-item-text"><small>Based in</small><span>Nirmal, Telangana — remote, IST</span></span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
            <a href="mailto:venkateshvnky3803@gmail.com?subject=Hi%20Venkatesh%20—%20quick%20chat%3F" className="btn-primary-old">Email me →</a>
            <a href="https://wa.me/918463944069" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp</a>
          </div>
          <p style={{ marginTop: 12, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: '#8C8C88', lineHeight: 1.6 }}>
            I’m in IST (UTC+5:30). If you’re elsewhere, propose a time and I’ll make it work.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form-box reveal reveal-delay-1" noValidate>
          <h3>Send a quick note</h3>
          <p>I read every one. No newsletter, no spam — just a reply.</p>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="subject">What’s this about?</label>
            <input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Job, freelance, or just saying hi" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="A few lines about what you need — team, timeline, what’s broken or what you want to build…" required />
          </div>

          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? 'Sending…' : 'Send — I’ll reply within 24h →'}
          </button>

          {status === 'success' && <div className="status-msg success">Got it — thanks. I’ll get back to you soon.</div>}
          {status === 'error' && <div className="status-msg error">Something broke. Just email me directly at venkateshvnky3803@gmail.com</div>}

          <p style={{ marginTop: 12, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: '#8C8C88' }}>
            By sending, you’re just asking me to reply by email. That’s it.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
