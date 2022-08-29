/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { getContact } from "api/contacts";
import ApiStateHandler from "components/ApiStateHandler";
import { Avatar, Column } from "components/UiKit";
import { updateFrequentContact } from "store/appSlice";

export default function Contact() {
  // TODO: work on UI

  let { id = "1" } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { isLoading, isError, data, error } = useQuery<any, any>(["contact"], () => getContact(parseInt(id)), {
    initialData: {},
    onSuccess: (contactData) => {
      dispatch(updateFrequentContact(contactData));
    },
  });

  return (
    <>
      <button onClick={goBack}>Go Back</button>
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
