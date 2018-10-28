import styled, { keyframes } from 'styled-components'

export const Label = styled.label`
  font-size: 18px;
  margin-top: 25px;
  display: block;
  text-transform: uppercase;
  font-family: Montserrat;
  color: #b8aea4;

  @media (min-width: 480px) {
    ${({ smaller }) => smaller && 'width: 80%;'};
  }
`

export const Input = styled.input`
  font-size: 14px;
  letter-spacing: 0.9px;
  box-shadow: inset 0 1px 3px 0 rgba(55, 55, 55, 0.5);
  padding: 10px 20px;
  display: block;
  width: calc(100% - 42px);
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  font-family: Montserrat;
  margin-top: 10px;

  :disabled {
    background-color: #f2f0f0;
    color: #838383;
    border: #e8e6e6;
    cursor: not-allowed;
  }
`

export const TextArea = styled.textarea`
  font-size: 14px;
  letter-spacing: 0.9px;
  box-shadow: inset 0 1px 3px 0 rgba(55, 55, 55, 0.5);
  padding: 10px 20px;
  display: block;
  width: calc(100% - 42px);
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  font-family: Montserrat;
  margin-top: 10px;
  resize: none;

  :disabled {
    background-color: #f2f0f0;
    color: #838383;
    border: #e8e6e6;
    cursor: not-allowed;
  }
`

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

  :disabled {
    background-color: #ccc;
    color: #e8e6e6;
    border: #e8e6e6;
    cursor: not-allowed;
  }

  :not(:disabled):hover {
    color: #b8aea4;
    background-color: white;
    transition: color 0.5s, background-color 0.5s;
  }
`

export const Counter = styled.div`
  text-align: right;
  font-size: 12px;
  margin-top: 5px;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.span`
  display: inline-block;
  margin-right: 10px;
  animation: ${rotate360} 2s linear infinite;
`

export const Error = styled.div`
  color: white;
  background-color: #9a6363;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  line-height: 25px;
  font-weight: 300;
`

export const Feedback = styled.div`
  color: white;
  background-color: #6e9368;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  line-height: 25px;
  font-weight: 300;
`
