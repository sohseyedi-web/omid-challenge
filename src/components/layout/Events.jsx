import { useQuery } from "@tanstack/react-query";
import { getWeeksDifference } from "../../utils/targetToDate";
import { convertToDate } from "./../../utils/convetToData";

const Events = ({ item, type }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["flag"],
    queryFn: () =>
      fetch(`https://restcountries.com/v3.1/name/${item.location}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <div>...</div>;

  return (
    <div
      className="lg:w-[45%] py-1 shadow-sm rounded-sm w-[95%] lg:mx-0 mx-auto gap-x-3 flex items-center"
      key={item.id}
    >
      {type === "lists" ? (
        <div className="w-[100px]">{convertToDate(item.event_date)}</div>
      ) : (
        <div className="w-[90px]">{getWeeksDifference(item.event_date)}</div>
      )}
      <img
        className="w-9 h-5 object-cover"
        src={data[1]?.flags?.png}
        alt={data[1]?.flags?.alt}
      />

      <h5 className="text-[#4D4D4D]">{item.name}</h5>
    </div>
  );
};

export default Events;
