import styled from 'styled-components';

export const Box = styled.div`
box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);

padding: 60px 40px;
background: white;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 80px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: #FF385C;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #FF385C;
margin-bottom: 40px;
font-weight: bold;
`;
