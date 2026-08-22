import React, { useState } from 'react'
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiFillCheckCircle
} from "react-icons/ai"
import { ImLocation } from "react-icons/im"
import { FaWhatsapp, FaDownload, FaRocket, FaClock } from "react-icons/fa"
import { IoMdChatboxes } from "react-icons/io"
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setStatus('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'venkateshvnky3803@gmail.com'
            };

            await emailjs.send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                templateParams,
                'YOUR_PUBLIC_KEY'
            );

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const contactItems = [
        {
            icon: AiOutlineMail,
            label: 'Email Me',
            value: 'venkateshvnky3803@gmail.com',
            href: 'mailto:venkateshvnky3803@gmail.com',
            external: false,
        },
        {
            icon: AiOutlinePhone,
            label: 'Call / Text',
            value: '+91 8463944069',
            href: 'tel:+918463944069',
            external: false,
        },
        {
            icon: FaWhatsapp,
            label: 'WhatsApp',
            value: 'Chat instantly',
            href: 'https://wa.me/918463944069',
            external: true,
        },
        {
            icon: ImLocation,
            label: 'Location',
            value: 'Nirmal, Telangana',
            href: 'https://www.google.com/maps/search/Nirmal+Telangana',
            external: true,
        },
        {
            icon: AiOutlineGithub,
            label: 'GitHub',
            value: 'github.com/Venkatesh3803',
            href: 'https://github.com/Venkatesh3803',
            external: true,
        },
        {
            icon: AiOutlineLinkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/chanda-venkatesh-705154247',
            href: 'www.linkedin.com/in/chanda-venkatesh-705154247',
            external: true,
        },
    ];

    return (
        <section id='contact' className='contact-section'>
            <motion.div
                className='contact-container'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className='contact-header'>
                    <h2 className='section-badge'>Get In Touch</h2>
                    <h1>Let's Build Something <span>Great Together</span></h1>
                    <p>I'm currently open to full-time roles, freelance work, and ambitious projects.</p>
                </div>

                <div className='contact-grid'>
                    <motion.div
                        className='availability-banner'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className='availability-content'>
                            <div className='availability-icon'>
                                <AiFillCheckCircle size={24} />
                            </div>
                            <div>
                                <h3>Available for Opportunities</h3>
                                <p>Ready to start right away — interviews welcome anytime.</p>
                            </div>
                        </div>
                        <div className='availability-badge'>
                            <span className='pulse-dot'></span>
                            Now Accepting Opportunities
                        </div>
                    </motion.div>

                    <div className='contact-cards-grid'>
                        {contactItems.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className='contact-card'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className='card-icon'>
                                    <item.icon size={22} />
                                </div>
                                <div className='card-text'>
                                    <span className='card-label'>{item.label}</span>
                                    <span className='card-value'>{item.value}</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        className='recruiter-actions'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className='recruiter-info'>
                            <div className='recruiter-header'>
                                <div className='rocket-icon'>
                                    <FaRocket size={24} />
                                </div>
                                <h3>Looking for New Opportunities</h3>
                            </div>
                            <p>
                                Looking for a <strong>Full-Stack Developer</strong> for your next project or team?
                                I'd be happy to connect, discuss the opportunity, and explore how I can contribute.
                            </p>
                            <div className='recruiter-meta'>
                                <FaClock size={14} />
                                <span>Open to Remote / Hybrid / On-site roles, full-time & freelance.</span>
                            </div>
                        </div>

                        <div className='action-buttons'>
                            <a
                                href={`mailto:venkateshvnky3803@gmail.com?subject=Job%20Opportunity&body=Hi%20Venkatesh,%0A%0AWe%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity.%0A%0ABest,%0A`}
                                className='action-btn primary'
                            >
                                <AiOutlineMail size={18} />
                                Email Me
                            </a>
                            <a
                                href="https://wa.me/918463944069"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='action-btn whatsapp'
                            >
                                <FaWhatsapp size={18} />
                                WhatsApp
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='action-btn resume'
                            >
                                <FaDownload size={18} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>

      
            </motion.div>

            <style jsx>{`
                .contact-section {
                    min-height: 100vh;
                    padding: 6rem 2rem;
                    background: var(--bg-primary, #0a0a0a);
                    color: var(--text-primary, #fff);
                }
                .contact-container {
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .contact-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }
                .section-badge {
                    display: inline-block;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: #22d3ee;
                    margin-bottom: 1rem;
                }
                .contact-header h1 {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    line-height: 1.1;
                    margin-bottom: 0.75rem;
                }
                .contact-header h1 span {
                    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .contact-header p {
                    font-size: 1rem;
                    color: var(--text-secondary, #888);
                    max-width: 600px;
                    margin: 0 auto;
                }
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }
                .availability-banner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1.5rem;
                    padding: 1.25rem 1.5rem;
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(15, 23, 42, 0.6) 100%);
                    border: 1px solid rgba(16, 185, 129, 0.25);
                    border-radius: 16px;
                    flex-wrap: wrap;
                }
                .availability-content {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .availability-icon {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(16, 185, 129, 0.15);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    border-radius: 12px;
                    color: #10b981;
                }
                .availability-content h3 {
                    font-size: 0.9375rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0 0 0.125rem;
                }
                .availability-content p {
                    font-size: 0.8125rem;
                    color: var(--text-secondary, #888);
                    margin: 0;
                }
                .availability-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.25);
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #10b981;
                    white-space: nowrap;
                }
                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: #10b981;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.9); }
                }
                .contact-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 0.75rem;
                }
                .contact-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                    background: var(--bg-secondary, #141414);
                    border: 1px solid var(--border-color, #2a2a2a);
                    border-radius: 14px;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.25s ease;
                }
                .contact-card:hover {
                    border-color: rgba(99, 102, 241, 0.4);
                    background: var(--bg-tertiary, #1a1a1a);
                    transform: translateX(4px);
                }
                .card-icon {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(99, 102, 241, 0.12);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 11px;
                    color: #6366f1;
                    flex-shrink: 0;
                    transition: all 0.25s ease;
                }
                .contact-card:hover .card-icon {
                    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                    color: #fff;
                    border-color: transparent;
                    transform: scale(1.08);
                }
                .card-text {
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                }
                .card-label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--text-secondary, #888);
                }
                .card-value {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--text-primary, #fff);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .recruiter-actions {
                    padding: 1.75rem;
                    background: var(--bg-secondary, #141414);
                    border: 1px solid var(--border-color, #2a2a2a);
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .recruiter-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .rocket-icon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 11px;
                    color: #6366f1;
                }
                .recruiter-header h3 {
                    font-size: 1.0625rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                }
                .recruiter-info p {
                    font-size: 0.9rem;
                    line-height: 1.7;
                    color: var(--text-secondary, #888);
                    margin: 0;
                }
                .recruiter-info strong {
                    color: var(--text-primary, #fff);
                }
                .recruiter-meta {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.75rem;
                    color: var(--text-secondary, #888);
                }
                .recruiter-meta svg {
                    color: var(--text-muted, #555);
                }
                .action-buttons {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0.75rem;
                }
                .action-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.25rem;
                    border-radius: 12px;
                    font-size: 0.875rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .action-btn.primary {
                    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                    color: #fff;
                }
                .action-btn.primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
                }
                .action-btn.whatsapp {
                    background: #10b981;
                    color: #fff;
                }
                .action-btn.whatsapp:hover {
                    background: #059669;
                    transform: translateY(-2px);
                }
                .action-btn.resume {
                    background: var(--bg-primary, #0a0a0a);
                    border: 1px solid var(--border-color, #2a2a2a);
                    color: var(--text-primary, #fff);
                }
                .action-btn.resume:hover {
                    border-color: #6366f1;
                    background: var(--bg-tertiary, #1a1a1a);
                    transform: translateY(-2px);
                }
                .action-btn.resume svg {
                    color: #6366f1;
                }
                .contact-form-wrapper {
                    margin-top: 1rem;
                }
                .contact-form {
                    background: var(--bg-secondary, #141414);
                    border: 1px solid var(--border-color, #2a2a2a);
                    border-radius: 16px;
                    padding: 2rem;
                }
                .contact-form h2 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin: 0 0 1.5rem;
                    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }
                .form-group {
                    margin-bottom: 1.25rem;
                }
                .form-group label {
                    display: block;
                    font-size: 0.8125rem;
                    font-weight: 500;
                    color: var(--text-secondary, #888);
                    margin-bottom: 0.5rem;
                }
                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 0.875rem 1rem;
                    background: var(--bg-primary, #0a0a0a);
                    border: 1px solid var(--border-color, #2a2a2a);
                    border-radius: 10px;
                    color: var(--text-primary, #fff);
                    font-size: 0.9375rem;
                    font-family: inherit;
                    transition: all 0.2s;
                }
                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #6366f1;
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
                }
                .form-group input::placeholder,
                .form-group textarea::placeholder {
                    color: var(--text-muted, #555);
                }
                .submit-btn {
                    width: 100%;
                    padding: 1rem 2rem;
                    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                    border: none;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 0.9375rem;
                    font-weight: 600;
                    font-family: inherit;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 0.2s;
                }
                .submit-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
                }
                .submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                .spinner {
                    width: 18px;
                    height: 18px;
                    border: 2px solid transparent;
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                .status-message {
                    margin-top: 1rem;
                    padding: 1rem;
                    border-radius: 10px;
                    font-size: 0.875rem;
                    text-align: center;
                }
                .status-message.success {
                    background: rgba(16, 185, 129, 0.15);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    color: #10b981;
                }
                .status-message.error {
                    background: rgba(239, 68, 68, 0.15);
                    border: 1px solid rgba(239, 68, 68, 0.3);
                    color: #ef4444;
                }

                @media (min-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr 1.2fr;
                        grid-template-rows: auto auto;
                        grid-template-areas:
                            "availability actions"
                            "cards actions";
                        align-items: start;
                    }
                    .availability-banner {
                        grid-area: availability;
                    }
                    .contact-cards-grid {
                        grid-area: cards;
                    }
                    .recruiter-actions {
                        grid-area: actions;
                        position: sticky;
                        top: 100px;
                        max-height: calc(100vh - 140px);
                    }
                    .action-buttons {
                        grid-template-columns: 1fr 1fr;
                    }
                    .action-btn.resume {
                        grid-column: span 2;
                    }
                }
                @media (max-width: 600px) {
                    .contact-section {
                        padding: 4rem 1rem;
                    }
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                    .contact-form {
                        padding: 1.5rem;
                    }
                    .contact-cards-grid {
                        grid-template-columns: 1fr;
                    }
                    .availability-banner {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </section>
    )
}

export default Contact