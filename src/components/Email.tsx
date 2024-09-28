import { EmailStyled } from '../styled/StyledCard'

interface Props {
    email: string
    colors: Record<string, string>
}

const Email = (props: Props) => {
    return (
        <EmailStyled colors={props.colors}>
            {props.email}
        </EmailStyled>
    )
}

export default Email
