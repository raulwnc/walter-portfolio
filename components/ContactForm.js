import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    feedbackType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mpwrwdzp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', feedbackType: 'general' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const inputClass = "w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 transition-colors";
  const inputStyle = {
    backgroundColor: '#F5F2EB',
    border: '1px solid #C8C2AD',
    color: '#1E2E20',
  };

  const labelStyle = { color: '#1E2E20' };

  return (
    <div id="contact-form" className="!bg-[#E1DBC9] p-6 rounded-lg shadow-lg" style={{ border: '1px solid #C8C2AD' }}>
      <h3 className="text-xl font-bold mb-4" style={{ color: '#1E2E20' }}>Send Me a Message</h3>
      <p className="mb-6" style={{ color: '#4A5A4E' }}>
        I&apos;d love to hear your thoughts, feedback, or suggestions about my portfolio!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Message Type */}
        <div>
          <label htmlFor="feedbackType" className="block text-sm font-medium mb-2" style={labelStyle}>
            Message Type
          </label>
          <select
            id="feedbackType"
            name="feedbackType"
            value={formData.feedbackType}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
          >
            <option value="general">General Message</option>
            <option value="feedback">Website Feedback</option>
            <option value="collaboration">Collaboration Opportunity</option>
            <option value="question">Question</option>
            <option value="tip">Improvement Suggestion</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2" style={labelStyle}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            style={inputStyle}
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2" style={labelStyle}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            style={inputStyle}
            placeholder="your.email@example.com"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2" style={labelStyle}>
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClass}
            style={inputStyle}
            placeholder="Brief subject line"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2" style={labelStyle}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`${inputClass} resize-vertical`}
            style={inputStyle}
            placeholder="Your message, feedback, or suggestions..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#2D4530', color: '#E1DBC9' }}
          onMouseEnter={e => !isSubmitting && (e.currentTarget.style.backgroundColor = '#3d5c42')}
          onMouseLeave={e => !isSubmitting && (e.currentTarget.style.backgroundColor = '#2D4530')}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="p-3 rounded-md" style={{ backgroundColor: '#2D453022', border: '1px solid #2D4530', color: '#2D4530' }}>
            Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-3 rounded-md" style={{ backgroundColor: '#5E4B3B22', border: '1px solid #5E4B3B', color: '#5E4B3B' }}>
            Sorry, there was an error sending your message. Please try again or email me directly.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;