import { useQuery } from "@tanstack/react-query";
import { getContact } from "api/contacts";
import { useParams } from "react-router-dom";

export default function Contact() {
  let { id = "1" } = useParams();

  // TODO: should retrieve id from url and get contact info via api call
  // TODO: should handle state of loading
  // TODO: should handle state of no data
  // TODO: should show contact info if data is successfully retrieved

  const { isLoading, isError, data, error } = useQuery<any, any>(["contact"], () => getContact(parseInt(id)));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      contact page <p>{data.first_name}</p>
    </div>
  );
}
