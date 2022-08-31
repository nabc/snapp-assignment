import { ParamsProvider } from "contexts/ParamsContext";

import { Title } from "./styled.components";
import FilterForm from "./FilterForm";
import ListControllers from "./ListControllers";
import FrequentContacts from "./FrequentContacts";
import ContactsList from "./ContactsList";

export default function Home() {
  return (
    <ParamsProvider>
      <FilterForm />
      <ListControllers />
      <FrequentContacts />
      <Title>Contacts List</Title>
      <ContactsList />
    </ParamsProvider>
  );
}
