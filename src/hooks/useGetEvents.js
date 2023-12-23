import { useQuery } from "@tanstack/react-query";
import { getEventsData } from "../services/api";

export const useGetEvents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: getEventsData,
    retry: false,
  });

  return { data, isLoading };
};
