/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { getContactsList } from "api/contacts";
import useParamParser from "hooks/useParamParser";
import usePagination from "hooks/usePagination";
import ApiStateHandler from "components/ApiStateHandler";
import { ContactModel } from "types";
import ContactCard from "pages/Home/ContactCard";

import Pagination from "./Pagination";
import { ContactsGrid } from "./styled.components";

export default function ContactsList() {
  const { updatePageParameters } = useParamParser();
  const { search } = useLocation();

  const {
    isLoading,
    isError,
    data: { data: { items, meta } = { items: [], meta: {} } } = {},
    error,
    mutate,
  } = useMutation<AxiosResponse<any, any>, { message: string }, string, unknown>(
    (query: string) => getContactsList(query),
    {}
  );

  // TODO: maybe switch back to useQuery to preserve data and prevent ui lag

  const { page, lastPageNumber, limit, pageNumbers, changePage, changeLimit } = usePagination(
    meta ? meta : { skipped: 0, total: 0 }
  );

  useEffect(() => {
    if (search === "") {
      updatePageParameters(12, 0);
    } else {
      mutate(search);
    }
  }, [search]);

  useEffect(() => {
    updatePageParameters(limit, (page - 1) * 12);
  }, [page, limit]);

  return (
    <>
      <ApiStateHandler isLoading={isLoading} isError={isError} error={error!} hasData={Boolean(items.length)}>
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
      <Pagination
        page={page}
        lastPageNumber={lastPageNumber}
        limit={limit}
        pageNumbers={pageNumbers}
        changePage={changePage}
        changeLimit={changeLimit}
      />
    </>
  );
}
