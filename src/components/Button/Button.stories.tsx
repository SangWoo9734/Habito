import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { Button } from "./Button";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
  content: "Login",
  onClick: (e) => console.log(e),
};

export const Logout = Template.bind({});
Logout.args = {
  content: "logout",
  onClick: (e) => console.log(e),
};

export const Delete = Template.bind({});
Delete.args = {
  content: "삭제",
  color: "#FF6060",
  onClick: (e) => console.log(e),
};
