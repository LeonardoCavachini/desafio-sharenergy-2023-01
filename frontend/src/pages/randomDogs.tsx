import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { SectionContainer } from '../components/SectionContainer';
import { SectionCard } from '../components/SectionCard';
import ImageCard  from '../components/ImageCard';
import RefreshBtn from '../components/RefreshBtn';
import { fetchRandomDogs } from '../service/api';

const RandomDogs = () => {
  const [dog, setDog] = useState('');
  const [open, setOpen] = useState(false);

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
      <Header open={open} setOpen={setOpen}/>
      <SectionContainer>
        <RefreshBtn onClick={Refresh}/>
        <SectionCard>
          <ImageCard alt='Dog-image'>{dog}</ImageCard>
        </SectionCard>
      </SectionContainer>
    </>
  )
}

export default RandomDogs
