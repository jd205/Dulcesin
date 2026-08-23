export type Lang = "en" | "es";

export type CategoryKey = "cakes" | "savory" | "sweets";

export type Translations = {
  nav: { products: string; about: string; contact: string };
  cta: { orderWhatsapp: string; seeProducts: string };
  hero: {
    headlineBefore: string;
    headlineHighlight: string;
    headlineAfter: string;
    subtext: string;
  };
  products: {
    heading: string;
    subtext: string;
    all: string;
    order: string;
  };
  categories: Record<CategoryKey, string>;
  about: {
    heading: string;
    body: string;
    points: { title: string; body: string }[];
  };
  contact: {
    heading: string;
    body: string;
  };
  footer: {
    body: string;
    whatsapp: string;
  };
  whatsappMessage: (product: string) => string;
  placeholderProduct: string;
};

export const translations: Record<Lang, Translations> = {
  en: {
    nav: { products: "Products", about: "About", contact: "Contact" },
    cta: { orderWhatsapp: "Order on WhatsApp", seeProducts: "See products" },
    hero: {
      headlineBefore: "Your next ",
      headlineHighlight: "craving",
      headlineAfter: ", one message away.",
      subtext:
        "Cakes, cupcakes, and desserts made with care at Dulcesin. Pick your favorite and order straight from WhatsApp.",
    },
    products: {
      heading: "Some of our work",
      subtext:
        "Real cakes and treats we've made for past orders. Ask on WhatsApp for pricing and to customize yours.",
      all: "All",
      order: "Ask on WhatsApp",
    },
    categories: {
      cakes: "Cakes",
      savory: "Savory Bites",
      sweets: "Sweets",
    },
    about: {
      heading: "Dulcesin is just getting started",
      body: "We're a new bakery project, still putting our final menu together. For now every order is confirmed directly on WhatsApp: availability, price, and delivery time.",
      points: [
        {
          title: "Made with care",
          body: "Every order is prepared by hand, no shortcuts or industrial filling.",
        },
        {
          title: "Made to fit",
          body: "Tell us the craving, size, or occasion and we'll work it out over WhatsApp.",
        },
        {
          title: "Pickup & delivery",
          body: "We coordinate the where and when with you directly in the chat.",
        },
      ],
    },
    contact: {
      heading: "Already know what you're craving?",
      body: "Message us on WhatsApp and we'll put your order together: product, size, and delivery date.",
    },
    footer: {
      body: "Orders and questions straight through WhatsApp. This site's content is a sample while we get started.",
      whatsapp: "WhatsApp",
    },
    whatsappMessage: (product) =>
      `Hi Dulcesin! I'd like to order: ${product}. Could you confirm availability and price?`,
    placeholderProduct: "(to be defined)",
  },
  es: {
    nav: { products: "Productos", about: "Nosotros", contact: "Contacto" },
    cta: { orderWhatsapp: "Pedir por WhatsApp", seeProducts: "Ver productos" },
    hero: {
      headlineBefore: "Tu próximo ",
      headlineHighlight: "antojo",
      headlineAfter: ", a un mensaje de distancia.",
      subtext:
        "Tortas, cupcakes y postres hechos con cariño en Dulcesin. Elige tu favorito y pídelo directo por WhatsApp.",
    },
    products: {
      heading: "Algunos de nuestros trabajos",
      subtext:
        "Tortas y bocados reales que hemos hecho en pedidos anteriores. Pregunta el precio por WhatsApp y cómo personalizar el tuyo.",
      all: "Todos",
      order: "Consultar por WhatsApp",
    },
    categories: {
      cakes: "Tortas",
      savory: "Pasapalos",
      sweets: "Dulces",
    },
    about: {
      heading: "Dulcesin está empezando",
      body: "Somos un proyecto nuevo de repostería. Todavía estamos armando nuestro menú definitivo, así que cada pedido por ahora se confirma directo por WhatsApp: disponibilidad, precio y tiempo de entrega.",
      points: [
        {
          title: "Hecho con cariño",
          body: "Cada pedido se prepara a mano, sin atajos ni relleno industrial.",
        },
        {
          title: "A tu medida",
          body: "Cuéntanos el antojo, tamaño u ocasión y lo conversamos por WhatsApp.",
        },
        {
          title: "Recogida y entrega",
          body: "Coordinamos contigo el punto y la fecha directamente en el chat.",
        },
      ],
    },
    contact: {
      heading: "¿Ya sabes qué se te antoja?",
      body: "Escríbenos por WhatsApp y armamos tu pedido juntos: producto, tamaño y fecha de entrega.",
    },
    footer: {
      body: "Pedidos y consultas directo por WhatsApp. Contenido de este sitio es de ejemplo mientras arrancamos.",
      whatsapp: "WhatsApp",
    },
    whatsappMessage: (product) =>
      `Hola Dulcesin! Quiero pedir: ${product}. ¿Me confirman disponibilidad y precio?`,
    placeholderProduct: "(por definir)",
  },
};
