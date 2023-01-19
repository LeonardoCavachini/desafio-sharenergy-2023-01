import { useEffect, useState } from 'react';
import { fetchHttpCats } from '../service/api';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { SectionContainer } from '../components/SectionContainer';
import ImageCard  from '../components/ImageCard';
import notFound from '../assets/NotFound.jpg';
import { SectionCard } from '../components/SectionCard';
import ErrorTitle from '../components/ErrorTitle';

const Cats = () => {
  const [httpCode, setHttpCode] = useState('');
  const [httpCat, setHttpCat] = useState('')
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false);

  const LoadHttp = async() => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    if (httpCode.length >= 3) {
      try {
        const http = await fetchHttpCats(httpCode, token)
        setHttpCat(http)
      } catch(e) {
        setHttpCat('')
        setError('DEU RUIM'+e)
      }
    } 
  };
  useEffect(() => {
    LoadHttp()
    setError('')
  },[httpCode])

  return (
    <>
      <Header open={open} setOpen={setOpen}/>
      <SearchBar onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setHttpCode(e.target.value);
      }}/>
      <SectionContainer>
      {httpCode.length >= 3 && httpCat ? <SectionCard>
        <ImageCard alt='cat-image'>{`data:image/jpeg;base64,${httpCat}`}</ImageCard>
      </SectionCard>
         :
      error.length >=2?<SectionCard><ImageCard alt='notFound-image'>{notFound}</ImageCard></SectionCard>
      :<ErrorTitle title='Digite um HttpCode na caixa acima...'/>}
      </SectionContainer>
    </>
  )
}

export default Cats