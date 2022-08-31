import { useSelector } from "react-redux";

import { ContactModel } from "types";
import { selectFrequentContacts } from "store/appSlice";
import ContactCard from "pages/Home/ContactCard";

import { ContactsGrid, Title } from "../styled.components";
import { InfoSpan } from "components/UiKit";

export default function FrequentContacts() {
  const frequentContacts = useSelector(selectFrequentContacts);

  if (!frequentContacts.length) {
    return (
      <Title>
        <InfoSpan mode="info">No contacts have been visited!</InfoSpan>
      </Title>
    );
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
