import React, { useState } from 'react'
import '../../Style/Doctor.css'
import '../../Style/labaratory.css'
import '../../Style/multitable.css'

function LabaratoryActive() {
  // HTML structure
  const [isModal, setModal] = useState(1);
  function openPatientTable(e) {
    setModal(1)
  }
  function openPatientProfile(e) {
    setModal(2)
  }


  // API 
  let patentsNow = Array.from({ length: 15 }, (y, x) => x + 1 + y);

  let calc_length_array_sers_patent = 7
  let filter_number_array_length_checked = 4
  let box_width = filter_number_array_length_checked * 100 / calc_length_array_sers_patent;

  const DATA = [
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
  ]
  // const [serviceID, setServiceID] = useState(1);
  const [foundService, setFoundService] = useState({});

  // let foundService = DATA.find((item) => item.idenfy === 1);

  function openIdenTable(e) {
    let foundServ = DATA.find((item) => Number(item.idenfy) === Number(e));
    setFoundService(foundServ);
    setModal(3);
  }

  return (
    <section className='labaratory_active'>
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
                    <tr key={index} onClick={(e) => openPatientProfile(e)}>
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
      {isModal === 2 && (
        <div>
          <div className='Kassa__info__header'>
            <h1>Кабинет пациента</h1>
            <button className='Kass__info__header__btn' onClick={(e) => openPatientTable(e)}>
              <svg className='Register__main__out__btn2__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
              <span className='Kass__info__header__btn__span'>Назад</span>
            </button>
          </div>

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
              <span className={`Kassa__info__grid__money labaratory_patient_status ${box_width === 0 ? "box_border_red" : ""}`}>
                <div style={{ width: `${box_width}%` }} className={`labaratory_width_box_dynamic ${box_width === 0 ? "box_color_red" : box_width === 100 ? "box-end-radius" : ""}`}></div>
                Не осмотреный
              </span>
            </div>

          </div>

          <table className='patient_labaratory_services'>
            <thead>
              <tr>
                <th><h3>No</h3></th>
                <th><h3>Статус</h3></th>
                <th><h3>Названия услуги</h3></th>
              </tr>
              <tr className='head_distance_lab_serv'></tr>
            </thead>
            <tbody>
              {DATA?.map((item, index) => {
                return (
                  <tr onClick={() => openIdenTable(item.idenfy)} id={item.idenfy} key={index}>
                    <td><h3>{index + 1}</h3></td>
                    <td><span className='service_status_icon'></span></td>
                    <td><h3>{item.tipS} {item.name}</h3></td>
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
              <span className={`Kassa__info__grid__money labaratory_patient_status ${box_width === 0 ? "box_border_red" : ""}`}>
                <div style={{ width: `${box_width}%` }} className={`labaratory_width_box_dynamic ${box_width === 0 ? "box_color_red" : box_width === 100 ? "box-end-radius" : ""}`}></div>
                Не осмотреный
              </span>
            </div>

          </div>
          <div className='table_multi'>
            <div className='table_multi_head'>
              <h1> <span> {foundService.tipS} </span>  {foundService.name}</h1>
              <button style={{maxHeight:"50px"}} className='Kass__info__header__btn' onClick={(e) => openPatientProfile(e)}>
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
                        )
                      })}
                      <td>
                        <input type="text" name="" id="" />
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
          <div className='labaratory_final_btns'>
            <button type="button">Сохранить в историю клиента</button>
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span style={{marginLeft:"8px"}}>Распечатать</span></button>
          </div>
        </div>
      )}

    </section>
  )
}

export default LabaratoryActive