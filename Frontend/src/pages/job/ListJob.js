import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus } from "../../actions/UserAction";
import { getJobLists } from "../../actions/JobAction";
import { Link, useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap'


const ListJob = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
    
    let [description, setDescription] = useState('')
    let [location, setLocation] = useState('')
    let [fulltime, setFulltime] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    let [minPage] = useState(1)
    let [maxPage, setMaxPage] = useState(2)
    let [totalData, setTotalData] = useState(0)

	const { loginStatusResult } = useSelector((state) => state.AuthReducer)
	const { getJobListsResult } = useSelector((state) => state.JobReducer)


	useEffect(() => {
		dispatch(loginStatus())
		dispatch(getJobLists({currentPage}))
	}, [dispatch])

    useEffect(() => {
		if(loginStatusResult){
			if(loginStatusResult.status === true) {

			} else if(loginStatusResult.status === false) {

				navigate('/login')
			} else {
				navigate('/login')
			}
		}
	}, [loginStatusResult])

    useEffect(() => {
        setMaxPage(getJobListsResult.imaxPage)
        setTotalData(getJobListsResult.itotalData)
		
	}, [getJobListsResult])

    useEffect(() => {

		dispatch(getJobLists({description, location, fulltime, currentPage}))
	}, [currentPage])

    const searchHandle = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        dispatch(getJobLists({description, location, fulltime, currentPage}))

    }


    const prevPageHandler = (e) => {
        if(currentPage >= minPage ){
            let newCurrentPage = currentPage - 1
            setCurrentPage(newCurrentPage)
        }
    }
    const nextPageHandler = (e) => {
        if(currentPage <= maxPage){
            let newCurrentPage = currentPage + 1
            setCurrentPage(newCurrentPage)
        }
    }
    
    const flagChangeHandle = (e) => {
		setFulltime(prevCheck => !prevCheck)
    }


	return (
		<div className="container-fluid p-0 ">
            <div className="row m-0 p-0 justify-content-center">
                <div className="col-8 m-0 p-0 ">
                    <div className="search">
                        <form className="forms-sample addForm" id="addForm" >
                            {/* <Form.Control type="hidden" id="inputProductName" name="UserId" value="1" placeholder="Product Name" hidden/> */}
                            <div className="row m-0 p-0">
                                <div className="col-3 m-0 p-0 ">
                                    {/* <div className="row m-0 p-0 ">
                                        <p>job description</p>
                                    </div> */}
                                    <div className="row m-0 p-0 ">
                                        <Form.Group className="my-3">
                                            <label className="mb-1" htmlFor="inputJobDescription">Job Description </label>
                                            <Form.Control type="text" id="inputJobDescription" name="description" placeholder="Job Description" value={description}  onChange={(event) => setDescription(event.target.value)}/>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-3 m-0 p-0 ">
                                    {/* <div className="row m-0 p-0 ">job location</div> */}
                                    <div className="row m-0 p-0 ">
                                        <Form.Group className="my-3">
                                            <label className="mb-1" htmlFor="inputLocation">Location</label>
                                            <Form.Control type="text" className="form-control" id="inputLocation" name="location" placeholder="Location" value={location}  onChange={(event) => setLocation(event.target.value)} required/>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-6">
                                    {/* <div className="row m-0 p-0 "></div> */}
                                    <div className="row m-0 p-0 mt-2">
                                        <Form.Group className="my-3">
                                            <label className="mb-1" htmlFor="inputLocation"> </label>
                                            {/* <Form.Control type="text" className="form-control" id="inputLocation" name="location" placeholder="Location" value={location}  onChange={(event) => setLocation(event.target.value)} required/> */}
                                            <div className="row m-0 p-0 ">
                                                <div className="col-4 m-0 p-0 ">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" id="flexRadioDefault"  onChange={(e) => flagChangeHandle(e)}/>
                                                        <label className="form-check-label" htmlFor="flexRadioDefault">Full Time</label>
                                                    </div>
                                                </div>
                    
                                                {/* <div className="col-4 m-0 p-0 ">
                                                </div> */}
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row m-0 p-0">
                                <button type="button" className="btn btn-primary px-4" onClick={(e) => searchHandle(e)}>Search</button>
                                </div>  
                            </div>
                        </form>
                    </div>
                    <hr />
                    <div className="lists-job">
                        <h3>Job List</h3>
                        { getJobListsResult ?
                            getJobListsResult.length === 0 ? 
                            <div className="row mt-5 text-center">
                                <p>no available job with the selected parameters</p> 
                            </div>
                                :
                            getJobListsResult.map((job, i) => {
                                // console.log(job)
                                return (
                                    job ?
                                    
                                    <div className="row mx-0 my-3 p-0 ">
                                        <div className="card">
                                            <div className="card-body">
                                                <Link to={`/detail/${job.id}`} className='no-link text-dark d-flex'>
                                                    <div className="row m-0 p-0 d-flex ms-1 me-auto">
                                                        <p className="fw-bold m-0 p-0 ">{job.title}</p>
                                                        <p className="m-0 p-0 ">{job.company}</p>
                                                        <p className="m-0 p-0 ">at <b>{job.location}</b></p>
                                                    </div>
                                                    <div className="row m-0 p-0 d-flex ms-auto me-1 text-end">
                                                        <p className="m-0 p-0 ">{job.type}</p>
                                                        <p className="m-0 p-0 ">
                                                        {job ? 
											                job.created_at !== null ? job.created_at.slice(0,16) : 'tanggal null'
                                                        : 'tanggal'}
                                                        
                                                        </p>                                                   
                                                        {/* <img src={job.company_logo} alt="Admin" className="rounded-circle" width={50} /> */}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    ''
                                )
                            })
                        : 'retrieving data...' }

                    </div>
                    <div className="pagination text-center mb-3 ">
                    <p className="mx-3 my-auto ">Page</p>
                        {currentPage === 1 ?
                        <button type="button" className="btn btn-secondary" disabled>prev</button> :
                        <button type="button" className="btn btn-primary" onClick={(e) => prevPageHandler(e)}>prev</button>
                        }
                        <p className="mx-3 my-auto">{currentPage}</p>
                        {currentPage === maxPage ?
                        <button type="button" className="btn btn-secondary" disabled>next</button> :
                        getJobListsResult.itotalData === 0 ? <button type="button" className="btn btn-secondary" disabled>next</button> : 
                        <button type="button" className="btn btn-primary" onClick={(e) => nextPageHandler(e)}>next</button>
                        }
                        {/* <button type="button" className="btn btn-primary" onClick={(e) => nextPageHandler(e)}>next</button> */}
                    </div>
                </div>
            </div>
		</div>
	);
}

export default ListJob