import React, { useState } from 'react'
import { AlignmentType, Document, Packer, Paragraph, TextRun } from 'docx'
import { saveAs } from 'file-saver'
import { Bounce, toast, ToastContainer } from 'react-toastify'


function DoctorInpatients() {
    // HTML structure
    const [isModal, setModal] = useState(1);
    const [showPerson, setShowPerson] = useState({})
    const openModal = (e) => {
        setModal(2);
        setShowPerson(myStatsionars.find((item) => item.id === e));
        console.log(e);

    }
    const closeModal = () => {
        setModal(1)
    }
    const openPatientProfile = () => {
        setModal(2)
    }
    const openPatientTable = () => {
        setModal(1)
    }

    const [foundService, setFoundService] = useState({});

    function openIdenTable(e) {
        if (Number(e) === 0) {
            setModal(4);
        } else {
            let foundServ = DATA.find((item) => Number(item.idenfy) === Number(e));
            setFoundService(foundServ);
            setModal(3);
        }
    };

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
    // API data
    const myStatsionars = [
        {
            id: 101,
            name: "Азиз Юнусов",
            birthDate: "12.05.1990",
            roomNumber: 204,
            admissionDate: "10.09.2024",
            dischargeDate: "15.09.2024"
        },
        {
            id: 102,
            name: "Зуҳра Тошева",
            birthDate: "25.07.1985",
            roomNumber: 305,
            admissionDate: "12.09.2024",
            dischargeDate: "20.09.2024"
        },
        {
            id: 103,
            name: "Дилшод Қодиров",
            birthDate: "18.02.1992",
            roomNumber: 102,
            admissionDate: "08.09.2024",
            dischargeDate: "14.09.2024"
        },
        {
            id: 104,
            name: "Нилуфар Саидова",
            birthDate: "30.11.1995",
            roomNumber: 503,
            admissionDate: "11.09.2024",
            dischargeDate: "19.09.2024"
        },
        {
            id: 105,
            name: "Камол Эргашев",
            birthDate: "03.09.1988",
            roomNumber: 406,
            admissionDate: "09.09.2024",
            dischargeDate: "16.09.2024"
        },
        {
            id: 106,
            name: "Сабина Юлдошева",
            birthDate: "22.03.1993",
            roomNumber: 201,
            admissionDate: "13.09.2024",
            dischargeDate: "21.09.2024"
        }
    ];
    const DATA = [
        {
            idenfy: 0,
            tipS: "Allergolog",
            name: "Konsultatsiya",

        },
        {
            idenfy: 1,
            tipS: "Infeksiya gruppa",
            name: "Gepatit A  infeksiya bo'yicha analitik tahlil",
            thead: [
                {
                    th: "Название инфекции",
                },
                {
                    th: "Метод",
                },
                {
                    th: "Маркер",
                },
                {
                    th: "Контроль"
                }

            ],
            tbody: [
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],
                    [
                        {
                            text: "Д- антитела выявления Вирусный гепатит: 0 ИФА ‘суммарных антител к  0319 вирусу гепатита Дельта"
                        }
                    ],

                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ],
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],
                    [
                        {
                            text: "Д- антитела выявления Вирусный гепатит: 0 ИФА ‘суммарных антител к  0319 вирусу гепатита Дельта"
                        }
                    ],
                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ],
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],
                    [
                        {
                            text: "Д- антитела выявления Вирусный гепатит: 0 ИФА ‘суммарных антител к  0319 вирусу гепатита Дельта"
                        }
                    ],
                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ],
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],
                    [
                        {
                            text: "Д- антитела выявления Вирусный гепатит: 0 ИФА ‘суммарных антител к  0319 вирусу гепатита Дельта"
                        }
                    ],
                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ],
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],
                    [
                        {
                            text: "Д- антитела выявления Вирусный гепатит: 0 ИФА ‘суммарных антител к  0319 вирусу гепатита Дельта"
                        }
                    ],
                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ]
            ]
        },
        {
            idenfy: 2,
            tipS: "Virusniy Gepatit",
            name: "Gepatit C",
            thead: [
                {
                    th: "Название инфекции",
                },
                {
                    th: "Метод",
                },
                {
                    th: "Контроль"
                }

            ],
            tbody: [
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],

                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ],
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],

                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ],
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],
                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ],
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],
                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ],
                [
                    [
                        {
                            text: "Вирусный гепатит: В"
                        },
                    ],
                    [
                        {
                            text: "ИФА"
                        }
                    ],
                    [
                        {
                            text: "Вирусный гепатит: В ИФА поверхностного 0.091 (отр-) ( 0.149 антигена)"
                        },
                        {
                            text: "Бруцелла-19М.ИФА-БЕСТ ИФА Бруцелла-9М-ИФА-БЕСТ 0,107 (отр-) 0280"
                        }
                    ],
                ]
            ]
        },
    ];
    const opisany = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro maxime eos obcaecati iste quia deserunt voluptas numquam aspernatur cumque magnam neque et quo, expedita doloribus pariatur saepe dignissimos eaque ipsum. Autem tempora ipsa neque in facilis laudantium quaerat doloribus." // crud get 
    const naznocheny = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet dicta officiis, delectus architecto repellat. Tempore ratione nihil voluptatum ducimus laborum doloremque doloribus minus, dolores voluptates enim, deserunt, dolore non." // crud get
    let doctor_description = opisany || '';
    let doctor_appointment = naznocheny || ''



    return (
        <div>
            <div className='Doctor__main'>
                {isModal === 1 && (
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
                                                Дата рождения
                                            </h3>
                                        </th>
                                        <th>
                                            <h3>
                                                Номер палаты
                                            </h3>
                                        </th>
                                        <th>
                                            <h3>
                                                Дата поступления
                                            </h3>
                                        </th>
                                        <th className='Register__table__setings2'>
                                            <h3>
                                                Дата выписки
                                            </h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {myStatsionars?.map((item, index) => {
                                        return (
                                            <tr key={index} id={item.id} onClick={() => openModal(item.id)}>
                                                <td>
                                                    <h3>
                                                        {index + 1}
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3>
                                                        {item.name}
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3>
                                                        {item.birthDate}
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3>
                                                        {item.roomNumber}
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3 >
                                                        {item.admissionDate}
                                                    </h3>
                                                </td>
                                                <td>
                                                    <h3>
                                                        {item.dischargeDate}
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
                {isModal === 2 && (
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
                        <div className='Kassa__info doctor__info doctor_inpatients_info'>
                            <div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Ф.И.О:
                                    </h3>
                                    <span>
                                        {showPerson.name}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Год рождения:
                                    </h3>
                                    <span>
                                        {showPerson.birthDate}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Адрес:
                                    </h3>
                                    <span>
                                        Guliston shahar 6-mavze
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Телефон номер:
                                    </h3>
                                    <span className='Kassa__info__grid__money'>
                                        +998711038012
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Пасспорт:
                                    </h3>
                                    <span>
                                        AC7442015
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Номер палаты
                                    </h3>
                                    <span>
                                        {showPerson.roomNumber}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Дата поступления:
                                    </h3>
                                    <span>
                                        {showPerson.admissionDate}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Дата выписки:
                                    </h3>
                                    <span className='Kassa__info__grid__money'>
                                        {showPerson.dischargeDate}
                                    </span>
                                </div>
                            </div>

                        </div>
                        <table className='patient_labaratory_services'>
                            <thead>
                                <tr>
                                    <th><h3>No</h3></th>
                                    <th><h3>Названия услуги</h3></th>
                                    <th><h3>Дата</h3></th>
                                </tr>
                                <tr className='head_distance_lab_serv'></tr>
                            </thead>
                            <tbody>
                                {DATA?.map((item, index) => {
                                    return (
                                        <tr onClick={() => openIdenTable(item.idenfy)} id={item.idenfy} key={index}>
                                            <td><h3>{index + 1}</h3></td>
                                            <td><h3>{item.tipS} {item.name}</h3></td>
                                            <td><h3>12.09.2024</h3></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                )}
                {isModal === 3 && (
                    <div>
                        <div className='Kassa__info__header'>
                            <h1>
                                Кабинет пациента
                            </h1>
                            <button className='Kass__info__header__btn' onClick={(e) => openPatientTable(e)}>
                                <svg className='Register__main__out__btn2__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                                <span className='Kass__info__header__btn__span'>
                                    Назад
                                </span>
                            </button>
                        </div>
                        <div className='Kassa__info doctor__info doctor_inpatients_info'>
                            <div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Ф.И.О:
                                    </h3>
                                    <span>
                                        {showPerson.name}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Год рождения:
                                    </h3>
                                    <span>
                                        {showPerson.birthDate}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Адрес:
                                    </h3>
                                    <span>
                                        Guliston shahar 6-mavze
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Телефон номер:
                                    </h3>
                                    <span className='Kassa__info__grid__money'>
                                        +998711038012
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Пасспорт:
                                    </h3>
                                    <span>
                                        AC7442015
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Номер палаты
                                    </h3>
                                    <span>
                                        {showPerson.roomNumber}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Дата поступления:
                                    </h3>
                                    <span>
                                        {showPerson.admissionDate}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Дата выписки:
                                    </h3>
                                    <span className='Kassa__info__grid__money'>
                                        {showPerson.dischargeDate}
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className='table_multi'>
                            <div className='table_multi_head'>
                                <h1> <span> {foundService.tipS} </span>  {foundService.name}</h1>
                                <button style={{ maxHeight: "50px" }} className='Kass__info__header__btn' onClick={(e) => openPatientProfile(e)}>
                                    <svg className='Register__main__out__btn2__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                                    <span className='Kass__info__header__btn__span'>
                                        вернуться к списку услуг
                                    </span>
                                </button>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        {foundService.thead.map((item, index) => {
                                            return (
                                                <th key={index}>{item.th}</th>
                                            )
                                        })}
                                        <th>resultat</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {foundService.tbody.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                {item.map((e, index) => {
                                                    return (
                                                        <td key={index}>
                                                            <ul>
                                                                {e.map((s, index) => {
                                                                    return (
                                                                        <li key={index}>{s.text}</li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </td>
                                                    );
                                                })}
                                                <td>
                                                    <li className='my_stat_histor_resultat'>15.7</li>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <div className='labaratory_final_btns'>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 6 2 18 2 18 9" />
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                    <rect x="6" y="14" width="12" height="8" />
                                </svg>
                                <span style={{ marginLeft: "8px" }}>Распечатать</span>
                            </button>
                        </div>
                    </div>
                )}
                {isModal === 4 && (
                    <div>
                        <div className='Kassa__info__header'>
                            <h1>
                                Кабинет пациента
                            </h1>
                            <button className='Kass__info__header__btn' onClick={(e) => openPatientTable(e)}>
                                <svg className='Register__main__out__btn2__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                                <span className='Kass__info__header__btn__span'>
                                    Назад
                                </span>
                            </button>
                        </div>
                        <div className='Kassa__info doctor__info doctor_inpatients_info'>
                            <div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Ф.И.О:
                                    </h3>
                                    <span>
                                        {showPerson.name}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Год рождения:
                                    </h3>
                                    <span>
                                        {showPerson.birthDate}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Адрес:
                                    </h3>
                                    <span>
                                        Guliston shahar 6-mavze
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Телефон номер:
                                    </h3>
                                    <span className='Kassa__info__grid__money'>
                                        +998711038012
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Пасспорт:
                                    </h3>
                                    <span>
                                        AC7442015
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Номер палаты
                                    </h3>
                                    <span>
                                        {showPerson.roomNumber}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Дата поступления:
                                    </h3>
                                    <span>
                                        {showPerson.admissionDate}
                                    </span>
                                </div>
                                <div className='Kassa__info__grid'>
                                    <h3>
                                        Дата выписки:
                                    </h3>
                                    <span className='Kassa__info__grid__money'>
                                        {showPerson.dischargeDate}
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className='table_multi_head table_multi'>
                            <h1> <span> Allergolog </span>  konsultatsiya</h1>
                            <button style={{ maxHeight: "50px" }} className='Kass__info__header__btn' onClick={(e) => openPatientProfile(e)}>
                                <svg className='Register__main__out__btn2__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                                <span className='Kass__info__header__btn__span'>
                                    вернуться к списку услуг
                                </span>
                            </button>
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
                )}
            </div>
        </div>
    )
}

export default DoctorInpatients