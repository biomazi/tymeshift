import styled from 'styled-components';
import { titleStyles } from 'styles/typography';

const Title = styled(({variant: Component = 'h1',...rest}) => <Component {...rest} />)`
  color: ${({variant = 'h1'}) => titleStyles[variant].color};
  font-weight: ${({variant = 'h1'}) => titleStyles[variant].fontWeight};
  font-size: ${({variant = 'h1'}) => titleStyles[variant].fontSize};
  line-height: ${({variant = 'h1'}) => titleStyles[variant].lineHeight};
  letter-spacing: ${({variant = 'h1'}) => titleStyles[variant].letterSpacing};
`;

export default Title;