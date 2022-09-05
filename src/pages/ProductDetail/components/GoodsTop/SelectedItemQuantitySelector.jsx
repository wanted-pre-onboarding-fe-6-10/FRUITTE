import styled from 'styled-components';

const SelectedItemQuantitySelector = ({ opIdx, state, setQuantity }) => {
  // const [quantity, setQuantity] = useState();
  return (
    <Wrapper>
      <ControlButton onClick={() => setQuantity(opIdx, state - 1)}>−</ControlButton>
      <QuantityInput value={state} onKeyUp={e => setQuantity(opIdx, e.target.value)} />
      <ControlButton onClick={() => setQuantity(opIdx, state + 1)}>+</ControlButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.bgColor};
  align-items: center;
`;

const QuantityInput = styled.input`
  width: 2rem;
  text-align: center;

  :focus-visible {
    outline: none;
  }
`;

const ControlButton = styled.span`
  padding: 0 4px;
`;

export default SelectedItemQuantitySelector;
