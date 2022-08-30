/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { ContactModel } from "types";
import { getContactsList } from "api/contacts";
import ApiStateHandler from "components/ApiStateHandler";
import ContactCard from "pages/Home/ContactCard";

import Pagination from "./Pagination";
import { ContactsGrid } from "./styled.components";

export default function ContactsList() {
  const { search } = useLocation();

  const {
    isLoading,
    isFetching,
    isError,
    data: { data: { items, meta } = { items: [], meta: {} } } = {},
    error,
  } = useQuery<any, { message: string }>(["projects", search], () => getContactsList(search), {
    keepPreviousData: true,
  });

  return (
    <>
      <Pagination total={meta.total} />
      <ApiStateHandler
        isLoading={isLoading || isFetching}
        isError={isError}
        error={error!}
        hasData={Boolean(items.length)}
      >
        <ContactsGrid>
          {items.map((contact: ContactModel) => (
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
      </ApiStateHandler>
    </>
  );
}
