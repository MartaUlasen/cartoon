import React from 'react';
import './index.scss';

const ErrorMessage = ({
    error,
}) => (<span className='error'>{error}</span>);

export default ErrorMessage;
