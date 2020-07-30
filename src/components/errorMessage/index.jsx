import React from 'react';
import './index.scss';

const ErrorMessage = ({
    error,
}) => (
    <div className='error'>{error}</div>
);

export default ErrorMessage;
