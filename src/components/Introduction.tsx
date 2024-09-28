import { IntroductionStyled } from '../styled/StyledCard'

interface Props {
  name: string
  occupation: string
  website: string
  colors: Record<string, string>
}

const Introduction = (props: Props) => {
  return (
    <IntroductionStyled colors={props.colors}>
      <p className="name">{props.name}</p>
      <p className="occupation">{props.occupation}</p>
      <p className="website">{props.website}</p>
    </IntroductionStyled>
  )
}

export default Introduction
