import { IRestaurant } from "../context";

export const restaurantsMock: IRestaurant[] = [
    {
      id: 1,
      name: "Restaurante Olímpia",
      categories: [{ id: "3", label: "Brasileira" }],
      maxReviewsCount: 3823,
      description:
        "Uma experiência gastronômica sofisticada com um mix de culinária clássica e moderna. O Restaurante Olímpia oferece um ambiente requintado com pratos preparados por chefs renomados. O cardápio é uma fusão de sabores tradicionais e contemporâneos, garantindo uma experiência memorável.",
      imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      rating: 3.8,
      location: {
        latitude: -23.9618,
        longitude: -46.3283,
        address: "Av. Ana Costa, 555 - Gonzaga, Santos - SP, 11060-003"
      }
    },
    {
      id: 10,
      name: "Sabor Supremo",
      maxReviewsCount: 3823,
      categories: [{ id: "3", label: "Brasileira" }],
      description:
        "Nossa cozinha é uma homenagem à riqueza da culinária brasileira, servindo pratos caseiros repletos de sabores autênticos. Nossos chefs talentosos preparam com carinho receitas tradicionais de todo o Brasil, oferecendo uma experiência gastronômica que leva você de volta às raízes.",
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      rating: 4.5,
      location: {
        latitude: -23.9656,
        longitude: -46.3323,
        address: "Av. Bartolomeu de Gusmão, 130 - Aparecida, Santos - SP, 11045-002"
      }
    },
    {
      id: 2,
      name: "Sushi Miramar",
      categories: [{ id: "2", label: "Japonesa" }],
      maxReviewsCount: 3823,
      description:
        "Sushi fresco e delicioso feito com os ingredientes da mais alta qualidade. O Sushi Miramar proporciona uma experiência gastronômica autêntica japonesa, com foco em frutos do mar frescos e de alta qualidade. O ambiente minimalista e sereno é perfeito para apreciar pratos tradicionais de sushi.",
      imageUrl: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
      rating: 3.6,
      location: {
        latitude: -23.9674,
        longitude: -46.3333,
        address: "R. da Paz, 45 - Boqueirão, Santos - SP, 11045-001"
      }
    },
    {
      id: 4,
      name: "Burger Santista",
      maxReviewsCount: 3823,
      categories: [{ id: "3", label: "Brasileira" }],
      description:
        "Um local casual que oferece uma variedade de hambúrgueres gourmet e batatas fritas. O Burger Santista é o destino final para os entusiastas de hambúrguer. Com uma ampla seleção de hambúrgueres artesanais feitos com os melhores ingredientes e um ambiente descontraído, é o lugar perfeito para uma refeição satisfatória.",
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      rating: 4.5,
      location: {
        latitude: -23.9606,
        longitude: -46.3333,
        address: "Av. Conselheiro Nébias, 700 - Boqueirão, Santos - SP, 11045-002"
      }
    },
    {
      id: 6,
      name: "Jardim Verde",
      maxReviewsCount: 3823,
      categories: [{ id: "1", label: "Italiana" }],
      description:
        "Um restaurante vegano e vegetariano com foco em ingredientes frescos e orgânicos. O Jardim Verde é um refúgio para os amantes de uma alimentação saudável. O cardápio é elaborado com produtos orgânicos e frescos, oferecendo uma variedade de pratos deliciosos e nutritivos à base de plantas.",
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      rating: 2.9,
      location: {
        latitude: -23.9650,
        longitude: -46.3266,
        address: "Av. Marechal Deodoro, 24 - Gonzaga, Santos - SP, 11060-400"
      }
    },
    {
      id: 9,
      name: "Casa do Curry",
      maxReviewsCount: 3823,
      categories: [{ id: "4", label: "Mexicana" }],
      description:
        "Um restaurante acolhedor que oferece uma variedade de curries picantes e saborosos. A Casa do Curry é especializada em pratos de curry autênticos de várias partes do mundo. O ambiente acolhedor e a rica e aromática diversidade de sabores dos curries fazem dele um local imperdível para os amantes de especiarias.",
      imageUrl: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      rating: 4.7,
      location: {
        latitude: -23.9599,
        longitude: -46.3244,
        address: "Av. Bernardino de Campos, 322 - Campo Grande, Santos - SP, 11065-003"
      }
    }
  ];