import React from 'react';
import {Link} from "react-router-dom";
import "../styles/userCard.css";

export default class UserCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">{this.props.user.firstName} {this.props.user.lastName}</h5>
                    <p className="card-text">Role: {this.props.user.dtype}</p>
                    <Link to={`/profile/${this.props.user.username}`} className="btn btn-primary">
                        See Profile
                    </Link>
                    &nbsp;
                    {
                        this.props.user.username !== localStorage.getItem("username") &&
                        localStorage.getItem("userRole") === "Fan" &&
                        <button className="btn btn-primary"
                                onClick={() => this.props.followUser(localStorage.getItem("username"),
                                                                     this.props.user.username)}>
                            Follow
                        </button>
                    }
                </div>
            </div>
        );
    }
}