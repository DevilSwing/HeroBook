import React from 'react';

export default class AddHero extends React.Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }



    onSubmit(event) {
        console.log(this.name.value);
        event.preventDefault();
        let Hero =
            {
                name: 'this.na',
                desc: '',
                img: ''
            }
    }

    render() {
        return (
            <section>
                <div className="container">
                    <h1>ADD HERO</h1>
                    <form onSubmit={(e) => {this.onSubmit(e)}}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" id="name"
                                   aria-describedby="emailHelp" placeholder="Enter Name" ref={(el) => {this.name = el}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Description</label>
                            <input type="text" className="form-control" id="description"
                                   placeholder="Enter Desc" ref={(el) => {this.desc = el}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Images</label>
                            <input type="url" className="form-control" id="image"
                                   placeholder="Enter Image" ref={(el) => {this.img = el}}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="male"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Male</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="female"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Female</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Hero</button>
                    </form>
                        </div>
            </section>

    )
    }
    }