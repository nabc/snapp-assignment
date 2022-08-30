import styled from "styled-components";
import tw from "twin.macro";

export const Div = styled.div.attrs({
  className: "flex justify-center items-center",
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

export const ErrorMessage = styled.span.attrs<any>({
  className: "absolute left-2 -bottom-4 text-red-500 underline decoration-red-500 text-xs mt-1",
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
