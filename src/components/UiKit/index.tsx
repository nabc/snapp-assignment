import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

export const Example = styled.main.attrs({
  className: "container mx-auto",
})`
  & {
    form {
      ${tw` text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw` mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
  }
`;

export const Main = styled.main.attrs({
  className: "container my-0 md:my-8 mx-auto rounded-none	md:rounded-2xl	 ",
})`
  padding: 2.5rem 1.5rem;
  background-color: white;
  box-shadow: 0px 0px 3px 4px rgba(17, 49, 250, 0.58);
  -webkit-box-shadow: 0px 0px 3px 4px rgba(17, 49, 250, 0.58);
  -moz-box-shadow: 0px 0px 3px 4px rgba(17, 49, 250, 0.58);
`;

export const Title = styled.h4.attrs({
  className: "flex justify-center w-full my-3 font-semibold",
})``;

export const Div = styled.div.attrs({
  className: "flex justify-center items-center",
})``;

export const Column = styled(Div).attrs<any>({
  className: "flex-col",
})``;

export const Grid = styled(Div).attrs<any>({
  className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6",
})``;

export const Card = styled.article.attrs<any>({
  className: "flex flex-col justify-center items-center max-h-96overflow-hidden rounded-lg p-3",
})`
  box-shadow: 1px 2px 5px 1px rgba(0, 162, 100, 0.75);
  -webkit-box-shadow: 1px 2px 5px 1px rgba(0, 162, 100, 0.75);
  -moz-box-shadow: 1px 2px 5px 1px rgba(0, 162, 100, 0.75);
`;

export const Avatar = styled.img.attrs<any>({
  className: "block h-48 w-48	",
})``;

export const Anchor = styled(Link).attrs<any>({
  className: "cursor-pointer scale-100 transition duration-250 ease-out hover:ease-in hover:scale-105 ",
})``;
