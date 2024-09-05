import React, { useState } from 'react'
import '../../Style/Doctor.css'
import logo from '../../Logo.png'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AlignmentType, Document, Packer, Paragraph, TextRun } from 'docx'
import { saveAs } from 'file-saver'
import { Bounce, toast, ToastContainer } from 'react-toastify'


function DoctorHistory() {
    // API
    let pastPatients = Array.from({ length: 15 }, (y, x) => x + 1 + y);

    // HTML STRUCTURE
    const location = useLocation()
    const isDoctor = location.pathname === '/doctorHistory'

    const [isModal, setModal] = useState(true)
    const openModal = () => {
        setModal(false)
    }
    const closeModal = () => {
        setModal(true)
    }

    const opisany = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro maxime eos obcaecati iste quia deserunt voluptas numquam aspernatur cumque magnam neque et quo, expedita doloribus pariatur saepe dignissimos eaque ipsum. Autem tempora ipsa neque in facilis laudantium quaerat doloribus." // crud get 
    const naznocheny = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet dicta officiis, delectus architecto repellat. Tempore ratione nihil voluptatum ducimus laborum doloremque doloribus minus, dolores voluptates enim, deserunt, dolore non." // crud get

    let doctor_description = opisany || '';
    let doctor_appointment = naznocheny || ''
    async function handleDownload(e) {
        e.preventDefault()
        const doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            children: [new TextRun({
                                text: "Описание:",
                                bold: true,
                                size: 28,
                                color: "0000FF"
                            })],
                            spacing: { after: 200 },
                            alignment: AlignmentType.CENTER
                        }),
                        new Paragraph({
                            children: [new TextRun({
                                text: doctor_description,
                                size: 24,
                            })],
                            spacing: { after: 300 },
                        }),
                        new Paragraph({
                            children: [new TextRun({
                                text: "Назначение:",
                                size: 28,
                                bold: true,
                                color: "0000FF"
                            })],
                            spacing: { after: 200 },
                            alignment: AlignmentType.CENTER
                        }),
                        new Paragraph({
                            children: [new TextRun({
                                text: doctor_appointment,
                                size: 24,
                            })]
                        }),
                    ],
                },
            ],
        });


        Packer.toBlob(doc)
            .then((blob) => {
                saveAs(blob, "client Name.docx")
            })
            .catch((error) => {
                toast.error(`Ошибка при создании документа: ${error}`, {
                    transition: Bounce
                })
            })


    }

    return (
        <div>
            <div className='Kassa__header'>
                <div className='Kassa__header__wrapper'>
                    <nav>
                        <div className='Kassa__logo'>
                            <img src={logo} alt="" />
                        </div>
                        <NavLink to='/doctor'  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.09em" height="1em" viewBox="0 0 26 24"><path fill="white" d="M22.313 17.295a7.436 7.436 0 0 0-4.089-2.754l-.051-.011l-1.179 1.99a1.003 1.003 0 0 1-1 1c-.55 0-1-.45-1.525-1.774v-.032a1.25 1.25 0 1 0-2.5 0v.033v-.002c-.56 1.325-1.014 1.774-1.563 1.774a1.003 1.003 0 0 1-1-1l-1.142-1.994a7.47 7.47 0 0 0-4.126 2.746l-.014.019a4.475 4.475 0 0 0-.655 2.197v.007c.005.15 0 .325 0 .5v2a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2v-2c0-.174-.005-.35 0-.5a4.522 4.522 0 0 0-.666-2.221l.011.02zM7.968 5.29c0 2.92 1.82 7.21 5.25 7.21c3.37 0 5.25-4.29 5.25-7.21v-.065a5.25 5.25 0 1 0-10.5 0v.068zm11.234 1.72c0 1.902 1.186 4.698 3.42 4.698c2.195 0 3.42-2.795 3.42-4.698v-.052a3.421 3.421 0 0 0-6.842 0v.055v-.003zm-19.2 1.6c0 1.902 1.186 4.698 3.42 4.698c2.195 0 3.42-2.795 3.42-4.698v-.052a3.421 3.421 0 0 0-6.842 0v.055v-.003z"></path></svg>
                            <span>
                                Поциенты
                            </span>
                        </NavLink>
                        <NavLink to='/doctorHistory' className={isDoctor ? 'button__link' : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788c-3.795 3.795-9.968 3.756-13.788-.064a9.812 9.812 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.312 8.312 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008zm6.92 2.18a.75.75 0 0 1 .75.75v3.69l2.281 2.28a.75.75 0 1 1-1.06 1.061l-2.72-2.72V8a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path></svg>
                            <span>
                                История
                            </span>
                        </NavLink>
                        <NavLink to='/doctorDay' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M5 17q-.825 0-1.412-.587T3 15V9q0-.825.588-1.412T5 7h14q.825 0 1.413.588T21 9v6q0 .825-.587 1.413T19 17zM3.975 5q-.425 0-.7-.288T3 4t.288-.712T4 3h16.025q.425 0 .7.288T21 4t-.288.713T20 5zm0 16q-.425 0-.7-.288T3 20t.288-.712T4 19h16.025q.425 0 .7.288T21 20t-.288.713T20 21z"></path></svg>
                            <span>
                                За сегодня
                            </span>
                        </NavLink>
                    </nav>
                    <button className='Register__header__out__btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M124 216a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H60v152h52a12 12 0 0 1 12 12m108.49-96.49l-40-40a12 12 0 0 0-17 17L195 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17"></path></svg>
                        <span>
                            Выйти
                        </span>
                    </button>
                </div>
            </div>
            <div className='Doctor__main'>
                {isModal === true && (
                    <div>
                        <div className='Register__history__header'>
                            <div className='register_history_form'>
                                <h1>Поиск по историй </h1>
                                <label htmlFor="Search">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></path></svg>
                                    </button>
                                    <input placeholder='Поиск...' id='Search' type="text" />
                                </label>
                            </div>
                            <div className="register_history_from">
                                <h1>Поиск по дате</h1>
                                <label htmlFor="Search">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></path></svg>
                                    </button>
                                    <input placeholder='Enter date' id='sort_by_date' type="date" />
                                </label>
                            </div>
                        </div>
                        <div className='Kassa__main__table'>
                            <table>
                                <thead>
                                    <tr >
                                        <th className='Register__table__number'>
                                            <h3>
                                                #
                                            </h3>
                                        </th>
                                        <th>
                                            <h3>
                                                Ф.И.О
                                            </h3>
                                        </th>
                                        <th>
                                            <h3>
                                                Дата
                                            </h3>
                                        </th>
                                        <th>
                                            <h3>
                                                № Очередь
                                            </h3>
                                        </th>
                                        <th>
                                            <h3>
                                                Статус
                                            </h3>
                                        </th>
                                        <th className='Register__table__setings2'>
                                            <h3>
                                                Сумма
                                            </h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {pastPatients?.map((item, index) => {
                                        return (
                                            <tr key={index} onClick={(e) => openModal(e)}>
                                                <td>
                                                    <h3>
                                                        {index + 1}
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3>
                                                        Шодиева Гулсара
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3>
                                                        22-02-2024
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3>
                                                        223556
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3 className='IsMoney'>
                                                        Осмотрено
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3>
                                                        20,000 сум
                                                    </h3>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <div className="register_history_pagin">
                            <div className="container_pagin">
                                <div className="register_history_wrap">
                                    <button type="button">предыдущий</button>
                                    <p>страница: <span>3</span>  /12</p>
                                    <button type="button">следующий</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isModal === false && (
                    <div>
                        <div className='Kassa__info__header'>
                            <h1>
                                Кабинет пациента
                            </h1>
                            <button className='Kass__info__header__btn' onClick={closeModal}>
                                <svg className='Register__main__out__btn2__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                                <span className='Kass__info__header__btn__span'>
                                    Назад
                                </span>
                            </button>
                        </div>
                        <div className='Doctor__main__wrapper'>
                            <div className='Kassa__info doctor__info'>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Ф.И.О:
                                    </h3>
                                    <span>
                                        Рустамов Одилбек
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Дата:
                                    </h3>
                                    <span>
                                        22-02-2024
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Сумма:
                                    </h3>
                                    <span>
                                        {52000} so'm
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Статус:
                                    </h3>
                                    <span style={{ color: 'green' }} >
                                        Осмотреный
                                    </span>
                                </div>

                            </div>
                            <div className='Kassa__info doctor__info'>
                                <div className="doctor_letter_to_patent">
                                    <h2 style={{ margin: '6px 8px 12px' }}>Описание:</h2>
                                    <div onClick={(e) => handleDownload(e)} className="doctor_icons_print_down">
                                        <button type="button" >
                                            <svg
                                                id='doctor_download_btn'
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-download"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                <polyline points="7 10 12 15 17 10" />
                                                <line x1="12" y1="15" x2="12" y2="3" />
                                            </svg>
                                        </button>
                                        <ToastContainer />
                                    </div>

                                </div>
                                <p>{opisany}</p>
                                <h2 style={{ margin: '6px 8px 12px' }}>Назначение:</h2>
                                <p>{naznocheny}</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default DoctorHistory