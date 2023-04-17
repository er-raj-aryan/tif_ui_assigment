import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react';
import Button from './Button';
import style from "@/styles/ArticleCard.module.css";

function ArticleCard(props) {
  return (
    <Card margin={10} className={style.card}>
  <CardBody>
    <Image
      src={props.imageUrl ? props.imageUrl :''}
      alt={props.title ? props.title :''}
      borderRadius='md'
      className={style.image}
    />
    <Stack mt='6' spacing='3'>
      <h1 className={style.title}>{props.title ? props.title :""}</h1>
      <p className={style.description}>
        {props.description ? props.description :""}
      </p>
    </Stack>
  </CardBody>
  <CardFooter>
    <Button label={props.button ? props.button : "Read More"} outline />
  </CardFooter>
</Card>
  )
}

export default ArticleCard