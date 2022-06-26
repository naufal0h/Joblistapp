import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../../actions/UserAction";
import {  } from "../../actions/JobAction";
import { Link, useNavigate } from "react-router-dom";

const Katalog = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
    let [image, setImage] = useState("https://via.placeholder.com/150")
    let newArr = []

	const { getDataUserResult } = useSelector((state) => state.AuthReducer)
	const {  } = useSelector((state) => state.JobReducer)

	useEffect(() => {
		dispatch(loginStatus())
		dispatch(getDataUser())
	}, [dispatch])

    useEffect(() => {
	}, [getDataUserResult])


	return (
		<div className="container-fluid p-0 ">
		</div>
	);
}

export default Katalog