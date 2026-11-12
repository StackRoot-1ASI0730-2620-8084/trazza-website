(function () {
    const STORAGE_KEY = 'trazza-lang';
    const SUPPORTED = ['en', 'es'];

    const es = {
        
        'meta.title': 'Trazza – Fletes de retorno para Lima',
        'meta.description': 'Trazza conecta a transportistas que regresan con espacio libre con pequeñas y medianas empresas que necesitan enviar mercadería por Lima.',

        
        'logo.home': 'Inicio de Trazza',
        'nav.how': 'Cómo funciona',
        'nav.carriers': 'Para transportistas',
        'nav.merchants': 'Para comerciantes',
        'nav.plans': 'Planes',
        'nav.testimonials': 'Testimonios',
        'nav.contact': 'Contacto',
        'nav.signin': 'Iniciar sesión',
        'lang.group': 'Idioma',
        'menu.open': 'Abrir menú',
        'menu.close': 'Cerrar menú',

        
        'hero.tag': 'FLETES DE RETORNO PARA LIMA',
        'hero.title': '¿Tu camión<br> regresa <span>vacío?</span>',
        'hero.desc': 'Trazza conecta a transportistas que regresan con espacio libre con pequeñas y medianas empresas que necesitan enviar mercadería por Lima. <span class="desktop-only">Publica tu ruta de retorno, recibe cargas compatibles y sigue cada envío en tiempo real.</span>',
        'cta.carrier': 'Soy transportista',
        'cta.merchant': 'Soy comerciante',
        'trust.commission': 'Sin comisión por viaje',
        'trust.dni': 'Transportistas verificados con DNI',
        'trust.tracking': 'Seguimiento en vivo',

        
        'card.aria': 'Ejemplo de una sugerencia de carga',
        'card.title': 'Sugerencia de carga para tu retorno',
        'card.new': 'Nuevo',
        'card.rating': '★ 4.9 · Empresa verificada',
        'card.rate': 'tarifa ofrecida',
        'card.detour': 'Desvío +1.8 km (+12 min)',
        'card.view': 'Ver carga',

    
        'how.eyebrow': 'CÓMO FUNCIONA',
        'how.title': 'Cómo funciona Trazza',
        'how.profile': 'Elige tu perfil',
        'how.tabCarriers': 'Para transportistas',
        'how.tabMerchants': 'Para comerciantes',
        'how.c1.title': 'Publica tu ruta de retorno',
        'how.c1.text': 'Cuéntanos dónde termina tu entrega, hacia dónde vas y cuánto espacio te queda.',
        'how.c2.title': 'Recibe cargas compatibles',
        'how.c2.text': 'Mira las cargas en tu camino de regreso con el desvío y la tarifa ofrecida antes de aceptar.',
        'how.c3.title': 'Entrega y recibe calificaciones',
        'how.c3.text': 'Confirma el recojo y la entrega en la app y construye tu reputación con cada viaje.',
        'how.m1.title': 'Publica tu envío',
        'how.m1.text': 'Cuéntanos qué necesitas mover, los puntos de recojo y entrega y el peso aproximado.',
        'how.m2.title': 'Elige un transportista en tu ruta',
        'how.m2.text': 'Mira transportistas verificados que ya van hacia tu destino, con su calificación y la tarifa antes de confirmar.',
        'how.m3.title': 'Sigue y califica',
        'how.m3.text': 'Sigue tu mercadería en vivo y califica al transportista cuando se confirme la entrega.',

        
        'carriers.eyebrow': 'PARA TRANSPORTISTAS',
        'carriers.title': 'Deja de regresar vacío',
        'carriers.photo': 'Transportista revisando sugerencias de carga en su celular',
        'carriers.f1.title': 'Cargas en tu camino de regreso',
        'carriers.f1.text': 'Solo cargas que encajan con tu ruta y la capacidad de tu vehículo.',
        'carriers.f2.title': 'Conoce tu desvío antes',
        'carriers.f2.text': 'Mira los kilómetros y minutos extra antes de aceptar cualquier carga.',
        'carriers.f3.title': 'Comerciantes confiables',
        'carriers.f3.text': 'Perfiles de empresas verificados y calificaciones de otros transportistas.',
        'carriers.cta': 'Regístrate como transportista',

        
        'merchants.eyebrow': 'PARA COMERCIANTES',
        'merchants.title': 'Envía tu mercadería sin<br> un contrato fijo',
        'merchants.photo': 'Dueño de una pyme preparando un envío',
        'merchants.f1.title': 'Transportistas con espacio en tu ruta',
        'merchants.f1.text': 'Encuentra transportistas que ya van hacia tu destino, a menor costo que un viaje exclusivo.',
        'merchants.f2.title': 'Seguimiento del envío en vivo',
        'merchants.f2.text': 'Sigue tu mercadería y recibe una alerta si el vehículo sale de la ruta planificada.',
        'merchants.f3.title': 'Transportistas verificados',
        'merchants.f3.text': 'Transportistas con identidad verificada (DNI) y calificaciones de otros comerciantes.',
        'merchants.cta': 'Regístrate como comerciante',

        
        'compare.eyebrow': 'COMPARACIÓN',
        'compare.title': '¿Por qué Trazza?',
        'compare.criteria': 'Criterio',
        'compare.whatsapp': 'Grupos de WhatsApp / contactos',
        'compare.traditional': 'Transportistas tradicionales',
        'compare.r1': 'Encontrar carga o transportista',
        'compare.r1.trazza': 'Sugerencias en tu ruta',
        'compare.r1.whatsapp': 'Búsqueda manual, sin garantía',
        'compare.r1.traditional': 'Solo contratos fijos',
        'compare.r2': 'Comisión por viaje',
        'compare.r2.trazza': 'Ninguna',
        'compare.r2.whatsapp': 'Ninguna',
        'compare.r2.traditional': 'Incluida en la tarifa',
        'compare.r3': 'Confianza',
        'compare.r3.trazza': 'ID verificado + calificaciones mutuas',
        'compare.r3.whatsapp': 'Boca en boca',
        'compare.r3.traditional': 'Reputación de la empresa',
        'compare.r4': 'Seguimiento del envío',
        'compare.r4.trazza': 'En vivo, con alertas de desvío',
        'compare.r4.whatsapp': 'Preguntando por teléfono',
        'compare.r4.traditional': 'Depende de la empresa',
        'compare.m1.trazza': 'Trazza: Sugerencias en tu ruta',
        'compare.m1.others': 'Otros: Búsqueda manual en grupos',
        'compare.m2.trazza': 'Trazza: Ninguna',
        'compare.m2.others': 'Otros: Incluida (transportistas tradicionales)',
        'compare.m3.trazza': 'Trazza: ID verificado + calificaciones',
        'compare.m3.others': 'Otros: Boca en boca',
        'compare.m4.trazza': 'Trazza: En vivo, con alertas de desvío',
        'compare.m4.others': 'Otros: Preguntando por teléfono',

        
        'plans.eyebrow': 'PLANES',
        'plans.title': 'Planes simples por camión, sin comisión por viaje',
        'plans.sub': 'El flete se paga directo entre transportista y emprendedor, así que Trazza nunca se queda con una parte. Los transportistas eligen un plan mensual para sus camiones. Precios en USD.',
        'plans.per_truck': '/ camión / mes',
        'plans.month': '/ mes',
        'plans.recommended': 'Recomendado',
        'plans.routes': 'Rutas',
        'plans.routes.f1': 'Publica rutas de retorno y recibe sugerencias de carga',
        'plans.routes.f2': 'Seguimiento GPS en vivo de cada viaje',
        'plans.routes.f3': 'Alertas de desvío cuando el camión sale de la ruta',
        'plans.routes.f4': 'Calificaciones mutuas y puntos',
        'plans.routes.cta': 'Elegir Rutas',
        'plans.iot': 'IoT',
        'plans.iot.f1': 'Todo lo del plan Rutas',
        'plans.iot.f2': 'Un sensor IoT prestado por camión',
        'plans.iot.f3': 'Monitoreo en vivo de la carga',
        'plans.iot.f4': 'Ideal para mercadería delicada o de alto valor',
        'plans.iot.cta': 'Elegir IoT',
        'plans.pack': 'Pack Flota',
        'plans.pack.f1': 'Monitoreo completo para 5 a 6 camiones',
        'plans.pack.f2': 'Rutas e IoT en todos los camiones',
        'plans.pack.f3': 'Todos tus camiones en una sola cuenta',
        'plans.pack.f4': 'Ahorra hasta $100 frente a IoT por camión',
        'plans.pack.cta': 'Elegir Pack Flota',

        
        'testimonials.eyebrow': 'TESTIMONIOS',
        'testimonials.title': 'Lo que dicen nuestros usuarios',
        'testimonials.stars': '5 de 5 estrellas',
        'testimonials.q1': '“[Cita de un transportista entrevistado durante la validación, sobre encontrar cargas para el viaje de retorno.]”',
        'testimonials.n1': '[Nombre del transportista]',
        'testimonials.r1': 'Transportista · [Distrito]',
        'testimonials.q2': '“[Cita de un comerciante entrevistado durante la validación, sobre el seguimiento y la confianza.]”',
        'testimonials.n2': '[Nombre del comerciante]',
        'testimonials.r2': 'Comerciante · [Tipo de negocio]',

        
        'video.eyebrow': 'SOBRE EL PRODUCTO',
        'video.title': 'Mira Trazza en acción',
        'video.play': 'Reproducir el video sobre el producto',
        'video.caption': 'Video sobre el producto · 2:30',

        
        'final.title': 'Llena tu viaje de retorno o envía tu mercadería hoy',
        'final.sub': 'Crea tu cuenta gratis en minutos.',

        
        'footer.desc': 'Fletes de retorno para Lima. Conectamos transportistas y pymes.',
        'footer.product': 'Producto',
        'footer.legal': 'Legal',
        'footer.terms': 'Términos y condiciones',
        'footer.privacy': 'Política de privacidad',
        'footer.complaints': 'Libro de reclamaciones',
        'footer.contact': 'Contacto',
        'footer.copy': '&copy; 2026 StackRoot · Trazza<span class="desktop-only">. Todos los derechos reservados.</span>',

        
        'auth.back': 'Volver al inicio de Trazza',
        'auth.carrier': 'Transportista',
        'auth.merchant': 'Comerciante',
        'auth.email': 'Correo electrónico',
        'auth.emailPh': 'tu@correo.com',
        'auth.password': 'Contraseña',
        'login.title': 'Iniciar sesión – Trazza',
        'login.heading': 'Bienvenido de nuevo',
        'login.sub': 'Inicia sesión en tu cuenta para continuar',
        'login.forgot': '¿Olvidaste tu contraseña?',
        'login.submit': 'Iniciar sesión',
        'login.noAccount': '¿No tienes una cuenta?',
        'login.signup': 'Regístrate aquí',
        'register.title': 'Crear cuenta – Trazza',
        'register.heading': 'Crea tu cuenta',
        'register.sub': 'Llena tus viajes de retorno o envía tu mercadería por Lima',
        'register.name': 'Nombre o razón social',
        'register.namePh': 'ej. Logística SAC',
        'register.doc': 'RUC o DNI',
        'register.docPh': 'Ingresa tu número de documento',
        'register.submit': 'Regístrate',
        'register.hasAccount': '¿Ya tienes una cuenta?',
        'register.login': 'Inicia sesión'
    };

    const english = {
        'menu.open': 'Open menu',
        'menu.close': 'Close menu'
    };

    // Original English values, captured from the HTML the first time
    const originals = new Map();

    function remember(el, kind, value) {
        if (!originals.has(el)) originals.set(el, {});
        const store = originals.get(el);
        if (!(kind in store)) store[kind] = value;
        return store[kind];
    }

    function parseAttrs(spec) {
        return spec.split(';').map((pair) => pair.split(':').map((s) => s.trim())).filter((p) => p.length === 2 && p[0]);
    }

    let currentLang = 'en';

    function t(key) {
        if (currentLang === 'es' && es[key]) return es[key];
        return english[key] || key;
    }

    function apply(lang) {
        currentLang = SUPPORTED.includes(lang) ? lang : 'en';
        const useEs = currentLang === 'es';

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const original = remember(el, 'text', el.textContent);
            const key = el.dataset.i18n;
            el.textContent = useEs && es[key] ? es[key] : original;
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const original = remember(el, 'html', el.innerHTML);
            const key = el.dataset.i18nHtml;
            el.innerHTML = useEs && es[key] ? es[key] : original;
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            parseAttrs(el.dataset.i18nAttr).forEach(([attr, key]) => {
                const original = remember(el, `attr:${attr}`, el.getAttribute(attr));
                const value = useEs && es[key] ? es[key] : original;
                if (value !== null) el.setAttribute(attr, value);
            });
        });

        document.documentElement.lang = currentLang;

        // Keep every EN | ES switch on the page in sync
        document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
            const on = btn.dataset.lang === currentLang;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-pressed', String(on));
        });

        document.dispatchEvent(new CustomEvent('trazza:langchange', { detail: { lang: currentLang } }));
    }

    function save(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage blocked: ignore */ }
    }

    function initialLang() {
        const fromUrl = new URLSearchParams(window.location.search).get('lang');
        if (SUPPORTED.includes(fromUrl)) return fromUrl;
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (SUPPORTED.includes(saved)) return saved;
        } catch (e) { /* storage blocked: ignore */ }
        return 'en';
    }

    function setLang(lang) {
        apply(lang);
        save(currentLang);
    }

    window.TrazzaI18n = { t, setLang, getLang: () => currentLang };

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
            btn.addEventListener('click', () => setLang(btn.dataset.lang));
        });
        apply(initialLang());
    });
})();
