import React from "react";
import mini1 from "../../assets/images/mini.png";
import mini2 from "../../assets/images/mini2.png";
import "./TableBalance.css";

export default function TableBalance({ header, rows, setPopup }) {
  return (
    <div className="container">
      <div className="table-header">
        <div
          className="row"
          style={{ gridTemplateColumns: `repeat(${header.length}, 1fr)` }}
        >
          {header.map((item) => (
            <div key={item} className="column">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="table-body">
        {rows.map((row) => {
          return (
            <div
              className="row"
              style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
            >
              {row.map((item, index) => (
                <div
                  className={`column ${item}`}
                  style={{}}
                  onClick={() => {
                    item === "Check Details" && setPopup(true);
                  }}
                >
                  {index === 0 && <div className="orange" />}
                  {index === 1 && <div className="yellow" />}
                  {item === "photos" ? (
                    <>
                      <img className="small-image" src={mini1} />
                      <img className="small-image" src={mini2} />
                    </>
                  ) : (
                    item
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="table-footer">
        <div className="prev-page">Previous page</div>
        <div className="page-button">1</div>
        <div className="page-button">2</div>
        <div className="page-button">3</div>
        <div className="page-button">4</div>
        <div className="page-button">5</div>
        <div className="page-button">6</div>
        <div className="page-button">7</div>
        <div className="page-button">8</div>
        <div className="next-page">Next page</div>
      </div>
    </div>
  );
}

const Container = styled.div`
  max-width: 1360px;
  width: 132.5%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: "Inter";
  //   align-items: center;
`;

const TableHeader = styled.div`
  color: var(--gray-800, #3f3f3f);
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 16px;

  border-radius: 4px;
  background: var(--background-section, #f2f2f2);
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(3):not(${TableHeader} *) {
    margin-left: 50px;
    background-color: #deede5;
    border-radius: 4px;
    max-width: 120px;
    background-color: ${(props) => props.item === "Confirmed" && "#deede5"};
    color: ${(props) => props.item === "Confirmed" && "#427a5b"};

    background-color: ${(props) => props.item === "Rejected" && "#EDDEDE"};
    color: ${(props) => props.item === "Rejected" && "#7A4242"};

    background-color: ${(props) => props.item === "Pending" && "#FDF8CE"};
    color: ${(props) => props.item === "Pending" && "#938406"};

    background-color: ${(props) => props.item === "Unverified" && "#D8D8D8"};
    color: ${(props) => props.item === "Unverified" && "#5F5F5F"};
  }
  &:last-child:not(${TableHeader} *) {
    margin-left: 50px;
    border-radius: 4px;
    max-width: 120px;
    background: var(--blue, #0699d2);
    color: white;
    cursor: pointer;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: ${(props) => {
    return `repeat(${props.row}, 1fr)`;
  }};
  &:not(${TableHeader} *) {
    margin-top: 20px;
  }
  &:last-child:not(${TableHeader} *) {
    margin-bottom: 8px;
  }
  padding: 0px 10px;
`;

const TableBody = styled.div`
  color: #616161;
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  background: var(--background-section, #f2f2f2);
`;

const TableFooter = styled.div`
  // position: absolute;
  // left: 459px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  width: 1360px;
  height: 64px;
  border-radius: 0px 0px 5px 5px;
`;

const PrevPage = styled.div`
  color: #585858;
  margin-right: 20px;
`;

const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #d8d8d8;
  height: 20px;
  width: 20px;
  font-size: 12px;
  margin-inline: 5px;
`;

const NextPage = styled.div`
  color: #585858;
  margin-left: 20px;
`;

const Orange = styled.div`
  width: 25px;
  height: 25px;
  background-color: #fe7c31;
  border-radius: 50%;
  margin-right: 8px;
`;

const Yellow = styled.div`
  width: 25px;
  height: 25px;
  background-color: #ffde52;
  border-radius: 50%;
  margin-right: 8px;
`;

const SmallImage = styled.img`
  width: 40px;
  height: 40px;
  &:last-child {
    margin-left: 4px;
  }
`;
