'use client';

import { FormEvent, useState } from 'react';
import { ArrowIcon } from '@/components/icons/Icons';

type FormFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  source: string;
  consent: string;
  submit: string;
  sent: string;
  sendAnother: string;
  errorGeneric: string;
};

type Props = {
  f: FormFields;
  projectTypes: string[];
  sources: string[];
  lede: string;
};

type Errors = Partial<Record<'name' | 'email' | 'message' | 'consent', boolean>>;

export function ContactForm({ f, projectTypes, sources, lede }: Props) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: '',
    source: '',
    message: '',
    consent: false,
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
      setForm({ ...form, [k]: val });
    };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = true;
    if (!form.email.includes('@')) errs.email = true;
    if (!form.message.trim()) errs.message = true;
    if (!form.consent) errs.consent = true;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          projectType: form.type,
          source: form.source,
          message: form.message,
          consent: form.consent,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSent(true);
    } catch {
      setSubmitError(f.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm({ name: '', company: '', email: '', phone: '', type: '', source: '', message: '', consent: false });
    setErrors({});
    setSubmitError(null);
    setSent(false);
  };

  if (sent) {
    return (
      <div className="contact__form contact__sent reveal is-in">
        <div className="ok">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12 L10 17 L19 7" />
          </svg>
        </div>
        <h3>{f.sent}</h3>
        <p>{lede}</p>
        <button type="button" className="btn btn--ghost" onClick={reset} data-hot>
          {f.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form className="contact__form reveal is-in" onSubmit={submit} noValidate>
      <div className="fld-row">
        <div className="fld">
          <label>{f.name}</label>
          <input
            className="inp"
            value={form.name}
            onChange={update('name')}
            data-hot
            style={errors.name ? { borderColor: '#D64545' } : undefined}
          />
        </div>
        <div className="fld">
          <label>{f.company}</label>
          <input className="inp" value={form.company} onChange={update('company')} data-hot />
        </div>
      </div>
      <div className="fld-row">
        <div className="fld">
          <label>{f.email}</label>
          <input
            className="inp"
            type="email"
            value={form.email}
            onChange={update('email')}
            data-hot
            style={errors.email ? { borderColor: '#D64545' } : undefined}
          />
        </div>
        <div className="fld">
          <label>{f.phone}</label>
          <input className="inp" type="tel" value={form.phone} onChange={update('phone')} data-hot />
        </div>
      </div>
      <div className="fld-row">
        <div className="fld">
          <label>{f.projectType}</label>
          <select className="sel" value={form.type} onChange={update('type')} data-hot>
            <option value="">—</option>
            {projectTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="fld">
          <label>{f.source}</label>
          <select className="sel" value={form.source} onChange={update('source')} data-hot>
            <option value="">—</option>
            {sources.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="fld">
        <label>{f.message}</label>
        <textarea
          className="txt"
          value={form.message}
          onChange={update('message')}
          data-hot
          style={errors.message ? { borderColor: '#D64545' } : undefined}
        />
      </div>
      <label className="consent" style={errors.consent ? { color: '#D64545' } : undefined}>
        <input type="checkbox" checked={form.consent} onChange={update('consent')} />
        <span>{f.consent}</span>
      </label>
      {submitError && <div className="contact__error">{submitError}</div>}
      <button
        type="submit"
        className="btn btn--primary btn--lg"
        style={{ alignSelf: 'flex-start' }}
        data-hot
        disabled={submitting}
      >
        {f.submit} <ArrowIcon />
      </button>
    </form>
  );
}
