import React, {useState} from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
    //sets index to start at the first element in the arr
    const [index,setIndex] = useState(0)
    //gathers the properties of each element
    const {name,job,image,text} = people[index]

    //dynamically setting the value of index so we can update it 
    const checkNumber = (num) =>{
        if(num > people.length - 1){
            return 0
        } else if(num < 0){
            return people.length - 1 
        }
        return num
    }

    const nextPerson = () => {
        setIndex((index) =>{
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const random = () => {
        let randomNum = Math.floor(Math.random() * people.length)
        if(randomNum === index) {
            randomNum = index + 1
        }
        setIndex(checkNumber(randomNum))
    }

    return(
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>

            <button onClick={random} className="random-btn">Surprise Me</button>
        </article>
    )
}

export default Review