/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { getContact } from "api/contacts";
import ApiStateHandler from "components/ApiStateHandler";
import { Avatar, Column } from "components/UiKit";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateFrequentContact } from "store/appSlice";

export default function Contact() {
  // TODO: work on UI

  // TODO: should have a back to list button
  // TODO: should show contact info if data is successfully retrieved

  // TODO: should update frequent contacts in redux store

  let { id = "1" } = useParams();
  const dispatch = useDispatch();

  const { isLoading, isError, data, error } = useQuery<any, any>(["contact"], () => getContact(parseInt(id)), {
    initialData: {},
    onSuccess: (contactData) => {
      console.log("data", contactData);

      dispatch(updateFrequentContact(contactData));
    },
  });

  return (
    <>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <ApiStateHandler isLoading={isLoading} isError={isError} error={error} hasData={Boolean(data)}>
        <Column>
          contact page - id: {id}
          <Column>
            {Object.keys(data).map((key: string) => {
              if (key === "avatar") {
                return <Avatar src={data.avatar} />;
              } else {
                return (
                  <li key={key}>
                    {key} ---&gt; {data[key]}
                  </li>
                );
              }
            })}
          </Column>
        </Column>
      </ApiStateHandler>
    </>
  );
}
