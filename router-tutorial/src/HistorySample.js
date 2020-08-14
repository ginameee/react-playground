import React from 'react';

const HistorySample = ({ history }) => {

    const handleGoBack = () => {
        history.goBack();
    };

    const handleGoHome = () => {
        history.push("/");
    };

    return (
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;