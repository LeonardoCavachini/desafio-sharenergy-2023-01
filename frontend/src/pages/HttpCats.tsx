import { useEffect, useState } from 'react';
import { fetchHttpCats } from '../service/api';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { SectionContainer } from '../components/SectionContainer';
import ImageCard  from '../components/ImageCard';
import notFound from '../assets/NotFound.jpg';
import { SectionCard } from '../components/SectionCard';

const Cats = () => {
  const [httpCode, setHttpCode] = useState('');
  const [httpCat, setHttpCat] = useState('')
  const [error, setError] = useState('')

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
  console.log('ERROR >>>'+error)
  useEffect(() => {
    LoadHttp()
    setError('')
  },[httpCode])

  return (
    <>
      <Header />
      <SearchBar onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setHttpCode(e.target.value);
      }}/>
        {httpCode.length >= 3 && httpCat ?
          <SectionContainer>
            <ImageCard><img src={`data:image/jpeg;base64,${httpCat}`} alt='cat-image'/></ImageCard>
          </SectionContainer> :
        error.length >=2?<SectionCard><ImageCard><img src={notFound} alt='notFound-image' /></ImageCard></SectionCard>:''}
    </>
  )
}

export default Cats