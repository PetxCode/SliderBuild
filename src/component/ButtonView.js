import React from "react";
import { Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const ButtonView = ({ backgroundColor, color, name, Icon }) => {
  return (
    <div style={{ marginTop: "200px" }}>
      <Button style={{ color: color, backgroundColor: backgroundColor }}>
        {name}
      </Button>
    </div>
  );
};

export default ButtonView;
