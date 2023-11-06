import styled from "styled-components";
import footerImg from "../assets/images/footer.jpeg";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background-color: rgba(76, 70, 62, 0.9);
	padding: 20px 20px 0 20px;
	color: white;
	gap: 10px;
	position: relative;

	&::before {
		content: "";
		background-image: url(${footerImg});
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`;

const Column = styled.div`
	flex: 1;
	text-align: center;

	@media (max-width: 768px) {
		flex: 100%;
		margin-bottom: 20px;
	}
`;

const Line = styled.div`
	height: 2px;
	background-color: white;
	margin: 10px 0;
`;

const ContactContainer = styled.div`
	flex: 1;
	text-align: center;
`;

const ContactTitle = styled.h3`
	font-size: 18px;
`;

const ContactInfo = styled.div`
	margin-top: 10px;
`;

const A = styled.a`
	color: white;
`;

function Footer() {
	return (
		<Container>
			<Column>
				<ContactContainer>
					<ContactTitle>Adresa</ContactTitle>
					<ContactInfo>
						Vuka Karadzica 9, <br />
						Novi Pazar 36300
					</ContactInfo>
				</ContactContainer>
			</Column>
			<Column>
				<ContactContainer>
					<ContactTitle>Kontakt</ContactTitle>
					<ContactInfo>Telefon: 020 318-130</ContactInfo>
					<ContactInfo>Mob.Telefon: +381655308505</ContactInfo>
					<ContactInfo>
						<A href="mailto:spdunp@np.ac.rs">Email: spdunp@np.ac.rs</A>
					</ContactInfo>
				</ContactContainer>
			</Column>
			<Column>
				<ContactContainer>
					<ContactTitle>Kontakt</ContactTitle>
					<ContactInfo>Email: example@example.com</ContactInfo>
					<ContactInfo>Email: example@example.com</ContactInfo>
					<ContactInfo>Email: example@example.com</ContactInfo>
				</ContactContainer>
			</Column>
			<Line />
			<div
				style={{
					flex: "80%",
					textAlign: "center",
					borderTop: "1px solid #D42029",
					justifyContent: "center",
					padding: "10px",
				}}
			>
				SPDUNP © 2023
			</div>
		</Container>
	);
}

export default Footer;
