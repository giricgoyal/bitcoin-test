import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

export default function Address(props) {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.activate(location));
        return () => {
            dispatch(actions.deactivate());
        }
    });

    const addressData = useSelector(selectors.getAddressTransactions);
    console.log(addressData)

    return (
        <div>{JSON.stringify(addressData)}</div>
    )
}