import { Title } from "components/UiKit";

import FilterForm from "./FilterForm";
import Sort from "./Sort";
import FrequentContacts from "./FrequentContacts";
import ContactsList from "./ContactsList";

export default function Home() {
  return (
    <>
      <FilterForm />
      <Sort />
      <FrequentContacts />
      <Title>Contacts List</Title>
      <ContactsList />
    </>
  );
}
