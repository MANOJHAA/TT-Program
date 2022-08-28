import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Amicable from './Programs/Amicablen';
import Anagram from './Programs/Anagram';
import Amstrong from './Programs/Armstrongn';
import Bsorting from './Programs/Bubblesort';
import Frequency from './Programs/Countcfrequency';
import Cvowels from './Programs/Cvowels';
import Factors from './Programs/Factorgnum';
import Fibonacci from './Programs/Fibonaccis';
import Hcf from './Programs/Hcf';
import Home from './Programs/Home';
import Lcm from './Programs/Lcm';
import Matrixmul from './Programs/Matrixmul';
import Matrixtrans from './Programs/Matrixtrans';
import Frequent from './Programs/Mostoearray';
import Palindrome from './Programs/Palindrome';
import Prime from './Programs/Primen';
import Stringcombo from './Programs/Printallposcom';
import Rvowels from './Programs/Rvowels';
import Shutdowncom from './Programs/Shutdowncom';
import Interest from './Programs/Simplecinterest';
import Sorting from './Programs/Sortwordo';
import Stringlen from './Programs/Stringlen';
import Swapping from './Programs/Swaptwostring';






const App = () => {
  return (
    <div>
       <Routes>
        <Route exact path='/TT-Program' element={<Home/>} />
        <Route path='/one' element={<Rvowels/>} />
        <Route path='/two' element={<Cvowels/>} />
        <Route path='/three' element={<Matrixmul/>} />
        <Route path='/four' element={<Amstrong/>} />
        <Route path='/five' element={<Palindrome/>} />
        <Route path='/six' element={<Stringlen/>} />
        <Route path='/seven' element={<Prime/>} />
        <Route path='/eight' element={<Fibonacci/>} />
        <Route path='/nine' element={<Anagram/>} />
        <Route path='/ten' element={<Swapping/>} />
        <Route path='/eleven' element={<Frequent/>} />
        <Route path='/twelve' element={< Shutdowncom/>} />
        <Route path='/thirteen' element={<Sorting/>} />
        <Route path='/fourteen' element={<Frequency/>} />
        <Route path='/fifteen' element={<Lcm/>} />
        <Route path='/sixteen' element={<Hcf/>} />
        <Route path='/seventeen' element={< Matrixtrans/>} />
        <Route path='/eighteen' element={<Bsorting/>} />
        <Route path='/ninteen' element={<Amicable/>} />
        <Route path='/twenty' element={<Interest/>} />
        <Route path='/twentyone' element={<Factors/>} />
        <Route path='/twentytwo' element={<Stringcombo/>} />
       </Routes>
       
    </div>
  )
}

export default App
