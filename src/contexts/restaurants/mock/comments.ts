import { IComment } from "../../../app/restaurant/[id]";

export const commentsMock: IComment[] = [
    {
      restaurantId: 1,
      comments: [
        {
          userId: 101,
          name: "Carlos Silva",
          content: "A comida estava incrível e o atendimento foi excelente. Voltarei com certeza!",
          publishedAt: new Date('2024-05-01T14:12:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/1.jpg",
          rating: 5
        },
        {
          userId: 102,
          name: "Ana Pereira",
          content: "Ambiente sofisticado e pratos deliciosos. Recomendo a todos.",
          publishedAt: new Date('2024-05-03T09:45:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          rating: 4
        },
        // More comments...
      ]
    },
    {
      restaurantId: 2,
      comments: [
        {
          userId: 201,
          name: "João Souza",
          content: "Melhor sushi da cidade! Ingredientes frescos e muito saborosos.",
          publishedAt: new Date('2024-05-02T18:30:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/2.jpg",
          rating: 5
        },
        {
          userId: 202,
          name: "Maria Fernandes",
          content: "O ambiente é muito agradável e os pratos são deliciosos.",
          publishedAt: new Date('2024-05-05T12:15:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/2.jpg",
          rating: 4
        },
        // More comments...
      ]
    },
    {
      restaurantId: 3,
      comments: [
        {
          userId: 301,
          name: "Pedro Lima",
          content: "As massas são feitas na hora e o molho é maravilhoso. Adorei!",
          publishedAt: new Date('2024-05-04T20:00:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/3.jpg",
          rating: 5
        },
        {
          userId: 302,
          name: "Julia Costa",
          content: "Ambiente acolhedor e comida deliciosa. Perfeito para um jantar romântico.",
          publishedAt: new Date('2024-05-06T17:45:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/3.jpg",
          rating: 5
        },
        // More comments...
      ]
    },
    {
      restaurantId: 4,
      comments: [
        {
          userId: 401,
          name: "Renato Oliveira",
          content: "Os hambúrgueres são sensacionais e o preço é justo.",
          publishedAt: new Date('2024-05-07T15:30:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/4.jpg",
          rating: 4
        },
        {
          userId: 402,
          name: "Fernanda Lima",
          content: "Lugar perfeito para um almoço descontraído com amigos.",
          publishedAt: new Date('2024-05-08T13:00:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/4.jpg",
          rating: 4
        },
        // More comments...
      ]
    },
    {
      restaurantId: 5,
      comments: [
        {
          userId: 501,
          name: "Marcos Santos",
          content: "Tacos autênticos e cheios de sabor. Adorei a experiência.",
          publishedAt: new Date('2024-05-09T19:15:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 5
        },
        {
          userId: 502,
          name: "Clara Souza",
          content: "A decoração é incrível e a comida é deliciosa.",
          publishedAt: new Date('2024-05-10T14:00:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/5.jpg",
          rating: 4
        },
        // More comments...
      ]
    },
    {
      restaurantId: 6,
      comments: [
        {
          userId: 601,
          name: "Lucas Ribeiro",
          content: "Ótimas opções veganas e vegetarianas. Comida muito saborosa e saudável.",
          publishedAt: new Date('2024-05-11T12:30:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/6.jpg",
          rating: 5
        },
        {
          userId: 602,
          name: "Beatriz Lima",
          content: "Ambiente agradável e comida excepcional. Recomendo a todos.",
          publishedAt: new Date('2024-05-12T10:45:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/6.jpg",
          rating: 5
        },
        // More comments...
      ]
    },
    {
      restaurantId: 7,
      comments: [
        {
          userId: 701,
          name: "Rodrigo Alves",
          content: "Carnes maravilhosas e atendimento impecável. Vale cada centavo.",
          publishedAt: new Date('2024-05-13T21:00:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/7.jpg",
          rating: 5
        },
        {
          userId: 702,
          name: "Carla Santos",
          content: "Melhor churrascaria que já fui. As carnes são suculentas e bem preparadas.",
          publishedAt: new Date('2024-05-14T18:30:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/7.jpg",
          rating: 5
        },
        // More comments...
      ]
    },
    {
      restaurantId: 8,
      comments: [
        {
          userId: 801,
          name: "Tiago Neves",
          content: "Frutos do mar frescos e deliciosos. O atendimento também é excelente.",
          publishedAt: new Date('2024-05-15T16:45:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/8.jpg",
          rating: 5
        },
        {
          userId: 802,
          name: "Paula Ferreira",
          content: "Pratos incríveis e ambiente agradável. Adorei cada momento.",
          publishedAt: new Date('2024-05-16T20:00:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/8.jpg",
          rating: 5
        },
        // More comments...
      ]
    },
    {
      restaurantId: 9,
      comments: [
        {
          userId: 901,
          name: "Eduardo Melo",
          content: "Os curries são deliciosos e muito bem temperados. Vou voltar com certeza.",
          publishedAt: new Date('2024-05-17T14:30:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/9.jpg",
          rating: 4
        },
        {
          userId: 902,
          name: "Gabriela Martins",
          content: "Ambiente aconchegante e comida maravilhosa. Uma experiência única.",
          publishedAt: new Date('2024-05-18T19:15:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/9.jpg",
          rating: 5
        },
        // More comments...
      ]
    },
    {
      restaurantId: 10,
      comments: [
        {
          userId: 1001,
          name: "André Costa",
          content: "As pizzas são incríveis e o ambiente é muito acolhedor.",
          publishedAt: new Date('2024-05-19T21:45:00'),
          photoUrl: "https://randomuser.me/api/portraits/men/10.jpg",
          rating: 5
        },
        {
          userId: 1002,
          name: "Larissa Rocha",
          content: "Perfeito para um jantar em família. Pizzas deliciosas e serviço excelente.",
          publishedAt: new Date('2024-05-20T18:00:00'),
          photoUrl: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5
        },
        // More comments...
      ]
    }
  ];