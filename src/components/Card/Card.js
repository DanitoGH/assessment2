import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row , Col, Card , FormLabel } from 'react-bootstrap'

import Checkbox from "../Checkbox/Checkbox";
import Dropdown from "../Dropdown/Dropdown";


const RoomsCard = ({ roomNumber, roomChecked, onChecked, adultRoomValue ,childrenRoomValue, onChanged }) => {

    return (
        <Card  style={{ width: '15rem' }}>
            <Card.Body className={roomChecked || roomNumber === 1?"bg-primary text-white" : "bg-secondary  text-white"}  style={{ padding: '0.7rem' }}>
               <Card.Header style={{ padding: '0.4rem' }}>
                  <Checkbox 
                      label={`Room ${roomNumber}`}
                      onChange={onChecked}
                      checked={roomChecked}
                      roomNumber={roomNumber}
                  />
               </Card.Header>
               <Container>
                <Row>
                  <Col>
                   <FormLabel className="mt-2">Adults (18+)</FormLabel>
                    <Dropdown 
                      options={[
                        { value: 1, label: 1 },
                        { value: 2, label: 2 }
                        ]}
                        onChange={onChanged}
                        roomChecked={roomNumber === 1? true : roomChecked}
                        dropdownCategory="Adults"
                        roomNumber={roomNumber}
                        adultRoomValue={adultRoomValue}
                        childrenRoomValue={childrenRoomValue}
                     />
                    </Col>
                    <Col>
                     <FormLabel className="mt-2">Children (0-17)</FormLabel>
                      <Dropdown 
                        options={[
                            { value: 0, label: 0 },
                            { value: 1, label: 1 },
                            { value: 2, label: 2 }
                            ]}
                            onChange={onChanged}
                            roomChecked={roomNumber === 1? true : roomChecked}
                            dropdownCategory="Children"
                            roomNumber={roomNumber}
                            adultRoomValue={adultRoomValue}
                            childrenRoomValue={childrenRoomValue}
                      />
                    </Col>
                </Row>
              </Container>
         </Card.Body>
        </Card>
    );
};

RoomsCard.protoTypes = {
  roomNumber: PropTypes.array.isRequired,
  roomChecked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func.isRequired,
  onChanged: PropTypes.func.isRequired
}

RoomsCard.protoTypes = {
  adultRoomValue: '',
  childrenRoomValue: ''
}

 export default RoomsCard;

