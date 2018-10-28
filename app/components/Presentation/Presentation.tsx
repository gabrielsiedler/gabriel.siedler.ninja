import { Menu } from '../Menu'
import { FixedBackground, Mask, PresentationContainer, Title } from './Presentation.style'

interface PresentationInterface {
  title: string
  subtitle?: string
  backgroundImage: string
  maskColor: string
}
export const Presentation = ({ title, subtitle, backgroundImage, maskColor }: PresentationInterface) => (
  <PresentationContainer>
    <FixedBackground image={backgroundImage} />
    <Mask color={maskColor} />
    <Title>
      <div>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
    </Title>
    <Menu />
  </PresentationContainer>
)
