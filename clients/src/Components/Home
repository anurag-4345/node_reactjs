import React from "react";
class Home extends React.Component {
    state = {
        text: "",
        last: "",
        myWishes: [{ item: "No name found", last: "no last name found" }]
    }

    handleSubmit(e) {
        e.preventDefault();
        var data = new URLSearchParams();
        for (const pair of new FormData(e.target)) {
            data.append(pair[0], pair[1])
        }
        //localhost:5000/sent
        fetch("/sent", {
            method: "post",
            body: data,
        }
        ).then(res => res.json())
            .then(res1 => {
                console.log(res1)
                this.setState({
         myWishes: [... this.state.myWishes.owner.url, res1]
                })
            });
    }
    componentDidMount() {
        fetch("/https://api.github.com/users/anuragsinha4345/repos",)
            .then(res1 => res1.json())
            .then(res2 => {
                console.log(res2)
                // this.setState({
                //     myWishes: res2
                // })
            })
    }
    handleDelete(id) {
    fetch("/remove/" + id, { method: "delete" })
        .then(res1 => res1.json())
        .then(res2 => { console.log(res2) })
    }
    handleGet(e) {
        e.preventDefault();
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)) {
            data.append(pair[0], pair[1])
        }
        //localhost:5000/sent
    }
    render() {
        const list = this.state.myWishes.map(item => {
            return <div>
                <li className="list-group-item list-group-item-success"
                    key={item._id} onClick={() => this.handleDelete(item._id)} >
                    {item.item}</li>
                <li className="list-group-item list-group-item-success"
                    key={item._id} onClick={() => this.handleDelete(item._id)}>
                    {item.last}</li> <hr />
            </div>
        })
    return (
        <div>
            <form onSubmit={(e) => this.handleGet(e)} >
                <label for="name" > Name </label>
                <input type="text" id="name" name="item"
                    value={this.state.text}
                    onChange={(e) => this.setState({ text: e.target.value })}
                /> <br />
                <label for="last">Last</label>
                < input type="text" name="last" id="last"
                    value={this.state.last}
                    onChange={(e) => { this.setState({ last: e.target.value }) }} ></input>
                <br />
                <button className="btn btn-success" type="submit">ADD</button>
            </form>
            <br />
            <ul className="list-group  list-group-horizontal">
                {list}
            </ul>
        </div>
    )
  }
}
export default Home;
