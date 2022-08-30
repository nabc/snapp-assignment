import { useSelector } from "react-redux";
import { selectFrequentContacts } from "store/appSlice";
import { ContactModel } from "types";
import ContactCard from "pages/Home/ContactCard";

import { ContactsGrid, Title } from "../styled.components";

export default function FrequentContacts() {
  const frequentContacts = useSelector(selectFrequentContacts);

  if (!frequentContacts.length) {
    return <Title>No contacts have been visited!</Title>;
  }
  return (
    <>
      <Title>Frequent Contacts</Title>
      <ContactsGrid>
        {frequentContacts.map((contact: ContactModel) => (
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
    </>
  );
}
