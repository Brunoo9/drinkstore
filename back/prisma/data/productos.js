import generarCod from "../../helpers/generarCodProducto.js";
const iterador = generarCod();
const url = "http://localhost:4000";
const productos = [
  {
    nombreproducto: "Pack x6 Andes origen roja 473ml ",
    descripcion:
      "Andes Origen es una cerveza mendocina. Se recomienda servir en copa. Está hecha con agua de deshielo de la cordillera y pura malta tostada a fuego lento, que ofrece colores y texturas bien distintivas, leve aroma a lupulo y a cereal, cuerpo medio, refrescante",
    codproducto: iterador.next().value,
    precio: 1200,
    img1: `${url}/andes-roja-ok.png`,
    idcategoria: 1,
    idsubcategoria: 1,
  },
  {
    nombreproducto: "Pack x6 Andes origen rubia 473ml",
    descripcion:
      "Andes Origen es una cerveza mendocina. Se recomienda servir en copa. Está hecha con agua de deshielo de la cordillera y pura malta tostada a fuego lento, que ofrece colores y texturas bien distintivas, leve aroma a lupulo y a cereal, cuerpo medio, refrescante",
    codproducto: iterador.next().value,
    precio: 1200,
    img1: `${url}/andes-rubia.png`,
    idcategoria: 1,
    idsubcategoria: 3,
  },
  {
    nombreproducto: "Pack x6 Estrella Galicia Lata 500 Ml",
    descripcion:
      "Cerveza de color dorado brillante que parte de una selección de maltas y lúpulo. Su proceso de cocción, fermentación y maduración transcurre a lo largo de más de 20 días. Ello hace que esta cerveza tenga un agradable y característico sabor lupulado. *La imagen es ilustrativa, puede variar según la disponibilidad existente. ",
    codproducto: iterador.next().value,
    precio: 1600,
    img1: `${url}/estrella-lata.png`,
    idcategoria: 1,
    idsubcategoria: 3,
  },
  //FALTAN LOS VINOS

  {
    nombreproducto: "Pack x6 Cervezas Stella Artois Lata 473 ml",
    descripcion:
      "Tradición y excelencia desde el año 1366. La cerveza Lager que simboliza el estilo y la sofisticación europea. De destacado aroma a lúpulo y fino amargor, su sabor intenso y distintivo es disfrutado en todo el mundo. Stella Artois nos invita a probar una nueva forma de disfrutar la receta de siempre en la lata de 473ml.",
    codproducto: iterador.next().value,
    precio: 1300,
    img1: `${url}/stella-artouis.png`,
    idcategoria: 1,
    idsubcategoria: 3,
  },
  {
    nombreproducto: "Pack x 6 Cerveza Patagonia Amber Lager 410 Ml",
    descripcion:
      "En Patagonia Amber Lager encontrarás una cerveza de un suave sabor a caramelo, elaborada con una combinación de 4 maltas, que le dan su característico color ámbar y sabor maltoso, dejando un sutil dulzor en boca.",
    codproducto: iterador.next().value,
    precio: 1450,
    img1: `${url}/patagonia-amber.png`,
    idcategoria: 1,
    idsubcategoria: 1,
  },
  {
    nombreproducto: "Pack x 6 Cerveza Quilmes Stout 473ml",
    descripcion:
      "Cerveza negra, de cuerpo y espuma cremosa, su intenso amargor se compensa con notas de chocolate y café provenientes del golpe de fuego que recibe la malta al momento de ser tostada.",
    codproducto: iterador.next().value,
    precio: 1300,
    img1: `${url}/quilmes-stout.jpeg`,
    idcategoria: 1,
    idsubcategoria: 2,
  },

  {
    nombreproducto: "Aperol aperitivo 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 260,
    img1: `${url}/aperol-aperitivo-750-ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 12,
  },
  {
    nombreproducto: "Campari aperitivo 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget, ",
    codproducto: iterador.next().value,
    precio: 260,
    img1: `${url}/campari-aperitivo-750ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 12,
  },
  {
    nombreproducto: "Fernet 1882 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 260,
    img1: `${url}/fernet-1882-aperitivo-750ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 12,
  },
  {
    nombreproducto: "Fernet branca 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 260,
    img1: `${url}/fernet-branca-aperitivo-750-ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 12,
  },
  {
    nombreproducto: "Fernet branca menta 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 260,
    img1: `${url}/fernet-branca-menta-aperitivo-750-ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 12,
  },

  {
    nombreproducto: "Whisky Jameson 700ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 4500,
    img1: `${url}/jameson-whisky-700ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 13,
  },
  {
    nombreproducto: "Whisky Johnnie Walker Blue Label 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 70000,
    img1: `${url}/johnnie-walker-blue-label-whisky-750ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 13,
  },
  {
    nombreproducto: "Whisky Vat 69 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 1700,
    img1: `${url}/vat-69-whisky-750-ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 13,
  },
  {
    nombreproducto: "Gin Bombay Sapphire 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 7850,
    img1: `${url}/bombay-sapphire-gin-750-ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 14,
  },
  {
    nombreproducto: "Gin Brighton 700ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 1700,
    img1: `${url}/brighton-gin-700ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 14,
  },
  {
    nombreproducto: "Gin Beefeater London 1000ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 5776,
    img1: `${url}/beefeater-gin-1000-ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 14,
  },
  {
    nombreproducto: "Gin Beefeater 24 700 ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 9150,
    img1: `${url}/beefeater-24-gin-700ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 14,
  },
  {
    nombreproducto: "Gin Gordon's 700ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 2100,
    img1: `${url}/gordon_s-gin-700-ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 14,
  },
  {
    nombreproducto: "Gin Bombay Bramble Blackberry & Raspberry 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 8020,
    img1: `${url}/bombay-bramble-gin-700ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 14,
  },
  {
    nombreproducto: "Vodka Smirnoff Raspberry 700ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 1550,
    img1: `${url}/smirnoff-raspberry-vodka-700ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 15,
  },
  {
    nombreproducto: "Vodka Smirnoff Watermelon 700ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 1550,
    img1: `${url}/smirnoff-watermelon-vodka-700ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 15,
  },
  {
    nombreproducto: "Vodka Smirnoff Green Apple 700ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 1550,
    img1: `${url}/smirnoff-green-apple-vodka-700ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 15,
  },
  {
    nombreproducto: "Vodka Absolut Elyx 1000ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 14668,
    img1: `${url}/absolut-elyx-vodka-1000ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 15,
  },
  {
    nombreproducto: "Licor Crema Tia Maria Cream 690 ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 2243,
    img1: `${url}/tia-maria-cream-licor-crema-690ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 16,
  },
  {
    nombreproducto: "Licor de Hierbas Jagermeister 700ml ",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 8600,
    img1: `${url}/jagermeister-licor-de-hierbas-700-ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 16,
  },
  {
    nombreproducto: "Licor Tia Maria 690 ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 1590,
    img1: `${url}/tia-maria-licor-690ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 16,
  },
  {
    nombreproducto: "Licor Malibu Coco 750 ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 3100,
    img1: `${url}/malibu-licor-coco-750ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 16,
  },
  {
    nombreproducto: "Licor Crema Baileys 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 4850,
    img1: `${url}/baileys-licor-crema-750-ml.jpg`,
    idcategoria: 2,
    idsubcategoria: 16,
  },
  {
    nombreproducto: "Vino Manos Negras Malbec Stone Soil 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 2200,
    img1: `${url}/manos-negras-malbec-stone-soil-vino-750ml.jpg`,
    idcategoria: 3,
    idsubcategoria: 4,
  },
  {
    nombreproducto: "Vino Trumpeter Reserva Malbec 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 2650,
    img1: `${url}/trumpeter-reserve-malbec-vino-750ml.jpg`,
    idcategoria: 3,
    idsubcategoria: 4,
  },
  {
    nombreproducto: "Vino Omnium Malbec 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 785,
    img1: `${url}/omnium-malbec-vino-750ml.jpg`,
    idcategoria: 3,
    idsubcategoria: 4,
  },
  {
    nombreproducto: "Vino Rutini Malbec 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 6400,
    img1: `${url}/rutini-malbec-vino-750ml.jpg`,
    idcategoria: 3,
    idsubcategoria: 4,
  },
  {
    nombreproducto: "Vino Blanco Cafayate Terroir de Altura Torrontes 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 1850,
    img1: `${url}/cafayate-terroir-de-altura-torrontes-vino.jpg`,
    idcategoria: 3,
    idsubcategoria: 5,
  },
  {
    nombreproducto: "Vino Blanco Norton Cosecha Tardia 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 750,
    img1: `${url}/norton-cosecha-tardia-vino-750ml.jpg`,
    idcategoria: 3,
    idsubcategoria: 5,
  },
  {
    nombreproducto: "Vino Blanco Trapiche D. Cosecha 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 700,
    img1: `${url}/trapiche-d-cosecha-vino-750ml.jpg`,
    idcategoria: 3,
    idsubcategoria: 5,
  },
  {
    nombreproducto: "Vino Espumante Prosecco Bottega Gold 750ml ",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 24300,
    img1: `${url}/bottega-gold-espumante-750ml.jpg`,
    idcategoria: 3,
    idsubcategoria: 6,
  },
  {
    nombreproducto: "Vino Espumante Chandon Extra Brut 750ml",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus diam, hendrerit ut purus in, lobortis hendrerit eros. Proin imperdiet aliquet neque in accumsan. Sed vel libero pulvinar, tristique eros in, interdum purus. Maecenas euismod, leo sit amet placerat porta, ligula nibh convallis ante, eget posuere odio lorem at velit. Nulla facilisi. Etiam velit ligula, venenatis ut suscipit eget,",
    codproducto: iterador.next().value,
    precio: 2600,
    img1: `${url}/chandon-extra-brut-espumante-750ml.jpg`,
    idcategoria: 3,
    idsubcategoria: 6,
  },
  {
    nombreproducto: "Pack Campari 750ml + 2 Jugos De Naranja 1 L",
    descripcion: "Combo campari + 2 jugos de critric de naranja ",
    codproducto: iterador.next().value,
    precio: 2300,
    img1: `${url}/pack-campari-750ml-jugo-citric-x-2u.jpg`,
    idcategoria: 5,
    idsubcategoria: 10,
  },
  {
    nombreproducto: "Kit Negroni Premium X 3 Botellas",
    descripcion:
      "Contiene x1 Bombay Saphire 750ml, 1x Martin Rosso 995ml, 1x Campari 750ml",
    codproducto: iterador.next().value,
    precio: 8600,
    img1: `${url}/kit-negroni-premium-x-3-botellas-bombay-martini-campari.jpg`,
    idcategoria: 5,
    idsubcategoria: 10,
  },
  {
    nombreproducto:
      "Pack Gancia Americano 950ml + Paso de los Toros Pomelo x 2U",
    descripcion:
      "Contiene x1 Gancia Americano 950ml + x2 Paso de los Toros Pomelo 1,5l",
    codproducto: iterador.next().value,
    precio: 1600,
    img1: `${url}/pack-gancia-americano-950ml-2-pdt-pomelo.jpg`,
    idcategoria: 5,
    idsubcategoria: 10,
  },

  {
    nombreproducto: "Pack Andes Origen Mix x 24 latas 473ML",
    descripcion: "Combo de cervezas, 6 rojas, 6 rubias, 6 negras y 6 ipas",
    codproducto: iterador.next().value,
    precio: 5170,
    img1: `${url}/pack-andes-origen-mix-x-24-latas-473ml.jpg`,
    idcategoria: 5,
    idsubcategoria: 9,
  },
  {
    nombreproducto: "Pack Andes Origen Mix x18 Latas 473ml",
    descripcion: "Combo de cervezas, 6 rojas, 6 rubias y 6 ipas",
    codproducto: iterador.next().value,
    precio: 3800,
    img1: `${url}/pack-andes-origen-mix-18-latas-473ml.jpg`,
    idcategoria: 5,
    idsubcategoria: 9,
  },
  {
    nombreproducto: "Combo Fernet Branca 750ml + Coca Cola 2.5L",
    descripcion: "asd",
    codproducto: iterador.next().value,
    precio: 2300,
    img1: `${url}/pack-fernet-branca-750-ml-coca-cola-2250-ml1.jpg`,
    idcategoria: 5,
    idsubcategoria: 10,
  },
  {
    nombreproducto:
      "Combo Cafayate Terroir de Altura (Malbec + Cabernet + Torrontes)",
    descripcion:
      "1x Cafayate Terroir de Altura Malbec 750ml,1x Cafayate Terroir de Altura Cabernet Sauvignon 750ml, 1x Cafayate Terroir de Altura Torrontes 750ml",
    codproducto: iterador.next().value,
    precio: 5536,
    img1: `${url}/cafayate-terroir-x3-malbec-cabernet-torrontes.jpg`,
    idcategoria: 5,
    idsubcategoria: 17,
  },
  {
    nombreproducto: "Combo Mosquita Muerta x3 (M. Muerta + S. Pozo + Pispi)",
    descripcion:
      " x1 Mosquita Muerta Blend de Tintas 750ml, x1 Sapo de Otro Pozo Blend de Tintas 750ml,x1 Pispi Blend de Tintas 750ml",
    codproducto: iterador.next().value,
    precio: 7128,
    img1: `${url}/mosquita-muerta-x3-pispi-sapo-m-muerta.jpg`,
    idcategoria: 5,
    idsubcategoria: 17,
  },
];

export { productos };
