import ExtendedCard from "../../components/ExtendedCard";
import { Line } from "../home/style";
import { BackgroundImageHome, HeaderTitle } from "./style";

function ProjectsPage() {
	const skonpText =
		"Studentska konferencija Državnog univerziteta u Novom Pazaru je mesto na kom mladi ljudi tj. studenti šire svoje vidike, znanja i iskustva i van formalnog obrazovanja i katedre, stvaraju prijateljstva,prave predah od svakodnevnih obaveza uz kvalitetan zabavni program.";
	const largeText =
		"Pripreme za jedan od najvećih regionalnih događaja za studente su u punom jeku. Reč je o Studentskoj konferenciji Državnog univerziteta u Novom Pazaru (SKONP), koja okuplja oko 250 učesnika sa svih studijskih programa Državnog univerziteta u Novom Pazaru i drugih univerziteta iz zemlje. Ova manifestacija pruža izuzetnu priliku mladim ljudima da prošire svoje vidike, steknu nova znanja i iskustva izvan okvira formalnog obrazovanja, te da uspostave nova prijateljstva i odmore se od svakodnevnih obaveza uz kvalitetan zabavni program.\n\n" +
		"SKONP 11, kao jedanaesti po redu, donosi obilje iznenađenja i mogućnosti za učesnike. Ovogodišnji događaj će se održati na predivnom Zlatiboru od 17. do 20. novembra, tačno u studentskom odmaralištu Ratko Mitrović u samom centru Zlatibora.\n\n" +
		"Tema ovogodišnjeg SKONP-a je Privreda i mladi, što će omogućiti učesnicima da se dublje zaroni u teme ekonomije, poslovanja i uloge mladih ljudi u razvoju privrede.\n\n" +
		"Kotizacija za učešće obuhvata:\n\n" +
		"Trodnevni boravak (3 noći i 4 dana) na predivnom Zlatiboru.\n" +
		"Puni pansion, što podrazumeva sva tri obroka dnevno.\n" +
		"Prevoz do destinacije.\n" +
		"Pristup raznim tribinama, panel diskusijama i radionicama.\n" +
		"Ulaz na tri žurke u popularnom Grand Irish pub-u.\n" +
		"Promotivni materijal i majicu kao sećanje na ovu nezaboravnu manifestaciju.\n" +
		"Dodatno, svim učesnicima će biti dodeljena i 2 dodatna ESPB boda.\n\n" +
		"Nastavite pratiti naše objave u narednim nedeljama kako biste bili u toku s najnovijim informacijama o SKONP 11, uključujući i datum za prijave. Pripremite se za iskustvo koje ćete dugo pamtiti na Studentskoj konferenciji Državnog univerziteta u Novom Pazaru. Vidimo se na Zlatiboru!";

	const GMZlargeText = `
		U organizaciji Studentskog parlamenta Državnog univerziteta u Novom Pazaru, jubilarni peti put održaće se Međunarodno studentsko takmičenje u izradi makete mosta od špageta "Gradimo mostove znanja".
		
		Od 3. do 6. marta će na ovogodišnjem takmičenju učešće uzeti više od 30 građevinskih i arhitektonskih fakulteta iz sedam zemalja.
		
		Takmičenje će imati dve kategorije. U prvoj kategoriji studenti građevinarstva imaće mogućnost da kroz 4 dana rada na maketi, naprave most koji će moći da izdrži najveće opterećenje, dok će za isti vremenski period studenti arhitekture praviti maketu mosta, koji će se takmičiti u konkurenciji estetike. Propozicije takmičenja za obe kategorije su različite. Pored navedenog, takmičari će se upoznati i sa bogatim kulturno-istorijskim nasleđem Novog Pazara i okoline.
		`;

	const gmzText = `
Međunarodno studentsko takmičenje u izradi makete mosta od špageta "Gradimo mostove znanja". Ovaj izuzetan događaj okuplja studente građevinskih i arhitektonskih fakulteta iz više od 30 institucija iz sedam različitih zemalja.
`;

	const gradjevinijadaText =
		"Gradjevinijada je značajan sportski i društveni događaj u Srbiji koji okuplja studente iz različitih univerziteta i fakulteta širom zemlje.";

	const gradjevinijadaLargeText = `
Ova manifestacija je često nazivana "Olimpijadom građevinskih fakulteta" i predstavlja priliku za studente građevinarstva da pokažu svoje sportske veštine i istovremeno izgrade veze i prijateljstva sa kolegama iz drugih gradova.

Gradjevinijada obično uključuje različite sportske discipline kao što su fudbal, košarka, odbojka, stoni tenis, atletika i druge aktivnosti koje studenti mogu uživati. Osim sportskog nadmetanja, događaj često uključuje i društvene aktivnosti kao što su večernji zabavni programi, takmičenja u različitim veštinama, i druge kulturne manifestacije.

Ova manifestacija promoviše timski duh, fer plej i zdravu konkurenciju među studentima. Takođe, pruža priliku studentima da se opuste i opuste od akademskih obaveza, te da razmene iskustva i ideje sa svojim kolegama iz drugih univerziteta.

Gradjevinijada je takođe prilika za unapređenje sportskih veština i kondicije studenata, a mnogi se sećaju ovog događaja kao vrhunskog iskustva tokom svojih studentskih dana. Osim toga, ova manifestacija često služi i kao odličan način za promociju međusobnog razumevanja i saradnje među mladim ljudima iz različitih delova Srbije.
`;

	const hackathonTextLarge = `
Čast nam je i zadovoljstvo da vas pozovemo na Međunarodno takmičenje studenata IT fakulteta "HACKATHON" u organizaciji Studentskog parlamenta Državnog univerziteta u Novom Pazaru i departamana za Tehničko-tehnološke nauke.

Takmičenje će se održati u Novom Pazaru u periodu od 09. do 10. decembra 2022. godine.

Cilj ovog takmičenja jeste da pruži priliku studentima sa svih univerziteta u Srbiji, Bosni i Hercegovini, Crnoj Gori i Republici Severnoj Makedoniji da se upoznaju, razmene svoja već stečena znanja, ali i da se takmiče i uz primenu stečenog znanja reše problem iz oblasti programiranja, kao i da u prijatnom okruženju, radnoj i svečanoj atmosferi razmene iskustva sa svojih univerziteta i razvijaju plodonosne ideje.

Tokom boravka u Novom Pazaru studentima će od strane organizatora biti obezbeđeni obroci kao i osveženje tokom izrade projekta. Takmičari će moći da biraju tehnologiju u kojoj će razvijati projekat.

Svaka ekipa u svom sastavu ima do 3 člana, a za najuspešnije takmičare obezbeđene su vredne novčane nagrade:
prvo mesto 600 €
drugo mesto 400 €
treće mesto 300 €
`;
	const dunpKupTextLarge =
		"DUNP KUP predstavlja nezaboravno sportsko takmičenje koje okuplja sve studente našeg univerziteta, pružajući im priliku da pokažu svoje sportske veštine i strast prema takmičenju. Ovaj događaj obuhvata dva različita sportska takmičenja, basket i mešovitu odbojku, a svaki od njih donosi uzbuđenje i rivalstvo. Sa maksimalno 4 igrača u basketu i do 8 igrača u mešovitoj odbojci, studenti se mogu okupiti sa svojim prijateljima iz istog Studijskog programa kako bi se takmičili za vredne nagrade. Pored sportskog aspekta, DUNP KUP takođe slavi timski rad, fer plej i druženje, omogućavajući studentima da stvore nova prijateljstva i razmene iskustva sa kolegama sa drugih fakulteta. Ovaj događaj obećava uzbudljiv vikend ispunjen sportskim izazovima i zabavom, uz priliku za osvajanje atraktivnih nagrada. DUNP KUP je više od takmičenja - to je prilika za zajedništvo, sportsku strast i nezaboravno iskustvo koje će ostati urezano u sećanjima svih učesnika. Prijavite se, okupite svoj tim i budite deo ovog uzbudljivog sportskog događaja našeg univerziteta.";

	const dunpKupText = `DUNP KUP je sportsko takmičenje koje okuplja sve studente univerziteta u uzbudljivom sportskom okruženju.`;

	const hackathonText = `Međunarodno takmičenje studenata IT fakulteta ,,HACKATHON“ u organizaciji Studentskog parlamenta Državnog univerziteta u Novom Pazaru`;

	return (
		<div>
			<BackgroundImageHome>
				<HeaderTitle>PROJEKTI</HeaderTitle>
			</BackgroundImageHome>
			<Line />
			<ExtendedCard
				title="SKONP 10"
				shortContent={skonpText}
				fullContent={largeText}
			/>
			<Line />
			<ExtendedCard
				title="GRADIMO MOSTOVE ZNANJA"
				shortContent={gmzText}
				fullContent={GMZlargeText}
			/>
			<Line />
			<ExtendedCard
				title="GRADJEVINIJADA"
				shortContent={gradjevinijadaText}
				fullContent={gradjevinijadaLargeText}
			/>
			<Line />
			<ExtendedCard
				title="ARHITEKTURIJADA"
				shortContent={gradjevinijadaText}
				fullContent={gradjevinijadaLargeText}
			/>
			<Line />
			<ExtendedCard
				title="HAKATON"
				shortContent={hackathonText}
				fullContent={hackathonTextLarge}
			/>
			<Line />
			<ExtendedCard
				title="DUNP KUP"
				shortContent={dunpKupText}
				fullContent={dunpKupTextLarge}
			/>
			<Line />
		</div>
	);
}

export default ProjectsPage;
