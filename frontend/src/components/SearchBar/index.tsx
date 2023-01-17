import * as styled from './styles';

const SearchBar = ({
  onChange,
}: {
  onChange: React.ChangeEventHandler;
}) => {

  return (
    <>
      <styled.InputContainer>
        <styled.InputLabel>
          <styled.Input onChange={onChange} placeholder='pesquise aqui...' />
        </styled.InputLabel>
      </styled.InputContainer>
    </>

  )
};

export default SearchBar;
