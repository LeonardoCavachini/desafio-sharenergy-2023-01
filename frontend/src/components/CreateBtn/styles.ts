import styled from "styled-components"

export const Btn = styled.button`
  box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom, #7999e4 5%, #435792 100%);
	background-color:#ffc477;
	border-radius:11px;
	border:2px solid #eeb44f;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family: ${({ theme }) => theme.font.default};
  font-size: ${({ theme }) => theme.sizes.medium};
	font-weight:bold;
	padding:8px 18px;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc9f52;
  :hover {
	background:linear-gradient(to bottom, #435792 5%, #b0d5eb 100%);
	background-color:#fb9e25;
}

`;