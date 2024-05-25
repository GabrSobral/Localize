import { ReactNode, createContext, useEffect, useState } from "react";

import { restaurantsMock } from "./mock/restaurants";
import { commentsMock } from "./mock/comments";
import { IComment } from "../../app/restaurant/[id]";
import { useAuth } from "../auth/hook";

interface RestaurantContextProps {
  restaurants: IRestaurant[];

  comments: IComment[];

  createComment: (restaurantId: number, rating: number, content: string) => void;
}

export interface IRestaurant {
  id: number;
  name: string;
  description: string;
  categories: { id: string; label: string }[]
  imageUrl: string;
  rating: number;
  maxReviewsCount: number;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
}

export const RestaurantContext = createContext({} as RestaurantContextProps);

export function RestaurantProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth();
  const [restaurants, setRestaurants] =
    useState<IRestaurant[]>([]);

    useEffect(() => {
      setRestaurants(restaurantsMock)
    },[])

  const [comments, setComment] = useState(commentsMock);

  function createComment(
    restaurantId: number,
    rating: number,
    content: string
  ) {
    if (session)
      setComment((state) =>
        state.map((item) => {
          if (item.restaurantId === restaurantId) {
            item.comments = [ {
              name: session?.user.name,
              photoUrl: session?.user.img,
              publishedAt: new Date(),
              content,
              rating,
              userId: session?.user.id,
            }, ...item.comments,];
          }

          return { ...item };
        })
      );
  }

  return (
    <RestaurantContext.Provider value={{ restaurants, comments, createComment }}>
      {children}
    </RestaurantContext.Provider>
  );
}
