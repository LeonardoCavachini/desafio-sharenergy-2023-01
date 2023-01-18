import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { SectionContainer } from '../components/SectionContainer';
import ImageCard  from '../components/ImageCard';
import RefreshBtn from '../components/RefreshBtn';
import { fetchRandomDogs } from '../service/api';


const RandomDogs = () => {
  const [dog, setDog] = useState('');
  const [refresh, setRefresh] = useState('')

  const getDog = async() => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    const getDog = await fetchRandomDogs(token)
    setDog(getDog)
  }

  const Refresh = () => {
    getDog()
  }


  useEffect(() => {
    getDog()
  },[])

  return (
    <>
      <Header />
      
      <SectionContainer>
      <RefreshBtn onClick={Refresh}/>
        <ImageCard><img src={dog} alt='Dog-image' /></ImageCard>
      </SectionContainer>
      
    </>
  )
}

export default RandomDogs
