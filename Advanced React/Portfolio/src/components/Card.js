import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack background='white' borderRadius='10px' color='black' alignItems='left'>
      <Image src={imageSrc} borderRadius='10px' />
      <VStack padding='15px' alignItems='left' spacing={4}>
        <Heading size='md'>
          {title}
        </Heading>
        <Text color='gray'>
          {description}
        </Text>
        <Heading size="sm">
          See more <FontAwesomeIcon icon={faArrowRight} />
        </Heading>
      </VStack>
    </VStack>
  );
};

export default Card;
