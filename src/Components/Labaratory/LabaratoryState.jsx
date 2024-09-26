import React from 'react'
import '../../Style/DayDoctor.css'

function LabaratoryState() {

  return (
   <div className='DayDoctor'>
            <div className='DayDoctor__main'>
                <div className='DayDoctor__main__content'>
                    <h1>
                        За сегодня:
                    </h1>
                    <div className='DayDoctor__grid'>
                        <h3>
                            Сегодняшняя очередь:
                        </h3>
                        <span>
                            65
                        </span>
                    </div>
                    <div className='DayDoctor__grid'>
                        <h3>
                            Осмотренных:
                        </h3>
                        <span>
                            15
                        </span>
                    </div>
                    <div className='DayDoctor__grid'>
                        <h3>
                           Не осмотренных:
                        </h3>
                        <span>
                            50
                        </span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LabaratoryState