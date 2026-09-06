"use client";

import { useState } from "react";
import { Briefcase, Calculator, FileText, GraduationCap, User, Menu, X, CheckCircle, ShieldCheck } from "lucide-react";

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <div className="logo">
            Larissa<span>Viana</span>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a></li>
              <li><a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
              <li><a href="#experiencia" onClick={() => setIsMenuOpen(false)}>Especialidade</a></li>
              <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1 className="hero-subtitle">Analista Contábil | CRC-RJ Ativo</h1>
            </div>
            
            <div className="about-grid" style={{ alignItems: 'center' }}>
              <div className="about-image" style={{ textAlign: 'center' }}>
                <img 
                  src="/larissa.jpg" 
                  alt="Larissa Viana" 
                  style={{ 
                    width: '280px', 
                    height: '280px', 
                    objectFit: 'cover', 
                    borderRadius: '50%', 
                    border: '4px solid var(--primary-color)', 
                    margin: '0 auto',
                    display: 'block'
                  }} 
                />
              </div>
              <div className="about-text" style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 500 }}>
                  Olá! Sou <strong>Larissa Viana</strong>, Contadora com registro ativo no CRC/RJ e sólida experiência no mercado corporativo.
                </p>
                <p>
                  Ajudo empreendedores a alavancarem seus negócios e pessoas físicas a protegerem seus patrimônios, cuidando de toda a burocracia para você.
                </p>
                <p>
                  Minha missão é simplificar sua vida financeira e tributária, fornecendo informações precisas e estratégias seguras para o seu crescimento.
                </p>
                <div className="hero-buttons" style={{ marginTop: '2.5rem', justifyContent: 'flex-start' }}>
                  <a href="https://wa.me/5521998705650" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <WhatsAppIcon size={20} />
                    Falar com a Contadora
                  </a>
                  <a href="#servicos" className="btn" style={{ backgroundColor: 'transparent', color: 'var(--primary-color)', border: '1px solid var(--border-color)' }}>
                    Ver Meus Serviços
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="section section-bg-white">
          <div className="container">
            <h2>Como posso te ajudar?</h2>
            <div className="services-grid">
              
              <div className="service-card">
                <div className="service-icon" style={{ backgroundColor: 'rgba(214, 158, 46, 0.15)', color: 'var(--accent-color)' }}>
                  <Briefcase size={28} />
                </div>
                <h3>Assessoria para MEI</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Abra sua empresa sem burocracia. Cuidamos da emissão das suas guias (DAS), declaração anual (DASN) e mantemos sua empresa sempre regularizada para você focar no que importa: o seu negócio.
                </p>
                <a href="https://wa.me/5521998705650?text=Olá,%20gostaria%20de%20ajuda%20para%20regularizar%20meu%20MEI" target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--primary-color)', border: '1px solid var(--border-color)' }}>
                  Quero regularizar meu MEI
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon" style={{ backgroundColor: 'rgba(214, 158, 46, 0.15)', color: 'var(--accent-color)' }}>
                  <FileText size={28} />
                </div>
                <h3>Imposto de Renda (IRPF)</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Evite dores de cabeça com a malha fina. Realizo sua declaração de forma precisa e otimizada, garantindo o preenchimento correto de todos os seus rendimentos, bens e deduções legais.
                </p>
                <a href="https://wa.me/5521998705650?text=Olá,%20preciso%20de%20ajuda%20com%20meu%20Imposto%20de%20Renda" target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--primary-color)', border: '1px solid var(--border-color)' }}>
                  Fazer minha Declaração
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon" style={{ backgroundColor: 'rgba(214, 158, 46, 0.15)', color: 'var(--accent-color)' }}>
                  <Calculator size={28} />
                </div>
                <h3>Cálculo de Aposentadoria</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Planeje seu futuro com segurança. Faço a análise completa do seu tempo de contribuição e cálculos previdenciários para identificar o melhor momento e a modalidade mais vantajosa.
                </p>
                <a href="https://wa.me/5521998705650?text=Olá,%20gostaria%20de%20fazer%20o%20cálculo%20da%20minha%20aposentadoria" target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--primary-color)', border: '1px solid var(--border-color)' }}>
                  Calcular Aposentadoria
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Experiência e Educação */}
        <section id="experiencia" className="section">
          <div className="container">
            <h2>Por que confiar no meu trabalho?</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
              Com mais de 4 anos de atuação no exigente mercado corporativo, trago o mesmo rigor técnico, segurança e organização de grandes empresas para cuidar do seu negócio e patrimônio pessoal.
            </p>
            
            <div className="about-grid">
              
              <div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>
                  <ShieldCheck size={24} color="var(--accent-color)" /> Autoridade & Formação
                </h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="timeline-date" style={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}>Registro Ativo</span>
                    <h4 className="timeline-title">Conselho Regional de Contabilidade</h4>
                    <p className="timeline-subtitle">CRC-RJ Profissional</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Garantia de atuação ética e regulamentada pelas normas contábeis vigentes.</p>
                  </div>
                  
                  <div className="timeline-item">
                    <span className="timeline-date">2019 – 2024</span>
                    <h4 className="timeline-title">Bacharelado em Ciências Contábeis</h4>
                    <p className="timeline-subtitle">UFRJ - Universidade Federal do Rio de Janeiro</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Formação sólida por uma das instituições mais prestigiadas e rigorosas do país.</p>
                  </div>

                  <div className="timeline-item">
                    <span className="timeline-date">Especializações Técnicas</span>
                    <h4 className="timeline-title">Certificações e Ferramentas</h4>
                    <ul className="timeline-list" style={{ marginTop: '0.5rem' }}>
                      <li>Excel e VBA Avançado (Automação de rotinas contábeis)</li>
                      <li>Power BI Básico (Análise de Dados)</li>
                      <li>Inglês Intermediário</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>
                  <Briefcase size={24} color="var(--accent-color)" /> Excelência Corporativa
                </h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="timeline-date">03/2025 – Atual</span>
                    <h4 className="timeline-title">Analista Contábil JR</h4>
                    <p className="timeline-subtitle">Monteiro Aranha</p>
                    <ul className="timeline-list">
                      <li>Fechamento contábil e elaboração de notas explicativas.</li>
                      <li>Análise detalhada de contas patrimoniais e de resultado.</li>
                      <li>Conciliação rigorosa de fundos de investimento e garantias.</li>
                    </ul>
                  </div>

                  <div className="timeline-item">
                    <span className="timeline-date">01/2024 – 02/2025</span>
                    <h4 className="timeline-title">Analista Trainee Contábil e Tributário</h4>
                    <p className="timeline-subtitle">Monteiro Aranha</p>
                    <ul className="timeline-list">
                      <li>Apuração minuciosa de impostos e obrigações acessórias.</li>
                      <li>Garantia de compliance fiscal e entrega de certidões.</li>
                    </ul>
                  </div>

                  <div className="timeline-item">
                    <span className="timeline-date">2021 – 2024</span>
                    <h4 className="timeline-title">Experiência Base</h4>
                    <p className="timeline-subtitle">Estágios em Contabilidade e Tributário</p>
                    <ul className="timeline-list">
                      <li>Sólida experiência em cálculos de ICMS, DAS e conciliações bancárias.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="section section-bg-white">
          <div className="container contact-container">
            <h2>Vamos Conversar?</h2>
            <p>
              Precisa de ajuda com sua contabilidade ou tem alguma dúvida sobre os meus serviços?
              Me envie uma mensagem no WhatsApp e responderei o mais rápido possível.
            </p>
            
            <div className="contact-info">
              <a href="https://wa.me/5521998705650" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1rem 2rem', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                <WhatsAppIcon size={24} />
                (21) 99870-5650
              </a>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                <CheckCircle size={18} color="var(--primary-color)" />
                <p style={{ margin: 0 }}>Atendimento humanizado com sigilo absoluto das suas informações.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Larissa Viana. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
