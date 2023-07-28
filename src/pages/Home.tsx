import React from "react";
import { Col, Container, Input, InputGroup, Row } from "reactstrap";
import { Alignment, ColorButtom, TextButton } from "../assets";
import Helmet from "../components/Helmet";
import Button from "../components/UI/button";
import Content from "../components/UI/content";
import Table from "../components/UI/table";
import { Link } from "../store/home/interface";
import { useLinkState } from "../store/home/useLink.state";
import { useNavigate } from "react-router-dom";
import { CommonApiStatus, TypeOperation } from "../helper/common.interfaces";

const Home = () => {
  const {
    items,
    status,
    linkFetchResult,
    linkSubmit,
    linkDelete,
    error,
    api_post,
    api_delete,
    type,
  } = useLinkState();
  const [input, setInput] = React.useState<string>("");
  const navigate = useNavigate();

  React.useEffect(() => {
    linkFetchResult();
  }, []);

  const handleDelete = (id: number) => {
    linkDelete(id);
  };

  const handleSubmit = () => {
    linkSubmit(input);
    setInput("");
  };

  const handleCover = (row: Link) => {
    const { short_url } = row;
    return navigate(`/${short_url.substring(short_url.length - 5)}`);
  };

  return (
    <React.Fragment>
      <Helmet title="Home">
        <Content title="Home" />
        <section>
          <Container className="p-5 bg-light text-dark border rounded">
            <Row>
              <Col lg={12}>
                <InputGroup>
                  <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <Button color={ColorButtom.primary} onClick={handleSubmit}>
                    {TextButton.add}
                  </Button>
                </InputGroup>
              </Col>
              <Col lg={12}>
                {type === TypeOperation.ADD &&
                api_post?.status === CommonApiStatus.SUCCESS &&
                api_post?.error.length === 0 ? (
                  <p className="text-success">Sent Successfully</p>
                ) : (
                  <p className="text-danger">{api_post?.error}</p>
                )}
              </Col>
              <Col lg={12}>
                {type === TypeOperation.DEL &&
                api_delete?.status === CommonApiStatus.SUCCESS &&
                api_delete?.deleted > 0 ? (
                  <p className="text-success">Sent Successfully</p>
                ) : (
                  <p className="text-danger">{api_delete?.message}</p>
                )}
              </Col>
              <Col lg={12} className="mt-3">
                <Table
                  title="Table Url"
                  pageSize={10}
                  columns={[
                    {
                      name: "id",
                      label: "ID",
                      width: "10%",
                      align: Alignment.Center,
                    },
                    {
                      name: "short_url",
                      label: "Short Url",
                      width: "30%",
                      align: Alignment.Center,
                    },
                  ]}
                  data={items}
                  showColumnsButton={true}
                  status={status}
                  error={error}
                  callDelete={(id: number) => handleDelete(id)}
                  callHover={(row: any) => handleCover(row)}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </React.Fragment>
  );
};

export default Home;
