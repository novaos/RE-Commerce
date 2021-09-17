import React from 'react';
import { IUser } from '../interfaces';

type Props = {
  user: IUser;
};

const User: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className="card mt-2">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://picsum.photos/200" alt="" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{user.name}</p>
              <p className="subtitle is-6">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
