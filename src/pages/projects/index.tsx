import ExtendedCard from "../../components/ExtendedCard"
import { Line } from "../home/style"
import { BackgroundImageHome,  HeaderTitle } from "./style"

function ProjectsPage() {

    const minText = 'dwadwadwa'
    const largeText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quis totam ullam corporis eum veritatis aut illum ratione ipsam pariatur, architecto at consequatur? Laboriosam quae at perspiciatis sapiente fuga commodi?'

  return (
    <div>
        <BackgroundImageHome>
            <HeaderTitle>PROJEKTI</HeaderTitle>
        </BackgroundImageHome>
        <Line/>
        <ExtendedCard  title="Test" shortContent={minText} fullContent={largeText + largeText + largeText+ largeText + largeText+ largeText + largeText+ largeText + largeText+ largeText + largeText+ largeText + largeText+ largeText + largeText+ largeText + largeText}  />
        <Line/>
        <ExtendedCard  title="Test" shortContent={minText} fullContent={largeText + largeText + largeText}  />
        <Line/>
        <ExtendedCard  title="Test" shortContent={minText} fullContent={largeText + largeText + largeText}  />
        <Line/>
        <ExtendedCard  title="Test" shortContent={minText} fullContent={largeText + largeText + largeText}  />
        <Line/>
    </div>
  )
}

export default ProjectsPage