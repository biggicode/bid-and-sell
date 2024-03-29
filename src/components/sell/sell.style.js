import styled from "styled-components";

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  grid-column: 1/-1;
`;

export const FormSection = styled.div`
  background-color: #15151c;
  border-radius: 2rem;
  border: 3px solid #2f2f3c;
  box-shadow: 0 3px 6px #000;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Title = styled.h2`
  text-shadow: 3px 6px #000;
  font-size: 3rem;
  grid-column: 1/-1;
  text-align: center;
`;

export const SemiTitle = styled.h3`
  font-size: 2rem;
`;

export const Label = styled.label`
  display: block;
`;

export const FileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: #bb3fdd;
`;

export const FileLabel = styled.label`
  cursor: pointer;
  border: 2px solid #bb3fdd;
  border-radius: 5px;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;

export const InputFile = styled.input`
  /* display: none; */
  width: 1px;
  height: 1px;
`;

export const FileText = styled.p``;

export const Input = styled.input`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  border: 2px solid #2f2f3c;
  color: #fff;

  &:focus {
    outline: 2px solid #ff9f7c;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 200px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  border: 2px solid #2f2f3c;
  color: #fff;

  &:focus {
    outline: 2px solid #ff9f7c;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

export const Button = styled.button`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to left, #ff9f7c, #bb3fdd);
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  border-radius: 1.75rem;

  transition: 250ms;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

export const Error = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  text-shadow: 1px 1px #555;
  color: red;
`;
