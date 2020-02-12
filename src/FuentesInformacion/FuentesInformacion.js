import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FuentesInformacion = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <div className="container">
                <div class="row">
                    {/* Menu para ordenador */}
                    <div class="d-none d-md-block col-md-3">Twitter</div>
                    <div class="d-none d-md-block col-md-3">Facebook</div>
                    <div class="d-none d-md-block col-md-3">Periodicos</div>
                    <div class="d-none d-md-block col-md-3">Youtube</div>
                    {/* Menu para movil */}
                    <div class="col-6 d-md-none">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Some Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    holi
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Some Action</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="col-6 d-md-none">
                        Seleccion
                    </div>
                </div>
        </div>
       
    );
}


export default FuentesInformacion;