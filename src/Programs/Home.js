import React from 'react'
import { Link } from 'react-router-dom'
import '../Programs/Style.css'

const Home = () => {
  return (
    <div className='home'>
        <h2 className='text'>Choose the program which you want to perform</h2>
        <ul>
            <li>
            <Link className='lin'  to="/one">Remove the vowels from the given string</Link>
            </li>
            <li>
            <Link className='lin' to="/two">Counts the vowels in the string</Link>
            </li>
            <li>
            <Link className='lin' to="/three">Matrix multiplication</Link>
            </li>
            <li>
            <Link className='lin' to="/four">Amstrong or not</Link>
            </li>
            <li>
            <Link className='lin' to="/five">Palindrome for a given number</Link>
            </li>
            <li>
            <Link className='lin' to="/six">Number of words in string</Link>
            </li>
            <li>
            <Link className='lin' to="/seven">Prime number or not</Link>
            </li>
            <li>
            <Link className='lin' to="/eight">Fibonacci series</Link>
            </li>
            <li>
            <Link className='lin' to="/nine">Anagram or not</Link>
            </li>
            <li>
            <Link className='lin' to="/ten">Swap the two strings</Link>
            </li>
            <li>
            <Link className='lin' to="/eleven">Most occuring elements in an array</Link>
            </li>
            <li>
            <Link className='lin' to="/twelve">Program to shutdown computer</Link>
            </li>
            <li>
            <Link className='lin' to="/thirteen">Sort Words in alphabetical order</Link>
            </li>
            <li>
            <Link className='lin' to="/fourteen">Count character frequency in a string</Link>
            </li>
            <li>
            <Link className='lin' to="/fifteen">LCM of two numbers</Link>
            </li>
            <li>
            <Link className='lin' to="/sixteen">HCF of two numbers</Link>
            </li>
            <li>
            <Link className='lin' to="/seventeen">Matrix transpose</Link>
            </li>
            <li>
            <Link className='lin' to="/eighteen">Bubble sort</Link>
            </li>
            <li>
            <Link className='lin' to="/ninteen">Amicable or not</Link>
            </li>
            <li>
            <Link className='lin' to="/twenty">Simple and compound interest</Link>
            </li>
            <li>
            <Link className='lin' to="/twentyone">Factors of given number</Link>
            </li>
            <li>
            <Link className='lin' to="/twentytwo">Print name in all possible combination</Link>
            </li>
           
         
           
         
        </ul>
    </div>
  )
}

export default Home