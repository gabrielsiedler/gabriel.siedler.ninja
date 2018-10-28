import { Menu } from '../Menu'
import { FixedBackground, Mask, PresentationContainer, Title } from './Presentation.style'

interface PresentationInterface {
  title: string
  subtitle?: string
  backgroundImage: string
  maskColor: string
  currentPage: 'home' | 'clients' | 'contact'
}

export const Presentation = ({ title, subtitle, backgroundImage, maskColor, currentPage }: PresentationInterface) => (
  <PresentationContainer>
    <FixedBackground image={backgroundImage} />
    <Mask color={maskColor} />
    <Title>
      <div>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
    </Title>
    <Menu currentPage={currentPage} />
  </PresentationContainer>
)
