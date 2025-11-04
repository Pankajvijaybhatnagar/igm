import React from 'react'
import Activities from '../Activities/Activities'

export default function GitaJayanti2024() {
      const teamContent = [
        {img:'/assets/img/activities/01.jpg', name:'Gita Jayanti 2024', content:'California'},
        {img:'/assets/img/activities/02.jpg', name:'Gita Jayanti 2024', content:'Thailand'},
        {img:'/assets/img/activities/03.jpg', name:'Gita Jayanti 2024', content:'India'},
        {img:'/assets/img/activities/04.jpg', name:'Gita Jayanti 2024', content:'Sugarland'},
        {img:'/assets/img/activities/05.jpg', name:'Gita Jayanti 2024', content:'California'},
        {img:'/assets/img/activities/06.jpg', name:'Gita Jayanti 2024', content:'Sugarland'},
        {img:'/assets/img/activities/07.jpg', name:'Gita Jayanti 2024', content:'India'},
        {img:'/assets/img/activities/08.jpg', name:'Gita Jayanti 2024', content:'California'},
        {img:'/assets/img/activities/09.jpg', name:'Gita Jayanti 2024', content:'Thailand'},
      ];
  return (
    <Activities teamContent={teamContent}  />
  )
}
