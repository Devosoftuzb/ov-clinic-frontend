import React, { useState } from 'react'
import '../../Style/Doctor.css'
import { AlignmentType, Document, Packer, Paragraph, TextRun } from 'docx'
// import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver'
import { Bounce, toast, ToastContainer } from 'react-toastify'
function Doctor() {

    // HTML STRUCTURE

    const [isModal, setModal] = useState(true)
    const openModal = () => {
        setModal(false)
    }
    const closeModal = () => {
        setModal(true)
    }


    const [opisany, setOpisany] = useState()
    const [naznocheny, setNaznocheny] = useState()
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

    const[savedPatient, setSavedPatient] = useState(false);
    function savePatient(e) {
        e.preventDefault()
        setSavedPatient(true)
    }
    // API 
    let patentsNow = Array.from({ length: 15 }, (y, x) => x + 1 + y);
    return (
        <div className='Doctor'>

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
                                    {patentsNow?.map((item, index) => {
                                        return (
                                            <tr key={index} onClick={openModal}>
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
                                                    {/* <h3 className='IsMoney'>
                              Посмотрено
                          </h3> */}
                                                    <h3 className='setmoney'>
                                                        Не осмотрено
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
                            <div style={{display:'flex', alignItems:"center", gap:'12px'}}>
                                <svg onClick={(e)=>savePatient(e)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill={savedPatient === true ? 'yellow' : 'none'}
                                    stroke="blue"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="16" />
                                    <line x1="8" y1="12" x2="16" y2="12" />
                                </svg>

                                <button className='Kass__info__header__btn' onClick={closeModal}>
                                    <svg className='Register__main__out__btn2__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                                    <span className='Kass__info__header__btn__span'>
                                        Назад
                                    </span>
                                </button>
                            </div>

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
                                        Номер очереди:
                                    </h3>
                                    <span>
                                        52
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Статус:
                                    </h3>
                                    <span className='Kassa__info__grid__money'>
                                        Не осмотреный
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
                                <form>
                                    <label htmlFor="text">
                                        <textarea onChange={(e) => setOpisany(e.target.value)} style={{ paddingTop: '22px' }} id="text">

                                        </textarea>
                                    </label>
                                    <h2 style={{ margin: '6px 8px 12px' }}>Назначение:</h2>
                                    <label htmlFor="text">
                                        <textarea onChange={(e) => setNaznocheny(e.target.value)} style={{ paddingTop: '22px', position: 'relative' }} id="text">
                                        </textarea>

                                    </label>
                                    <button type='submit' className='Kassa__info__submit'>Осмотрено</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Doctor