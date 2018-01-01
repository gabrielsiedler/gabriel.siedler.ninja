import styled from 'styled-components';

export const Label = styled.label`
  font-size: 18px;
  margin-top: 25px;
  display: block;
  text-transform: uppercase;
  font-family: Montserrat;
  color: #b8aea4;
`;

export const Input = styled.input`
  font-size: 14px;
  letter-spacing: 0.9px;
  box-shadow: inset 0 1px 3px 0 rgba(55,55,55,0.5);
  padding: 10px 20px;
  display: block;
  width: calc(100% - 42px);
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  outline: none;
  font-family: Montserrat;
  margin-top: 10px;
`;

export const TextArea = styled.textarea`
  font-size: 14px;
  letter-spacing: 0.9px;
  box-shadow: inset 0 1px 3px 0 rgba(55,55,55,0.5);
  padding: 10px 20px;
  display: block;
  width: 80%;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  outline: none;
  font-family: Montserrat;
  margin-top: 10px;
  resize: none;
`;

export const Button = styled.button`
  font-family: Montserrat;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 12px 25px;
  background-color: #b8aea4;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  border: 1px solid #b8aea4;
  transition: color 0.5s, background-color 0.5s;

  :hover {
    color: #b8aea4;
    background-color: white;
    transition: color 0.5s, background-color 0.5s;
  }
`;
