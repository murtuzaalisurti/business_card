import {StyledImage} from '../styled/ImageStyled'

interface Props {
    src: string
}

const Image = (props: Props) => {
    return (
        <StyledImage src={props.src}></StyledImage>  
    )
}

export default Image
