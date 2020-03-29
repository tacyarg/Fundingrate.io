import React from "react";
import { Container, Flex, Box, Text, Banner } from "../primitives";
// import banner01 from "../assets/images/banner01.png";
import Utils from "./Utils";

const Welcome = props => {
  return (
    <Banner src={'https://cdn.chips.gg/images/phone_stocks01.jpeg'} {...props} minHeight="300px" height={["40%", "60%"]}>
      <Flex
        as={Container}
        height={"100%"}
        flexDirection="column"
        justifyContent="center"
        pl={[2, "20%"]}
      >
        <Welcome.Text />
        <Welcome.Summary />
        {props.children}
      </Flex>
    </Banner>
  );
};

Welcome.Text = () => {
  return (
    <Flex mb={2}>
      <Text.Heading>Welcome to</Text.Heading>
      <Box mx={1} />
      <Text.Heading bold color="primary">
        Fundingrate
      </Text.Heading>
    </Flex>
  );
};

Welcome.Summary = () => {
  return (
    <Text color="subtext">
      <Box>Get all your alerts from TradingView, sent to Telegram, Discord, or Slack.</Box>      
      <Box>Automate trading from your alerts on multiple exchanges 24/7.</Box>
      <Box>Create a provider, and start trading today!</Box>
    </Text>
  );
};

const ColorBar = ({ children, ...p }) => {
  return (
    <Flex
      width={1}
      justifyContent="center"
      alignItems="center"
      bg="primary"
      p={[2, 4]}
      {...p}
    >
      {children}
    </Flex>
  );
};

const Notice = ({ children }) => (
  <ColorBar width={"auto"} m={2} p={2} bg="restricted" borderRadius={2}>
    {children}
  </ColorBar>
);



export default {
  Welcome,
  ColorBar,
  Notice
};
