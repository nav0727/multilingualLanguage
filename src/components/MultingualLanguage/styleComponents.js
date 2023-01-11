/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ListItemContainer = styled.li`
  display: flex;
  width: 40vw;
`
export const Button = styled.button`
  padding: 7px;
  width: 100px;
  border-radius: 20px;
  border: 1px solid #db1c48;
  color: ${props => (props.isActive ? '#1e293b' : '#db1c48')};
  background-color: ${props => (props.isActive ? '#db1c48' : '#ffffff')};
`
