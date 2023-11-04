import { Line } from "../home/style"
import { BackgroundImageHome, ContainerForText, HeaderTitle, HeaderTitleText, SubTitleText, WhatIsAlumniContainer } from "./style."

function AlumniPage() {
  return (
    <div>
        <BackgroundImageHome>
            <HeaderTitle>ALUMNI KLUB</HeaderTitle>
        </BackgroundImageHome>
        <Line/>
        <WhatIsAlumniContainer>
            <HeaderTitleText>ŠTA JE TO ALUMNI KLUB?</HeaderTitleText>
            <ContainerForText>
                <SubTitleText>Alumni klub Državnog univerziteta u Novom Pazaru jeste organizacija koja treba da okupi i održava komunikaciju sa bivšim studentima, koji su diplomirali, magistrirali ili doktorirali na DUNP-u. Od osnivanja do ovog trenutka Alumni klub Univerziteta neguje dugogodišnju saradnju sa nekoliko desetina studenata koji žive i rade širom sveta naše države.</SubTitleText>
            </ContainerForText>
        </WhatIsAlumniContainer>
        <Line/>
        <WhatIsAlumniContainer>
            <HeaderTitleText>MISIJA I VIZIJA</HeaderTitleText>
            <ContainerForText>
                <SubTitleText>Gledajući unapred, naša vizija je da postanemo prepoznat fakultet po izvrsnosti u obrazovanju i istraživanju, centar intelektualne razmene, inovacija i saradnje. Težimo da inspirišemo i podržimo naše studente da dosegnu svoj puni potencijal, oblikujući svetlu budućnost za njih i društvo u celini.</SubTitleText>
            </ContainerForText>
        </WhatIsAlumniContainer>
        <WhatIsAlumniContainer>
            <ContainerForText>
                <SubTitleText>Naš fakultet predstavlja posvećenost oblikovanju budućih lidera, inovatora i intelektualnih istraživača kroz izvanredno obrazovanje, inspirativno okruženje i podršku za lični i profesionalni razvoj. Naša strastvena misija je da pružimo studentima sveobuhvatno znanje i veštine koje će im omogućiti da donose pozitivne promene u društvu.</SubTitleText>
            </ContainerForText>
        </WhatIsAlumniContainer>
        <Line/>
    </div>
  )
}

export default AlumniPage