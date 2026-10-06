export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  no: string;
  label: string;
  note: string;
  image: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: "espresso",
    no: "01",
    label: "Espresso Bar",
    note: "Pulled on a 1974 lever machine — 18g in, 36g out, 27 seconds. Nothing more, nothing less.",
    image:
      "https://images.pexels.com/photos/31871767/pexels-photo-31871767.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      {
        name: "Espresso Aurum",
        desc: "Single-origin Chikmagalur, honey-processed. Served with a chaser of sparkling water.",
        price: 220,
        tag: "House Classic",
      },
      {
        name: "Cortado Classico",
        desc: "Equal parts espresso and silk-steamed milk, served in a warm Spanish glass.",
        price: 260,
      },
      {
        name: "Flat White",
        desc: "Double ristretto under velvet micro-foam. Australian style, five and a half ounces.",
        price: 300,
      },
      {
        name: "Cappuccino Antico",
        desc: "Dry and traditional, dusted with Valrhona cocoa and raw demerara sugar.",
        price: 320,
      },
      {
        name: "Affogato al Caffè",
        desc: "Tahitian vanilla gelato, drowned tableside in a double shot. Dessert and coffee in one.",
        price: 380,
        tag: "Chef's Pick",
      },
    ],
  },
  {
    id: "slowbrew",
    no: "02",
    label: "Slow Brew Bar",
    note: "Weighed, timed and poured entirely by hand. Allow six to eight minutes — good things do.",
    image:
      "https://images.pexels.com/photos/17641094/pexels-photo-17641094.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      {
        name: "V60 Pour Over",
        desc: "Ethiopia Yirgacheffe — jasmine, bergamot and stone fruit, brewed at 93 degrees.",
        price: 340,
        tag: "Single Origin",
      },
      {
        name: "Chemex for Two",
        desc: "Kenya AA brewed for the table, presented in the classic hourglass with two cups.",
        price: 520,
      },
      {
        name: "Siphon Reserve",
        desc: "A theatrical vacuum brew at the table. Notes of demerara, dark cherry and clove.",
        price: 450,
        tag: "Chef's Pick",
      },
      {
        name: "Cold Brew Tonic",
        desc: "An 18-hour steep poured over artisan tonic, burnt orange and a whisper of juniper.",
        price: 380,
      },
      {
        name: "Japanese Iced Latte",
        desc: "Flash-chilled espresso and cold milk over a clear sphere — never diluted by ice.",
        price: 390,
      },
    ],
  },
  {
    id: "signature",
    no: "03",
    label: "Signature Pours",
    note: "Our gold-standard creations — developed in-house, found nowhere else on earth.",
    image:
      "https://images.pexels.com/photos/32228894/pexels-photo-32228894.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      {
        name: "24K Golden Latte",
        desc: "Turmeric, Kashmiri saffron and long pepper, sweetened with jaggery, finished with edible gold leaf.",
        price: 420,
        tag: "Signature",
      },
      {
        name: "Pistachio Rose Latte",
        desc: "Iranian pistachio cream, rose water and a double espresso, crowned with crushed pista.",
        price: 450,
        tag: "Signature",
      },
      {
        name: "Bourbon Vanilla Brew",
        desc: "Cold brew aged overnight with Madagascar vanilla and a trace of bourbon-smoked oak.",
        price: 410,
      },
      {
        name: "Salted Praline Mocha",
        desc: "Hazelnut praline, 62% dark chocolate and fleur de sel under a satin milk crown.",
        price: 440,
      },
      {
        name: "Kesar Chai Latte",
        desc: "Slow-brewed Assam with saffron, green cardamom and whipped malai. Our evening ritual.",
        price: 340,
      },
    ],
  },
  {
    id: "patisserie",
    no: "04",
    label: "Patisserie",
    note: "Laminated daily at five in the morning by our resident chef. Available until the tray runs out.",
    image:
      "https://images.pexels.com/photos/3850349/pexels-photo-3850349.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      {
        name: "Butter Croissant",
        desc: "Laminated over 72 hours with French butter — twenty-seven flaky layers, one warm heart.",
        price: 240,
      },
      {
        name: "Pistachio Éclair",
        desc: "Crisp choux filled with pistachio crème pâtissière, finished with a single gold leaf.",
        price: 320,
        tag: "Chef's Pick",
      },
      {
        name: "Basque Cheesecake",
        desc: "Burnt top, molten centre. Baked to order and rested for exactly ten minutes.",
        price: 380,
      },
      {
        name: "Tiramisu au Chocolat",
        desc: "Savoiardi layered with mascarpone, espresso-soaked and dusted with cocoa nib.",
        price: 420,
      },
      {
        name: "Almond Bostock",
        desc: "Brioche spread with frangipane, orange blossom and toasted almond flakes.",
        price: 300,
      },
    ],
  },
];

export const SIGNATURES = [
  {
    no: "01",
    name: "The Golden Hour",
    sub: "24K Golden Latte",
    notes: "Saffron · Turmeric · Edible gold",
    price: 420,
    image:
      "https://images.pexels.com/photos/32228894/pexels-photo-32228894.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    no: "02",
    name: "Rose de Damas",
    sub: "Pistachio Rose Latte",
    notes: "Iranian pistachio · Rose water",
    price: 450,
    image:
      "https://images.pexels.com/photos/35159094/pexels-photo-35159094.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    no: "03",
    name: "Midnight Affogato",
    sub: "Affogato al Caffè",
    notes: "Vanilla gelato · Double shot",
    price: 380,
    image:
      "https://images.pexels.com/photos/13240964/pexels-photo-13240964.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    no: "04",
    name: "The Long Pour",
    sub: "Slow Brew Tonic",
    notes: "18-hour steep · Burnt orange",
    price: 380,
    image:
      "https://images.pexels.com/photos/17641094/pexels-photo-17641094.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];
