import { useSelector } from "react-redux";
import { selectFrequentContacts } from "store/appSlice";
import { ContactModel } from "types";
import { Column, Grid, Title } from "components/UiKit";
import ContactCard from "../ContactCard";

export default function FrequentContacts() {
  const frequentContacts = useSelector(selectFrequentContacts);

  if (!frequentContacts.length) {
    return <Title>No contacts have been visited! </Title>;
  }
  return (
    <Column>
      <Title>FrequentContacts</Title>
      <Grid>
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
      </Grid>
    </Column>
  );
}
