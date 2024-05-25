import { useContext } from "react";
import { RestaurantContext } from "./context";

export const useRestaurant = () => useContext(RestaurantContext)