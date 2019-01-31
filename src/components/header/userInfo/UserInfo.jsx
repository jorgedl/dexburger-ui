import React from 'react';

import './less/UserInfo.less';

function UserInfo() {
    return (
        <div className="user-info">
            <i className="fa fa-search" />
            <i className="fa fa-bell" />
            <div className="user-info__thumb">
                JL
            </div>
        </div>
    );
}

export default UserInfo;
