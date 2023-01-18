import React,{useEffect,useState} from 'react';
import { fetchRandomUser } from '../service/api';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'
import UserRandomCard from '../components/RandomUserCard';
import { SectionCard } from '../components/SectionCard';
import { UsersRandom } from '../interfaces';
import { PaginationContainer } from '../components/PaginationContainer';
import {PaginationRight, PaginationLeft } from '../components/Pagination';

const RandomUsers = () => {

  const [user, setUser] = useState<UsersRandom[]>([]);
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const searchUser = () => {
    const findUser = user.filter(user => 
      user.name['first'].startsWith(search)||
      user.email.startsWith(search)||
      user.login['username'].startsWith(search)
    )
    
    if(findUser.length>0 && search) {
      setUser(findUser)
    } else {
      LoadRandomUsers()
    }
  }

  const LoadRandomUsers = async() => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    const users = await fetchRandomUser(page,token)
    if(users.length>2) {
      setUser(users)
    }
  };

  const pageRight = () => {
    setPage(page+1)
  };

  const pageLeft = () => {
    setPage(page-1)
  }

  useEffect(() => {
    LoadRandomUsers()
  }, []);

  useEffect(() => {
    searchUser()
  }, [search]);

  useEffect(() => {
    LoadRandomUsers()
  }, [page]);

  return (
    <>
      <Header />
      <SearchBar onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
        }}/>
      <SectionCard>
        {user.map((elem, idx) => <div key={idx}><UserRandomCard props={elem}/></div>)}
      </SectionCard>
      <PaginationContainer>
      <PaginationLeft onClick={pageLeft}/>
        <PaginationRight onClick={pageRight}/>
        
      </PaginationContainer>
      
    </>
  )
}

export default RandomUsers
