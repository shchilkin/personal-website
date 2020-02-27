import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../../../Layout/Card/Card.component";
import '../../../../../Layout/Buttons/Button/Button.style.css'
import Button from "../../../../../Layout/Buttons/Button/Button.component";

const UserItem = ({ login, avatar_url }) => {
    return (
        <Card>
            <img src={avatar_url} className="card-img-top" style={{ borderTopLeftRadius: 12,
                borderTopRightRadius: 12,}} alt="Avatar Image"/>
            <div className={'card-body'}>
                <h5 className="card-title text-center" style={{color:'#FC4365'}}>{login}</h5>
                <Link to={`/projects/findOnGithub/user/${login}`}
                      style={{textDecoration:'none'}}
                >
                    <Button block={true}>View Profile</Button>
                </Link>
            </div>
        </Card>
    )
};

export default UserItem;