export const FEATURES = [
  {
    icon: 'bi-wallet2',
    iconClass: 'bg-icon-blue',
    title: 'Registra tus movimientos',
    desc: 'Guarda todos tus ingresos y gastos de manera sencilla. Categoriza cada transacción y mantén un historial claro de tu actividad financiera.',
  },
  {
    icon: 'bi-graph-up-arrow',
    iconClass: 'bg-icon-green',
    title: 'Analiza tus finanzas',
    desc: 'Visualiza tu balance con gráficos intuitivos. Comprende exactamente cómo utilizas tu dinero cada mes y dónde puedes mejorar.',
  },
  {
    icon: 'bi-bullseye',
    iconClass: 'bg-icon-purple',
    title: 'Cumple tus objetivos',
    desc: 'Organiza tus gastos, establece metas de ahorro y mejora tus hábitos financieros paso a paso.',
  },
]

export const BENEFITS = [
  {
    icon: 'bi-shield-fill-check',
    iconClass: 'ft-benefit-icon--blue',
    title: 'Seguridad garantizada',
    desc: 'Tus datos financieros están protegidos con cifrado de extremo a extremo.',
  },
  {
    icon: 'bi-graph-up-arrow',
    iconClass: 'ft-benefit-icon--green',
    title: 'Visión en tiempo real',
    desc: 'Accede a tu situación financiera desde cualquier dispositivo en cualquier momento.',
  },
  {
    icon: 'bi-lightning-charge-fill',
    iconClass: 'ft-benefit-icon--purple',
    title: 'Fácil y rápido de usar',
    desc: 'Interfaz diseñada para que registrar un gasto tome menos de 10 segundos.',
  }
]

export const CHART_BARS = [
  { h: 28, cls: 'ft-bar-n' },
  { h: 50, cls: 'ft-bar-g' },
  { h: 38, cls: 'ft-bar-b' },
  { h: 56, cls: 'ft-bar-g' },
  { h: 32, cls: 'ft-bar-n' },
  { h: 60, cls: 'ft-bar-g' },
  { h: 42, cls: 'ft-bar-b' },
]

export const PANEL_ROWS = [
  { icon: 'bi-briefcase-fill', label: 'Salario mensual', val: '+$1.350.000', cls: 'home-panel-val--positive' },
  { icon: 'bi-cart-fill', label: 'Supermercado', val: '-$180.000', cls: 'home-panel-val--negative' },
  { icon: 'bi-house-fill', label: 'Arriendo', val: '-$450.000', cls: 'home-panel-val--negative' },
  { icon: 'bi-car-front-fill', label: 'Transporte', val: '-$65.000', cls: 'home-panel-val--negative' },
  { icon: 'bi-lightbulb-fill', label: 'Servicios básicos', val: '-$95.000', cls: 'home-panel-val--negative' },
  { icon: 'bi-mortarboard-fill', label: 'Educación', val: '-$120.000', cls: 'home-panel-val--negative' },
  { icon: 'bi-film', label: 'Entretenimiento', val: '-$50.000', cls: 'home-panel-val--negative' },
]

export const DONUT_LEGEND = [
  { dotClass: 'home-legend-dot--green', label: 'Ingresos' },
  { dotClass: 'home-legend-dot--blue', label: 'Gastos'   },
  { dotClass: 'home-legend-dot--gray', label: 'Ahorro' },
]

export const HERO_STATS = [
  { val: '+12K',  label: 'Usuarios activos' },
  { val: '98%',   label: 'Satisfacción'     },
  { val: 'Gratis',label: 'Para siempre'     },
]
