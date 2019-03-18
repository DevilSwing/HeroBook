import React from 'react';

export default class AddHero extends React.Component {
    render() {
        return (
            <section>
                <div className="container">
                    <h1>ADD HERO</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.
                                </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Description</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password">
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="male">
                                <label className="form-check-label" htmlFor="exampleCheck1">Male</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="female">
                                <label className="form-check-label" htmlFor="exampleCheck1">Female</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                        </div>
            </section>

    )
    }
    }