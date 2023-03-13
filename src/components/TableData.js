import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectState } from "../features/usersSlice";
import { useFilter } from "../hooks/useFilter";
import { Table } from "antd";

export const TableData = () => {
  const users = useSelector(selectState);
  const dispatch = useDispatch();

  const { getColumnSearchProps } = useFilter();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const dataSource = users.map((data) => ({
    key: data.id,
    name: data.name,
    email: data.email,
    city: data.address.city,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      ...getColumnSearchProps("email"),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
      ...getColumnSearchProps("city"),
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};
