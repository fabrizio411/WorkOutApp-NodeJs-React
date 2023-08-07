import {useSwipeable } from 'react-swipeable'

import { useNav } from '../../context/NavContext'
import Header from '../../components/header/Header'
import Nav from '../../components/header/Nav'
import { useEffect } from 'react'

function CalendarPage() {

  const {setIsActive} = useNav()

  const swipeHandler = useSwipeable({
    onSwipedRight: ({event}) => {
      event.stopPropagation()
      setIsActive(true)
    },
    onSwipedLeft: ({event}) => {
      event.stopPropagation()
      setIsActive(false)
    }
  })

  const {ref: documentRef} = useSwipeable({
    onSwipedRight: ({event}) => {
      setIsActive(true)
    },
    onSwipedLeft: ({event}) => {
      setIsActive(false)
    }
  })

  useEffect(() => {
    documentRef(document)
    return () => documentRef({})
  })

  return (
    <div {...swipeHandler}>
      <Header/>
      <Nav current_page={'CALENDAR'}/>
      <button className='btn-test' onClick={() => setIsActive(true)}>sdasda</button>
    </div>
  )
}

export default CalendarPage