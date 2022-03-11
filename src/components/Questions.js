import React, { memo, useState } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

const Questions = memo(({ questions, activeId, setActiveId }) => {
  const showAnswers = (id) => {
    setActiveId(id);
  };

  return (
    <div className="container mx-auto">
      <h3 className="bg-dark p-3 text-white text-center m-3">
        Questions and Answers About Login
      </h3>
      {questions.map((question, index) => {
        const { id, title, info } = question;
        return (
          <>
            <Card className="bg-light">
              <CardBody>
                <CardTitle>
                  <div>
                    <h5 style={{ float: "left" }}>{title}</h5>

                    <Button
                      style={{ float: "right" }}
                      onClick={() => showAnswers(id)}
                    >
                      {activeId === id ? "-" : "+"}
                    </Button>
                  </div>
                </CardTitle>
                <br />
                {activeId === id ? <p>{info}</p> : null}
              </CardBody>
            </Card>
          </>
        );
      })}
    </div>
  );
});

export default Questions;
