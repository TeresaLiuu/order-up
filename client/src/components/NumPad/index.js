import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import API from '../../utils/employeesAPI';

export default function NumPad() {
  const [pin, setPin] = useState(``);
  const [loggedIn, setLoggedIn] = useState({
    success: false,
    permission: 0
  });

  const handleBtnInput = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setPin(pin + value);
  };

  const handleSubmit = () => {
    if (pin.length > 0) {
      API.getEmployees()
        .then((res) => {
          const search = res.data.find(({ id }) => id === pin);
          if (search !== undefined) {
            setLoggedIn({ success: true, permission: search.permission });
          } else {
            errorPin();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      let pinStr = pin;
      pinStr = pinStr.slice(0, -1);
      setPin(pinStr);
    }
  };

  const errorPin = () => {
    setPin(``);
    // TODO: make incorrect more visible
    console.log(`incorrect pin`);
  };

  function permissionPages(checkPermission) {
    switch (checkPermission) {
      case 1:
        return <Redirect to='/manager' />;
      case 2:
        return <Redirect to='/foh' />;
      case 3:
        return <Redirect to='/boh' />;
      default:
        return <Redirect to='/home' />;
    }
  }

  const buttons = [
    [
      {
        name: `1`
      },
      {
        name: `2`
      },
      {
        name: `3`
      }
    ],
    [
      {
        name: `4`
      },
      {
        name: `5`
      },
      {
        name: `6`
      }
    ],
    [
      {
        name: `7`
      },
      {
        name: `8`
      },
      {
        name: `9`
      }
    ],
    [
      {
        name: <i className='fas fa-backspace del-btn'></i>,
        value: `del`
      },
      {
        name: `0`
      },
      {
        name: <i className='fas fa-sign-in-alt submit-btn'></i>,
        value: `login`
      }
    ]
  ];

  return (
    <>
      {loggedIn.success ? permissionPages(loggedIn.permission) : null}
      <ButtonGroup vertical>
        <Form>
          <Form.Group controlId='formPIN'>
            <Form.Control
              autoFocus
              name='pin'
              type='password'
              placeholder='Enter PIN'
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
          </Form.Group>
        </Form>
        {buttons.map((rows, index) => (
          <ButtonGroup key={`button-row-${index}`}>
            {rows.map((button, buttonIndex) => (
              <Button
                variant='outline-secondary'
                key={`button-index-${buttonIndex}`}
                value={!button.value ? button.name : button.value}
                onClick={
                  button.value === `del`
                    ? handleDelete
                    : button.value === `login`
                    ? handleSubmit
                    : handleBtnInput
                }
              >
                {button.name}
              </Button>
            ))}
          </ButtonGroup>
        ))}
      </ButtonGroup>
    </>
  );
}
