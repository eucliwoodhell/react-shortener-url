import React from "react";
import ReactPaginate from "react-paginate";
import { Table as TableComponent } from "reactstrap";
import { Alignment, TextButton, ColorButtom } from "../../../assets";
import { CommonApiStatus } from "../../../helper/common.interfaces";
import Button from "../button";
import { Props } from "./interfaces";
import "./styles.css";

const Table = (props: Props): JSX.Element => {
  const {
    title,
    data: rawData,
    columns,
    pageSize,
    showColumnsButton,
    status,
    error,
    callHover,
    callEdit,
    callDelete,
  } = props;

  const [col, setCol] = React.useState<any[]>([]);
  const [row, setRow] = React.useState<any[]>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(0);

  React.useEffect(() => {
    if (status === CommonApiStatus.SUCCESS) {
      setRow(JSON.parse(JSON.stringify(rawData)));
      setCol(Object.values(columns).map((item) => item.name));
    }
  }, [rawData, status, columns]);

  React.useEffect(() => {
    const visisited = pageNumber * pageSize;
    setRow(
      JSON.parse(JSON.stringify(rawData.slice(visisited, visisited + pageSize)))
    );
  }, [pageNumber, pageSize, rawData]);

  const changePage = (selectItem: { selected: number }) => {
    setPageNumber(selectItem.selected);
  };

  const handleMouseEnter = (row: any) => {
    callHover && callHover(row);
  };

  console.log(rawData);
  return (
    <React.Fragment>
      <h3>{title}</h3>
      {error.length > 0 && <p className="text-danger">{error}</p>}
      {status === CommonApiStatus.SUCCESS ? (
        <React.Fragment>
          <TableComponent hover responsive>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={`${index}-${column.name}`}
                    style={{
                      width: column.width,
                      fontSize: column.fontSize,
                      textAlign: column.align,
                    }}
                  >
                    {column.name}
                  </th>
                ))}
                {showColumnsButton && (
                  <th style={{ textAlign: Alignment.Center, width: "20%" }}>
                    {callEdit && (
                      <React.Fragment>{TextButton.edit}</React.Fragment>
                    )}{" "}
                    {callDelete && (
                      <React.Fragment>{TextButton.delete}</React.Fragment>
                    )}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {row.map((row, index) => (
                <tr key={index} onDoubleClick={() => handleMouseEnter(row)}>
                  {col.map((column, columnIndex) => (
                    <td
                      key={columnIndex}
                      {...(columnIndex === 0 && { scope: "row" })}
                      style={{ textAlign: Alignment.Center }}
                    >
                      {row[column]}
                    </td>
                  ))}
                  {showColumnsButton && (
                    <td
                      style={{ textAlign: Alignment.Center }}
                      key={`${index}-button`}
                    >
                      {callEdit && (
                        <Button
                          color={ColorButtom.warning}
                          onClick={() => callEdit(row.id)}
                        >
                          {TextButton.edit}
                        </Button>
                      )}
                      {callDelete && (
                        <Button
                          color={ColorButtom.danger}
                          onClick={() => callDelete(row.id)}
                        >
                          {TextButton.delete}
                        </Button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </TableComponent>
          <ReactPaginate
            pageCount={Math.ceil(rawData.length / pageSize)}
            onPageChange={changePage}
            previousLabel="Anterior"
            nextLabel="Siguiente"
            containerClassName="paginationBttns"
          />
        </React.Fragment>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

Table.defaultProps = {
  pageSize: 10,
  showColumnsButton: false,
  error: "",
  status: CommonApiStatus.SUCCESS,
};

export default Table;
