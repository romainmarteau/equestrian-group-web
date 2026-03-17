import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    affiliation: '',
    role: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Call both APIs concurrently
      const emailPromise = fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const sheetPromise = fetch('/api/addToSheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const [emailRes, sheetRes] = await Promise.all([emailPromise, sheetPromise]);

      if (emailRes.ok && sheetRes.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', address: '', phone: '', affiliation: '', role: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="how" className="bg-sage py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-medium text-4xl md:text-6xl mb-4 leading-tight">Join East End <br /> Equestrian Group</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#e0e1d5] p-8 md:p-12 rounded-lg shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-forest/60 ml-1">Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Schmidt"
                  className="input-field"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-forest/60 ml-1">Email</label>
                <input
                  required
                  type="email"
                  placeholder="john.schmidt@gmail.com"
                  className="input-field"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-forest/60 ml-1">Address</label>
              <input
                required
                type="text"
                placeholder="123 Main Street, Southampton NY"
                className="input-field"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-forest/60 ml-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="input-field"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-forest/60 ml-1">Farm/Business Affiliation</label>
                <input
                  type="text"
                  placeholder="Two Trees Farm"
                  className="input-field"
                  value={formData.affiliation}
                  onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-forest/60 ml-1">Your Role</label>
              <select
                required
                className="input-field appearance-none"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="" disabled>Please Select</option>
                <option value="Rider">Rider</option>
                <option value="Farm Owner">Farm Owner</option>
                <option value="Industry Professional">Industry Professional</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-forest/60 ml-1">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us a bit about yourself..."
                className="input-field resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="flex flex-col items-center pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full md:w-auto min-w-[200px]"
              >
                {status === 'loading' ? 'SENDING...' : 'JOIN THE GROUP'}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-green-700 font-medium">Thank you! Your request has been sent.</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-600 font-medium">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
