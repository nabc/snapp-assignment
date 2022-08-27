import { useQuery } from "@tanstack/react-query";
import { getContact } from "api/contacts";
import ApiStateHandler from "components/ApiStateHandler";
import { useParams } from "react-router-dom";

export default function Contact() {
  let { id = "1" } = useParams();

  // TODO: should retrieve id from url and get contact info via api call => work on UI

  // TODO: should have a back to list button
  // TODO: should show contact info if data is successfully retrieved

  const { isLoading, isError, data, error } = useQuery<any, any>(["contact"], () => getContact(parseInt(id)), {
    initialData: {},
  });

  return (
    <ApiStateHandler isLoading={isLoading} isError={isError} error={error} hasData={Boolean(data)}>
      <div>
        contact page - id: {id}
        <ul>
          {Object.keys(data).map((key: string) => (
            <li key={key}>
              {key} ---&gt; {data[key]}
            </li>
          ))}
        </ul>
      </div>
    </ApiStateHandler>
  );
}
