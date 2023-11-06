import {
	BackgroundImageHome,
	BackgroundImageHomePrevFot,
	BtnAllPrjects,
	ButtonSignUp,
	CardForMoreAboutUs,
	CardInsideText,
	CardSkonp,
	CardSkonpMobile,
	CardSkonpText,
	CardSkonpTextHeader,
	CardSkonpWrapper,
	ChaildCardMoreAboutUs,
	ContentMoreAboutUs,
	HeaderMoreAboutUs,
	HeaderMoreAboutUsText,
	HeaderTitle,
	ImageLogoFax,
	ImageSkonpLine,
	ImagesContainer,
	ImagesInRow,
	ImagesRow,
	KidsButton,
	KidsCardContainer,
	KidsText,
	Line,
	PrevFooter,
	PrevFooterText,
	SectionMoreAboutUs,
	TextCard,
} from "./style";
import LogoFax from "../../assets/images/logofax.png";
import Skonp1 from "../../assets/images/skonp1.jpeg";
import Skonp2 from "../../assets/images/skonp2.jpeg";
import Skonp3 from "../../assets/images/skonp3.jpeg";
import Skonp4 from "../../assets/images/skonp4.jpeg";
import Skonp5 from "../../assets/images/skonp5.jpeg";
import Skonp6 from "../../assets/images/skonp6.jpeg";
import Skonp7 from "../../assets/images/skonp7.jpeg";
import Skonp8 from "../../assets/images/skonp8.jpeg";
import Skonp9 from "../../assets/images/skonp9.jpeg";
import SkonpLine from "../../assets/images/skonpLine.png";
import RektorImg from "../../assets/images/imgRektor.jpeg";
import { useNavigate } from "react-router-dom";

function HomePage() {
	const navigation = useNavigate();
	return (
		<div>
			<BackgroundImageHome style={{ position: "relative" }}>
				<HeaderTitle>
					STUDENTSKI PARLAMENT <br /> DRZAVNOG UNIVERZITETA U NOVOM PAZARU
				</HeaderTitle>
			</BackgroundImageHome>
			<ImagesContainer>
				<CardSkonp>
					<CardSkonpTextHeader>skonp</CardSkonpTextHeader>
					<CardSkonpText>
						Već jedanaest godina za redom, studentska konferencija SKONP
						(Studentska konferencija Drzavnog univerziteta u Novom Pazaru)
						okuplja mlade i ambiciozne umove iz Srbije u cilju istraživanja
						novih horizonta znanja i inspiracije. Ova prestižna konferencija je
						postala simbol izvrsnosti i entuzijazma, privlačeći više od 350
						učesnika.SKONP, dok ulazi u jedanaestu godinu, i dalje ostaje
						posvećen pružanju platforme mladim umovima iz Srbije da istraže,
						uče, rastu i povežu se.
					</CardSkonpText>
					<BtnAllPrjects
						onClick={() => {
							navigation("/projects");
						}}
					>
						SVI PROJEKTI
					</BtnAllPrjects>
				</CardSkonp>
				<ImageSkonpLine src={SkonpLine} />
				<ImagesRow>
					<ImagesInRow src={Skonp1} />
					<ImagesInRow src={Skonp2} />
					<ImagesInRow src={Skonp3} />
				</ImagesRow>
				<ImagesRow>
					<ImagesInRow src={Skonp4} />
					<ImagesInRow src={Skonp5} />
					<ImagesInRow src={Skonp6} />
				</ImagesRow>
				<ImagesRow>
					<ImagesInRow src={Skonp7} />
					<ImagesInRow src={Skonp8} />
					<ImagesInRow src={Skonp9} />
				</ImagesRow>
				<ImagesRow>
					<ImagesInRow style={{ width: "100%" }} src={RektorImg} />
				</ImagesRow>
				<ImageSkonpLine style={{ bottom: "0" }} src={SkonpLine} />
			</ImagesContainer>
			<SectionMoreAboutUs>
				<Line />
				<HeaderMoreAboutUs>
					<HeaderMoreAboutUsText>VIŠE O NAMA</HeaderMoreAboutUsText>
				</HeaderMoreAboutUs>
				<ContentMoreAboutUs>
					<ChaildCardMoreAboutUs
						style={{
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "column",
							alignItems: "center",
							padding: "120px 0",
							gap: "100px",
						}}
					>
						<CardForMoreAboutUs>
							<CardInsideText>Članovi parlamenta</CardInsideText>
						</CardForMoreAboutUs>
						<CardForMoreAboutUs>
							<CardInsideText>17 godina postojanja</CardInsideText>
						</CardForMoreAboutUs>
					</ChaildCardMoreAboutUs>
					<ChaildCardMoreAboutUs
						style={{
							position: "relative",
							height: "860px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							gap: "70px",
						}}
					>
						<ImageLogoFax src={LogoFax} alt="Slika" />
						<TextCard>budi uvek u toku!</TextCard>
						<ButtonSignUp
							onClick={() => {
								console.log("test");
							}}
						>
							PRIJAVI SE
						</ButtonSignUp>
					</ChaildCardMoreAboutUs>
					<ChaildCardMoreAboutUs
						style={{
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "column",
							alignItems: "center",
							padding: "120px 0",
							gap: "100px",
						}}
					>
						<CardForMoreAboutUs>
							<CardInsideText>humanitarne akcije</CardInsideText>
						</CardForMoreAboutUs>
						<CardForMoreAboutUs>
							<CardInsideText>dogaĐaji i putovanja</CardInsideText>
						</CardForMoreAboutUs>
					</ChaildCardMoreAboutUs>
				</ContentMoreAboutUs>
				<Line />
			</SectionMoreAboutUs>
			<CardSkonpWrapper>
				<CardSkonpMobile>
					<CardSkonpTextHeader>skonp</CardSkonpTextHeader>
					<CardSkonpText>
						Već jedanaest godina za redom, studentska konferencija SKONP
						(Studentska konferencija Drzavnog univerziteta u Novom Pazaru)
						okuplja mlade i ambiciozne umove iz Srbije u cilju istraživanja
						novih horizonta znanja i inspiracije. Ova prestižna konferencija je
						postala simbol izvrsnosti i entuzijazma, privlačeći više od 350
						učesnika.SKONP, dok ulazi u jedanaestu godinu, i dalje ostaje
						posvećen pružanju platforme mladim umovima iz Srbije da istraže,
						uče, rastu i povežu se.
					</CardSkonpText>
					<BtnAllPrjects
						onClick={() => {
							navigation("/projects");
						}}
					>
						SVI PROJEKTI
					</BtnAllPrjects>
				</CardSkonpMobile>
			</CardSkonpWrapper>
			<Line />
			<PrevFooter>
				<PrevFooterText>ALUMNI KLUB</PrevFooterText>
			</PrevFooter>
			<Line />
			<BackgroundImageHomePrevFot>
				<KidsCardContainer>
					<KidsText>
						Prostor gde se veze ne prekidaju nakon završenih studija! Naš Alumni
						Klub je zajednica strastvenih pojedinaca koji su svoje studentske
						dane proveli pod istim krovom, deleći ne samo učenje već i
						neprocenjiva prijateljstva i iskustva.
					</KidsText>
					<KidsButton
						onClick={() => {
							navigation("/alumni");
						}}
					>
						PROCITAJ VISE
					</KidsButton>
				</KidsCardContainer>
			</BackgroundImageHomePrevFot>
			<Line />
		</div>
	);
}

export default HomePage;
