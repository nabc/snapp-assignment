import { useQuery } from "@tanstack/react-query";
import { getContactsList } from "api/contacts";
import ApiStateHandler from "components/ApiStateHandler";
import { Grid, Title } from "components/UiKit";
import { ContactModel } from "types";
import Pagination from "./Pagination";
import FilterForm from "./FilterForm";
import FrequentContacts from "./FrequentContacts";
import ContactCard from "./ContactCard";

export default function Home() {
  const { isLoading, isError, data: { items = [], meta } = {}, error } = useQuery<any, { message: string }>(
    ["contactList"],
    getContactsList,
    {
      initialData: {
        items: [],
        meta: {},
      },
    }
  );

  return (
    <ApiStateHandler isLoading={isLoading} isError={isError} error={error} hasData={items.length > 0}>
      <FilterForm />
      <FrequentContacts />
      <Title>Contacts List</Title>
      <Grid>
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
      </Grid>
      <Pagination meta={meta} />
    </ApiStateHandler>
  );
}
