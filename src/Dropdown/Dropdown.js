import React from 'react';
import './Dropdown.scss';


class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen : false
        }
    }

    // funcion que devuelve el render de las opciones (youtube, wiki...)
    renderApiButton = (element) => {
        if (element.isDropdown){

            let listaPeriodicos = element.dropdownList.map(periodico => {return (
                
                <div onClick={()=> this.props.selectAPI(periodico.id)}>
                    {periodico.name}
                    <label class="switch">
                    <input type="checkbox" checked = {this.props.numberAPISelected===periodico.id}/>
                    <span class="slider round"></span>
                    </label>
                </div>
                
            )})
            return(
                <div>
                    <div className="col-3" onClick={()=> this.setState({dropdownOpen : !this.state.dropdownOpen}) } style={{color:element.dropdownList.some(periodico => {return(periodico.id === this.props.numberAPISelected)})?'red':'blue'}}>{element.name}</div>
                    <div>
                        
                        {this.state.dropdownOpen && listaPeriodicos}
                    </div>
                </div>
            )
        } else{
            return(
            <div className="col-3" onClick={()=>this.props.selectAPI(element.id)} style={{color:this.props.numberAPISelected===element.id?'red':'blue'}}>{element.name}</div>
        )
        }
    }

    render() {
        // Map para cada elemento de apisList
        let list = this.props.apisList.map(element => this.renderApiButton(element));
        return (
            <div className="container">
                <div className="row">
                    {list}
                </div>
            </div>
           
        )
    }

}

export default Dropdown;