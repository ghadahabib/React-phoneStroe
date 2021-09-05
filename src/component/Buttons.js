import styled from "styled-components";
export const CustmBtn =styled.button`
text-transform: capitalize;
font-size : 1.3rem;
background-color : transparent;
background-color :${ props=> props.modal ? 'var(--light-blue)' : 'transparent'};
border : 0.03rem solid var(--main-white);
border-color :${ props=> props.cart ? 'var(--main-yello)' : 'var(--main-white)'};
color : var(--main-white); 
color :${ props=> props.cart ? 'var(--main-yello)' : 'var(--main-white)'};
border-radius : .5rem;
padding : .2rem .5rem;
cursor : pointer;
border-style: solid;
margin: .2rem .5rem;
transition : all .5s ease-in-out;
&:hover {
  border-color :${ props=> props.modal ? 'var(--main-color)' : 'var(--main-white)'};
  background-color : ${ props=> props.cart ? 'var(--main-yello)' : 'var(--main-white)'};
  color : var(--main-color);
};
&:focus{
  outline : none;
};
`