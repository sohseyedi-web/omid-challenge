import { useGetEvents } from "../../hooks/useGetEvents";
import Loading from "../common/Loading";
import Events from "./Events";

const EventsLayout = () => {
  const {data,isLoading} = useGetEvents()

  if (isLoading) return <Loading />;

  return (
    <section className="my-3">
      <h4 className="text-[#4D4D4D] text-sm">مسابقات آینده</h4>
      <div className="flex items-center justify-between gap-y-4 w-full flex-wrap mt-5">
        {data?.map((item) => (
          <Events key={item?.id} item={item} type={"lists"}/>
        ))}
      </div>
    </section>
  );
};

export default EventsLayout;
