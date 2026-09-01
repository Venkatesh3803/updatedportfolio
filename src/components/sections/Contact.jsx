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
          <h2 className="section-title">Let’s build <em>something useful.</em></h2>
        </div>
        <p className="section-desc">Open to full-time, hybrid/remote, and freelance product work. Fastest reply by email or WhatsApp.</p>
      </div>

      <div className="contact-grid2">
        <div className="reveal">
          <h3 className="contact-lead">If you need a <em>startup-minded</em> full-stack engineer, we should talk.</h3>
          <p className="contact-sub">I’ve lived the 0→1 — specs from customer calls, shipping with a tiny team, owning prod. Share a bit about your team & what “shipped” means for you — I’ll give a straight answer within 24h.</p>

          <div className="contact-list">
            <a className="contact-item" href="mailto:venkateshvnky3803@gmail.com">
              <span className="contact-item-icon"><AiOutlineMail /></span>
              <span className="contact-item-text"><small>Email</small><span>venkateshvnky3803@gmail.com</span></span>
            </a>
            <a className="contact-item" href="tel:+918463944069">
              <span className="contact-item-icon"><AiOutlinePhone /></span>
              <span className="contact-item-text"><small>Phone</small><span>+91 84639 44069</span></span>
            </a>
            <a className="contact-item" href="https://wa.me/918463944069" target="_blank" rel="noreferrer">
              <span className="contact-item-icon"><FaWhatsapp /></span>
              <span className="contact-item-text"><small>WhatsApp</small><span>Chat instantly — wa.me/918463944069</span></span>
            </a>
            <div className="contact-item">
              <span className="contact-item-icon"><ImLocation /></span>
              <span className="contact-item-text"><small>Location</small><span>Nirmal, Telangana — Remote friendly</span></span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
            <a href="mailto:venkateshvnky3803@gmail.com?subject=Opportunity%20for%20Chanda%20Venkatesh" className="btn-primary-old">Email me directly →</a>
            <a href="https://wa.me/918463944069" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form-box reveal reveal-delay-1" noValidate>
          <h3>Send a message</h3>
          <p>I read every message myself. No auto-reply bot.</p>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@company.com" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Role / project brief" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about the team, timeline and what you need built…" required />
          </div>

          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? 'Sending…' : 'Send message — I’ll reply in 24h →'}
          </button>

          {status === 'success' && <div className="status-msg success">Thanks — message sent. I’ll get back to you shortly.</div>}
          {status === 'error' && <div className="status-msg error">Something went wrong. Try emailing directly at venkateshvnky3803@gmail.com</div>}

          <p style={{ marginTop: 12, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: '#8C8C88' }}>
            By sending this you agree I’ll reply by email. No newsletter, no spam.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
