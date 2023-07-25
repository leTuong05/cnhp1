import { ButtonPrimaryStyled } from './styles';

function CustomButton({ children, backgroundColor, color, onClick, className }) {
    const props = {
        onClick
    };

    return (
        <ButtonPrimaryStyled {...props} className={className} backgroundColor={backgroundColor} color={color}>
            {children}
        </ButtonPrimaryStyled>
    );
}

export default CustomButton;
