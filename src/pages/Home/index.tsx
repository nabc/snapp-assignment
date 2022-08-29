import { Title } from "components/UiKit";

import FrequentContacts from "./FrequentContacts";
import ContactsList from "./ContactsList";
import FilterForm from "./FilterForm";

export default function Home() {
  return (
    <>
      <FilterForm />
      <FrequentContacts />
      <Title>Contacts List</Title>
      <ContactsList />
    </>
  );
}
