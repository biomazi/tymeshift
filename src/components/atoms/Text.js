import styled from 'styled-components';
import { textStyles } from 'styles/typography';

const Text = styled(({variant,...rest}) => <p {...rest} />)`
  color: ${({variant = 'card'}) => textStyles[variant].color};
  font-weight: ${({variant = 'card'}) => textStyles[variant].fontWeight};
  font-size: ${({variant = 'card'}) => textStyles[variant].fontSize};
  line-height: ${({variant = 'card'}) => textStyles[variant].lineHeight};
  letter-spacing: ${({variant = 'card'}) => textStyles[variant].letterSpacing};
`;

export default Text;