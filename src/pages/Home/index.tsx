import { useQuery } from "@tanstack/react-query";
import { getContactsList } from "api/contacts";

export default function Home() {
  // TODO: should get contact list via api call

  // TODO: should have a form - single input with throttling/debouncing - for filtering
  // TODO: should have a list of frequently visited contacts / data should be retrieved from redux store

  // TODO: should handle state of loading
  // TODO: should handle state of no data
  // TODO: should show contact list if data is successfully retrieved
  // TODO: contact list should use contact card component which is linked to the contact page

  const {
    isLoading,
    isError,
    data: { items, meta },
    error,
  } = useQuery<any, any>(["contactList"], getContactsList);

  console.log(meta);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      <div>home page</div>
      {items.map((contact: any) => (
        <li key={contact.id}>{contact.first_name}</li>
      ))}
    </ul>
  );
}
