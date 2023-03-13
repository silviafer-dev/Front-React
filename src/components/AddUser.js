import React, { useState } from "react";
import { postUser } from "../features/usersSlice";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";

export const AddUser = ({ handleCancel }) => {
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    email: "",
    address: {
      city: "",
    },
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "city") {
      setNewUser({
        ...newUser,
        address: { ...newUser.address, [e.target.name]: e.target.value },
      });
    } else {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = () => {
    dispatch(postUser(newUser));
    setNewUser({
      id: "",
      name: "",
      email: "",
      address: {
        city: "",
      },
    });
    handleCancel();
  };
  const SubmittedButton = () => {
    if (!newUser.name || !newUser.email || !newUser.address.city) {
      return (
        <Button type="primary" htmlType="submit" disabled>
          Submit
        </Button>
      );
    } else {
      return (
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      );
    }
  };

  return (
    <Form name="form_item_path" layout="vertical" onFinish={handleSubmit}>
      <Form.Item htmlFor="name" label="Name:">
        <Input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item htmlFor="email" label="Email:">
        <Input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item htmlFor="city" label="City:">
        <Input
          type="text"
          name="city"
          value={newUser.address.city}
          onChange={handleChange}
        />
      </Form.Item>
      <SubmittedButton />
    </Form>
  );
};
