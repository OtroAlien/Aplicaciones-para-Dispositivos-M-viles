<template>
    <div class="home-component">
      <p>En {{ platformName }}, entendemos la importancia de mantener un control eficiente de tus finanzas para lograr tus metas y sueños. Es por eso que hemos creado una herramienta completa y fácil de usar que te permite gestionar tus ingresos y egresos de manera sencilla y efectiva.</p>
  
      <h2>Ingresar: Tu Centro de Control Financiero</h2>
  
      <p>En la sección de "Ingresar", encontrarás tu centro de control financiero personal. Aquí es donde puedes registrar todos tus ingresos y egresos de forma rápida y sin complicaciones. Desde tus salarios mensuales hasta tus gastos diarios, {{ platformName }} te brinda la flexibilidad para categorizar y organizar tus transacciones de acuerdo con tus necesidades específicas.</p>
  
      <p>Nuestro intuitivo sistema de ingresos y egresos te permite tener una visión clara de tu situación financiera en tiempo real. Además, podrás establecer metas financieras y realizar un seguimiento de tu progreso a lo largo del tiempo. Ya no te preocupes por perder el control de tus finanzas; {{ platformName }} está aquí para simplificar tu vida financiera.</p>
  
      <h2>Reporte: Resumen Detallado de Tus Gastos</h2>
  
      <p>En la sección de "Reporte", accederás a un resumen detallado de tus gastos. Nuestra plataforma genera informes personalizados que te ofrecen una visión completa de tus hábitos de gasto. Analiza tus patrones, identifica áreas de mejora y toma decisiones informadas para optimizar tu presupuesto.</p>
  
      <p>Los informes de {{ platformName }} no solo te muestran el pasado, sino que también te ayudan a planificar el futuro. Establece presupuestos mensuales, recibe alertas personalizadas cuando te acerques a tus límites y toma el control total de tu situación financiera.</p>
  
      <h2>Más Allá de la Gestión Financiera</h2>
  
      <p>En {{ platformName }}, nuestra misión va más allá de ser simplemente un gestor financiero. Nos esforzamos por empoderarte con el conocimiento y las herramientas necesarias para tomar decisiones financieras inteligentes. Explora nuestros recursos educativos, artículos y consejos sobre educación financiera para fortalecer tu comprensión y mejorar tus habilidades financieras.</p>
  
      <p>Regístrate hoy en {{ platformName }} y da el primer paso hacia una vida financiera más sólida y exitosa. Estamos aquí para ser tu compañero en este emocionante viaje hacia la estabilidad financiera. Comienza tu camino hacia el éxito financiero con {{ platformName }} hoy mismo.</p>

    <div class="image-gallery">
      <img src="@/assets/imagen1.jpg" alt="Image 1" />
      <img src="@/assets/imagen2.jpg" alt="Image 2" />
      <img src="@/assets/imagen3.jpg" alt="Image 3" />
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeComponent',
    data() {
      return {
        platformName: 'Gestor Financiero',
      };
    },
  };
  </script>
  
  <style scoped>
  
body {
  background-color: #184868;
  margin: 0;
  padding: 0;
}

  .home-component strong {
    color: #007bff; /* Puedes ajustar el color según tu preferencia */
  }

  .image-gallery {
    margin-top: 20px;
  }
  
  .image-gallery img {
    max-width: 30%;
    margin: 10px;
    height: auto;
    margin-bottom: 10px;
  }
  </style>
  