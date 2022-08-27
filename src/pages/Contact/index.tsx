import { useParams } from "react-router-dom";

export default function Contact() {
  let { id } = useParams();

  // TODO: should retrieve id from url and get contact info via api call
  // TODO: should handle state of loading
  // TODO: should handle state of no data
  // TODO: should show contact info if data is successfully retrieved

  return <div>contact page - id: {id}</div>;
}
