import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectState } from "../features/usersSlice";
import { Table } from "antd";

export const TableData = () => {
  //   const [dataSource, setDataSource] = useState([]);
  const users = useSelector(selectState);
  const dispatch = useDispatch();

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
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};
