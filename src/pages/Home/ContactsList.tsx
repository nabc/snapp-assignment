/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { getContactsList } from "api/contacts";
import useParamParser from "hooks/useParamParser";
import ApiStateHandler from "components/ApiStateHandler";
import { ContactsGrid } from "components/UiKit";
import { ContactModel } from "types";
import ContactCard from "pages/Home/ContactCard";

import Pagination from "./Pagination";

export default function ContactsList() {
  const { updatePageParameters } = useParamParser();

  const { search } = useLocation();

  const { isLoading, isError, data, error, mutate } = useMutation<
    AxiosResponse<any, any>,
    { message: string },
    string,
    unknown
  >((query: string) => getContactsList(query));

  useEffect(() => {
    console.log("useEffect", search);

    if (search === "") {
      updatePageParameters({ limit: 12, skip: 0 });
    } else {
      mutate(search);
    }
  }, [search]);

  return (
    <ApiStateHandler isLoading={isLoading} isError={isError} error={error!} hasData={Boolean(data?.data.items.length)}>
      <ContactsGrid>
        {data?.data.items.map((contact: ContactModel) => (
          <ContactCard
            key={contact.id}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phone={contact.phone}
            avatar={contact.avatar}
            address={contact.address}
            id={contact.id}
          />
        ))}
      </ContactsGrid>
      <Pagination meta={data?.data.meta} />
    </ApiStateHandler>
  );
}
