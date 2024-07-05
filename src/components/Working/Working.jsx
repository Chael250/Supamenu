import React from 'react'
import { FaUserEdit , FaDeaf , FaCalendarTimes } from 'react-icons/fa'
import { AiOutlineFork } from 'react-icons/ai'
import "./Working.css"

const Working = () => {

    const cards = [
        {
            id:1,
            icon: <FaUserEdit className='user-edit' />,
            h2: "Step 1",
            description: "Register your restaurant"
        },
        {
            id:2,
            icon: <AiOutlineFork className='outline-fork' />,
            h2: "Step 2",
            description: "Create your restaurant profile and create menu items",
        },
        {
            id:3,
            icon: <FaCalendarTimes className='calendar' />,
            h2: "Step 3",
            description: "Start receiving orders",
        }
    ]

  return (
    <div className='working-container'>
        <h1 className='working-header'>How it works</h1>
        <div className='article-container'>
            {cards && cards.map((card) => (
                <article className='article' key={card.id}>
                    {card.icon}
                    <h2 className='card-header'>{card.h2}</h2>
                    <p className='card-para'>{card.description}</p>
                </article>
            ))}
        </div>
    </div>
  )
}

export default Working