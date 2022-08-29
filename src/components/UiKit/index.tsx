import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

// export const Example = styled.main.attrs({
//   className: "container mx-auto",
// })`
//   & {
//     form {
//       ${tw` text-center rounded py-8 px-5 shadow max-w-xs`}
//     }
//     input {
//       ${tw` mb-4 w-full border-solid border rounded py-2 px-4`}
//     }
//     button {
//       ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
//     }
//   }
// `;

export const Main = styled.main.attrs({
  className:
    "container  my-0 md:my-8 mx-auto rounded-none	md:rounded-2xl shadow-lg shadow-cyan-500/50 py-10 px-6 bg-white",
})``;
// background-color: white;
export const Title = styled.h4.attrs({
  className: "flex justify-center w-full my-3 font-semibold",
})``;

export const Div = styled.div.attrs({
  className: "flex justify-center items-center",
})``;

export const Column = styled(Div).attrs<any>({
  className: "flex-col",
})``;

export const ContactsGrid = styled(Div).attrs<any>({
  className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6",
})``;

export const FormGrid = styled(Div).attrs<any>({
  className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
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

export const FormField = styled.div.attrs<any>({
  className: "flex flex-col items-start justify-center w-full relative",
})``;

export const BaseInput = styled.input.attrs<any>({
  className:
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500	focus:border-blue-500",
})``;

export const Input = styled(BaseInput)<any>`
  ${(props) => {
    return props.error && tw` border-red-500 hover:border-red-500	focus:border-red-500`;
  }}
`;

export const SubmitButton = styled.button.attrs<any>({
  className:
    "flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 h-10 rounded-full w-full",
  type: "submit",
})``;

export const InfoSpan = styled.span.attrs<any, any>({
  className: "flex justify-center w-full",
})`
  ${(props) => {
    if (props.info) {
      return tw` text-blue-500`;
    }
    if (props.error) {
      return tw` text-red-500`;
    }
    if (props.success) {
      return tw` text-green-500`;
    }
    return tw` text-black`;
  }}
`;

export const ErrorMessage = styled.span.attrs<any>({
  className: "absolute left-2 -bottom-4 text-red-500 underline decoration-red-500 text-xs mt-1",
})``;
