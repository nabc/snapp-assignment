import { Div } from "components/UiKit";
import styled from "styled-components";

export const Column = styled(Div).attrs<any>({
  className: "flex-col",
})``;

export const DetailsGrid = styled(Div).attrs<any>({
  className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mt-3",
})``;
export const BackButton = styled.button.attrs<any>({
  className:
    "flex justify-center items-center bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-2 h-10 rounded-full",
  type: "submit",
})``;
