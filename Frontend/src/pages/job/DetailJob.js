import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus } from "../../actions/UserAction";
import { detailJob } from "../../actions/JobAction";
import { useNavigate, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import { GoArrowLeft } from "react-icons/go";


const DetailJob = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
    let { id } = useParams();
    
	const { loginStatusResult } = useSelector((state) => state.AuthReducer)
	const { detailJobResult } = useSelector((state) => state.JobReducer)

	useEffect(() => {
		dispatch(loginStatus())
		dispatch(detailJob(id))
	}, [dispatch])

    useEffect(() => {
        // console.log(loginStatusResult);
		if(loginStatusResult){
			if(loginStatusResult.status === true) {
				// console.log('sudah login');
			} else if(loginStatusResult.status === false) {
				// nanti ubah ke navigate katalog
				// navigate('/katalog')
				navigate('/login')
			} else {
				navigate('/login')
			}
		}
	}, [loginStatusResult])

    useEffect(() => {
        console.log(detailJobResult);
		
	}, [detailJobResult])

	return (
		<div className="container-fluid mt-4 p-0 ">
            <div className="row m-0 p-0 justify-content-center">
           
                <div className="col-8 m-0 p-0 ">
                <button onClick={() => navigate(-1)}><GoArrowLeft /></button>
                    <div className="card m-0 p-0 p-3">
                        <div className="card-body m-0 p-0 ">
                            <div className="row m-0 p-0">
                                <p>{ detailJobResult.type } / { detailJobResult.location }</p>
                            </div>
                            <div className="row m-0 p-0">
                                <h4>{ detailJobResult.title }</h4>
                            </div>
                            <hr />
                            <div className="row m-0 p-0">
                                <div className="col-8 m-0 p-0 px-3 text-justify">
                                    { parse (`${detailJobResult.description}`)}
                                    {/* { detailJobResult.description } */}

                                </div>
                                <div className="col-4 m-0 p-0 px-2">
                                    <div className="row m-0 p-0 ">
                                        <div className="card ">
                                            <div className="card-body ">
                                                <div className="row">
                                                    <h5>{detailJobResult.company}</h5>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <img src ="https://via.placeholder.com/150" className ="rounded-circle text-center" alt = "Rounded Image" style={{ width: "300px" }}/>
                                                    {/* <h5>{detailJobResult.company_logo}</h5> */}
                                                </div>
                                                <div className="row">
                                                    <p>{detailJobResult.company_url}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row m-0 p-0 mt-3 ">
                                        <div className="card  ">
                                            <div className="card-body ">
                                                <div className="row m-0 p-0 ">
                                                    <h5>How to Apply</h5>
                                                </div>
                                                <hr />
                                                <div className="row m-0 p-0 ">
                                                    { parse (`${detailJobResult.how_to_apply}`)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default DetailJob