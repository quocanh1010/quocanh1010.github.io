const pokemons = [
      {
        name: "Charmander",
        type: "fire",
        src: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png>"
      },
      {
        name: "Squirtle",
        type: "water",
        src: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png>"
      },
      {
        name: "Butterfree",
        type: "flying",
        src: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png>"
      },
      {
        name: "Rattata",
        type: "normal",
        src: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png>"
      },
      {
        name: "Metapod",
        type: "bug",
        src: "<https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png>"
      }
    ];
  


const App = () => (
    <div className="container">
        <Label pokemons={pokemons}/>
    </div>
);
const Label = ({pokemons}) => (
    <div className="row">
        <div className="col-4">
            <MainItems>
                {pokemons.map((p)=>(
                    <Items key={p.name} name={p.name}/>
                )

                )}
            </MainItems>
            
            
        </div>
    </div>
);
// Label.propTypes = {
//     pokemons: PropTypes.arrayOf(
//         PropTypes.exact({
//             name: PropTypes.string.isRequired,
//             type: PropTypes.string.isRequired,
//         })
//     ),
// };
const MainItems = (props) => (
    <div className="main-items">{props.children}</div>
)
MainItems.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};
const Items = (props) => (
    <div className="items">
        <div className="name">{props.name}</div>
        {/* <img src={props.src} alt={props.alt}/>
        <div>{props.type}</div> */}
    </div>
);
Items.propTypes = {
    src: PropTypes.string.isRequired,
};

ReactDOM.render(<App />, document.getElementById("app"));


class Form extends React.Component {
    state = {
        task : "",
    }

    // constructor(){
    //     super();
    //     this.handleChange = this.handleChange.blind(this)
    //     this.handleSubmit = this.handleSubmit.blind(this)
    // }
    constructor(){
        this.ref = React.createRef
    }
    handleChange = (e) =>{
        this.setState({
            task=e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDeafault();
        if (this.state.task.trim().length>0){
        this.props.addTodo(this.state.task);
        this.setState({task:""})
        }
    }
    render(){
       return <form action=""
                    onSubmit={()=> this.props.addTodo(this.state.task)}
       >
           <input ref={this.ref}type="text" value={this.state.task} onChange={this.handleChange}/>
           <button>Add</button>
        </form>
    }
}