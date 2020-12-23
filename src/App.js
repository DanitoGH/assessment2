import './App.css';

import { useState, useEffect } from 'react'
import 'react-notifications/lib/notifications.css';

import { NotificationContainer, NotificationManager } from 'react-notifications';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row , Col } from 'react-bootstrap'

import Button from "./components/Button/Button";

import Card from "./components/Card/Card"


function App() {

   // Load saved rooms data from localstorage
  const roomsData = JSON.parse(localStorage.getItem('rooms_data'))
   
  // Init rooms selections object state
  const [roomsSelectionData, setRoomsSelectionData] = useState(
    {
      room2Checked: false,
      room3Checked: false,
      room4Checked: false,
      room2AdultValue: '',
      room3AdultValue: '',
      room4AdultValue: '',
      room2ChildrenValue: '',
      room3ChildrenValue: '',
      room4ChildrenValue: '',
  })

  // Runs once to check for any saved data
  useEffect(() => {
   if(roomsData !== null){
     // Destructure rooms data object
      const { room2Checked, room3Checked, room4Checked, 
              room2AdultValue, room3AdultValue , room4AdultValue,
              room2ChildrenValue, room3ChildrenValue, room4ChildrenValue
      } = roomsData

    // Preset saved data from local storege
      setRoomsSelectionData({ 
          ...roomsSelectionData, 
          room2Checked: room2Checked,
          room3Checked: room3Checked, 
          room4Checked: room4Checked, 
          room2AdultValue: room2AdultValue, 
          room3AdultValue: room3AdultValue, 
          room4AdultValue: room4AdultValue,
          room2ChildrenValue: room2ChildrenValue, 
          room3ChildrenValue: room3ChildrenValue,
          room4ChildrenValue: room4ChildrenValue
      })

      // Notify user if data was successfully loaded
      NotificationManager.info('Info message', 'Saved rooms data loaded!');
    }
  },[])

  // Save data to localstorage
  const handleOnClick = (e) => {
      localStorage.setItem('rooms_data', JSON.stringify(roomsSelectionData))
      NotificationManager.success('Success message', 'Rooms data saved!');
  }

// Handle data passed onto the parent from the child dropdown 
  const handleDropdown = (values) => {
    
     // Destructure returned object
      const { Category , roomNumber, selectedValue } = values

      // Evaluate and save selected room data to its rightful category and value
      if(Category === 'Adults'){
        switch(roomNumber) {
          case 2:
           setRoomsSelectionData({ ...roomsSelectionData, room2AdultValue: selectedValue })
           break;
          case 3:
            setRoomsSelectionData({ ...roomsSelectionData, room3AdultValue: selectedValue })
            break;
          case 4:
            setRoomsSelectionData({ ...roomsSelectionData, room4AdultValue: selectedValue })
            break;
          default:
            return "";
       }
      }else{
        switch(roomNumber) {
          case 2:
           setRoomsSelectionData({ ...roomsSelectionData, room2ChildrenValue: selectedValue })
           break;
          case 3:
            setRoomsSelectionData({ ...roomsSelectionData, room3ChildrenValue: selectedValue })
            break;
          case 4:
            setRoomsSelectionData({ ...roomsSelectionData, room4ChildrenValue: selectedValue })
            break;
          default:
            return "";
        }
      }
  }

  // Handle data passed onto the parent from the child checkbox 
  const handleCheckbox = (values) => {

     // Destructure returned object
      const { checked , roomNumber } = values

    // Evaluate and save checked room data
     switch(roomNumber) {
        // If only room 2 is checked, then we will save only room 2 data to state
        case 2:
          if(checked){
            setRoomsSelectionData({ ...roomsSelectionData, room2Checked: checked })
          }else {
            // If room 2 is unchecked, then we will uncheck both room 2 & 3 and
            // reset it selected rooms data to its original values and set the dropdown to disabled
            setRoomsSelectionData({ 
                ...roomsSelectionData, 
                room2Checked: checked,
                room3Checked: checked,
                room2AdultValue: 1,
                room2ChildrenValue:0,
                room3AdultValue: 1,
                room3ChildrenValue: 0
            })
          }
         break;
        // If room 3 is checked, then we will check both room 2 & 3 and it data to state
        case 3:
          if(checked){
            setRoomsSelectionData({ ...roomsSelectionData, room2Checked: checked, room3Checked: checked  })
          }else {
            // If room 3 is unchecked, then we will uncheck both room 3 and 4 and
            // reset it selected rooms data to its original values and set the dropdown to disabled
            setRoomsSelectionData({ 
                ...roomsSelectionData, 
                room3Checked: checked, 
                room4Checked: checked,
                room3AdultValue: 1,
                room3ChildrenValue:0,
                room4AdultValue: 1,
                room4ChildrenValue:0
            })
          }
          break;
        case 4:
          // If room 4 is checked/unchecked, then we will check/uncheck both room 2,3 & 4 and
          // reset it selected rooms data to its original values and set the dropdown to disabled (if unchecked)
          setRoomsSelectionData({ 
              ...roomsSelectionData,
              room2Checked: checked, 
              room3Checked: checked , 
              room4Checked: checked ,
              room2AdultValue: roomsSelectionData.room2AdultValue,
              room2ChildrenValue:roomsSelectionData.room2ChildrenValue,
              room3AdultValue: roomsSelectionData.room2AdultValue,
              room3ChildrenValue: roomsSelectionData.room3ChildrenValue,
              room4AdultValue: roomsSelectionData.room4AdultValue,
              room4ChildrenValue: roomsSelectionData.room4ChildrenValue
          })
          break;
        default:
          return "";
      }
  }

  return (
    <div className="App">
        <Container className="mt-5">
          <NotificationContainer />
          <Row>
            <Col>
              <Card
                 roomNumber={1}
                 onChecked={handleCheckbox}
                 onChanged={handleDropdown}
               />
            </Col>
            <Col>
              <Card
                 roomNumber={2}
                 roomChecked={roomsSelectionData.room2Checked}
                 adultRoomValue={roomsSelectionData.room2AdultValue}
                 childrenRoomValue={roomsSelectionData.room2ChildrenValue}
                 onChecked={handleCheckbox}
                 onChanged={handleDropdown}
              />
            </Col>
            <Col>
              <Card
                  roomNumber={3}
                  roomChecked={roomsSelectionData.room3Checked}
                  adultRoomValue={roomsSelectionData.room3AdultValue}
                  childrenRoomValue={roomsSelectionData.room3ChildrenValue}
                  onChecked={handleCheckbox}
                  onChanged={handleDropdown}
              />
            </Col>
            <Col>
              <Card
                  roomNumber={4}
                  roomChecked={roomsSelectionData.room4Checked}
                  adultRoomValue={roomsSelectionData.room4AdultValue}
                  childrenRoomValue={roomsSelectionData.room4ChildrenValue}
                  onChecked={handleCheckbox}
                  onChanged={handleDropdown}
              />
            </Col>
          </Row>

          <Row xs={1} md={6} lg={6} className="mt-4">
            <Col>
              <Button 
                 value={'Submit'}
                 variant={'secondary'}
                 onClick={handleOnClick}
              />
            </Col>
          </Row>
       </Container>
   </div>
  );
}


export default App;
