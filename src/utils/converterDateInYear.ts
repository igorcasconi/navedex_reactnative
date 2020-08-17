import React from 'react';

function converterDateImYear(date: string) {
    var today = new Date();
    var dateParams = new Date(date);

    var result = today.getFullYear() - dateParams.getFullYear();

    if ( new Date(today.getFullYear(), today.getMonth(), today.getDate()) < 
         new Date(today.getFullYear(), dateParams.getMonth(), dateParams.getDate()) )
        result--;

    return result;
}

export default converterDateImYear;