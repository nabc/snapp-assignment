import { useQuery } from "@tanstack/react-query";
import { getContactsList } from "api/contacts";
import ApiStateHandler from "components/ApiStateHandler";

export default function Home() {
  // TODO: should have a form - single input with throttling/debouncing - for filtering
  // TODO: should have a list of frequently visited contacts / data should be retrieved from redux store

  // TODO: should show contact list if data is successfully retrieved => work on UI
  // TODO: contact list should use contact card component which is linked to the contact page

  const {
    isLoading,
    isError,
    data: { items = [], meta } = {},
    error,
  } = useQuery<any, { message: string }>(["contactList"], getContactsList, {
    initialData: {
      items: [],
      meta: {},
    },
  });

  console.log(meta);

  return (
    <ApiStateHandler isLoading={isLoading} isError={isError} error={error} hasData={items.length > 0}>
      <ul>
        <div>home page</div>
        {items.map((contact: any) => (
          <li key={contact.id}>{contact.first_name}</li>
        ))}
      </ul>
    </ApiStateHandler>
  );
}
