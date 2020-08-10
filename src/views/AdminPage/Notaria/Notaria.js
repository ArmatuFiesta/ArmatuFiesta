import React, {useState, useEffect} from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import {httpClient as axios} from "../../../core/http-client";
import GridItem from "../../../components/Grid/GridItem";
import ListNotarias from "./ListNotarias";

export default () => {
  const [notarias, setNotarias] = useState([]);
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/lugares/', {
        params: {
          tipo: "ESTADO"
        }
      }),
      axios.get('/notarias/')
    ]).then(([{data: lugares}, {data: notarias}]) => {
      setLugares(lugares);
      setNotarias(notarias);
    });
  }, []);
  return (
    <GridContainer>
      <GridItem xs={12}>
        <ListNotarias lugares={lugares} notarias={notarias}/>
      </GridItem>
    </GridContainer>
  );
}