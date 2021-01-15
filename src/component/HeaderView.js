import React from "react";
import "../App.css";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const { Header } = Layout;

function HeaderView() {
  return (
    <div>
      <Layout
        className="app__headerLink"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#2850b8",
          backgroundImage: "linear-gradient(transparent, #2850b8)",
        }}
      >
        <Header className="app__header">
          <Link to="/" className="app__link">
            Home
          </Link>
        </Header>
        <Header className="app__header">
          <Link to="/feed" className="app__link">
            Feed
          </Link>
        </Header>
        <Header className="app__header">
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()} className="app__link">
              Find Out More{" "}
              <DownOutlined
                style={{
                  // paddingTop: "20px",
                  fontSize: "15px",
                  marginLeft: "10px",
                }}
              />
            </a>
          </Dropdown>
        </Header>
      </Layout>
    </div>
  );
}

export default HeaderView;
