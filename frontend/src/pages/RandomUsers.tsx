import React,{useEffect,useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import { fetchRandomUser } from '../service/api';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'
import UserRandomCard from '../components/RandomUserCard';
import { SectionCard } from '../components/SectionCard';
import { UsersRandom } from '../interfaces';
import { PaginationContainer } from '../components/PaginationContainer';
import {PaginationRight, PaginationLeft } from '../components/Pagination';
import { SectionContainer } from '../components/SectionContainer'

const RandomUsers = () => {

  const [user, setUser] = useState<UsersRandom[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const checkToken = () => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    if (!token) {
      navigate('/');
    }
  }

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
    checkToken()
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
      <Header open={open} setOpen={setOpen}/>
      <SearchBar onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
      }}/>
      <SectionContainer>
        <SectionCard>
          {user.map((elem, idx) => <UserRandomCard key={idx} props={elem}/>)}
        </SectionCard>
      </SectionContainer>
      <PaginationContainer>
        <PaginationLeft onClick={pageLeft}/>
        <PaginationRight onClick={pageRight}/>
      </PaginationContainer>
    </>
  )
}

export default RandomUsers
