import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

import { Div } from "components/UiKit";

export const Title = styled.h4.attrs({
  className: "flex justify-center w-full my-3 font-semibold",
})``;

export const ContactsGrid = styled(Div).attrs<any>({
  className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6",
})``;

export const FormGrid = styled(Div).attrs<any>({
  className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
})``;

export const Anchor = styled(Link).attrs<any>({
  className: "cursor-pointer scale-100 transition duration-250 ease-out hover:ease-in hover:scale-105 ",
})``;

export const SubmitButton = styled.button.attrs<any>({
  className:
    "flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 h-10 rounded-full w-full",
  type: "submit",
})``;

export const PageButtonSpan = styled.span.attrs<any, any>({
  className:
    "inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-blue-300 ",
})`
  ${(props) => {
    if (props.selected) {
      return tw` text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700`;
    }
    if (props.disabled) {
      return tw` text-gray-600 bg-gray-50 border-gray-300 hover:bg-gray-100 hover:text-gray-700`;
    }
    return tw` hover:bg-blue-100 hover:text-blue-700`;
  }}
`;
