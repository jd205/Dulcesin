import type { CategoryKey, Lang } from "@/lib/i18n";

export type Product = {
  id: string;
  categoryKey: CategoryKey;
  image: string;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
};

/**
 * Real photos of Dulce Armonía's past work, provided by the business.
 * No pricing data exists yet, so cards prompt WhatsApp for a quote
 * instead of showing a fabricated price.
 */
export const products: Product[] = [
  {
    id: "cake-mermaid-theme",
    categoryKey: "cakes",
    image: "/gallery/cake-mermaid-theme.jpg",
    name: { en: "Mermaid Two-Tier Cake", es: "Torta Sirena de Dos Pisos" },
    description: {
      en: "Pink and white buttercream with pearls, starfish, and a chocolate mermaid tail.",
      es: "Buttercream rosa y blanco con perlas, estrellas de mar y una cola de sirena de chocolate.",
    },
  },
  {
    id: "cake-caramel-rose",
    categoryKey: "cakes",
    image: "/gallery/cake-caramel-rose.jpg",
    name: { en: "Caramel Rose Birthday Cake", es: "Torta de Caramelo con Rosas" },
    description: {
      en: "Dulce de leche drip cake finished with fresh roses and a birthday topper.",
      es: "Torta bañada en dulce de leche, terminada con rosas frescas y topper de cumpleaños.",
    },
  },
  {
    id: "cake-blue-silver-bow",
    categoryKey: "cakes",
    image: "/gallery/cake-blue-silver-bow.jpg",
    name: { en: "Sky Blue Cake with Silver Bow", es: "Torta Celeste con Moño Plateado" },
    description: {
      en: "Smooth blue buttercream with a rhinestone band and a glitter bow.",
      es: "Buttercream celeste liso con cinta de brillantes y moño con glitter.",
    },
  },
  {
    id: "cake-jungle-safari",
    categoryKey: "cakes",
    image: "/gallery/cake-jungle-safari.jpg",
    name: { en: "Jungle Safari Cake", es: "Torta Safari de la Selva" },
    description: {
      en: "Two tiers with jungle animals, greenery, and a gold birthday topper.",
      es: "Dos pisos con animales de la selva, follaje y topper dorado de cumpleaños.",
    },
  },
  {
    id: "cake-pink-disco",
    categoryKey: "cakes",
    image: "/gallery/cake-pink-disco.jpg",
    name: { en: "Pink Disco Birthday Cake", es: "Torta Rosa Disco" },
    description: {
      en: "Pink buttercream, gold ribbon, and disco ball accents for a party in full swing.",
      es: "Buttercream rosa, cinta dorada y esferas disco para una fiesta a todo dar.",
    },
  },
  {
    id: "cake-lavender-ballerina",
    categoryKey: "cakes",
    image: "/gallery/cake-lavender-ballerina.jpg",
    name: { en: "Lavender Ballerina Cake", es: "Torta Lavanda de Bailarina" },
    description: {
      en: "Soft lavender buttercream topped with a ballerina figure and baby's breath.",
      es: "Buttercream lavanda suave coronada con una figura de bailarina y flores silvestres.",
    },
  },
  {
    id: "cake-floral-personalized",
    categoryKey: "cakes",
    image: "/gallery/cake-floral-personalized.jpg",
    name: { en: "Personalized Floral Cake", es: "Torta Floral Personalizada" },
    description: {
      en: "White buttercream with a coral edge, fresh roses, and the guest of honor's name.",
      es: "Buttercream blanco con borde coral, rosas frescas y el nombre del homenajeado.",
    },
  },
  {
    id: "cake-soccer-fan",
    categoryKey: "cakes",
    image: "/gallery/cake-soccer-fan.jpg",
    name: { en: "Soccer Fan Cake", es: "Torta de Fútbol" },
    description: {
      en: "Team colors and a custom topper for the biggest fan on the block.",
      es: "Colores del equipo y topper personalizado para el fanático número uno.",
    },
  },
  {
    id: "cake-birthday-princess",
    categoryKey: "cakes",
    image: "/gallery/cake-birthday-princess.jpg",
    name: { en: "Birthday Princess Cake", es: "Torta Princesa de Cumpleaños" },
    description: {
      en: "Blush pink buttercream with a tiara topper and metallic butterflies.",
      es: "Buttercream rosado con topper de corona y mariposas metálicas.",
    },
  },
  {
    id: "cake-fairy-rainbow",
    categoryKey: "cakes",
    image: "/gallery/cake-fairy-rainbow.jpg",
    name: { en: "Fairy Garden Cake", es: "Torta Hada del Jardín" },
    description: {
      en: "Mint green buttercream, a buttercream lawn, and a fairy on a rainbow.",
      es: "Buttercream verde menta, césped de buttercream y un hada sobre un arcoíris.",
    },
  },
  {
    id: "cake-gender-reveal-heart",
    categoryKey: "cakes",
    image: "/gallery/cake-gender-reveal-heart.jpg",
    name: { en: "Gender Reveal Heart Cake", es: "Torta Corazón de Revelación" },
    description: {
      en: "A heart-shaped \"boy or girl\" cake with pink and blue ribbon.",
      es: "Torta en forma de corazón \"niño o niña\" con cintas rosa y celeste.",
    },
  },
  {
    id: "cake-baby-shower-bow",
    categoryKey: "cakes",
    image: "/gallery/cake-baby-shower-bow.jpg",
    name: { en: "Baby Shower Bow Cake", es: "Torta Moño de Baby Shower" },
    description: {
      en: "Powder blue buttercream with a glitter bow and matching sprinkles.",
      es: "Buttercream celeste con moño con glitter y sprinkles a juego.",
    },
  },
  {
    id: "savory-empanadas",
    categoryKey: "savory",
    image: "/gallery/savory-empanadas.jpg",
    name: { en: "Baked Empanadas", es: "Empanadas Horneadas" },
    description: {
      en: "Golden hand pies with a crimped edge, baked until flaky.",
      es: "Empanadas doradas de borde repulgado, horneadas hasta quedar hojaldradas.",
    },
  },
  {
    id: "savory-croquettes",
    categoryKey: "savory",
    image: "/gallery/savory-croquettes.jpg",
    name: { en: "Herb Croquettes", es: "Croquetas de Hierbas" },
    description: {
      en: "Crisp breaded rolls with fresh herbs folded through the filling.",
      es: "Croquetas crujientes empanizadas con hierbas frescas en el relleno.",
    },
  },
  {
    id: "savory-pastelitos",
    categoryKey: "savory",
    image: "/gallery/savory-pastelitos.jpg",
    name: { en: "Triangle Pastelitos", es: "Pastelitos Triangulares" },
    description: {
      en: "Flaky puff pastry hand pies, sealed and baked to a golden crisp.",
      es: "Pastelitos de hojaldre sellados y horneados hasta dorar.",
    },
  },
  {
    id: "savory-croissants",
    categoryKey: "savory",
    image: "/gallery/savory-croissants.jpg",
    name: { en: "Butter Croissants", es: "Croissants de Mantequilla" },
    description: {
      en: "Classic laminated croissants, baked fresh to order.",
      es: "Croissants clásicos de hojaldre, horneados frescos por encargo.",
    },
  },
  {
    id: "savory-pasta-salad",
    categoryKey: "savory",
    image: "/gallery/savory-pasta-salad.jpg",
    name: { en: "Creamy Pasta Salad", es: "Ensalada de Pasta Cremosa" },
    description: {
      en: "A party-size batch with ham, peppers, and a creamy dressing.",
      es: "Una bandeja para compartir con jamón, pimentón y aderezo cremoso.",
    },
  },
  {
    id: "sweet-coconut-balls",
    categoryKey: "sweets",
    image: "/gallery/sweet-coconut-balls.jpg",
    name: { en: "Coconut Truffle Balls", es: "Bolitas de Coco" },
    description: {
      en: "Soft coconut truffles, rolled by hand and ready to share.",
      es: "Trufas de coco suaves, hechas a mano y listas para compartir.",
    },
  },
  {
    id: "sweet-banana-pudding",
    categoryKey: "sweets",
    image: "/gallery/sweet-banana-pudding.jpg",
    name: { en: "Banana Pudding Cups", es: "Vasitos de Banana Pudding" },
    description: {
      en: "Layers of banana pudding and whipped cream, topped with a cherry.",
      es: "Capas de banana pudding y crema chantillí, coronadas con una cereza.",
    },
  },
  {
    id: "sweet-mini-pastry-cups",
    categoryKey: "sweets",
    image: "/gallery/sweet-mini-pastry-cups.jpg",
    name: { en: "Mini Fruit Pastry Cups", es: "Mini Volovanes de Frutas" },
    description: {
      en: "Bite-size pastry cups with pastry cream and fresh berries.",
      es: "Volovanes de un bocado con crema pastelera y frutos rojos.",
    },
  },
];
