import { useRoute, type RouteProp } from "@react-navigation/native";
import { RouteParams } from "./type";

function useTypeSafeRoute<T extends keyof RouteParams>() {
  const route = useRoute<RouteProp<RouteParams, T>>();

  return route;
}

export default useTypeSafeRoute;
