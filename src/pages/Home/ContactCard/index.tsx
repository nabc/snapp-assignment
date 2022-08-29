import LocationIcon from "components/icons/LocationIcon";
import PersonIcon from "components/icons/PersonIcon";
import PhoneIcon from "components/icons/PhoneIcon";
import { Avatar, Card, Anchor } from "components/UiKit";
import InfoWithIcon from "./InfoWithIcon";

interface ContactCardProps {
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
  address: string;
  id: number;
}
export default function ContactCard({ firstName, lastName, phone, avatar, address, id }: ContactCardProps) {
  return (
    <Anchor to={`${id}`} className="">
      <Card>
        <Avatar alt="Contact's Avatar" className="" src={avatar} />
        <header className="flex flex-col items-start w-full leading-tight py-2 ">
          <InfoWithIcon Icon={PersonIcon}>{firstName + " " + lastName}</InfoWithIcon>
          <InfoWithIcon Icon={PhoneIcon}>{phone || "-"}</InfoWithIcon>
          <InfoWithIcon Icon={LocationIcon}>{address || "-"}</InfoWithIcon>
        </header>
      </Card>
    </Anchor>
  );
}
