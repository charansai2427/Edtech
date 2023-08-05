import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap'
import UserDetails from './userDetails';
export default function Register() {
    const [userDetails,setUserDetails] = useState({});
const calcAge = (cm,cy,bm,by) =>{
    if(by > cy) return{y:0 , m:0};
    if(by == cy){
        if(bm > cm) return{y:0,m:cm-bm}
    }

}

    const calculateAge = (dob) =>{
        const cm = new Date .getMonth() + 1;
        const date = new Date().getFullYear();
        const dobYear = new Date(dob).getFullYear();
        const dobMonth = new Date .getMonth() + 1;

        setUserDetails({
            ...UserDetails,
            age:cm > dobYear?(date-dobYear + "Years" +(cm-dobMonth)+"Months"):((cm == dobMonth ? (date-dobYear) + "Years" :((date-dobYear-1)+ "Years")) +(cm == dobMonth ? " " : ((12 - (dobMonth -cm ))+"MOnths"))),
            dob,
        });

    };
    return (
        <Row className="m-5 border border-2 p-2">
        <Col
          md={{
            offset: 3,
            size: 6,
          }}
        >
      
        <Form>
          <Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="username">UserName</Label>
                  <Input
                    id="examplePassword"
                    name="name"
                    placeholder="Username"
                    type="password"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="phone">Phone number</Label>
                  <Input
                    id="examplePassword"
                    name="phone"
                    placeholder="Phone Number"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Col>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  name="dob"
                  placeholder="Date of Birth"
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="dob">Age</Label>
                <Input id="age" name="age" placeholder="Age" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Row>
              
            </Row>
            <Col>
              <FormGroup className="pt-4">
                <Label className="pe-3" for="dob">Gender :</Label>
                <Input  id="age" name="age" placeholder="Age" type="radio" />
                <Label className="pe-3 ps-3" for="dob">Male</Label>
                <Input id="age" name="age" placeholder="Age" type="radio" />
                <Label className="pe-3 ps-3" for="dob">Female</Label>
              </FormGroup>
              
            </Col>
            <Col>
              <FormGroup>
                <Label for="dob">Access</Label>
                <Input 
                id="access" 
                name="selectAccess" 
                type="select" 
                >
                  <option>Admin</option>
                  <option>Student</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
          
            <Button className="btn btn-info btn-hover btn-hover-primary text-white h4">Register</Button>
           
          </Row>
        </Form>
      </Col>
    </Row>
  );
}