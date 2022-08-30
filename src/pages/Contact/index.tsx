import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { getContact } from "api/contacts";
import ApiStateHandler from "components/ApiStateHandler";
import { Avatar, Card } from "components/UiKit";
import { updateFrequentContact } from "store/appSlice";
import BackArrowIcon from "components/icons/BackArrowIcon";
import dateConvertor from "utils/dateConvertor";

import { BackButton, Column, DetailsGrid } from "./styled.components";

export default function Contact() {
  let { id = "1" } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const {
    isLoading,
    isError,
    data: { data = {} } = {},
    error,
  } = useQuery<any, any>(["contact"], () => getContact(parseInt(id)), {
    initialData: {},
    onSuccess: (contactData) => {
      dispatch(updateFrequentContact(contactData.data));
    },
  });

  return (
    <>
      <BackButton onClick={goBack}>
        <BackArrowIcon /> Go Back
      </BackButton>
      <ApiStateHandler isLoading={isLoading} isError={isError} error={error} hasData={Boolean(data)}>
        <Column>
          <Card>
            <Avatar src={data.avatar} />
          </Card>
          <DetailsGrid>
            <div>
              <strong>Name:</strong> {data.first_name + " " + data.last_name}
            </div>
            <div>
              <strong>Email:</strong> {data.email || "-"}
            </div>
            <div>
              <strong>Phone:</strong> {data.phone}
            </div>
            <div>
              <strong>Company:</strong> {data.company}
            </div>
            <div className="col-span-1 sm:col-span-2">
              <strong>Creation Date:</strong> {dateConvertor(data.createdAt, "EEEE LLL do yyyy")}
            </div>
            <div className="col-span-1 sm:col-span-2">
              <strong>Last Updated Date:</strong> {dateConvertor(data.updatedAt, "EEEE LLL do yyyy")}
            </div>
          </DetailsGrid>
        </Column>
      </ApiStateHandler>
    </>
  );
}
