<template>
  <div class="landing-page">
    <!-- 1. Hero Section / Página Principal -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Tomá el control de tus finanzas</h1>
        <p class="hero-subtitle">La aplicación más completa para gestionar tus ingresos, gastos y presupuestos de manera inteligente.</p>
        <div class="hero-buttons">
          <b-button variant="primary" size="lg" @click="scrollToSection('registro')" class="btn-cta">Comenzar Gratis</b-button>
          <b-button variant="outline-light" size="lg" @click="scrollToSection('como-funciona')" class="btn-secondary">Ver Demo</b-button>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/banner.jpg" alt="Demo de la aplicación" class="demo-image">
      </div>
    </section>

    <!-- 2. Cómo Funciona / Beneficios -->
    <section id="como-funciona" class="features-section">
      <div class="container">
        <h2 class="section-title">¿Cómo funciona?</h2>
        <p class="section-subtitle">Gestiona tus finanzas en 3 simples pasos</p>
        
        <div class="features-grid">
          <div class="feature-card glass-card">
            <div class="feature-icon">
              <i class="fas fa-plus-circle"></i>
            </div>
            <h3>Registra tus movimientos</h3>
            <p>Añade ingresos y gastos de forma rápida y sencilla. Categoriza automáticamente tus transacciones.</p>
          </div>
          
          <div class="feature-card glass-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Visualiza reportes</h3>
            <p>Obtén insights detallados de tus finanzas con gráficos y reportes personalizados por período.</p>
          </div>
          
          <div class="feature-card glass-card">
            <div class="feature-icon">
              <i class="fas fa-target"></i>
            </div>
            <h3>Crea presupuestos</h3>
            <p>Establece metas financieras y recibe alertas cuando te acerques a tus límites de gasto.</p>
          </div>
        </div>

        <div class="benefits-section">
          <h3>¿Por qué elegir nuestra app?</h3>
          <div class="benefits-grid">
            <div class="benefit-item">
              <i class="fas fa-mobile-alt"></i>
              <span>Sincronización móvil</span>
            </div>
            <div class="benefit-item">
              <i class="fas fa-shield-alt"></i>
              <span>Datos seguros</span>
            </div>
            <div class="benefit-item">
              <i class="fas fa-clock"></i>
              <span>Tiempo real</span>
            </div>
            <div class="benefit-item">
              <i class="fas fa-chart-pie"></i>
              <span>Reportes avanzados</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Precios / Planes -->
    <section id="precios" class="pricing-section">
      <div class="container">
        <h2 class="section-title">Planes y Precios</h2>
        <p class="section-subtitle">Elige el plan que mejor se adapte a tus necesidades</p>
        
        <div class="pricing-grid">
          <div class="pricing-card glass-card">
            <div class="plan-header">
              <h3>Gratuito</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">0</span>
                <span class="period">/mes</span>
              </div>
            </div>
            <ul class="plan-features">
              <li><i class="fas fa-check"></i> Hasta 50 transacciones/mes</li>
              <li><i class="fas fa-check"></i> Reportes básicos</li>
              <li><i class="fas fa-check"></i> 3 categorías personalizadas</li>
              <li><i class="fas fa-times"></i> Sin sincronización móvil</li>
              <li><i class="fas fa-times"></i> Sin exportación de datos</li>
            </ul>
            <b-button variant="outline-primary" class="plan-button" @click="scrollToSection('registro')">Comenzar Gratis</b-button>
          </div>
          
          <div class="pricing-card glass-card featured">
            <div class="plan-badge">Más Popular</div>
            <div class="plan-header">
              <h3>Premium</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">9.99</span>
                <span class="period">/mes</span>
              </div>
            </div>
            <ul class="plan-features">
              <li><i class="fas fa-check"></i> Transacciones ilimitadas</li>
              <li><i class="fas fa-check"></i> Reportes avanzados</li>
              <li><i class="fas fa-check"></i> Categorías ilimitadas</li>
              <li><i class="fas fa-check"></i> Sincronización móvil</li>
              <li><i class="fas fa-check"></i> Exportación a Excel/PDF</li>
              <li><i class="fas fa-check"></i> Soporte prioritario</li>
            </ul>
            <b-button variant="primary" class="plan-button" @click="scrollToSection('registro')">Obtener Premium</b-button>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Seguridad y Privacidad -->
    <section id="seguridad" class="security-section">
      <div class="container">
        <h2 class="section-title">Seguridad y Privacidad</h2>
        <p class="section-subtitle">Tus datos están protegidos con los más altos estándares de seguridad</p>
        
        <div class="security-grid">
          <div class="security-item glass-card">
            <i class="fas fa-lock"></i>
            <h4>Encriptación SSL</h4>
            <p>Todos los datos se transmiten con encriptación de 256 bits</p>
          </div>
          
          <div class="security-item glass-card">
            <i class="fas fa-server"></i>
            <h4>Servidores Seguros</h4>
            <p>Infraestructura en la nube con respaldos automáticos diarios</p>
          </div>
          
          <div class="security-item glass-card">
            <i class="fas fa-user-shield"></i>
            <h4>Privacidad Total</h4>
            <p>No compartimos ni vendemos tus datos personales a terceros</p>
          </div>
          
          <div class="security-item glass-card">
            <i class="fas fa-certificate"></i>
            <h4>Cumplimiento GDPR</h4>
            <p>Cumplimos con todas las regulaciones de protección de datos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Preguntas Frecuentes -->
    <section id="faqs" class="faq-section">
      <div class="container">
        <h2 class="section-title">Preguntas Frecuentes</h2>
        
        <b-accordion id="faq-accordion" class="faq-accordion">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="light">¿Cómo empiezo a usar la aplicación?</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="faq-accordion" role="tabpanel">
              <b-card-body>
                <p>Simplemente regístrate con tu email, confirma tu cuenta y comienza a añadir tus primeras transacciones. El proceso toma menos de 2 minutos.</p>
              </b-card-body>
            </b-collapse>
          </b-card>
          
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="light">¿Está disponible en móvil?</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="faq-accordion" role="tabpanel">
              <b-card-body>
                <p>Sí, nuestra aplicación es completamente responsive y funciona perfectamente en dispositivos móviles. También estamos desarrollando apps nativas para iOS y Android.</p>
              </b-card-body>
            </b-collapse>
          </b-card>
          
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="light">¿Qué pasa si pierdo el acceso a mi cuenta?</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="faq-accordion" role="tabpanel">
              <b-card-body>
                <p>Puedes recuperar tu cuenta usando la opción "¿Olvidaste tu contraseña?" en la página de login. Te enviaremos un enlace de recuperación a tu email.</p>
              </b-card-body>
            </b-collapse>
          </b-card>
          
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-4 variant="light">¿La app es completamente gratuita?</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="faq-accordion" role="tabpanel">
              <b-card-body>
                <p>Ofrecemos un plan gratuito con funcionalidades básicas. Para características avanzadas como reportes detallados y sincronización móvil, tenemos un plan premium muy accesible.</p>
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-accordion>
      </div>
    </section>

    <!-- 6. Sobre Nosotros -->
    <section id="sobre-nosotros" class="about-section">
      <div class="container">
        <h2 class="section-title">Sobre Nosotros</h2>
        <div class="about-content glass-card">
          <div class="about-text">
            <h3>Nuestra Misión</h3>
            <p>Creemos que todos merecen tener control total sobre sus finanzas personales. Nuestro equipo de desarrolladores y expertos financieros ha creado esta herramienta para democratizar el acceso a una gestión financiera inteligente.</p>
            
            <h4>¿Por qué creamos esta app?</h4>
            <p>Después de años viendo cómo las personas luchan con aplicaciones complicadas o costosas, decidimos crear una solución simple, potente y accesible para todos.</p>
            
            <div class="team-stats">
              <div class="stat">
                <span class="stat-number">10,000+</span>
                <span class="stat-label">Usuarios activos</span>
              </div>
              <div class="stat">
                <span class="stat-number">2 años</span>
                <span class="stat-label">En el mercado</span>
              </div>
              <div class="stat">
                <span class="stat-number">99.9%</span>
                <span class="stat-label">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Contacto / Soporte -->
    <section id="contacto" class="contact-section">
      <div class="container">
        <h2 class="section-title">Contacto y Soporte</h2>
        <p class="section-subtitle">¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
        
        <div class="contact-grid">
          <div class="contact-info glass-card">
            <h3>Información de Contacto</h3>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <p>soporte@gestorfinanciero.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="fab fa-whatsapp"></i>
              <div>
                <strong>WhatsApp</strong>
                <p>+54 9 11 1234-5678</p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-clock"></i>
              <div>
                <strong>Horario de Atención</strong>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
              </div>
            </div>
            
            <div class="social-links">
              <h4>Síguenos</h4>
              <div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          
          <div class="contact-form glass-card">
            <h3>Envíanos un Mensaje</h3>
            <b-form @submit.prevent="enviarMensaje">
              <b-form-group label="Nombre:">
                <b-form-input v-model="contactForm.nombre" required></b-form-input>
              </b-form-group>
              
              <b-form-group label="Email:">
                <b-form-input v-model="contactForm.email" type="email" required></b-form-input>
              </b-form-group>
              
              <b-form-group label="Asunto:">
                <b-form-select v-model="contactForm.asunto" :options="asuntoOpciones" required></b-form-select>
              </b-form-group>
              
              <b-form-group label="Mensaje:">
                <b-form-textarea v-model="contactForm.mensaje" rows="4" required></b-form-textarea>
              </b-form-group>
              
              <b-button type="submit" variant="primary" :disabled="enviandoMensaje">
                {{ enviandoMensaje ? 'Enviando...' : 'Enviar Mensaje' }}
              </b-button>
            </b-form>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Registro / Login -->
    <section id="registro" class="auth-section">
      <div class="container">
        <h2 class="section-title">¡Comienza Hoy Mismo!</h2>
        <p class="section-subtitle">Únete a miles de usuarios que ya controlan sus finanzas</p>
        
        <div class="auth-buttons">
          <b-button variant="primary" size="lg" @click="$router.push('/usuario')" class="auth-btn">
            <i class="fas fa-user-plus"></i>
            Crear Cuenta Gratis
          </b-button>
          <b-button variant="outline-primary" size="lg" @click="$router.push('/usuario')" class="auth-btn">
            <i class="fas fa-sign-in-alt"></i>
            Iniciar Sesión
          </b-button>
        </div>
        
        <div class="auth-options">
          <p>O regístrate con:</p>
          <div class="social-auth">
            <b-button variant="danger" class="social-btn">
              <i class="fab fa-google"></i>
              Google
            </b-button>
            <b-button variant="primary" class="social-btn">
              <i class="fab fa-facebook"></i>
              Facebook
            </b-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating Action Buttons -->
    <div class="floating-buttons">
      <b-button variant="primary" class="floating-btn" @click="$router.push('/usuario')" v-b-tooltip.left="'Iniciar Sesión'">
        <i class="fas fa-sign-in-alt"></i>
      </b-button>
      <b-button variant="success" class="floating-btn" @click="scrollToSection('registro')" v-b-tooltip.left="'Registrarse'">
        <i class="fas fa-user-plus"></i>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      contactForm: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      },
      asuntoOpciones: [
        { value: '', text: 'Selecciona un asunto' },
        { value: 'soporte', text: 'Soporte Técnico' },
        { value: 'ventas', text: 'Consulta de Ventas' },
        { value: 'sugerencia', text: 'Sugerencia' },
        { value: 'otro', text: 'Otro' }
      ],
      enviandoMensaje: false
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    
    async enviarMensaje() {
      this.enviandoMensaje = true;
      
      try {
        // Simular envío de mensaje
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        this.$bvToast.toast('Tu mensaje ha sido enviado correctamente. Te responderemos pronto.', {
          title: 'Mensaje Enviado',
          variant: 'success',
          solid: true
        });
        
        // Limpiar formulario
        this.contactForm = {
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        };
        
      } catch (error) {
        this.$bvToast.toast('Error al enviar el mensaje. Por favor, intenta nuevamente.', {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      } finally {
        this.enviandoMensaje = false;
      }
    }
  }
};
</script>

<style scoped>
/* Variables CSS */
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  --text-dark: #2d3748;
  --text-light: #718096;
  --glass-bg: rgba(255, 255, 255, 0.25);
  --glass-border: rgba(255, 255, 255, 0.18);
}

.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
  pointer-events: none;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.btn-cta {
  background: linear-gradient(45deg, var(--accent-color), #ff6b6b);
  border: none;
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.demo-image {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: float 6s ease-in-out infinite;
}

/* Secciones Generales */
section {
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: white;
}

.section-subtitle {
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.8);
}

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  padding: 2rem;
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  text-align: center;
  color: white;
}

.feature-icon {
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.benefits-section {
  text-align: center;
  margin-top: 3rem;
}

.benefits-section h3 {
  color: white;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.benefit-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.benefit-item i {
  font-size: 2rem;
  color: var(--accent-color);
}

/* Pricing Section */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.pricing-card {
  position: relative;
  text-align: center;
  color: white;
}

.pricing-card.featured {
  transform: scale(1.05);
  border: 2px solid var(--accent-color);
}

.plan-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, var(--accent-color), #ff6b6b);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.plan-header h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.price {
  margin-bottom: 2rem;
}

.currency {
  font-size: 1.5rem;
  vertical-align: top;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
}

.period {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.plan-features li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.plan-features .fa-check {
  color: #4ade80;
}

.plan-features .fa-times {
  color: #f87171;
}

.plan-button {
  width: 100%;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: 50px;
}

/* Security Section */
.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.security-item {
  text-align: center;
  color: white;
}

.security-item i {
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.security-item h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

/* FAQ Section */
.faq-accordion {
  max-width: 800px;
  margin: 0 auto;
}

.faq-accordion .card {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 15px;
  margin-bottom: 1rem;
}

.faq-accordion .btn {
  background: transparent;
  border: none;
  color: white;
  font-weight: 600;
  text-align: left;
}

.faq-accordion .card-body {
  color: rgba(255, 255, 255, 0.9);
}

/* About Section */
.about-content {
  max-width: 800px;
  margin: 0 auto;
  color: white;
}

.about-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
}

.about-content h4 {
  font-size: 1.4rem;
  margin: 2rem 0 1rem 0;
}

.team-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Contact Section */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.contact-info {
  color: white;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-item i {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-top: 0.25rem;
}

.contact-item strong {
  display: block;
  margin-bottom: 0.5rem;
}

.social-links {
  margin-top: 2rem;
}

.social-links h4 {
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--accent-color);
  transform: translateY(-2px);
  color: white;
}

.contact-form {
  color: white;
}

.contact-form .form-control {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 10px;
}

.contact-form .form-control:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--accent-color);
  color: white;
  box-shadow: 0 0 0 0.2rem rgba(240, 147, 251, 0.25);
}

.contact-form .form-control::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.contact-form label {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Auth Section */
.auth-section {
  text-align: center;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
}

.auth-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.auth-btn {
  padding: 1rem 2rem;
  font-weight: 600;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.auth-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.auth-options {
  color: rgba(255, 255, 255, 0.8);
}

.social-auth {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.social-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

/* Floating Buttons */
.floating-buttons {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
}

.floating-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.floating-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid,
  .pricing-grid,
  .security-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .floating-buttons {
    bottom: 1rem;
    right: 1rem;
  }
  
  .floating-btn {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .auth-buttons,
  .social-auth {
    flex-direction: column;
    align-items: center;
  }
  
  .auth-btn,
  .social-btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
  