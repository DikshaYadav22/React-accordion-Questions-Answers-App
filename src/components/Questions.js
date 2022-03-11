import React, { memo } from "react";
import { Card, CardBody, CardTitle, CardHeader, Button } from "reactstrap";

const Questions = memo(({ questions, show, setShow }) => {
  return (
    <div className="container mx-auto">
      <h3 className="bg-dark p-3 text-white text-center m-3">
        Questions and Answers About Login
      </h3>
      {questions.map((question) => {
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
                      onClick={() => setShow(!show)}
                    >
                      +
                    </Button>
                  </div>
                </CardTitle>
                <br />
                {show ? <p>{info}</p> : null}
              </CardBody>
            </Card>
          </>
        );
      })}
    </div>
  );
});

export default Questions;
