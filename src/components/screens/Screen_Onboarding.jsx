'use client';

import React, { useState } from 'react';
import { TopNav, Icon, LogoTile } from '../SharedUI';
import { submitProduct } from '../../app/onboarding/actions';

export default function Screen_Onboarding() {
  const [url, setUrl] = useState('');
  const [loadingAI, setLoadingAI] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category_id: 'crm',
    features: '',
    price: ''
  });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleAI = async () => {
    if (!url) {
      setStatus({ type: 'error', msg: 'Digite a URL do seu site primeiro.' });
      return;
    }
    setLoadingAI(true);
    setStatus({ type: '', msg: '' });
    try {
      const res = await fetch('/api/extract-saas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await res.json();
      if (res.ok) {
        setFormData({
          name: data.name || '',
          description: data.description || '',
          category_id: data.category?.toLowerCase() || 'crm',
          features: data.features?.join(', ') || '',
          price: data.price || ''
        });
        setStatus({ type: 'success', msg: 'Formulário preenchido pela IA com sucesso!' });
      } else {
        setStatus({ type: 'error', msg: data.error || 'Erro na extração' });
      }
    } catch (e) {
      setStatus({ type: 'error', msg: e.message });
    }
    setLoadingAI(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });
    
    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('website', url);
    form.append('category_id', formData.category_id);
    form.append('features', formData.features);
    form.append('price', formData.price);

    const res = await submitProduct(form);
    if (res.error) {
      setStatus({ type: 'error', msg: res.error });
    } else {
      setStatus({ type: 'success', msg: 'SaaS submetido para revisão com sucesso! Você será avisado quando aprovado.' });
      setFormData({ name: '', description: '', category_id: 'crm', features: '', price: '' });
      setUrl('');
    }
  };

  return (
    <div className="sx-screen">
      <TopNav active="" compact />
      
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', height: 'calc(100% - 49px)' }}>
        <aside style={{ borderRight: '1px solid var(--border)', padding: '28px 24px', background: 'var(--bg-2)' }}>
          <div className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Anunciar no Stackly
          </div>
          <h2 style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.015em', margin: '8px 0 4px' }}>Cadastre seu SaaS</h2>
          <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: '0 0 22px', lineHeight: 1.5 }}>
            Use nossa IA para ler o seu site e autopreencher o formulário.
          </p>
          
          <div className="sx-card" style={{ padding: 14, marginTop: 22, background: 'var(--surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Icon name="sparkle" size={13} stroke="var(--ai)" />
              <div style={{ fontSize: 12, fontWeight: 600 }}>Auto-preencher com IA</div>
            </div>
            <input 
              placeholder="https://seusite.com.br"
              value={url}
              onChange={e => setUrl(e.target.value)}
              className="sx-input"
              style={{ width: '100%', marginBottom: 10, fontSize: 12 }}
            />
            <button 
              onClick={handleAI}
              disabled={loadingAI}
              className="sx-btn sx-btn--sm" 
              style={{ width: '100%', justifyContent: 'center', background: 'var(--ai)', color: '#000', borderColor: 'transparent' }}
            >
              {loadingAI ? 'Extraindo...' : 'Executar IA'}
            </button>
          </div>
        </aside>

        <div style={{ padding: '32px 36px 80px', overflow: 'auto' }}>
          <h1 style={{ fontSize: 26, fontWeight: 500, margin: '0 0 24px' }}>Detalhes do Produto</h1>
          
          {status.msg && (
            <div style={{ padding: 12, marginBottom: 20, borderRadius: 8, background: status.type === 'error' ? 'var(--surface-3)' : 'var(--ai-soft)', color: status.type === 'error' ? 'red' : 'var(--text)' }}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 6, fontSize: 12 }}>Nome do Produto *</label>
              <input name="name" value={formData.name} onChange={handleChange} className="sx-input" required />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: 6, fontSize: 12 }}>Descrição *</label>
              <textarea name="description" value={formData.description} onChange={handleChange} className="sx-input" style={{ minHeight: 80 }} required />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: 6, fontSize: 12 }}>Categoria (Slug) *</label>
              <input name="category_id" value={formData.category_id} onChange={handleChange} className="sx-input" placeholder="crm, erp, financeiro..." required />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: 6, fontSize: 12 }}>Principais Recursos (separados por vírgula)</label>
              <input name="features" value={formData.features} onChange={handleChange} className="sx-input" placeholder="Pipeline visual, API, App iOS..." />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: 6, fontSize: 12 }}>Preço Inicial (Opcional)</label>
              <input name="price" value={formData.price} onChange={handleChange} className="sx-input" placeholder="R$ 49/mês" />
            </div>

            <button type="submit" className="sx-btn sx-btn--primary" style={{ marginTop: 12, alignSelf: 'flex-start' }}>
              Salvar e Enviar para Revisão
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
