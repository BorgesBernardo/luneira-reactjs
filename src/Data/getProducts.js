// Array de productos y promesa

export const productos =[

  {
    id: "lnmascaras789",
    name: "Máscara Relajante y Redensificante",
    description: "Mascara de tela monodosis de efecto shock relajante y redensificante. Estimula la regeneración de la piel y aumenta la producción de colágeno",
    category: "mascaras",
    stock: 2,
    price: "$1.500",
    image:'/img/items/antiage-mask.png'
  },
  {
    id: "lnbodyreic452",
    name: "Crema Anti-Edad Corporal",
    description: "Crema ultra emoliente. Suaviza y repara la piel, brindándole mayor elasticidad y flexibilidad.",
    category:"cremas",
    stock: 4,
    price: "$2.000",
    image:'/img/items/crema-corporal-proretic.png'
  },
  {
    id: "lnvitaminc987",
    name: "Crema Anti-Age Exfoliante",
    description: "Exfoliante corporal, remueve células, impuresas y contaminantes dejando la piel suave y aterciolepada",
    category: "cremas",
    stock: 2,
    price: "$3.000",
    image:'/img/items/crema-exfoliante-antiage.png'
  },
  {
    id: "lnprovlift574",
    name: "Crema ProV-Lift Anti-Age Exfoliante",
    description: " Proviene y combate la flacidez en los 3 planos (Epidermis, Dermis y Músculo). Mejora la tensión de la piel y aumenta la fabricación de elástina.",
    category: "cremas",
    stock: 2,
    price: "$3.000",
    image:'/img/items/crema-gel-liftingcorporal.png'
  },
  {
    id: "lnstressoutcream124",
    name: "Crema Stress Out Hidratante de Manos Anti-Edad",
    description: " Hidrata en profundidad. Estimula la regeneración de la piel y favorece su defensa natural. Más colágeno y mas firmeza.",
    category: "cremas",
    stock: 2,
    price: "$3.000",
    image:'/img/items/crema-hidratante-knb.png'
  },
  {
    id: "lncellucontrol456",
    name: "Crema Cellu Control Modeladora y Alisante",
    description: " Mejora el aspecto irregular, aumenta la oxigenación y circulación, reduce adiposidades y toxinas, reestructurando y tonificando la piel",
    category: "cremas",
    stock: 2,
    price: "$3.000",
    image:'/img/items/crema-modeladora.png'
  },
  {
    id: "lnvitamincboby&hans364",
    name: "Crema Vitamin C Reparadora de Manos y Cuerpo",
    description: " Emulsión corporal para el cuidado de la piel y la prevención del envejecimiento cutáneo. Protege y contrarresta los efectos de los radicales libres.",
    category: "cremas",
    stock: 2,
    price: "$3.000",
    image:'/img/items/crema-reparadora-manos.png'
  },
  {
    id: "lngoldenmask657",
    name: "Máscara de Oro & Células Madre de Argán",
    description: " Revitaliza, estimula la regeneración de la piel. Minimiza las arrugas y lineas de expresión y contiene un gran efecto iluminador.",
    category: "mascaras",
    stock: 2,
    price: "$3.000",
    image:'/img/items/gold-mask.png'
  },
  {
    id: "lnmicroexfoliant357",
    name: "Limpiador Alpine Roses Microexfoliante",
    description: " Gel de limpieza con micropartículas exfoliantes que permite realizar una limpieza profunda de la piel sin resecarla.",
    category: "lociones",
    stock: 2,
    price: "$3.000",
    image:'/img/items/limpiador-microexfoliante.png'
  },
  {
    id: "lnhyaluronicb5lotion687",
    name: "Loción Hyaluronic B5 - BIO Osmoprotectora",
    description: " Loción osmoprotectora que evita la deshidratación a lo largo del día y protege la piel de los factores externos. Confort para pieles deshidratadas y delicadas.",
    category: "lociones",
    stock: 2,
    price: "$3.000",
    image:'/img/items/locion-osmoprotectora.png'
  },
  {
    id: "lnscrubproretic487",
    name: "Scrub PRO RETI-C Exfoliante Anti-Edad.",
    description: " Exfoliante facial y corporal. Remueve células de la superficie, impurezas y contaminantes dejando la piel suave y flexible",
    category: "scrub",
    stock: 2,
    price: "$3.000",
    image:'/img/items/scrub-facial-proretic.png'
  },
  {
    id: "lnalpinerosesglowpearlsserum879",
    name: "Serum Alpine Roses Intensivo Anti-Age",
    description: " Booster intensivo anti-age, hidratante y dermoprotector. Protege de los factores ambientales y estimula la reparación de la piel. Efecto glow y luminosidad natural",
    category: "serum",
    stock: 2,
    price: "$3.000",
    image:'/img/items/serum-alpineroses.png'
  },
  {
    id: "lnserumferulic987",
    name: "Serum Ferulic Antioxidante",
    description: " Potente antioxidante, blanqueador y fotoprotector. Combate y previene envejecimiento y fotoenvejecimiento.",
    category: "serum",
    stock: 2,
    price: "$3.000",
    image:'/img/items/serum-antioxidante.png'
  },
  {
    id: "lnserumcbd984",
    name: "Serum CBD Anti-Age Facial",
    description: " Es anti-age y antioxidante. Equilibra la hidratación y mantiene la piel saludable. Es de textura ligera de rápida absorción.",
    category: "serum",
    stock: 2,
    price: "$3.000",
    image:'/img/items/serum-facialcbd.png'
  },
  {
    id: "lnserumproretic&vc649",
    name: "Serum Pro RETI-C Retinol & Vitamin C",
    description: " Rejuvenece e hidrata la piel. Posee un gran efecto antioxidante y antiage, que la deja suave e iluminada. Previene el daño y corrige maltratos",
    category: "serum",
    stock: 2,
    price: "$3.000",
    image:'/img/items/serum-retinol.png'
  },
  {
    id: "lnhyakuronicmask",
    name: "Máscara Hyaluronic B5 - BIO",
    description: " Hidratación profunda y prolongada. Efecto Osmoprotector que evita la deshidratación a lo largo del día y protege la piel de los factores externos",
    category: "mascaras",
    stock: 2,
    price: "$3.000",
    image:'/img/items/hyaluronic-mask.png'
  },
  {
    id: "lncbdtoner364",
    name: "Tonico Facial CBD",
    description: " Tonico facial con acción antiage y antioxidante. Con CBD y Té Rojo. Refresca y calma la piel en cualquier momento del día.",
    category: "lociones",
    stock: 2,
    price: "$3.000",
    image:'/img/items/tonico-facialcbd.png'
  },
]

//Promesa de Obtener productos configurada para que aparezcan luego de 3 segundos

const getProducts = new Promise((resolve,reject) => {

  setTimeout(() =>{
    resolve(productos);
  }, 3000);
}
);
export default getProducts